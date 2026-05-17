"use client";

import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";

const SLABS = [
  {
    num: "01",
    caption: "(what users see)",
    body: "I build interfaces that feel obvious to use and look like they belong. Real React components, design systems that scale, accessible by default. From hero landing pages to dense admin dashboards, every screen earns its place — clean type, considered spacing, motion that reinforces hierarchy rather than distracting from it.",
    giant: "Design",
    image: "/images/footerExplosion/ProjectImage4.webp",
    alt: "Pastyy app interface preview",
    zone: "var(--zone-design)",
    fg: "var(--ink)",
    tilt: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
  },
  {
    num: "02",
    caption: "(what holds it together)",
    body: "Production MERN + Next.js apps with the wiring that survives traffic. JWT auth, Google OAuth, Cloudinary uploads, Mongo schemas that scale, REST/GraphQL APIs deployed and monitored. I ship code that runs, not snippets that compile — error boundaries, retry logic, edge-case handling baked in.",
    giant: "Engineering",
    image: "/images/footerExplosion/ProjectImage2.webp",
    alt: "RentWise app dashboard preview",
    zone: "var(--zone-engineering)",
    fg: "var(--ink)",
    tilt: "polygon(0 0, 100% 4%, 100% 100%, 0 96%)",
  },
  {
    num: "03",
    caption: "(why it matters)",
    body: "Before code, the problem. I work with founders to translate vague product intent into a concrete scope: which flows ship in v1, which auth model fits, where the database boundary sits. Fewer features, sharper edges. Every project starts with a one-page brief so the build never drifts.",
    giant: "Strategy",
    image: "/images/footerExplosion/ProjectImage6.webp",
    alt: "Project planning artifact",
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
