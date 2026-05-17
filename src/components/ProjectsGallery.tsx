import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";

const PROJECTS = [
  { idx: "01", name: "Pastyy", year: "2025", cat: "MERN · JWT · Google OAuth · Cloud Drive", href: "https://pastyy.run.place/" },
  { idx: "02", name: "RentWise", year: "2025", cat: "Next.js 15 · MongoDB · Tailwind · Real-estate", href: "http://157.245.110.163:3009/" },
];

export function ProjectsGallery() {
  return (
    <section id="projects" data-bg="light" style={{ background: "var(--paper)", color: "var(--ink)", padding: "clamp(96px, 12vh, 160px) var(--gutter)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, marginBottom: 64, alignItems: "end" }}>
        <span style={{ fontFamily: "var(--font-nohemi)", fontSize: 13, opacity: 0.6 }}>Selected projects (02)</span>
        <h2 style={{ margin: 0, fontFamily: "var(--font-thunder-lc)", fontWeight: 900, fontSize: "clamp(48px, 8vw, 110px)", lineHeight: 0.9, textTransform: "uppercase" }}>
          Crafted Projects.<br />Real Results.
        </h2>
      </div>

      <div style={{ borderTop: "1px solid rgba(33,33,33,0.18)" }}>
        {PROJECTS.map((p, i) => (
          <Reveal
            as="a"
            delay={i * 100}
            key={p.idx}
            // @ts-expect-error anchor passthrough
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 2.5fr 1fr",
              alignItems: "center",
              padding: "32px 0",
              borderBottom: "1px solid rgba(33,33,33,0.18)",
              color: "var(--ink)",
              transition: "background 200ms",
            }}
          >
            <span style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
              <span style={{ fontFamily: "var(--font-nohemi)", fontSize: 13, opacity: 0.6 }}>{p.idx}</span>
              <span style={{ fontFamily: "var(--font-thunder-lc)", fontWeight: 800, fontSize: 40, textTransform: "uppercase", letterSpacing: "-0.01em" }}>{p.name}</span>
            </span>
            <span style={{ fontFamily: "var(--font-nohemi)", fontSize: 14, opacity: 0.7 }}>{p.year}</span>
            <span style={{ fontFamily: "var(--font-nohemi)", fontSize: 14, opacity: 0.7 }}>{p.cat}</span>
            <span style={{ justifySelf: "end", display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-nohemi)", fontWeight: 500, fontSize: 14 }}>
              See live <ArrowUpRight />
            </span>
          </Reveal>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 32, fontFamily: "var(--font-nohemi)", fontSize: 14, opacity: 0.7 }}>
        <span>More on GitHub — github.com/devag7</span>
        <a href="https://github.com/devag7" target="_blank" rel="noopener noreferrer" data-cursor="hover" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
          See all repositories <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
