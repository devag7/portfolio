"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { menuStore, useMenuOpen } from "@/lib/menu-store";
import { useLocalTimeIST } from "@/lib/clock";

const ITEMS = [
  { num: "01", label: "About", marquee: "My Journey", href: "#about" },
  { num: "02", label: "Projects", marquee: "Recent Work", href: "#projects" },
  { num: "03", label: "Contact", marquee: "Let's Talk", href: "#contact" },
];

export function MenuOverlay() {
  const open = useMenuOpen();
  const time = useLocalTimeIST();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") menuStore.setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      id="site-menu"
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--paper)",
        color: "var(--ink)",
        zIndex: 9985,
        visibility: open ? "visible" : "hidden",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transform: open ? "translateY(0)" : "translateY(-4%)",
        transition: "opacity 420ms var(--ease-snap), transform 480ms var(--ease-snap), visibility 0s linear " + (open ? "0s" : "480ms"),
        display: "grid",
        gridTemplateRows: "1fr auto",
        paddingTop: 96,
        overflowY: "auto",
      }}
    >
      <nav aria-label="Primary" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {ITEMS.map((it) => (
          <a
            key={it.num}
            href={it.href}
            onClick={() => menuStore.setOpen(false)}
            data-cursor="hover"
            className="menu-item-row"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 0",
              width: "100%",
              overflow: "hidden",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "calc(50% - 380px)",
                top: "50%",
                transform: "translateY(-30%)",
                fontFamily: "var(--font-nohemi)",
                fontWeight: 300,
                fontSize: 13,
                color: "var(--ink)",
              }}
            >
              {it.num}
            </span>
            <span
              style={{
                fontFamily: "var(--font-thunder-lc)",
                fontWeight: 800,
                fontSize: "clamp(72px, 12vw, 170px)",
                lineHeight: 1,
                color: "var(--ink)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
              }}
            >
              {it.label}
            </span>
            <span
              aria-hidden="true"
              className="menu-marquee"
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--sage)",
                color: "var(--paper)",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                clipPath: "inset(100% 0 0 0)",
                transition: "clip-path 420ms cubic-bezier(0.65,0,0.35,1)",
                willChange: "clip-path",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 32,
                  whiteSpace: "nowrap",
                  animation: "marquee 18s linear infinite",
                  fontFamily: "var(--font-thunder-lc)",
                  fontWeight: 800,
                  fontSize: "clamp(72px, 12vw, 170px)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 32 }}>
                    <span>{it.marquee}</span>
                    <span style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ink)", color: "var(--paper)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <ArrowUpRight size={18} />
                    </span>
                  </span>
                ))}
              </span>
            </span>
          </a>
        ))}
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
          gap: 32,
          padding: "32px var(--gutter)",
          borderTop: "1px solid rgba(33,33,33,0.18)",
          fontFamily: "var(--font-nohemi)",
          fontSize: 14,
          color: "var(--ink)",
        }}
      >
        <p style={{ margin: 0, maxWidth: 320, lineHeight: 1.55 }}>
          Bengaluru-based full-stack developer focused on building reliable web applications across MERN, Next.js, and TypeScript.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src="/images/other/Planet.svg" width={120} height={120} alt="" aria-hidden="true" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <a href="mailto:devagarwalla2016@gmail.com" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>devagarwalla2016@gmail.com</a>
          <span>Bengaluru, India</span>
          <span>Local time – {time}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", textAlign: "right" }}>
          <a href="https://github.com/devag7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>github</a>
          <a href="https://linkedin.com/in/devagarwalla" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>linkedin</a>
          <a href="https://x.com/DevAgarwalla" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>twitter</a>
          <span style={{ marginTop: 12, opacity: 0.6 }}>©2026 All Rights Reserved</span>
        </div>
      </div>

      <style>{`
        .menu-item-row:hover .menu-marquee,
        .menu-item-row:focus-visible .menu-marquee { clip-path: inset(0 0 0 0); }
      `}</style>
    </div>
  );
}
