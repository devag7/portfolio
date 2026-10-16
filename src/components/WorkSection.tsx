import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { MAIN, PROJECTS } from "@/lib/profile";

/** Angled, sticky product panels. Real screenshots and real source code only; the full story lives on devshipit.com. */
const LOOK = [
  { bg: "var(--sage)", tilt: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)" },
  { bg: "var(--paper-soft)", tilt: "polygon(0 0, 100% 4%, 100% 100%, 0 96%)" },
  { bg: "var(--paper)", tilt: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)" },
];

export function WorkSection() {
  return (
    <section id="work" data-bg="light" className="work">
      <div className="work-intro">
        <h2 className="display-2">
          <span>Things I&apos;ve</span>
          <span>built and shipped.</span>
        </h2>
        <p className="work-intro-lead">
          Each one is live or published. Case studies, prices and freelance services are on{" "}
          <a href={`${MAIN}/work/`} className="u-link">devshipit.com</a>.
        </p>
      </div>

      {PROJECTS.map((p, i) => (
        <article key={p.slug} className="panel" style={{ background: LOOK[i].bg, clipPath: LOOK[i].tilt, zIndex: i + 1 }}>
          <Reveal as="div" className="panel-copy">
            <p className="panel-status">{p.status}</p>
            <p className="panel-summary">{p.summary}</p>
            <ul className="panel-stack" aria-label={`${p.name} stack`}>
              {p.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <h3 className={`panel-name${p.name.length > 9 ? " panel-name--long" : ""}`}>{p.name}</h3>
            <div className="panel-links">
              {p.caseStudy ? (
                <a href={p.caseStudy} className="pill pill--ink">
                  Case study <ArrowUpRight />
                </a>
              ) : null}
              {p.live ? (
                <a href={p.live.href} target="_blank" rel="noopener noreferrer" className="arrow-link">
                  {p.live.label} <ArrowUpRight />
                </a>
              ) : null}
              {p.source ? (
                <a href={p.source} target="_blank" rel="noopener noreferrer" className="arrow-link">
                  Source <ArrowUpRight />
                </a>
              ) : null}
            </div>
          </Reveal>
          {p.image ? (
            <Reveal as="figure" delay={120} className={`panel-media${p.image.w < p.image.h ? " panel-media--tall" : ""}`}>
              <Image src={p.image.src} alt={p.image.alt} width={p.image.w} height={p.image.h} sizes="(max-width: 768px) 90vw, 40vw" />
            </Reveal>
          ) : null}
        </article>
      ))}
    </section>
  );
}
