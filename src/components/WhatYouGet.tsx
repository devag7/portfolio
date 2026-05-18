import { Plus } from "./icons";
import { Reveal } from "./Reveal";

export function WhatYouGet() {
  return (
    <section
      data-bg="light"
      style={{
        position: "relative",
        minHeight: "90vh",
        background: "var(--paper)",
        color: "var(--ink)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: "clamp(80px, 12vh, 160px) var(--gutter)",
      }}
    >
      <span aria-hidden="true" style={{ position: "absolute", top: 56, left: 56 }}><Plus /></span>
      <span aria-hidden="true" style={{ position: "absolute", top: 56, right: 56 }}><Plus /></span>
      <span aria-hidden="true" style={{ position: "absolute", bottom: 56, left: 56 }}><Plus /></span>
      <span aria-hidden="true" style={{ position: "absolute", bottom: 56, right: 56 }}><Plus /></span>

      <h2
        style={{
          margin: 0,
          fontFamily: "var(--font-thunder-lc)",
          fontWeight: 900,
          fontSize: "clamp(56px, 9vw, 130px)",
          lineHeight: 0.92,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          textAlign: "center",
          color: "var(--ink)",
        }}
      >
        <Reveal as="span" line style={{ display: "block" }}><span>What You Get</span></Reveal>
        <Reveal as="span" line delay={120} style={{ display: "block" }}><span>When Clarity</span></Reveal>
        <Reveal as="span" line delay={240} style={{ display: "block" }}>
          <span>
            Meets{" "}
            <span
              style={{
                fontFamily: "var(--font-thunder-hc)",
                fontStyle: "italic",
                display: "inline-block",
              }}
            >
              Performance.
            </span>
          </span>
        </Reveal>
      </h2>

      <Reveal as="span" delay={520} aria-hidden="true" className="wyg-underline" style={{ display: "block" }}><span /></Reveal>

      <Reveal as="div" delay={680} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <p style={{ margin: 0, maxWidth: 520, textAlign: "center", fontFamily: "var(--font-nohemi)", fontSize: 16, lineHeight: 1.6, color: "rgba(33,33,33,0.7)" }}>
          Speed without polish loses trust. Polish without speed loses users. I ship work where both win.
        </p>
        <a
          href="#projects"
          data-cursor="hover"
          className="arrow-link wyg-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-nohemi)",
            fontWeight: 600,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--ink)",
            marginTop: 6,
          }}
        >
          See it in projects
          <span aria-hidden="true" className="wyg-arrow">↓</span>
        </a>
      </Reveal>
    </section>
  );
}
