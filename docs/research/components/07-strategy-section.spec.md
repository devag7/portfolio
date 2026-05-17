# Strategy Section Specification (intro + marquee + 5 sticky stripes)

## Overview
- **Target file:** `src/components/StrategySection.tsx` + `src/components/StrategyStripe.tsx` + `src/components/ChkMarquee.tsx`
- **Interaction model:** scroll-driven sticky stacking (5 stripes pin and stack); time-driven (marquee scroll).
- **Screenshot refs:** screenshots scroll=0–2100 showing "Strategy" eyebrow + huge "How I Approach Every Project?" + sage marquee strap + 5 layered slabs.

## DOM Structure
```
<section className="strategy" id="approach" data-bg="dark">
  <div className="intro">
    <p className="eyebrow">Strategy</p>
    <h2 className="display-h2">How I Approach<br/>Every Project?</h2>
    <SpinningBadge label="dev agarwalla · portfolio · " />
  </div>

  <ChkMarquee items={[
    'dev agarwalla', 'dev agarwalla', 'dev agarwalla', 'dev agarwalla', 'dev agarwalla'
  ]} separator="✦" />

  <div className="stripes-stack">
    <StrategyStripe num="01" title="Performance First" body="..." link="Learn more" bg="paper-soft" />
    <StrategyStripe num="02" title="Clean & Scalable Code" body="..." link="My workflow" bg="sage" />
    <StrategyStripe num="03" title="Modern UI & UX" body="..." link="View approach" bg="paper" />
    <StrategyStripe num="04" title="SEO & Best Practices" body="..." link="See details" bg="sage" />
    <StrategyStripe num="05" title="Reliable Delivery" body="..." link="How I work" bg="paper" />
  </div>
</section>
```

## Computed Styles

### Intro
- `.intro` — padding 120px clamp(20px, 4vw, 64px) 80px; display flex justify-content space-between align-items flex-start.
- `.eyebrow` — Nohemi 200 11.65px paper; not uppercased; not tracked.
- `.display-h2` — Thunder-LC 900 clamp(64px, 9vw, 130px); line-height 0.92; color `#FDFDFD`; text-transform uppercase; letter-spacing -0.01em; margin-top 16px.
- `SpinningBadge` — 140px circular SVG with text-on-path "dev agarwalla · portfolio · " (repeat). Rotates `@keyframes spin 20s linear infinite`.

### Marquee strap
- `.chk-marquee` — height 80px; background `#729E84`; color `#212121`; overflow hidden; display flex align-items center; font Thunder-LC 900 56px text-transform uppercase letter-spacing -0.01em.
- Track scrolls left at `@keyframes marquee 24s linear infinite`.
- Between each item, a small black circular "✦" or arrow node 56px diameter.

### Stripe (single)
- `.stripe` — height 360px; position sticky; top 0; display grid grid-template-columns 1fr; padding 56px clamp(20px, 4vw, 64px); display flex flex-direction column gap 16px; box-shadow none.
- `.stripe[data-bg="paper-soft"]` { background `#EBEDEC`; color `#212121`; }
- `.stripe[data-bg="paper"]` { background `#FDFDFD`; color `#212121`; }
- `.stripe[data-bg="sage"]` { background `#729E84`; color `#212121`; }
- `.stripe .title` — Thunder-LC 900 clamp(56px, 9vw, 124px) line-height 0.9 text-transform uppercase color `#212121`.
- `.stripe .body` — Nohemi 400 16px line-height 1.5 max-width 560px text-align center margin auto color `#212121`.
- `.stripe .link` — Nohemi 500 14px color `#212121`; display inline-flex gap 6px align-items center.
- `.stripe .ghost-num` — position absolute right clamp(20px,3vw,64px); top 50% translateY(-50%); font Thunder-LC 900 clamp(160px, 22vw, 360px); color rgba(33,33,33,0.08); pointer-events none; user-select none.

### Stack pin mechanics
- Each stripe is `position: sticky; top: 0;`. The parent `.stripes-stack` is a tall container (5 × 360px + some buffer = ~1800px tall).
- Because each stripe is sticky, the first pins at top, the second overtakes from below and covers most of the first leaving a ~80px peek, etc.
- Optionally add an additional `transform: scale(0.98)` per index to amplify the depth illusion.

## Behavior

### Stripe entrance
- On scroll, as each stripe pins, its `.ghost-num` slides from `translateX(40px)` to `0` and opacity 0.04 → 0.08.
- The peek band remaining visible above each pinned stripe is the previous stripe's top edge.

### Marquee + SpinningBadge
- Pure CSS animations; pause on `prefers-reduced-motion`.

## Per-state content
Five stripes — see `docs/research/CONTENT.md` Section 3 table for exact body text per stripe.

## Assets
- None beyond fonts.

## Responsive
- ≥1024px: as above, 360px stripe height.
- 640–1024px: stripe height 280px, ghost-num smaller.
- <640px: drop sticky behavior, stripes flow normally with 24px gap.

## Builder notes
- `position: sticky` requires a non-overflowing ancestor — make sure `body` and the section don't apply `overflow: hidden`.
- Wrap each `<StrategyStripe>` so the sticky offsets compound correctly (top 0 with stripe's own top padding).
- a11y: each title is `<h3>`. Use `aria-label` on ghost numerals (`aria-hidden`).
- Test with `prefers-reduced-motion: reduce` — disable marquee + ghost slide.
