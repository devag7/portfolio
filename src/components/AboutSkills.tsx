const SKILLS = [
  { num: "01", title: "Frontend", items: ["React.js / Next.js 15", "TypeScript / JavaScript", "Tailwind CSS", "HTML / CSS", "Responsive design", "SEO & Accessibility"] },
  { num: "02", title: "Backend", items: ["Node.js / Express.js", "MongoDB / PostgreSQL", "REST API design", "JWT authentication", "Role-based authorization", "MERN stack"] },
  { num: "03", title: "Tooling", items: ["Git / GitHub", "Vercel deployment", "Postman / API testing", "VS Code workflow", "Performance optimization", "Production debugging"] },
];

const EXPERIENCE = [
  { num: "01", title: "Full-Stack Developer Intern", org: "Cyber Secure India (CSI) · Bengaluru · Hybrid", dates: "Jan 2025 – Jun 2025", body: "Built 3+ MERN web apps (dev → production), 15+ REST APIs with JWT auth and role-based authorization, modular backend architecture, cross-functional collaboration." },
  { num: "02", title: "Student Developer", org: "GDSC · Kristu Jayanti University · Bengaluru", dates: "Sep 2023 – Aug 2024", body: "Organized technical workshops and coding sessions, collaborated on frontend projects, drove peer learning and developer community engagement." },
  { num: "03", title: "Data Annotator", org: "Bobble AI · Delhi", dates: "Jun 2021 – Sep 2021", body: "Processed and categorized large-scale conversational datasets to improve NLP model accuracy for AI-driven keyboard prediction systems." },
];

export function AboutSkills() {
  return (
    <section id="about" data-bg="dark" style={{ background: "var(--ink)", color: "var(--paper)", padding: "clamp(96px, 12vh, 160px) var(--gutter)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, marginBottom: 96, alignItems: "start" }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-thunder-lc)", fontWeight: 900, fontSize: "clamp(48px, 8vw, 110px)", lineHeight: 0.92, textTransform: "uppercase", color: "var(--paper)" }}>
          Built in Code.<br />Designed<br />for Humans.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 460, color: "rgba(253,253,253,0.82)", fontFamily: "var(--font-nohemi)", fontSize: 16, lineHeight: 1.7 }}>
          <p style={{ margin: 0 }}><strong style={{ color: "var(--paper)", fontWeight: 600 }}>One year into shipping production work, the question I keep returning to is the same:</strong> what makes a web app feel good?</p>
          <p style={{ margin: 0 }}>It&apos;s rarely the framework or the design trend. It&apos;s the API that responds in 80ms. The form that handles bad input gracefully. The dashboard that holds together when the data is uglier than the mock. I work somewhere between design and engineering — close enough to both to keep them honest.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, borderTop: "1px solid rgba(253,253,253,0.18)", paddingTop: 48 }}>
        {SKILLS.map((col) => (
          <div key={col.num}>
            <h3 style={{ display: "flex", gap: 12, alignItems: "baseline", margin: "0 0 24px", fontFamily: "var(--font-nohemi)", fontWeight: 500, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              <span style={{ opacity: 0.5 }}>{col.num}</span>
              <span>{col.title}</span>
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {col.items.map((it) => (
                <li key={it} style={{ fontFamily: "var(--font-nohemi)", fontSize: 15, color: "rgba(253,253,253,0.85)", borderBottom: "1px dashed rgba(253,253,253,0.12)", paddingBottom: 8 }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 96, paddingTop: 48, borderTop: "1px solid rgba(253,253,253,0.18)" }}>
        <p style={{ fontFamily: "var(--font-nohemi)", fontWeight: 200, fontSize: 11.65, margin: "0 0 32px", letterSpacing: "0.04em" }}>Experience</p>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 32 }}>
          {EXPERIENCE.map((r) => (
            <li key={r.num} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 24, paddingBottom: 32, borderBottom: "1px solid rgba(253,253,253,0.1)" }}>
              <span style={{ fontFamily: "var(--font-nohemi)", fontSize: 13, opacity: 0.5 }}>{r.num}</span>
              <div>
                <h4 style={{ margin: 0, fontFamily: "var(--font-thunder-lc)", fontWeight: 800, fontSize: 36, textTransform: "uppercase", letterSpacing: "-0.01em" }}>{r.title}</h4>
                <p style={{ margin: "6px 0 2px", fontFamily: "var(--font-nohemi)", fontWeight: 500, fontSize: 14 }}>{r.org}</p>
                <p style={{ margin: 0, fontFamily: "var(--font-nohemi)", fontSize: 13, opacity: 0.6 }}>{r.dates}</p>
                <p style={{ margin: "16px 0 0", fontFamily: "var(--font-nohemi)", fontSize: 15, lineHeight: 1.6, color: "rgba(253,253,253,0.78)" }}>{r.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div style={{ marginTop: 48, padding: "24px 0", borderTop: "1px solid rgba(253,253,253,0.18)" }}>
          <p style={{ fontFamily: "var(--font-nohemi)", fontWeight: 200, fontSize: 11.65, margin: "0 0 12px" }}>Honors & Education</p>
          <p style={{ margin: 0, fontFamily: "var(--font-nohemi)", fontSize: 16, lineHeight: 1.7, color: "rgba(253,253,253,0.85)", maxWidth: 720 }}>
            <strong style={{ color: "var(--paper)", fontWeight: 600 }}>BCA (Analytics)</strong> at Kristu Jayanti University, 2023–2026 (expected). Core organizer of <strong style={{ color: "var(--paper)", fontWeight: 600 }}>LOGIN2K25</strong> — university-level coding competition with 400+ participants.
          </p>
        </div>
      </div>
    </section>
  );
}
