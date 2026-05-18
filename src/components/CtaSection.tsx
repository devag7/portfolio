import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section
      id="cta"
      data-bg="light"
      style={{
        background: "var(--paper)",
        color: "var(--ink)",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: "clamp(80px, 12vh, 160px) var(--gutter)",
        textAlign: "center",
      }}
    >
      <Reveal as="h2"
        style={{
          margin: 0,
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 900,
          fontSize: "clamp(48px, 8vw, 100px)",
          lineHeight: 0.92,
          textTransform: "uppercase",
          letterSpacing: "-0.01em",
        }}
      >
        Ready to Build Something
        <br />
        That Actually Works?
      </Reveal>
      <span aria-hidden="true" className="cta-underline" />
      <p style={{ margin: 0, maxWidth: 540, fontFamily: "var(--font-nohemi)", fontSize: 16, lineHeight: 1.6, color: "rgba(33,33,33,0.7)" }}>
        Clear design, solid engineering, and focused strategy, working together as one system.
      </p>
      <div style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <a
          href="#contact"
          data-cursor="hover"
          className="pill pill--ink"
          style={{ padding: "18px 40px", fontSize: 14 }}
        >
          Let&apos;s Talk
        </a>
        <a
          href="mailto:devagarwalla2016@gmail.com?subject=Project%20inquiry"
          data-cursor="hover"
          className="pill pill--ghost"
          style={{ padding: "18px 40px", fontSize: 14, borderWidth: "1.5px" }}
        >
          Email Me Directly
        </a>
      </div>
    </section>
  );
}
