"use client";

import { useEffect, useState } from "react";
import { menuStore, useMenuOpen } from "@/lib/menu-store";

export function Header() {
  const open = useMenuOpen();
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Observe data-bg=light sections to swap header colors
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const bg = (e.target as HTMLElement).dataset.bg;
            const isLight = bg === "light";
            setOnLight(isLight);
            document.body.classList.toggle("on-light", isLight);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    document.querySelectorAll("[data-bg]").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: `${scrolled ? 14 : 24}px var(--gutter)`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9990,
        pointerEvents: "none",
        transition: "padding 320ms var(--ease-out)",
      }}
    >
      <a
        href="#top"
        aria-label="Dev Agarwalla — Home"
        style={{ pointerEvents: "auto" }}
        data-cursor="hover"
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: `1.5px solid ${onLight && !open ? "var(--ink)" : "var(--paper)"}`,
            color: onLight && !open ? "var(--ink)" : "var(--paper)",
            fontFamily: "var(--font-thunder-lc)",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: "-0.04em",
          }}
        >
          DA
        </span>
      </a>

      <button
        type="button"
        aria-controls="site-menu"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => menuStore.toggle()}
        data-cursor="hover"
        className="menu-toggle"
        style={{
          pointerEvents: "auto",
          display: "inline-flex",
          alignItems: "center",
          gap: open ? 0 : 14,
          padding: open ? 0 : "14px 22px 14px 18px",
          width: open ? 50 : "auto",
          height: 50,
          justifyContent: "center",
          background: open ? "var(--sage)" : "var(--paper-soft)",
          color: open ? "var(--paper)" : "var(--ink)",
          borderRadius: 9999,
          fontFamily: "var(--font-nohemi)",
          fontWeight: 600,
          fontSize: 14,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          transition: "width 320ms var(--ease-snap), padding 320ms var(--ease-snap), gap 320ms var(--ease-snap), background 220ms var(--ease-out), color 220ms var(--ease-out)",
        }}
      >
        <span className="menu-icon" aria-hidden="true">
          <span className="menu-icon-dot" />
          <span className="menu-icon-bars">
            <span className="menu-icon-bar" data-pos="top" />
            <span className="menu-icon-bar" data-pos="bottom" />
          </span>
        </span>
        <span
          className="menu-icon-label"
          style={{
            opacity: open ? 0 : 1,
            width: open ? 0 : "auto",
            overflow: "hidden",
            transition: "opacity 220ms var(--ease-out), width 320ms var(--ease-snap)",
          }}
        >
          Menu
        </span>
      </button>
    </header>
  );
}
