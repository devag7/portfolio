"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMenuOpen } from "@/lib/menu-store";

export function GlobalMoon() {
  const menuOpen = useMenuOpen();
  const [angle, setAngle] = useState(0);
  const dragRef = useRef<{ active: boolean; lastX: number; lastY: number; velocity: number }>({
    active: false,
    lastX: 0,
    lastY: 0,
    velocity: 0,
  });
  const rafRef = useRef(0);

  // Idle slow rotation when not being dragged
  useEffect(() => {
    if (!menuOpen) return;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      const d = dragRef.current;
      if (!d.active) {
        d.velocity *= 0.94;
        const idle = 8;
        setAngle((a) => a + (d.velocity + idle) * dt);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [menuOpen]);

  if (!menuOpen) return null;

  const onDown = (clientX: number, clientY: number) => {
    dragRef.current.active = true;
    dragRef.current.lastX = clientX;
    dragRef.current.lastY = clientY;
    dragRef.current.velocity = 0;
  };

  const onMove = (clientX: number, clientY: number) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = clientX - d.lastX;
    d.lastX = clientX;
    d.lastY = clientY;
    const delta = dx * 0.6;
    setAngle((a) => a + delta);
    d.velocity = delta * 60;
  };

  const onUp = () => {
    dragRef.current.active = false;
  };

  return (
    <div
      aria-label="Interactive moon — drag to rotate"
      role="img"
      className="global-moon"
      onMouseDown={(e) => onDown(e.clientX, e.clientY)}
      onMouseMove={(e) => onMove(e.clientX, e.clientY)}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={(e) => {
        const t = e.touches[0];
        onDown(t.clientX, t.clientY);
      }}
      onTouchMove={(e) => {
        const t = e.touches[0];
        onMove(t.clientX, t.clientY);
      }}
      onTouchEnd={onUp}
      style={{
        position: "fixed",
        left: "50%",
        bottom: "12vh",
        transform: "translateX(-50%)",
        width: "clamp(80px, 7.5vw, 116px)",
        aspectRatio: "1 / 1",
        zIndex: 9988,
        cursor: "grab",
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.35)",
        animation: "moonFadeIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        userSelect: "none",
        touchAction: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `rotate(${angle}deg)`,
          transition: dragRef.current.active ? "none" : "transform 60ms linear",
          willChange: "transform",
        }}
      >
        <Image
          src="/images/other/Moon.webp"
          alt=""
          width={232}
          height={232}
          draggable={false}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}
