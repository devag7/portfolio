import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { LINKS, MORE_PROJECTS } from "@/lib/profile";

/** Smaller projects as rows. Each links to its case study on devshipit.com or the live product. */
export function ProjectsGallery() {
  return (
    <section id="projects" data-bg="light" className="more">
      <h2 className="more-title">More projects</h2>
      <ul className="more-list">
        {MORE_PROJECTS.map((p, i) => {
          const href = p.caseStudy || p.live?.href || LINKS.github;
          const external = !p.caseStudy;
          return (
            <Reveal as="li" delay={i * 80} key={p.slug}>
              <a href={href} className="more-row row-hover" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span data-row-name className="more-name">{p.name}</span>
                <span className="more-status">{p.status}</span>
                <span className="more-summary">{p.summary}</span>
                <span className="more-cta">
                  {p.caseStudy ? "Case study" : "Open"} <ArrowUpRight />
                </span>
              </a>
            </Reveal>
          );
        })}
      </ul>
      <p className="more-foot">
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="arrow-link">
          All repositories on GitHub <ArrowUpRight />
        </a>
      </p>
    </section>
  );
}
