"use client";

import { useEffect, useState } from "react";
import { lenisStore } from "@/lib/lenis-store";

const COUNT_DURATION = 1400;
const SWEEP_DURATION = 600;
const TOTAL = COUNT_DURATION + SWEEP_DURATION;

function markDone() {
  if (typeof document === "undefined") return;
  document.body.classList.add("intro-done");
  document.body.style.overflow = "";
  lenisStore.start();
}

export function IntroOverlay() {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<"count" | "sweep" | "done">("count");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skip = reduced || sessionStorage.getItem("intro_played") === "1";

    if (skip) {
      setPct(100);
      setPhase("done");
      markDone();
      return;
    }

    sessionStorage.setItem("intro_played", "1");
    document.body.style.overflow = "hidden";
    lenisStore.stop();

    const start = performance.now();
    let rafId = 0;

    const tick = (t: number) => {
      const elapsed = t - start;
      const p = Math.min(elapsed / COUNT_DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.round(eased * 100));
      if (p < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const sweepAt = setTimeout(() => setPhase("sweep"), COUNT_DURATION);
    const doneAt = setTimeout(() => {
      setPhase("done");
      markDone();
    }, TOTAL);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(sweepAt);
      clearTimeout(doneAt);
    };
  }, []);

  if (phase === "done") return null;

  const sweeping = phase === "sweep";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      onClick={() => {
        if (pct < 100) return;
        setPhase("done");
        markDone();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--ink)",
        color: "var(--paper)",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "24px var(--gutter)",
        cursor: pct === 100 ? "pointer" : "default",
        clipPath: sweeping ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
        transition: `clip-path ${SWEEP_DURATION}ms var(--ease-snap)`,
        willChange: "clip-path",
        pointerEvents: sweeping ? "none" : "auto",
      }}
    >
      <div
        style={{
          alignSelf: "flex-end",
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 800,
          fontSize: "clamp(96px, 18vw, 200px)",
          lineHeight: 0.85,
          color: "var(--paper)",
          letterSpacing: "-0.02em",
        }}
      >
        {pct}%
      </div>
    </div>
  );
}
