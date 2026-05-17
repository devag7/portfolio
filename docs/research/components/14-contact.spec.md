# Contact Section Specification (added)

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Interaction model:** form submit (client-side mailto fallback), static layout.
- **Source reference:** Portfolio.html lines 442–497.
- **Note:** Section IS additional to live chkstepan.com. For v1, we surface a mailto-based form (no backend) — keeps the brief honest with Dev's stack and avoids server work in this clone.

## DOM Structure
```
<section className="contact" id="contact" data-bg="dark">
  <div className="head">
    <h2 className="display-h2">
      <span className="line"><span>Let's</span></span>
      <span className="line"><span>Talk.</span></span>
    </h2>
    <div className="right">
      <span className="line"><span className="k">Email</span><a href="mailto:devagarwalla2016@gmail.com">devagarwalla2016@gmail.com</a></span>
      <span className="line"><span className="k">Based in</span>Bengaluru, India</span>
      <span className="line"><span className="k">Local time</span><Clock /></span>
    </div>
  </div>

  <form className="contact-form" onSubmit={handleMailto}>
    <div className="row">
      <div className="field"><label htmlFor="f-name"><span className="n">01</span><span>Name</span></label><input id="f-name" name="name" type="text" required/></div>
      <div className="field"><label htmlFor="f-email"><span className="n">02</span><span>Email</span></label><input id="f-email" name="email" type="email" required/></div>
    </div>
    <div className="field"><label htmlFor="f-subj"><span className="n">03</span><span>Subject</span></label><input id="f-subj" name="subject" type="text"/></div>
    <div className="field"><label htmlFor="f-msg"><span className="n">04</span><span>Message</span></label><textarea id="f-msg" name="message" required/></div>
    <button type="submit" className="send-btn">
      <span className="label">Send Message</span><ArrowRight/>
    </button>
  </form>

  <aside className="contact-side">
    <div className="blk">
      <div className="k">Elsewhere</div>
      <a href="https://github.com/devag7" target="_blank" rel="noopener noreferrer">github.com/devag7</a>
      <a href="https://linkedin.com/in/devagarwalla" target="_blank" rel="noopener noreferrer">linkedin.com/in/devagarwalla</a>
    </div>
    <div className="blk"><div className="k">Working with</div><p>Founders and small teams shipping production web apps — usually MERN, Next.js, or React.</p></div>
    <div className="blk"><div className="k">Response time</div><p>Usually within 24 hours, Mon–Fri IST.</p></div>
  </aside>
</section>
```

## Computed Styles
- `.contact` — background `#212121`; color `#FDFDFD`; padding clamp(96px, 12vh, 160px) clamp(20px, 4vw, 64px).
- `.head` — display grid grid-template-columns 1fr 1fr; gap 48px; margin-bottom 80px.
- `.head .display-h2` — Thunder-LC 900 clamp(96px, 16vw, 220px); line-height 0.9; text-transform uppercase; color `#FDFDFD`.
- `.head .display-h2 .line` — display block; overflow hidden.
- `.head .right` — display flex flex-direction column gap 16px; align-self end.
- `.head .right .line` — display flex justify-content space-between; padding 12px 0; border-bottom 1px solid rgba(253,253,253,0.18); font Nohemi 400 15px.
- `.head .right .k` — opacity 0.6.
- `.head .right a` — color `#729E84`; text-decoration none.
- `.contact-form` — display flex flex-direction column gap 24px; max-width 720px.
- `.contact-form .row` — display grid grid-template-columns 1fr 1fr; gap 24px.
- `.contact-form .field` — display flex flex-direction column gap 8px.
- `.contact-form label` — display flex gap 12px align-items baseline; font Nohemi 500 12px text-transform uppercase letter-spacing 0.08em; opacity 0.8.
- `.contact-form input, textarea` — background transparent; border 0; border-bottom 1px solid rgba(253,253,253,0.3); color `#FDFDFD`; font Nohemi 400 16px; padding 12px 0; outline none; transition border-color 200ms.
- `.contact-form input:focus, textarea:focus` — border-bottom-color `#729E84`.
- `.contact-form textarea` — min-height 140px; resize vertical.
- `.send-btn` — align-self flex-start; display inline-flex align-items center gap 12px; padding 16px 32px; background `#FDFDFD`; color `#212121`; border 0; border-radius 9999px; font Nohemi 600 14px text-transform uppercase letter-spacing 0.04em; cursor pointer; transition transform 200ms, background 200ms.
- `.send-btn:hover` — background `#729E84`; color `#FDFDFD`; transform scale(1.02).
- `.contact-side` — display grid grid-template-columns repeat(3,1fr); gap 32px; margin-top 64px; padding-top 32px; border-top 1px solid rgba(253,253,253,0.18).
- `.contact-side .blk` — display flex flex-direction column gap 8px; font Nohemi 400 14px line-height 1.6.
- `.contact-side .k` — opacity 0.6; text-transform uppercase; letter-spacing 0.06em; font-size 12px; margin-bottom 8px.
- `.contact-side a` — color `#FDFDFD`; text-decoration underline; text-decoration-thickness 1px; text-underline-offset 4px.

## Behavior

### Form submit (no backend)
```ts
function handleMailto(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const subject = encodeURIComponent(fd.get('subject')?.toString() || 'Project inquiry');
  const body = encodeURIComponent(`From: ${fd.get('name')} <${fd.get('email')}>\n\n${fd.get('message')}`);
  window.location.href = `mailto:devagarwalla2016@gmail.com?subject=${subject}&body=${body}`;
}
```

## Responsive
- ≤768px: `.head` and `.contact-side` collapse to 1 column; `.row` collapses to single column.

## a11y
- Real `<label htmlFor>` for every input.
- `aria-required="true"` on required fields (in addition to `required`).
- After submit, visually announce "Opening mail app…" via `aria-live` region.
