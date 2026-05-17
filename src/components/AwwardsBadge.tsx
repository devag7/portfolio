"use client";

import { useMenuOpen } from "@/lib/menu-store";

export function AwwardsBadge() {
  const menuOpen = useMenuOpen();
  if (menuOpen) return null;

  return (
    <aside
      style={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: 28,
        background: "var(--ink)",
        color: "var(--paper)",
        zIndex: 9989,
        padding: "12px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        fontFamily: "var(--font-nohemi)",
        fontWeight: 700,
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      <a
        href="https://github.com/devag7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on GitHub"
        data-cursor="hover"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}
      >
        <span>D.</span>
        <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: 11, letterSpacing: "0.08em" }}>
          GitHub
        </span>
      </a>
    </aside>
  );
}
