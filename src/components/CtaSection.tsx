import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";
import { EMAIL, MAIN } from "@/lib/profile";

export function CtaSection() {
  return (
    <section id="cta" data-bg="light" className="cta">
      <Reveal as="h2" className="display-2 cta-title">
        <span>Have a project</span>
        <span>in mind?</span>
      </Reveal>
      <span aria-hidden="true" className="cta-underline" />
      <p className="cta-copy">
        I build websites and web apps for property agents, agencies and small businesses through DevShipIt. Every project starts with a written quote.
      </p>
      <div className="cta-actions">
        <a href={`mailto:${EMAIL}?subject=Project%20enquiry`} className="pill pill--ink cta-pill">
          Email me <ArrowUpRight />
        </a>
        <a href={`${MAIN}/services/`} className="pill pill--ghost cta-pill">
          Freelance services <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
