"use client";

import { useEffect, useRef, useState } from "react";

const FRAGMENT = /* glsl */ `
  precision highp float;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec3 uInk;
  uniform vec3 uPaper;
  uniform vec3 uSage;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * snoise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 N = normalize(vNormal);
    float n = fbm(N * 2.4 + vec3(uTime * 0.02));
    float craters = smoothstep(-0.15, 0.45, n);
    vec3 base = mix(uInk * 1.6, uPaper * 0.92, craters);
    vec3 V = vec3(0.0, 0.0, 1.0);
    float fres = pow(1.0 - max(dot(N, V), 0.0), 2.2);
    vec3 color = base + uSage * fres * 0.55;
    float light = clamp(dot(N, normalize(vec3(0.6, 0.4, 0.8))), 0.0, 1.0);
    color *= 0.55 + 0.65 * light;
    gl_FragColor = vec4(color, 1.0);
  }
`;

const VERTEX = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function readVar(name: string, fallback: [number, number, number]): [number, number, number] {
  if (typeof window === "undefined") return fallback;
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const m = raw.match(/^#?([0-9a-fA-F]{6})$/);
  if (!m) return fallback;
  const int = parseInt(m[1], 16);
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

export default function ThreeMoon() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 640px)").matches;
    if (small) {
      setSupported(false);
      return;
    }

    let disposed = false;
    let rafId = 0;
    const cleanupFns: Array<() => void> = [];

    (async () => {
      const THREE = await import("three");
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.z = 2.6;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";

      const geometry = new THREE.IcosahedronGeometry(1, 5);
      const ink = readVar("--ink", [0.13, 0.13, 0.13]);
      const paper = readVar("--paper", [0.99, 0.99, 0.99]);
      const sage = readVar("--sage", [0.447, 0.62, 0.518]);

      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX,
        fragmentShader: FRAGMENT,
        uniforms: {
          uTime: { value: 0 },
          uInk: { value: new THREE.Vector3(...ink) },
          uPaper: { value: new THREE.Vector3(...paper) },
          uSage: { value: new THREE.Vector3(...sage) },
        },
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = mount;
        if (w === 0 || h === 0) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(mount);
      cleanupFns.push(() => ro.disconnect());

      const start = performance.now();
      const loop = (t: number) => {
        const elapsed = (t - start) / 1000;
        material.uniforms.uTime.value = elapsed;
        if (!reduced) {
          mesh.rotation.y = elapsed * 0.18;
          mesh.rotation.x = Math.sin(elapsed * 0.25) * 0.12;
        }
        renderer.render(scene, camera);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);

      cleanupFns.push(() => {
        cancelAnimationFrame(rafId);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      });
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  if (!supported) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 35%, rgba(253,253,253,0.55) 0%, rgba(33,33,33,0.95) 55%, rgba(33,33,33,1) 80%)",
          filter: "blur(0.2px)",
        }}
      />
    );
  }

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        width: "100%",
        height: "100%",
        animation: "moonFadeIn 1200ms cubic-bezier(0.22,1,0.36,1) 200ms both",
      }}
    />
  );
}
