# "What You Get" Header Specification

## Overview
- **Target file:** `src/components/WhatYouGet.tsx`
- **Interaction model:** static layout with on-enter reveal.
- **Screenshot ref:** screenshot at scroll 4300 — large centered headline with italic "PERFORMANCE", 4 corner `+` marks.

## DOM Structure
```
<section className="what-you-get" data-bg="light">
  <span className="plus tl"><Plus/></span>
  <span className="plus tr"><Plus/></span>
  <h2 className="display-h2">
    <span>What You Get</span><br/>
    <span>When Clarity</span><br/>
    <span>Meets</span> <span className="italic">Performance.</span>
  </h2>
  <span className="plus bl"><Plus/></span>
  <span className="plus br"><Plus/></span>
</section>
```

## Computed Styles
- `.what-you-get` — min-height 80vh; background `#FDFDFD`; color `#212121`; display flex flex-direction column align-items center justify-content center; position relative; padding clamp(80px, 12vh, 160px) clamp(20px, 4vw, 64px).
- `.plus` — position absolute; width 16px; height 16px; display inline-block.
- `.plus.tl` { top 64px; left 64px; }
- `.plus.tr` { top 64px; right 64px; }
- `.plus.bl` { bottom 64px; left 64px; }
- `.plus.br` { bottom 64px; right 64px; }
- `.display-h2` — font Thunder-LC 900 clamp(64px, 9vw, 130px); line-height 0.9; letter-spacing -0.01em; text-transform uppercase; text-align center; color `#212121`.
- `.display-h2 .italic` — font Thunder-HC 900 italic; clip-path `inset(8% 0 0 0)` (the intentional top-clip flourish).

## States & Behaviors

### Entrance reveal
- IntersectionObserver triggers `.in-view` on the section.
- Each `.display-h2 > span` (line wrapper) is wrapped in `overflow: hidden`; inner content translateY 100% → 0 over 600ms with 100ms stagger per line.

## Assets
- `/images/icons/PlusDark.svg` — the corner `+` marks.

## Responsive
- ≤768px: plus marks move closer to viewport corners (32px insets); h2 clamp drops to ~56px lower bound.

## Builder notes
- Wrap each line span in a `.line-mask { overflow: hidden; display: block; }` for the reveal.
- The italic "Performance." uses Thunder-HC which has a high-contrast italic cut — verify the @font-face entry is loaded.
