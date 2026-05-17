"use client";

import dynamic from "next/dynamic";

const ThreeMoon = dynamic(() => import("./ThreeMoon"), {
  ssr: false,
  loading: () => null,
});

export function GlobalMoon() {
  return (
    <div
      aria-hidden="true"
      className="global-moon"
      style={{
        position: "fixed",
        left: "50%",
        bottom: "10vh",
        transform: "translateX(-50%)",
        width: "clamp(80px, 8vw, 120px)",
        aspectRatio: "1 / 1",
        zIndex: 2,
        pointerEvents: "none",
        filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.5))",
      }}
    >
      <ThreeMoon />
    </div>
  );
}
