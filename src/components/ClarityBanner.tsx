"use client";

import { useEffect, useRef, useState } from "react";

export function ClarityBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scale, setScale] = useState(0);
  const [trackX, setTrackX] = useState(0);
  const [maskVisible, setMaskVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const h = rect.height - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / h, 0), 1);

      // Only run while section is in viewport range
      const inRange = rect.bottom > 0 && rect.top < window.innerHeight;
      setMaskVisible(inRange && p >= 0.4);

      // Phase A 0..0.6: trackX 0 -> -50%
      setTrackX(-Math.min(p / 0.6, 1) * 50);
      // Phase B 0.4..1.0: scale 0 -> 7
      const sp = Math.max((p - 0.4) / 0.6, 0);
      setScale(Math.min(sp * sp * 9, 9));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      data-bg="dark"
      style={{
        position: "relative",
        height: "180vh",
        background: "var(--ink)",
        color: "var(--paper)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        <div style={{ display: "flex", transform: `translateX(${trackX}%)`, transition: "transform 80ms linear" }}>
          <h2
            style={{
              margin: "0 64px 0 0",
              fontFamily: "var(--font-thunder-lc)",
              fontWeight: 900,
              fontSize: "clamp(140px, 22vw, 260px)",
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--paper)",
            }}
          >
            Clarity + Performance
          </h2>
          <span
            aria-hidden="true"
            style={{
              margin: "0 64px 0 0",
              fontFamily: "var(--font-thunder-lc)",
              fontWeight: 900,
              fontSize: "clamp(140px, 22vw, 260px)",
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "var(--paper)",
              whiteSpace: "nowrap",
            }}
          >
            Clarity + Performance
          </span>
        </div>
      </div>

      {maskVisible ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "100vw",
            height: "100vh",
            transform: `translate(-50%, ${Math.max(0, -sectionRef.current!.getBoundingClientRect().top)}px) scale(${scale})`,
            transformOrigin: "center center",
            background: "var(--paper)",
            pointerEvents: "none",
            clipPath: "polygon(38% 0, 62% 0, 62% 38%, 100% 38%, 100% 62%, 62% 62%, 62% 100%, 38% 100%, 38% 62%, 0 62%, 0 38%, 38% 38%)",
            zIndex: 5,
            willChange: "transform",
          }}
        />
      ) : null}
    </section>
  );
}
