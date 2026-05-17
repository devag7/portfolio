"use client";

import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";

const STRIPES = [
  { num: "01", title: "Performance First", body: "I focus on building web apps that load fast and feel smooth from the first interaction. Performance is considered at every stage, from structure and assets to code quality and optimization, ensuring reliable results on real devices and networks.", link: "Learn more", bg: "var(--paper-soft)" },
  { num: "02", title: "Clean & Scalable Code", body: "I write clean, well-structured MERN-stack code with a strong focus on clarity and long-term scalability. This approach makes projects easier to understand, update, and extend over time, while reducing complexity and keeping the codebase reliable as it grows.", link: "My workflow", bg: "var(--sage)" },
  { num: "03", title: "Modern UI & UX", body: "I design and build interfaces with clarity, usability, and consistency in mind. Layouts, interactions, and responsive behavior are carefully crafted to provide an intuitive experience that works seamlessly across all devices and screen sizes.", link: "View approach", bg: "var(--paper)" },
  { num: "04", title: "SEO & Best Practices", body: "Apps are built using modern best practices and strong technical SEO foundations from the very beginning of the project. This includes clean structure, accessibility, semantic markup, and optimization techniques that support visibility, performance, and long-term growth.", link: "See details", bg: "var(--sage)" },
  { num: "05", title: "Reliable Delivery", body: "From the initial idea to the final launch, I focus on clear communication, thoughtful planning, and reliable delivery at every stage of the process. Each project is carefully tested and refined to ensure stability, quality, and confidence when the product goes live.", link: "How I work", bg: "var(--paper)" },
];

function Marquee() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 88,
        background: "var(--sage)",
        color: "var(--ink)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 48,
          whiteSpace: "nowrap",
          animation: "marquee 28s linear infinite",
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 900,
          fontSize: 64,
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 48, flexShrink: 0 }}>
            <span>dev agarwalla</span>
            <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--ink)", color: "var(--paper)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

type StripeProps = { num: string; title: string; body: string; link: string; bg: string; idx: number };
function Stripe({ num, title, body, link, bg, idx }: StripeProps) {
  const ink = bg === "var(--sage)" || bg === "var(--paper)" || bg === "var(--paper-soft)" ? "var(--ink)" : "var(--paper)";
  return (
    <article
      style={{
        position: "sticky",
        top: 0,
        background: bg,
        color: ink,
        minHeight: 360,
        padding: "72px var(--gutter) 56px",
        marginTop: idx === 0 ? 0 : -56,
        display: "grid",
        gridTemplateColumns: "1fr",
        zIndex: idx + 1,
        overflow: "hidden",
      }}
    >
      <Reveal as="h3"
        style={{
          margin: 0,
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 900,
          fontSize: "clamp(56px, 9vw, 124px)",
          lineHeight: 0.9,
          textTransform: "uppercase",
          color: ink,
        }}
      >
        {title}
      </Reveal>
      <Reveal as="p" delay={80} style={{ maxWidth: 560, margin: "16px auto 0", textAlign: "center", fontFamily: "var(--font-nohemi)", fontSize: 16, lineHeight: 1.55, color: ink }}>
        {body}
      </Reveal>
      <Reveal as="a" delay={160}
        // @ts-expect-error custom anchor
        href="#projects" data-cursor="hover"
        style={{ marginTop: 16, alignSelf: "center", display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-nohemi)", fontWeight: 500, fontSize: 14, color: ink }}
      >
        {link} <ArrowUpRight />
      </Reveal>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "clamp(20px, 3vw, 64px)",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 900,
          fontSize: "clamp(160px, 22vw, 340px)",
          lineHeight: 0.85,
          color: bg === "var(--sage)" ? "rgba(33,33,33,0.13)" : "rgba(33,33,33,0.10)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {num}
      </span>
    </article>
  );
}

export function StrategySection() {
  return (
    <section id="approach" data-bg="dark" style={{ background: "var(--ink)", color: "var(--paper)", position: "relative" }}>
      <div style={{ padding: "180px var(--gutter) 140px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 32, flexWrap: "wrap", maxWidth: "var(--page-max)", margin: "0 auto" }}>
        <div>
          <p style={{ fontFamily: "var(--font-nohemi)", fontWeight: 200, fontSize: 11.65, margin: "0 0 24px", textTransform: "lowercase" }}>strategy</p>
          <h2 style={{ margin: 0, fontFamily: "var(--font-thunder-lc)", fontWeight: 900, fontSize: "clamp(48px, 6.5vw, 96px)", lineHeight: 0.95, textTransform: "uppercase", color: "var(--paper)", letterSpacing: "-0.01em" }}>
            <span style={{ display: "block" }}>How I Approach</span>
            <span style={{ display: "block", paddingLeft: "1.6em" }}>Every Project?</span>
          </h2>
        </div>
        <div aria-hidden="true" style={{ width: 140, height: 140, position: "relative", animation: "spin360 22s linear infinite", color: "var(--paper)" }}>
          <svg viewBox="0 0 160 160" width="100%" height="100%">
            <defs>
              <path id="ring-path" d="M 80 80 m -64 0 a 64 64 0 1 1 128 0 a 64 64 0 1 1 -128 0" />
            </defs>
            <text fill="currentColor" fontFamily="var(--font-nohemi)" fontSize="12" letterSpacing="0.04em">
              <textPath href="#ring-path" startOffset="0">dev agarwalla · portfolio · dev agarwalla · portfolio · </textPath>
            </text>
            <circle cx="80" cy="80" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>

      <Marquee />

      <div style={{ position: "relative" }}>
        {STRIPES.map((s, i) => (
          <Stripe key={s.num} {...s} idx={i} />
        ))}
      </div>
    </section>
  );
}
