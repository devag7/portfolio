import { Plus } from "./icons";

export function WhatYouGet() {
  return (
    <section
      data-bg="light"
      style={{
        position: "relative",
        minHeight: "80vh",
        background: "var(--paper)",
        color: "var(--ink)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        <span style={{ display: "block" }}>What You Get</span>
        <span style={{ display: "block" }}>When Clarity</span>
        <span style={{ display: "block" }}>
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
      </h2>
    </section>
  );
}
