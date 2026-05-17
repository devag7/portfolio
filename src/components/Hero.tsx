"use client";

import dynamic from "next/dynamic";
import { WavesCanvas } from "./WavesCanvas";
import { ArrowUpRight } from "./icons";

const ThreeMoon = dynamic(() => import("./ThreeMoon"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 35% 35%, rgba(253,253,253,0.4) 0%, rgba(33,33,33,0.95) 60%, rgba(33,33,33,1) 80%)",
      }}
    />
  ),
});

export function Hero() {
  return (
    <section
      id="top"
      data-bg="dark"
      style={{
        position: "relative",
        minHeight: "100svh",
        padding: "112px var(--gutter) 56px",
        background: "var(--ink)",
        color: "var(--paper)",
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "1fr auto",
      }}
    >
      <WavesCanvas />

      <h1
        className="hero-headline"
        style={{
          position: "relative",
          zIndex: 1,
          margin: 0,
          alignSelf: "center",
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 900,
          fontSize: "clamp(56px, 12vw, 196px)",
          lineHeight: 0.9,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "var(--paper)",
        }}
      >
        <span style={{ display: "block", overflow: "hidden", textAlign: "left" }}>
          <span className="hero-line">
            I Build Modern <span style={{ color: "var(--sage)" }}>Websites</span>
          </span>
        </span>
        <span style={{ display: "block", overflow: "hidden", textAlign: "right" }}>
          <span className="hero-line hero-line--late">
            That{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              Work
              <span aria-hidden="true" className="hero-underline" />
            </span>
          </span>
        </span>
      </h1>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "end",
          gap: 24,
          fontFamily: "var(--font-nohemi)",
          fontSize: 12,
          color: "rgba(253,253,253,0.7)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        <a
          href="#about"
          data-cursor="hover"
          className="arrow-link"
          style={{
            justifySelf: "start",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "var(--paper)",
            fontSize: 13,
            fontWeight: 500,
            textTransform: "none",
            letterSpacing: 0,
          }}
        >
          Scroll <ArrowUpRight />
        </a>

        <div
          aria-hidden="true"
          style={{
            justifySelf: "center",
            width: 88,
            aspectRatio: "1 / 1",
            opacity: 0.95,
          }}
        >
          <ThreeMoon />
        </div>

        <span style={{ justifySelf: "end" }}>Bengaluru, India · 2026</span>
      </div>
    </section>
  );
}
