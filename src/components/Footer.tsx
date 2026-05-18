"use client";

import Image from "next/image";
import { useLocalTimeIST } from "@/lib/clock";
import { Reveal } from "./Reveal";

const POLAROIDS = [
  { src: "/images/footerExplosion/ProjectImage1.webp", w: 220, top: "10%", left: "32%", rotate: -8, delay: 0, alt: "" },
  { src: "/images/footerExplosion/ProjectImage4.webp", w: 180, top: "32%", left: "18%", rotate: 6, delay: 80, alt: "" },
  { src: "/images/footerExplosion/ProjectImage2.webp", w: 200, top: "26%", left: "48%", rotate: -3, delay: 160, alt: "" },
  { src: "/images/footerExplosion/ProjectImage7.webp", w: 170, top: "12%", left: "62%", rotate: 9, delay: 240, alt: "" },
  { src: "/images/footerExplosion/ProjectImage5.webp", w: 190, top: "44%", left: "70%", rotate: -10, delay: 320, alt: "" },
  { src: "/images/footerExplosion/ProjectImage8.webp", w: 160, top: "48%", left: "8%", rotate: 4, delay: 400, alt: "" },
];

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
          <a href="#contact" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>Get in touch</a>
          <span>©2026 All Rights Reserved</span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Reveal as="div" rootMargin="-5% 0px" style={{ display: "block" }}>
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
              position: "relative",
              zIndex: 1,
            }}
          >
            DEVAGARWALLA
          </h2>
        </Reveal>

        {POLAROIDS.map((p, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="polaroid"
            style={{
              position: "absolute",
              top: p.top,
              left: p.left,
              width: p.w,
              aspectRatio: "4 / 3",
              boxShadow: "0 24px 48px rgba(0,0,0,0.55)",
              transform: `rotate(${p.rotate}deg)`,
              overflow: "hidden",
              pointerEvents: "none",
              background: "var(--paper)",
              padding: 8,
              zIndex: 2,
              animation: `polaroidDrop 900ms cubic-bezier(0.22,1,0.36,1) ${p.delay}ms both`,
            }}
          >
            <Image src={p.src} alt={p.alt} width={300} height={225} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        ))}
      </div>

      <span className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        Dev Agarwalla
      </span>
    </footer>
  );
}
