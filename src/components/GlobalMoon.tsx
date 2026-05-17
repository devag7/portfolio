"use client";

import Image from "next/image";

export function GlobalMoon() {
  return (
    <div
      aria-hidden="true"
      className="global-moon"
      style={{
        position: "fixed",
        left: "50%",
        bottom: "8vh",
        transform: "translateX(-50%)",
        width: "clamp(72px, 7vw, 104px)",
        aspectRatio: "1 / 1",
        zIndex: 2,
        pointerEvents: "none",
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 8px 22px rgba(0, 0, 0, 0.45)",
        animation: "moonSpin 90s linear infinite, moonFadeIn 1200ms cubic-bezier(0.22,1,0.36,1) 400ms both",
      }}
    >
      <Image
        src="/images/other/Moon.webp"
        alt=""
        width={208}
        height={208}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        priority={false}
      />
    </div>
  );
}
