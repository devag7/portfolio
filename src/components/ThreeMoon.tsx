"use client";

import { useEffect, useRef, useState } from "react";

function buildMoonTexture(THREE: typeof import("three"), size = 256) {
  const data = new Uint8Array(size * size * 4);
  const seed = 17;
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const craters: Array<{ x: number; y: number; r: number; d: number }> = [];
  for (let i = 0; i < 36; i++) {
    craters.push({
      x: rand() * size,
      y: rand() * size,
      r: 6 + rand() * 26,
      d: 0.35 + rand() * 0.5,
    });
  }
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size;
      const v = y / size;
      let lum = 0.62 + Math.sin(u * 12.5 + v * 7.3) * 0.04 + Math.cos(u * 3.1 + v * 5.7) * 0.06;
      for (const c of craters) {
        const dx = x - c.x;
        const dy = y - c.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < c.r) {
          const fall = 1 - dist / c.r;
          lum -= fall * fall * c.d;
        }
      }
      lum = Math.max(0.1, Math.min(0.95, lum));
      const g = Math.floor(lum * 255);
      const i = (y * size + x) * 4;
      data[i] = g;
      data[i + 1] = g;
      data[i + 2] = g;
      data[i + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.needsUpdate = true;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
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
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.z = 2.6;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(1);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";

      const geometry = new THREE.SphereGeometry(1, 48, 48);
      const texture = buildMoonTexture(THREE, 256);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.95,
        metalness: 0,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const key = new THREE.DirectionalLight(0xffffff, 1.4);
      key.position.set(2, 1.2, 1.5);
      scene.add(key);
      const ambient = new THREE.AmbientLight(0xfdfdfd, 0.22);
      scene.add(ambient);
      const rim = new THREE.DirectionalLight(0x729e84, 0.45);
      rim.position.set(-2, -0.4, -1);
      scene.add(rim);

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

      let last = performance.now();
      const frameInterval = 1000 / 30;
      const loop = (t: number) => {
        if (disposed) return;
        rafId = requestAnimationFrame(loop);
        if (t - last < frameInterval) return;
        last = t;
        if (!reduced) {
          mesh.rotation.y += 0.0035;
        }
        renderer.render(scene, camera);
      };
      rafId = requestAnimationFrame(loop);

      cleanupFns.push(() => {
        cancelAnimationFrame(rafId);
        geometry.dispose();
        material.dispose();
        texture.dispose();
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
            "radial-gradient(circle at 35% 35%, rgba(253,253,253,0.55) 0%, rgba(33,33,33,0.95) 60%, rgba(33,33,33,1) 80%)",
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
        animation: "moonFadeIn 1200ms cubic-bezier(0.22,1,0.36,1) 400ms both",
      }}
    />
  );
}
