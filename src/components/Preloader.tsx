"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("preloader_played") === "1") {
      setHidden(true);
      return;
    }
    sessionStorage.setItem("preloader_played", "1");
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const dur = 2000;
    let rafId = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.round(eased * 100));
      if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const removeAt = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "";
    }, 2900);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(removeAt);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      onClick={() => { setHidden(true); document.body.style.overflow = ""; }}
      className="preloader-root"
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--ink)",
        color: "var(--paper)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 24,
        cursor: pct === 100 ? "pointer" : "default",
        animation: "preloaderFade 700ms cubic-bezier(0.22,1,0.36,1) 2.2s forwards",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-nohemi)",
          fontSize: 13,
          color: "rgba(253,253,253,0.55)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: 8,
        }}
      >
        <span>Dev Agarwalla — Portfolio 2026</span>
        <span>{pct < 100 ? "Loading…" : "Ready"}</span>
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 800,
          fontSize: "clamp(96px, 18vw, 200px)",
          lineHeight: 0.85,
          color: "var(--paper)",
        }}
      >
        {pct}%
      </div>
      <style>{`@keyframes preloaderFade { to { opacity: 0; visibility: hidden; pointer-events: none; } }`}</style>
    </div>
  );
}
