"use client";

import { useEffect } from "react";
import { ArrowUpRight } from "./icons";
import { menuStore, useMenuOpen } from "@/lib/menu-store";
import { useLocalTimeIST } from "@/lib/clock";
import { EMAIL, LINKS, MAIN, PROFILE } from "@/lib/profile";

const ITEMS = [
  { num: "01", label: "Experience", marquee: "Where I've been", href: "#about" },
  { num: "02", label: "Work", marquee: "Built and shipped", href: "#work" },
  { num: "03", label: "Contact", marquee: "Email me", href: "#contact" },
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
          {PROFILE.intro}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <a href={MAIN} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>devshipit.com</a>
          <span>Products, case studies and freelance services</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>{EMAIL}</a>
          <span>Bengaluru, India</span>
          <span>Local time {time} IST</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", textAlign: "right" }}>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>LinkedIn</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>GitHub</a>
          <a href={LINKS.x} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>X</a>
          <span style={{ marginTop: 12, opacity: 0.7 }}>&copy; 2026 Dev Agarwalla</span>
        </div>
      </div>

      <style>{`
        .menu-item-row:hover .menu-marquee,
        .menu-item-row:focus-visible .menu-marquee { clip-path: inset(0 0 0 0); }
      `}</style>
    </div>
  );
}
