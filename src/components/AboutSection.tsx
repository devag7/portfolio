"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const run = () => {
      cancelAnimationFrame(raf);
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(Math.floor(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setV(0);
          run();
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to]);

  return <span ref={ref}>{v}{suffix}</span>;
}

export function AboutSection() {
  return (
    <section
      id="about"
      data-bg="dark"
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "clamp(96px, 14vh, 160px) var(--gutter)",
      }}
    >
      <div
        className="hero-stats"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontFamily: "var(--font-nohemi)",
          fontSize: 13,
          padding: "20px 0 28px",
          borderBottom: "1px solid rgba(253,253,253,0.18)",
          color: "rgba(253,253,253,0.85)",
        }}
      >
        <span><Counter to={12} suffix="+" /> Projects Shipped</span>
        <span><Counter to={2} suffix="y" /> Building Production Apps</span>
        <span><Counter to={25} suffix="+" /> APIs Deployed</span>
      </div>

      <div
        className="hero-about"
        style={{
          display: "grid",
          gridTemplateColumns: "auto minmax(280px, 520px)",
          justifyContent: "space-between",
          alignItems: "start",
          gap: 24,
          paddingTop: 48,
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
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          About
        </p>
        <div>
          <Reveal as="p" line style={{ margin: 0, fontFamily: "var(--font-nohemi)", fontSize: 18, lineHeight: 1.55, color: "rgba(253,253,253,0.88)", textAlign: "right" }}>
            <span>
              I&apos;m a full-stack developer focused on building modern, fast, and reliable web applications. I care not only about how a site looks, but also about how it performs, scales, and feels for real users. From clean MERN-stack code to polished Next.js front-ends and secure APIs, I make sure every project is built with attention to detail and long-term quality in mind.
            </span>
          </Reveal>
          <div style={{ display: "flex", gap: 16, justifyContent: "flex-end", flexWrap: "wrap", marginTop: 28 }}>
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
              className="pill pill--sage"
            >
              View Résumé <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
