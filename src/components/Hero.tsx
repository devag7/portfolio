import { WavesCanvas } from "./WavesCanvas";
import { ArrowUpRight } from "./icons";
import { PROFILE, RESUME, STATS } from "@/lib/profile";

/** Server-rendered hero: the name is the H1 and every number is in the HTML, so crawlers and agents read real values. */
export function Hero() {
  return (
    <section id="top" data-bg="dark" className="hero">
      <WavesCanvas />

      <ul className="hero-stats" aria-label="At a glance">
        {STATS.map((s) => (
          <li key={s.label}>
            <b>{s.value}</b> {s.label}
          </li>
        ))}
      </ul>

      <h1 className="hero-headline">
        <span className="hero-mask">
          <span className="hero-line">Dev Agarwalla</span>
        </span>{" "}
        <span className="hero-mask hero-mask--right">
          <span className="hero-line hero-line--late">
            <span className="hero-accent">
              builds and ships
              <span aria-hidden="true" className="hero-underline" />
            </span>
          </span>
        </span>
      </h1>

      <div className="hero-about">
        <p className="hero-intro">{PROFILE.intro}</p>
        <div className="hero-actions">
          <a href="#work" className="pill pill--sage">
            See my work <ArrowUpRight />
          </a>
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className="arrow-link hero-resume">
            Résumé <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
