# Case Studies Section (3 tilted slabs) Specification

## Overview
- **Target files:** `src/components/CaseStudies.tsx` + `src/components/CaseStudySlab.tsx`
- **Interaction model:** scroll-driven entrance (each slab translates up + opacity); static thereafter.
- **Screenshot refs:** screenshots 10.06.16, 10.06.20, 10.06.27, plus my live scroll captures at 5600/6400/7200 showing the tilted color zones and meme images.

## DOM Structure
```
<section className="case-studies" data-bg="dark">
  <CaseStudySlab
    num="01"
    caption="(its intention)"
    body="I work closely with brands to craft thoughtful, scalable design systems built for long-term growth and consistency, translating ideas into structured and cohesive visual language from art direction and strong visual foundations to responsive interfaces and polished digital experiences that feel intuitive, refined, and built to evolve over time."
    giant="DESIGN"
    image="/images/servicesOverview/DesignCardFirst.webp"
    imageAlt="Batman slap meme — 'Design thinking is…' / 'No it's not!'"
    color="design"
    tilt="left"
  />
  <CaseStudySlab num="02" caption="(every 2 weeks)" giant="ENGINEERING" image="/images/servicesOverview/EngineeringCardSecond.webp" imageAlt="X-ray skull with screwdriver inserted — engineering humor" color="engineering" tilt="right" body="..." />
  <CaseStudySlab num="03" caption="(choosing the right problem)" giant="STRATEGY" image="/images/servicesOverview/StrategyCardThird.webp" imageAlt="Two-buttons sweating man meme — strategic decision making" color="strategy" tilt="left" body="..." />
</section>
```

## Computed Styles

### Section container
- `.case-studies` — background `#212121` (peeks between slabs); padding 0; display flex flex-direction column.

### Slab base
- `.slab` — min-height 80vh; position relative; padding clamp(80px, 12vh, 160px) clamp(20px, 4vw, 64px); display grid grid-template-columns 1fr 1fr; gap clamp(40px, 6vw, 96px); overflow hidden.
- Tilt: implement via `clip-path: polygon(...)` so the visible bounds are slanted ~3°. Example for tilt-left:
  ```
  clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%);
  ```
  For tilt-right: `polygon(0 0, 100% 4%, 100% 100%, 0 96%);`
  Adjust 4% → 6% on smaller viewports.

### Color zones
- `.slab[data-color="design"]` { background `#B69178`; color `#FDFDFD`; }
- `.slab[data-color="engineering"]` { background `#F27CA3`; color `#212121`; }
- `.slab[data-color="strategy"]` { background `#608FBA`; color `#FDFDFD`; }

### Text column (left)
- `.slab .text-col` — display flex flex-direction column gap 24px; align-self start; padding-top 40px.
- `.slab .num` — font Nohemi 400 13px; opacity 0.7.
- `.slab .body` — font Nohemi 400 16px line-height 1.55 max-width 480px.
- `.slab .giant` — font Thunder-LC 800 **227.64px** (clamp(96px, 16vw, 228px)); line-height 0.85; text-transform uppercase; letter-spacing -0.02em; margin-top auto.
  - Color = `currentColor` (so it inherits the per-slab text color: paper on tan + blue, ink on pink).
- `.slab .learn` — font Nohemi 500 14px; display inline-flex align-items center gap 6px.

### Image column (right)
- `.slab .img-col` — display flex flex-direction column align-items flex-end; gap 12px.
- `.slab .img-col img` — width clamp(280px, 32vw, 420px); height auto; border-radius 0; box-shadow 0 12px 40px rgba(0,0,0,0.18).
- `.slab .caption` — font Nohemi 400 13px; opacity 0.7; text-align right.

## Behavior

### Entrance reveal
- When slab enters viewport (`IntersectionObserver`, `rootMargin: -10%`), trigger:
  - `.body, .giant, .img-col` translateY from 60px → 0
  - opacity 0 → 1
  - duration 700ms ease-out, stagger 100ms

### Hover on image
- `.slab .img-col img:hover` — scale 1.02, transition 300ms ease-out.

## Per-state content
See `docs/research/CONTENT.md` Section 6 for body text and captions per slab.

## Assets
- `/images/servicesOverview/DesignCardFirst.webp` — tan slab meme
- `/images/servicesOverview/EngineeringCardSecond.webp` — pink slab x-ray
- `/images/servicesOverview/StrategyCardThird.webp` — blue slab two-buttons

## Responsive
- ≥1024px: 2-col grid as above.
- 640–1024px: stack to single column; image moves below text; giant word stays full-bleed; tilt reduces to 2%.
- <640px: drop tilt entirely (clip-path: none), keep stack layout, giant word clamp scales naturally.

## Builder notes
- The meme images have memey alt-text — use the descriptive alt above to be a11y-compliant rather than nondescript "Image".
- The "tilt" is geometric clip — text inside stays upright (no skewY) so contrast/readability isn't affected.
- Mark slabs with `data-bg="dark"` so the body's `.on-light` toggle doesn't fire here (they're colored, not light).
- Add `data-cursor="hover"` to the learn link + image.
