import { Reveal } from "./Reveal";
import { EXPERIENCE, PROFILE } from "@/lib/profile";

/** Sticky stacked rows, one per role. The big ghost figure is the start year, so the visual sequence is a real timeline. */
const BG = ["var(--paper-soft)", "var(--sage)", "var(--paper)", "var(--sage)"];

function Marquee() {
  return (
    <div aria-hidden="true" className="marquee">
      <div className="marquee-track">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="marquee-item">
            <span>dev agarwalla</span>
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="about" data-bg="dark" className="exp">
      <div className="exp-head">
        <h2 className="display-2">
          <span>Where I&apos;ve</span>
          <span className="exp-head-indent">been building</span>
        </h2>
        <p className="exp-lead">
          Now: {PROFILE.now}, an AI product company. Before that, production MERN work, developer communities and AI training data.
        </p>
      </div>

      <Marquee />

      <ol className="exp-list">
        {EXPERIENCE.map((r, i) => (
          <li key={r.org} className="exp-row" style={{ background: BG[i % BG.length], zIndex: i + 1, marginTop: i === 0 ? 0 : -56 }}>
            <Reveal as="h3" className="exp-org">{r.org}</Reveal>
            <Reveal as="p" delay={80} className="exp-meta">
              {r.role} <span aria-hidden="true">/</span> {r.when}
            </Reveal>
            <Reveal as="p" delay={140} className="exp-summary">{r.summary}</Reveal>
            <span aria-hidden="true" className="exp-year" data-year={r.year} />
          </li>
        ))}
      </ol>
    </section>
  );
}
