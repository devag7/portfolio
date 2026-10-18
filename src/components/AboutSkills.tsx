import { FAQ, PROFILE, SKILLS } from "@/lib/profile";

/** How I work, the stack, and short answers to the questions people actually ask (also published as FAQPage data). */
export function AboutSkills() {
  return (
    <section id="skills" data-bg="dark" className="skills">
      <div className="skills-head">
        <h2 className="display-2">
          <span>Built in code.</span>
          <span>Designed for humans.</span>
        </h2>
        <div className="skills-copy">
          <p>
            <strong>I care about the parts users feel:</strong> the API that answers fast, the form that handles bad input, the screen that still makes sense when the data is messy.
          </p>
          <p>
            Most of my work sits between product and engineering. At AEOLedger that means measuring how AI assistants describe a company, then fixing the code and pages behind it. On my own products it means building them end to end, from the database to the interface.
          </p>
          <p className="skills-study">{PROFILE.study}</p>
        </div>
      </div>

      <div className="skills-grid">
        {SKILLS.map((col) => (
          <div key={col.title}>
            <h3 className="skills-title">{col.title}</h3>
            <ul className="skills-list">
              {col.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="faq">
        <h3 className="skills-title">Quick answers</h3>
        <dl className="faq-list">
          {FAQ.map((f) => (
            <div key={f.q}>
              <dt>{f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
