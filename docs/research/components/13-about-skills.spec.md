# About + Skills Specification (added section)

## Overview
- **Target file:** `src/components/AboutSkills.tsx`
- **Interaction model:** static + reveal.
- **Source reference:** Portfolio.html lines 363–420 + LinkedIn skills/experience.

## DOM Structure
```
<section className="about-skills" id="about" data-bg="dark">
  <div className="head">
    <h2 className="display-h2">Built in Code.<br/>Designed<br/>for Humans.</h2>
    <div className="right">
      <p><strong>One year into shipping production work, the question I keep returning to is the same:</strong> what makes a web app feel good?</p>
      <p>It's rarely the framework or the design trend. It's the API that responds in 80ms. The form that handles bad input gracefully. The dashboard that holds together when the data is uglier than the mock. I work somewhere between design and engineering — close enough to both to keep them honest.</p>
    </div>
  </div>

  <div className="skills">
    <div className="col">
      <h4><span className="n">01</span><span>Frontend</span></h4>
      <ul>
        <li>React.js / Next.js 15</li>
        <li>TypeScript / JavaScript</li>
        <li>Tailwind CSS</li>
        <li>HTML / CSS</li>
        <li>Responsive design</li>
        <li>SEO / Accessibility</li>
      </ul>
    </div>
    <div className="col">
      <h4><span className="n">02</span><span>Backend</span></h4>
      <ul>
        <li>Node.js / Express.js</li>
        <li>MongoDB / PostgreSQL</li>
        <li>REST API design</li>
        <li>JWT authentication</li>
        <li>Role-based authorization</li>
        <li>MERN stack</li>
      </ul>
    </div>
    <div className="col">
      <h4><span className="n">03</span><span>Tooling</span></h4>
      <ul>
        <li>Git / GitHub</li>
        <li>Vercel deployment</li>
        <li>Postman / API testing</li>
        <li>VS Code workflow</li>
        <li>Performance optimization</li>
        <li>Production debugging</li>
      </ul>
    </div>
  </div>

  <div className="experience">
    <p className="eyebrow">Experience</p>
    <ol className="timeline">
      <li className="role">
        <span className="role-num">01</span>
        <div className="role-body">
          <h3>Full-Stack Developer Intern</h3>
          <span className="org">Cyber Secure India (CSI) · Bengaluru · Hybrid</span>
          <span className="dates">Jan 2025 – Jun 2025</span>
          <p>Built 3+ MERN web apps (dev → production), 15+ REST APIs with JWT auth and role-based authorization, modular backend architecture, cross-functional collaboration.</p>
        </div>
      </li>
      <li className="role">
        <span className="role-num">02</span>
        <div className="role-body">
          <h3>Student Developer</h3>
          <span className="org">GDSC · Kristu Jayanti University · Bengaluru</span>
          <span className="dates">Sep 2023 – Aug 2024</span>
          <p>Organized technical workshops and coding sessions, collaborated on frontend projects, drove peer learning and developer community engagement.</p>
        </div>
      </li>
      <li className="role">
        <span className="role-num">03</span>
        <div className="role-body">
          <h3>Data Annotator</h3>
          <span className="org">Bobble AI · Delhi</span>
          <span className="dates">Jun 2021 – Sep 2021</span>
          <p>Processed and categorized large-scale conversational datasets to improve NLP model accuracy for AI-driven keyboard prediction systems.</p>
        </div>
      </li>
    </ol>
    <div className="honors">
      <p className="eyebrow">Honors & Education</p>
      <p><strong>BCA (Analytics)</strong> at Kristu Jayanti University, 2023–2026 (expected). Core organizer of <strong>LOGIN2K25</strong> — university-level coding competition with 400+ participants.</p>
    </div>
  </div>
</section>
```

## Computed Styles
- `.about-skills` — background `#212121`; color `#FDFDFD`; padding clamp(96px, 12vh, 160px) clamp(20px, 4vw, 64px).
- `.head` — display grid grid-template-columns 1.2fr 1fr; gap 64px; margin-bottom 96px.
- `.head .display-h2` — Thunder-LC 900 clamp(56px, 8vw, 110px); line-height 0.92; text-transform uppercase; color `#FDFDFD`.
- `.head .right p` — Nohemi 400 16px line-height 1.7; color rgba(253,253,253,0.8); max-width 460px; margin 0 0 16px.
- `.head .right strong` — color `#FDFDFD`; font-weight 600.
- `.skills` — display grid grid-template-columns repeat(3, 1fr); gap 48px; border-top 1px solid rgba(253,253,253,0.18); padding-top 48px.
- `.skills .col h4` — display flex gap 12px align-items baseline; font Nohemi 500 14px text-transform uppercase letter-spacing 0.06em; margin 0 0 24px.
- `.skills .col h4 .n` — opacity 0.5.
- `.skills .col ul` — list-style none; padding 0; margin 0; display flex flex-direction column gap 12px.
- `.skills .col li` — Nohemi 400 16px color rgba(253,253,253,0.85); border-bottom 1px dashed rgba(253,253,253,0.1); padding-bottom 8px.
- `.experience` — display grid grid-template-columns 1fr 1fr; gap 48px; margin-top 96px; padding-top 48px; border-top 1px solid rgba(253,253,253,0.18).
- `.experience .eyebrow` — Nohemi 200 11.65px; margin-bottom 24px.
- `.experience h3` — Thunder-LC 800 40px text-transform uppercase margin 0.
- `.experience .org` — Nohemi 500 14px; display block; margin-top 4px.
- `.experience .dates` — Nohemi 400 13px; opacity 0.6; display block; margin-top 4px.
- `.experience ul` — list-style none; padding 0; margin 20px 0 0; display flex flex-direction column gap 12px.
- `.experience li` — Nohemi 400 15px line-height 1.55; padding-left 16px; position relative.
- `.experience li::before` — content '—'; position absolute left 0; color `#729E84`.

## Responsive
- ≤1024px: `.head` and `.experience` collapse to single column.
- ≤640px: `.skills` collapses to 1 column with 24px gap.

## Builder notes
- Honest: Dev has 1 internship, not "Three years." Rewrote the prose accordingly. Don't inflate.
- The `<strong>` opening is the only place in the section copy that's heavier-weight — keep that contrast.
