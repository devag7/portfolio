# Preloader Specification

## Overview
- **Target file:** `src/components/Preloader.tsx` (+ CSS module)
- **Interaction model:** time-driven, runs once per page-load, fades out at 100%.
- **Screenshot ref:** chkstepan.com on initial load — `<span class="digit" />` + `<span class="digitAbsolute" />` slot machine at bottom-right, counter `1%` → `100%`.

## DOM Structure
```
<div className="preloader" aria-hidden="true">
  <div className="pl-foot">
    <span>Dev Agarwalla — Portfolio 2026</span>
    <span>Loading…</span>
  </div>
  <div className="count" aria-live="polite">
    <span className="digit">{currentTens}</span>
    <span className="digitAbsolute">{nextTens}</span>
    <span className="digit">{currentOnes}</span>
    <span className="digitAbsolute">{nextOnes}</span>
    <span className="pct">%</span>
  </div>
</div>
```

## Computed Styles (verified from live)
- `.preloader` — fixed inset 0, bg `#212121`, z-index 9999, color `#FDFDFD`.
- `.pl-foot` — flex row, justify-between, position absolute bottom 24px left 24px right 24px, font-family Nohemi 13px weight 400 paper, opacity 0.6.
- `.count` — absolute bottom 24px right 24px, display flex, gap 0.
- `.count .digit, .digitAbsolute, .pct` — fontFamily `Thunder-LC`, fontSize **200px**, fontWeight **800**, lineHeight `200px`, color `#FDFDFD`.

## Behavior
- On mount, run a counter from 0 → 100 over ~3 seconds (eased ease-out).
- Each digit slot uses two stacked spans (`.digit` current, `.digitAbsolute` next) with `translateY` between `0` and `-100%` so the digit rolls upward when it ticks.
- At 100, set `data-state="done"` → CSS transitions: opacity 1→0 over 600ms, then unmount via `display:none` + `inert`.
- Show only on **first navigation** of the session (use `sessionStorage.preloader_played`).
- While active, set `body.style.overflow = 'hidden'`.

## States & Behaviors
### Digit roll
- **Trigger:** counter value changes.
- **State A:** `.digit { transform: translateY(0) }`, `.digitAbsolute { transform: translateY(100%) }`.
- **State B:** `.digit { transform: translateY(-100%) }`, `.digitAbsolute { transform: translateY(0) }`.
- **Transition:** `transform 320ms cubic-bezier(0.65,0,0.35,1)`. After transition end, swap labels so `.digit` becomes the new value.

### Fade out
- **Trigger:** counter reaches 100, wait 400ms.
- **State A:** `opacity: 1; pointer-events: auto`.
- **State B:** `opacity: 0; pointer-events: none`.
- **Transition:** `opacity 600ms ease-out`. Then unmount component.

## Assets
- None. Pure HTML/CSS.

## Responsive
- Desktop 1440px: digits 200px.
- ≤768px: scale via clamp(96px, 18vw, 200px).
- ≤390px: digits 96px, foot row stacks vertically.

## Builder notes
- Use `useEffect` with `requestAnimationFrame` for the count animation.
- IST clock not needed here.
- a11y: container `role="status"` + `aria-live="polite"` so SR users hear the loaded state.
