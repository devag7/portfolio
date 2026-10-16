"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "./icons";
import { useLocalTimeIST } from "@/lib/clock";
import { Reveal } from "./Reveal";
import { EMAIL, LINKS, MAIN } from "@/lib/profile";

function handleMailto(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const subject = encodeURIComponent(fd.get("subject")?.toString() || "Project inquiry");
  const body = encodeURIComponent(
    `From: ${fd.get("name")} <${fd.get("email")}>\n\n${fd.get("message")}`
  );
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

export function ContactSection() {
  const time = useLocalTimeIST();

  return (
    <section id="contact" data-bg="dark" style={{ background: "var(--ink)", color: "var(--paper)", padding: "clamp(96px, 12vh, 160px) var(--gutter)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 80, alignItems: "end" }}>
        <Reveal as="h2" line style={{ margin: 0, fontFamily: "var(--font-thunder-lc)", fontWeight: 900, fontSize: "clamp(72px, 16vw, 220px)", lineHeight: 0.9, textTransform: "uppercase" }}>
          <span>Let&apos;s Talk.</span>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { k: "Email", v: <a href={`mailto:${EMAIL}`} style={{ color: "var(--sage)", textDecoration: "underline", textUnderlineOffset: 4 }}>{EMAIL}</a> },
            { k: "Based in", v: "Bengaluru, India" },
            { k: "Local time", v: time },
          ].map((row) => (
            <div key={row.k} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(253,253,253,0.18)", fontFamily: "var(--font-nohemi)", fontSize: 15 }}>
              <span style={{ opacity: 0.6 }}>{row.k}</span>
              <span>{row.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64 }}>
        <form onSubmit={handleMailto} style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field id="f-name" label="Name" type="text" autoComplete="name" required />
            <Field id="f-email" label="Email" type="email" autoComplete="email" required />
          </div>
          <Field id="f-subject" label="Subject" type="text" />
          <Field id="f-message" label="Message" type="textarea" required hint="What you need, when you need it, and a rough budget." />
          <p style={{ margin: 0, fontFamily: "var(--font-nohemi)", fontSize: 13, color: "rgba(253,253,253,0.7)" }}>Opens your email app with this message ready to send.</p>
          <button
            type="submit"
                        className="pill pill--paper"
            style={{ alignSelf: "flex-start" }}
          >
            Send message <ArrowUpRight />
          </button>
        </form>

        <aside style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <Block k="Elsewhere">
            <a href={MAIN} style={{ display: "block" }}>devshipit.com</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>linkedin.com/in/devagarwalla</a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>github.com/devag7</a>
            <a href={LINKS.npm} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>npm: linkedin-mcp-tools</a>
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>x.com/DevAgarwalla</a>
          </Block>
          <Block k="Freelance"><p style={{ margin: 0 }}>Websites and web apps for property agents, agencies and small businesses, through <a href={`${MAIN}/services/`} style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>DevShipIt</a>.</p></Block>
          <Block k="Replies"><p style={{ margin: 0 }}>Within 2 working days, usually sooner.</p></Block>
        </aside>
      </div>
    </section>
  );
}

function Block({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-nohemi)", fontSize: 14, lineHeight: 1.6 }}>
      <span style={{ opacity: 0.6, fontSize: 13 }}>{k}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>{children}</div>
    </div>
  );
}

function Field({ id, label, type, required, autoComplete, hint }: { id: string; label: string; type: string; required?: boolean; autoComplete?: string; hint?: string }) {
  const base = {
    background: "transparent",
    border: 0,
    borderBottom: "1px solid rgba(253,253,253,0.45)",
    color: "var(--paper)",
    fontFamily: "var(--font-nohemi)",
    fontSize: 16,
    padding: "12px 0",
    width: "100%",
  } as const;
  const name = id.replace("f-", "");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label htmlFor={id} style={{ display: "flex", gap: 6, alignItems: "baseline", fontFamily: "var(--font-nohemi)", fontWeight: 500, fontSize: 14 }}>
        <span>{label}</span>
        {required ? <span aria-hidden="true" style={{ color: "var(--sage)" }}>*</span> : null}
      </label>
      {type === "textarea" ? (
        <textarea id={id} name={name} required={required} aria-describedby={hint ? `${id}-hint` : undefined} style={{ ...base, minHeight: 140, resize: "vertical" }} />
      ) : (
        <input id={id} name={name} type={type} required={required} autoComplete={autoComplete} style={base} />
      )}
      {hint ? <span id={`${id}-hint`} style={{ fontFamily: "var(--font-nohemi)", fontSize: 13, color: "rgba(253,253,253,0.7)" }}>{hint}</span> : null}
    </div>
  );
}
