"use client";

import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";

const SLABS = [
  {
    num: "01",
    caption: "(its intention)",
    body: "I work closely with brands to craft thoughtful, scalable design systems built for long-term growth and consistency, translating ideas into structured and cohesive visual language — from art direction and strong visual foundations to responsive interfaces and polished digital experiences that feel intuitive, refined, and built to evolve over time.",
    giant: "Design",
    image: "/images/servicesOverview/DesignCardFirst.webp",
    alt: "Batman slap meme illustrating decisive design opinions",
    zone: "var(--zone-design)",
    fg: "var(--ink)",
    tilt: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
  },
  {
    num: "02",
    caption: "(every 2 weeks)",
    body: "Web systems built to move fast, test ideas, and measure real results. Full-stack development across front-end, back-end, and databases, with experience in custom architectures and production-ready builds. From clean interfaces to reliable server logic, the focus is on performance, maintainability, and systems that scale without unnecessary complexity.",
    giant: "Engineering",
    image: "/images/servicesOverview/EngineeringCardSecond.webp",
    alt: "X-ray illustration with screwdriver — engineering humor",
    zone: "var(--zone-engineering)",
    fg: "var(--ink)",
    tilt: "polygon(0 0, 100% 4%, 100% 100%, 0 96%)",
  },
  {
    num: "03",
    caption: "(choosing the right problem)",
    body: "Strategic thinking built on precision, efficiency, and technical expertise. Every project considers goals, competitive context, SEO, and conversion from the start, forming a clear foundation for design and development. The process stays focused and deliberate, removing unnecessary discussions and early bottlenecks to keep projects moving fast and predictable.",
    giant: "Strategy",
    image: "/images/servicesOverview/StrategyCardThird.webp",
    alt: "Two-buttons sweating man meme — strategic decisions",
    zone: "var(--zone-strategy)",
    fg: "var(--ink)",
    tilt: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
  },
];

export function CaseStudies() {
  return (
    <section style={{ background: "var(--paper)", color: "var(--ink)" }} data-bg="light">
      {SLABS.map((s, i) => (
        <article
          key={s.num}
          data-bg={i === 1 ? "light" : "dark"}
          style={{
            background: s.zone,
            color: s.fg,
            minHeight: "85vh",
            padding: "clamp(80px, 12vh, 160px) var(--gutter)",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "clamp(40px, 6vw, 96px)",
            position: "relative",
            clipPath: s.tilt,
            marginTop: i === 0 ? 0 : "-3vh",
          }}
        >
          <Reveal as="div" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <span style={{ fontFamily: "var(--font-nohemi)", fontSize: 13, opacity: 0.7 }}>{s.num}</span>
            <p style={{ margin: 0, fontFamily: "var(--font-nohemi)", fontSize: 16, lineHeight: 1.55, maxWidth: 520, color: s.fg }}>
              {s.body}
            </p>
            <span
              aria-hidden="true"
              style={{
                marginTop: "auto",
                fontFamily: "var(--font-thunder-lc)",
                fontWeight: 800,
                fontSize: "clamp(96px, 16vw, 228px)",
                lineHeight: 0.85,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: s.fg,
              }}
            >
              {s.giant}
            </span>
            <a
              href="#projects"
              data-cursor="hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--font-nohemi)",
                fontWeight: 500,
                fontSize: 14,
                color: s.fg,
              }}
            >
              Learn more <ArrowUpRight />
            </a>
          </Reveal>
          <Reveal as="div" delay={150} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-nohemi)", fontSize: 13, opacity: 0.7 }}>{s.caption}</span>
            <Image
              src={s.image}
              alt={s.alt}
              width={420}
              height={300}
              style={{ width: "clamp(280px, 32vw, 420px)", height: "auto", boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}
            />
          </Reveal>
        </article>
      ))}
    </section>
  );
}
