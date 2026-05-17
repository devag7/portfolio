# Custom Cursor Specification

## Overview
- **Target file:** `src/components/Cursor.tsx` (+ CSS module)
- **Interaction model:** time-driven (rAF mouse follower) + hover-driven scale.
- **Screenshot ref:** the small circle-with-center-dot visible across all screenshots.

## DOM Structure
```
<div className="cursor" aria-hidden="true">
  <span className="cursor-dot" />
</div>
```
Rendered as fixed top-layer in `<body>` (above everything except modals).

## Computed Styles
- `.cursor` — `position: fixed; top: 0; left: 0; width: 28px; height: 28px; border: 1px solid rgba(253,253,253,0.6); border-radius: 50%; pointer-events: none; z-index: 999998; transform: translate3d(0,0,0); will-change: transform; transition: transform 80ms linear, background-color 200ms, width 200ms, height 200ms;`
- `.cursor-dot` — `position: absolute; top: 50%; left: 50%; width: 3px; height: 3px; border-radius: 50%; background: rgba(253,253,253,0.8); transform: translate(-50%, -50%);`
- On light sections (`body.on-light .cursor`): border color `rgba(33,33,33,0.5)`, dot bg `rgba(33,33,33,0.8)`.

## Behavior
### Move
- On every `mousemove`, store `(x, y)` in a ref. Inside a rAF loop, lerp the cursor's translate towards target: `current += (target - current) * 0.18`.
- Set `transform: translate3d(currentX - 14px, currentY - 14px, 0)`.

### Hover scale
- When mouse enters an element with `data-cursor="hover"` (buttons, links, hover cards), add `.cursor-hover` class:
  - `width: 56px; height: 56px; background: rgba(114,158,132,0.15);` (sage tint)
- Leave → remove class.

### Visibility
- Hide on touch devices: `@media (hover: none) { .cursor { display: none; } }`.
- Hide when mouse leaves the viewport: `mouseleave` on window → `opacity: 0`.

## Responsive
- Desktop only. Below `pointer: coarse`, return `null` from component.

## Builder notes
- Use a single rAF loop, not setInterval.
- Do NOT add `transition: transform` on the element itself — the lerp does the smoothing.
- Make sure the cursor never blocks clicks: `pointer-events: none` is critical.
