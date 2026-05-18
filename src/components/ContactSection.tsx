"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "./icons";
import { useLocalTimeIST } from "@/lib/clock";
import { Reveal } from "./Reveal";

function handleMailto(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const subject = encodeURIComponent(fd.get("subject")?.toString() || "Project inquiry");
  const body = encodeURIComponent(
    `From: ${fd.get("name")} <${fd.get("email")}>\n\n${fd.get("message")}`
  );
  window.location.href = `mailto:devagarwalla2016@gmail.com?subject=${subject}&body=${body}`;
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
            { k: "Email", v: <a href="mailto:devagarwalla2016@gmail.com" style={{ color: "var(--sage)", textDecoration: "underline", textUnderlineOffset: 4 }}>devagarwalla2016@gmail.com</a> },
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
            <Field id="f-name" num="01" label="Name" type="text" required />
            <Field id="f-email" num="02" label="Email" type="email" required />
          </div>
          <Field id="f-subj" num="03" label="Subject" type="text" />
          <Field id="f-msg" num="04" label="Message" type="textarea" required />
          <button
            type="submit"
            data-cursor="hover"
            className="pill pill--paper"
            style={{ alignSelf: "flex-start" }}
          >
            Send Message <ArrowUpRight />
          </button>
        </form>

        <aside style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <Block k="Elsewhere">
            <a href="https://github.com/devag7" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>github.com/devag7</a>
            <a href="https://linkedin.com/in/devagarwalla" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>linkedin.com/in/devagarwalla</a>
            <a href="https://x.com/DevAgarwalla" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>x.com/DevAgarwalla</a>
            <a
              href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=devagarwalla"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 200,
                height: 32,
                marginTop: 12,
                padding: 7,
                borderRadius: 16,
                background: "#0A66C2",
                color: "#ffffff",
                fontFamily: '"SF Pro Text", Helvetica, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
                transition: "transform 240ms var(--ease-out), box-shadow 240ms var(--ease-out)",
                boxShadow: "0 4px 14px rgba(10, 102, 194, 0.35)",
              }}
            >
              Follow on LinkedIn
            </a>
          </Block>
          <Block k="Working with"><p style={{ margin: 0 }}>Founders and small teams shipping production web apps — usually MERN, Next.js, or React.</p></Block>
          <Block k="Response time"><p style={{ margin: 0 }}>Usually within 24 hours, Mon–Fri IST.</p></Block>
        </aside>
      </div>
    </section>
  );
}

function Block({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-nohemi)", fontSize: 14, lineHeight: 1.6 }}>
      <span style={{ opacity: 0.6, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>{k}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>{children}</div>
    </div>
  );
}

function Field({ id, num, label, type, required }: { id: string; num: string; label: string; type: string; required?: boolean }) {
  const base = {
    background: "transparent",
    border: 0,
    borderBottom: "1px solid rgba(253,253,253,0.3)",
    color: "var(--paper)",
    fontFamily: "var(--font-nohemi)",
    fontSize: 16,
    padding: "12px 0",
    outline: "none",
    width: "100%",
  } as const;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label htmlFor={id} style={{ display: "flex", gap: 12, alignItems: "baseline", fontFamily: "var(--font-nohemi)", fontWeight: 500, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.8 }}>
        <span>{num}</span>
        <span>{label}</span>
        {required ? <span style={{ color: "var(--sage)" }}>*</span> : null}
      </label>
      {type === "textarea" ? (
        <textarea id={id} name={id.replace("f-", "")} required={required} style={{ ...base, minHeight: 140, resize: "vertical" }} />
      ) : (
        <input id={id} name={id.replace("f-", "")} type={type} required={required} style={base} />
      )}
    </div>
  );
}
