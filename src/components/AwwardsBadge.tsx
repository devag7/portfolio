"use client";

import Image from "next/image";
import { useMenuOpen } from "@/lib/menu-store";

const TEXT = "DEVAGARWALLA • PORTFOLIO 2026 • ";

export function AwwardsBadge() {
  const menuOpen = useMenuOpen();
  if (menuOpen) return null;

  return (
    <aside
      aria-label="Dev Agarwalla portfolio badge"
      style={{
        position: "absolute",
        right: 24,
        bottom: 24,
        width: 108,
        height: 108,
        zIndex: 3,
        pointerEvents: "auto",
      }}
    >
      <a
        href="https://github.com/devag7"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="hover"
        aria-label="View GitHub profile"
        style={{
          display: "block",
          position: "relative",
          width: "100%",
          height: "100%",
          color: "var(--paper)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            animation: "badgeSpin 22s linear infinite",
          }}
        >
          <svg viewBox="0 0 108 108" width="108" height="108" aria-hidden="true">
            <defs>
              <path id="badge-circle" d="M 54, 54 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
            </defs>
            <text fontFamily="var(--font-nohemi)" fontSize="8.5" letterSpacing="1.8" fill="currentColor" fontWeight={600}>
              <textPath href="#badge-circle" startOffset="0">{TEXT.repeat(3)}</textPath>
            </text>
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 44,
            height: 44,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            overflow: "hidden",
            background: "var(--ink)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/other/Planet.svg"
            alt=""
            width={36}
            height={36}
            style={{ width: "75%", height: "75%", objectFit: "contain", display: "block" }}
          />
        </div>
      </a>
    </aside>
  );
}
