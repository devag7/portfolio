# Clarity Banner + Cross-Mask Reveal Specification

## Overview
- **Target file:** `src/components/ClarityBanner.tsx`
- **Interaction model:** scroll-driven (banner translateX + clip-path mask interpolation).
- **Screenshot refs:** screenshots at scroll 2800 (full-bleed CLARITY + PERFORMANCE) and 3500 (white cross-shape filling viewport).

## DOM Structure
```
<section className="clarity" data-bg="dark" data-cross-source>
  <div className="banner-track">
    <h2 className="banner-text">Clarity + Performance</h2>
    <h2 className="banner-text" aria-hidden="true">Clarity + Performance</h2>
  </div>
  <div className="cross-mask" aria-hidden="true" />
</section>
```

## Computed Styles
- `.clarity` — min-height 200vh; position relative; background `#212121`; overflow hidden; color `#FDFDFD`.
- `.banner-track` — position sticky; top 50%; transform translateY(-50%); display flex; white-space nowrap; will-change transform.
- `.banner-text` — font Thunder-LC 900 clamp(160px, 22vw, 260px); line-height 0.85; letter-spacing -0.02em; text-transform uppercase; margin 0 64px 0 0; color `#FDFDFD`.
- `.cross-mask` — position absolute inset 0; pointer-events none; background `#FDFDFD`.
  - Initial clip-path: `polygon(38% 0, 62% 0, 62% 38%, 100% 38%, 100% 62%, 62% 62%, 62% 100%, 38% 100%, 38% 62%, 0 62%, 0 38%, 38% 38%)` (a `+` shape at center, ~24% arm thickness).
  - Initial scale: 0 (so it's invisible).

## Behavior

### Phase A — banner horizontal drift
- Within the first 50% of `.clarity` scroll progress, the `.banner-track` translates `X` from `0` → `-50%` (so the second copy slides in from the right).

### Phase B — cross mask reveal
- During scroll progress 0.5 → 0.95, the `.cross-mask` interpolates:
  - `scale` from 0 → 1.6
  - The polygon clip-path *arms* widen from 24% thickness → 100% (effectively the cross fills out into a full rectangle as the arm width hits 100%).
- Implementation: compute two `clip-path` polygons (start cross, end full rect) and interpolate vertices via JS using `requestAnimationFrame` driven by scroll, OR cheat: animate `transform: scale()` of a cross-shaped SVG mask element from 0 → very large.
- Recommended approach: a single `<div>` with the cross polygon as `clip-path`, then animate its `transform: scale(x)` from 0 → 8. As it scales up, the cross shape grows past the viewport and covers everything.

### Phase C — exit to light
- At scroll progress ≥ 0.95, the next section (`WhatYouGet`) is fully visible behind the white cover.
- Hand off: `.cross-mask` becomes a solid white fill; next section underneath gets normal layout.

## Per-state styles
| Progress | banner-track tx | cross-mask scale |
|---|---|---|
| 0% | 0 | 0 |
| 50% | -50% | 0 |
| 75% | -50% | 4 |
| 100% | -50% | 8 |

## Assets
None.

## Responsive
- <768px: skip the cross animation; use a simple fade-cut from dark → light. Banner text scales naturally via clamp.

## Builder notes
- Use a scroll hook (e.g. `useScroll` from `framer-motion` is ideal here, or write a small custom hook with `IntersectionObserver` + `getBoundingClientRect`).
- Important: this section must NOT have `overflow: hidden` on a parent that would clip the cross.
- Pair with `prefers-reduced-motion`: if user prefers reduced motion, replace the animation with a static dark → light section divider.
