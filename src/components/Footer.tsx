"use client";

import Image from "next/image";
import { useLocalTimeIST } from "@/lib/clock";

export function Footer() {
  const time = useLocalTimeIST();

  return (
    <footer data-bg="dark" style={{ background: "var(--ink)", color: "var(--paper)", padding: "64px var(--gutter) 0", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 32, paddingBottom: 48, borderBottom: "1px solid rgba(253,253,253,0.15)", marginBottom: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-nohemi)", fontSize: 14 }}>
          <a href="mailto:devagarwalla2016@gmail.com" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>devagarwalla2016@gmail.com</a>
          <span>Bengaluru, India – {time}</span>
        </div>
        <nav aria-label="Footer sitemap" style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-nohemi)", fontSize: 14 }}>
          <a href="#top" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Overview</a>
          <a href="#about" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>About</a>
          <a href="#projects" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Projects</a>
          <a href="#contact" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Contact</a>
        </nav>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-nohemi)", fontSize: 14 }}>
          <a href="https://github.com/devag7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>github</a>
          <a href="https://linkedin.com/in/devagarwalla" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>linkedin</a>
          <a href="https://x.com/DevAgarwalla" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>twitter</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-nohemi)", fontSize: 14, textAlign: "right" }}>
          <a href="#" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Privacy Policy</a>
          <span>©2026 All Rights Reserved</span>
        </div>
      </div>

      <h2
        aria-hidden="true"
        style={{
          margin: 0,
          padding: "0 4px",
          textAlign: "center",
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 900,
          fontSize: "clamp(96px, 23vw, 360px)",
          lineHeight: 0.86,
          letterSpacing: "-0.025em",
          textTransform: "uppercase",
          color: "var(--paper)",
          transform: "translateY(3vh)",
          overflow: "visible",
          whiteSpace: "nowrap",
        }}
      >
        DEVAGARWALLA
      </h2>
      <span className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        Dev Agarwalla
      </span>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 40,
          bottom: 40,
          width: 220,
          aspectRatio: "4 / 3",
          boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
          transform: "rotate(-4deg)",
          overflow: "hidden",
          pointerEvents: "none",
          background: "var(--paper)",
        }}
      >
        <Image src="/images/footerExplosion/ProjectImage1.webp" alt="" width={300} height={225} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </footer>
  );
}
