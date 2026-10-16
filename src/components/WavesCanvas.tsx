"use client";

import { useEffect, useRef } from "react";

/**
 * Hero line field. Cheap by design: one still frame at once, animation only after load, fewer lines on small
 * screens, about 30 fps, paused off-screen and under reduced motion.
 */
export function WavesCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 4000;
    let last = 0;
    let visible = true;
    let animate = false;
    let lines = 110;
    let step = 8;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const small = w < 768;
      lines = small ? 44 : 110;
      step = small ? 12 : 8;
      const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(253,253,253,0.16)";
      ctx.beginPath();
      for (let i = 0; i < lines; i++) {
        const x = (i / lines) * w + Math.sin(t * 0.0005 + i * 0.18) * 28;
        for (let y = 0; y <= h; y += step) {
          const px = x + Math.sin(t * 0.0006 + i * 0.1 + y * 0.0036) * 90 + Math.cos(t * 0.00035 + i * 0.065 + y * 0.0011) * 46;
          if (y === 0) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
      }
      ctx.stroke();
    };

    const loop = (now: number) => {
      if (!animate || !visible) return;
      if (now - last >= 33) {
        t += now - last;
        last = now;
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      animate = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    resize();
    draw();

    const ro = new ResizeObserver(() => { resize(); draw(); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && animate) { last = performance.now(); raf = requestAnimationFrame(loop); }
    });
    io.observe(canvas);

    // Wait for the page to settle so the canvas never competes with first render.
    let timer = 0;
    const kick = () => { timer = window.setTimeout(start, 1500); };
    if (document.readyState === "complete") kick();
    else window.addEventListener("load", kick, { once: true });

    return () => {
      animate = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      window.removeEventListener("load", kick);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="waves" />;
}
