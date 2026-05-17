"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fineHover);
    if (!fineHover) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t?.closest?.('a, button, [data-cursor="hover"]')) setHovered(true);
    };
    const onLeave = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t?.closest?.('a, button, [data-cursor="hover"]')) setHovered(false);
    };

    let raf = 0;
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - 14}px, ${current.current.y - 14}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const mo = new MutationObserver(() => {
      setOnLight(document.body.classList.contains("on-light"));
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter, true);
    document.addEventListener("mouseout", onLeave, true);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter, true);
      document.removeEventListener("mouseout", onLeave, true);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: hovered ? 56 : 28,
        height: hovered ? 56 : 28,
        borderRadius: "50%",
        border: `1px solid ${onLight ? "rgba(33,33,33,0.55)" : "rgba(253,253,253,0.6)"}`,
        background: hovered ? "rgba(114,158,132,0.18)" : "transparent",
        pointerEvents: "none",
        zIndex: 999998,
        transition: "width 200ms var(--ease-out), height 200ms var(--ease-out), background 200ms",
        willChange: "transform",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 3,
          height: 3,
          borderRadius: "50%",
          background: onLight ? "rgba(33,33,33,0.85)" : "rgba(253,253,253,0.85)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
