"use client";

import { useEffect, useState } from "react";
import { WavesCanvas } from "./WavesCanvas";
import { ArrowUpRight } from "./icons";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{v}{suffix}</>;
}

export function Hero() {
  return (
    <section
      id="top"
      data-bg="dark"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "112px var(--gutter) 64px",
        background: "var(--ink)",
        color: "var(--paper)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <WavesCanvas />

      <div
        className="hero-stats"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontFamily: "var(--font-nohemi)",
          fontSize: 13,
          padding: "20px 0",
          borderBottom: "1px solid rgba(253,253,253,0.18)",
          color: "rgba(253,253,253,0.85)",
        }}
      >
        <span><Counter to={12} suffix="+" /> Projects Shipped</span>
        <span><Counter to={2} suffix="y" /> Building Production Apps</span>
        <span><Counter to={25} suffix="+" /> APIs Deployed</span>
      </div>

      <h1
        className="hero-headline"
        style={{
          position: "relative",
          zIndex: 1,
          margin: "auto 0",
          padding: "32px 0",
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 900,
          fontSize: "clamp(56px, 13vw, 200px)",
          lineHeight: 0.9,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "var(--paper)",
        }}
      >
        <span style={{ display: "block", overflow: "hidden", textAlign: "left" }}>
          <span style={{ display: "block", animation: "heroLineUp 900ms cubic-bezier(0.22,1,0.36,1) 200ms both" }}>
            I Build Modern <span style={{ color: "var(--sage)" }}>Websites</span>
          </span>
        </span>
        <span style={{ display: "block", overflow: "hidden", textAlign: "right" }}>
          <span style={{ display: "block", animation: "heroLineUp 900ms cubic-bezier(0.22,1,0.36,1) 380ms both" }}>
            That{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              Work
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "-6px",
                  height: 5,
                  background: "var(--sage)",
                  transformOrigin: "left",
                  animation: "underlineExpand 900ms cubic-bezier(0.22,1,0.36,1) 1400ms both",
                }}
              />
            </span>
          </span>
        </span>
      </h1>

      <div
        className="hero-about"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "auto minmax(280px, 460px)",
          alignItems: "start",
          gap: 24,
          marginTop: 24,
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-nohemi)",
            fontWeight: 200,
            fontSize: 11.65,
            color: "var(--paper)",
            lineHeight: 1,
            paddingTop: 4,
          }}
        >
          About
        </p>
        <div>
          <p style={{ margin: 0, fontFamily: "var(--font-nohemi)", fontSize: 14, lineHeight: 1.65, color: "rgba(253,253,253,0.78)", textAlign: "right" }}>
            I&apos;m a full-stack developer focused on building modern, fast, and reliable web applications. I care not only about how a site looks, but also about how it performs, scales, and feels for real users. From clean MERN-stack code to polished Next.js front-ends and secure APIs, I make sure every project is built with attention to detail and long-term quality in mind.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "flex-end", flexWrap: "wrap", marginTop: 20 }}>
            <a
              href="#approach"
              data-cursor="hover"
              className="arrow-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--font-nohemi)",
                fontWeight: 500,
                fontSize: 14,
                color: "var(--paper)",
              }}
            >
              Learn more <ArrowUpRight />
            </a>
            <a
              href="https://linkedin.com/in/devagarwalla"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="arrow-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                background: "var(--sage)",
                color: "var(--ink)",
                fontFamily: "var(--font-nohemi)",
                fontWeight: 600,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                borderRadius: 9999,
              }}
            >
              View Résumé <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
