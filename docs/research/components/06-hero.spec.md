# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx` (+ `WavesCanvas.tsx`)
- **Interaction model:** time-driven (waves canvas + counters), scroll-driven (parallax exit), reveal on mount.
- **Screenshot ref:** screenshot at scroll=0 — dark wavy bg, 3-stat row, 3-line headline, about block bottom-left.

## DOM Structure
```
<section className="hero" id="top" data-bg="dark">
  <WavesCanvas className="hero-bg" />
  <div className="hero-stats">
    <Stat value={3} suffix="+" label="Projects Shipped" />
    <Stat value={1} suffix="+" label="Years Building" />
    <Stat label="MERN · Next.js · TypeScript" />
  </div>
  <h1 className="hero-headline">
    <span className="line"><span className="word">I</span> <span className="word">Build</span> <span className="word">Modern</span> <span className="word sage">Websites</span></span>
    <span className="line"><span className="word">That</span> <span className="word underlined">Work</span></span>
  </h1>
  <div className="hero-about">
    <p className="label">About</p>
    <p>I'm a full-stack developer focused on building modern, fast, and reliable web applications. I care not only about how a site looks, but also about how it performs, scales, and feels for real users. From clean MERN-stack code to polished Next.js front-ends and secure APIs, I make sure every project is built with attention to detail and long-term quality in mind.</p>
    <a href="#approach" className="learn">Learn more <ArrowUpRightWhite/></a>
  </div>
</section>
```

## Computed Styles
- `.hero` — min-height 100vh; padding 88px clamp(20px, 4vw, 64px) 64px; position relative; overflow hidden; background `#212121`; color `#FDFDFD`.
- `.hero-bg` — absolute inset 0; z-index 0; pointer-events none.
- `.hero-stats` — display flex justify-content space-between; padding 24px 0; border-bottom 1px solid rgba(253,253,253,0.15); font Nohemi 400 13px; color rgba(253,253,253,0.7).
- `.hero-headline` — margin 24px 0 64px; font Thunder-LC 900 clamp(64px, 13vw, **178px**); line-height 0.9; letter-spacing -0.01em; text-transform uppercase; color `#FDFDFD`.
- `.hero-headline .line` — display block; overflow hidden (used as line-mask for reveal).
- `.hero-headline .word.sage` — color `#729E84`.
- `.hero-headline .word.underlined` — position relative.
- `.hero-headline .word.underlined::after` — content ''; position absolute; left 0; right 0; bottom -8px; height 5px; background `#729E84`; transform-origin left; transform scaleX(0); animation `underline 800ms 1.4s cubic-bezier(0.22,1,0.36,1) forwards`.
- `.hero-about` — position absolute bottom 64px left clamp(20px, 4vw, 64px); max-width 520px; display grid grid-template-columns 80px 1fr; gap 24px.
- `.hero-about .label` — font Nohemi 200 11.65px color paper; text-align right (to align right of "About" col).
- `.hero-about p:not(.label)` — font Nohemi 400 14px line-height 1.5; color rgba(253,253,253,0.7); text-align right (the live site right-aligns body of hero about — verified from screenshot).
- `.hero-about .learn` — display inline-flex align-items center gap 6px; margin-top 16px; font Nohemi 500 14px color paper; text-decoration none.

## States & Behaviors

### WavesCanvas
- A `<canvas>` rendering procedural curving vertical lines drifting horizontally.
- Each line is a sinusoidal path with amplitude clamped, period 200–400px, with noise-based perturbation.
- 140 lines distributed across viewport width; stroke `rgba(253,253,253,0.12)` width 1px.
- rAF loop advances a `t` offset that shifts the noise phase, creating breathing.
- Use a small `simplexNoise`/`improvedNoise` impl in a separate file (no heavy dep).
- Resize observer to handle window resize.

### Hero counters
- On first mount (or first visit per session), each `<Stat value>` counts from 0 to the target value over ~1.4s with `easeOutCubic`.

### Headline reveal
- Each `.line` is a `overflow: hidden` wrapper; its inner `.word` translates from `translateY(110%)` → `0` over 700ms cubic-bezier(0.22,1,0.36,1) with 80ms stagger per word per line.
- Fires after preloader fades.

### Scroll exit
- Parallax: as user scrolls, hero translates `Y(scrollY * 0.2)` for subtle depth. Use `useScroll` style hook or a passive scroll listener.

## Per-state content
N/A (single state).

## Assets
- Hero arrow inline icon (use `MainArrowWhite.svg` via `next/image`).

## Responsive
- ≥1280px: 3-column stats; about-block bottom-left absolute.
- 768–1279px: stats stay row; about-block becomes static below headline.
- <768px: stats stack vertically with `Years` and `Stack` smaller; headline clamp scales naturally; about-block full-width below.

## Builder notes
- Add `data-cursor="hover"` to `.learn`.
- The Waves canvas should pause when off-screen (`IntersectionObserver`).
- a11y: `<h1>` reads "I Build Modern Websites That Work."
