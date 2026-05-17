# CTA Section Specification

## Overview
- **Target file:** `src/components/CtaSection.tsx`
- **Interaction model:** static + entrance reveal; pill button hover.
- **Screenshot ref:** screenshot 10.06.36 — large "Ready to build something that actually works?" + sub + LET'S TALK pill.

## DOM Structure
```
<section className="cta" id="cta" data-bg="light">
  <h2 className="display-h2">Ready to Build Something<br/>That Actually Works?</h2>
  <p className="sub">Clear design, solid engineering, and focused strategy — working together as one system.</p>
  <a href="mailto:devagarwalla2016@gmail.com?subject=Project%20inquiry" className="pill" data-cursor="hover">
    Let's Talk
  </a>
</section>
```

## Computed Styles
- `.cta` — min-height 70vh; background `#FDFDFD`; color `#212121`; display flex flex-direction column align-items center justify-content center; gap 32px; padding clamp(80px, 12vh, 160px) clamp(20px, 4vw, 64px).
- `.display-h2` — font Thunder-LC 900 clamp(56px, 8vw, 100px); line-height 0.92; letter-spacing -0.01em; text-transform uppercase; text-align center; color `#212121`.
- `.sub` — font Nohemi 400 16px line-height 1.6; color rgba(33,33,33,0.7); max-width 520px; text-align center.
- `.pill` — display inline-flex align-items center; padding 18px 40px; background `#EBEDEC`; color `#212121`; font Nohemi 600 14px text-transform uppercase letter-spacing 0.04em; border-radius 9999px; text-decoration none; transition background 200ms ease-out, transform 200ms ease-out.
- `.pill:hover` — background `#DCDFDE`; transform scale(1.02).

## Behavior
- On enter viewport, translate the headline lines up 60→0 with 80ms stagger, opacity 0→1.
- Hover on pill increases custom-cursor scale (handled in Cursor).

## Responsive
- All sizing via clamp. No layout shift.

## Builder notes
- Use a real `mailto:` href so it works without JS.
- a11y: link text reads "Let's Talk" — descriptive.
