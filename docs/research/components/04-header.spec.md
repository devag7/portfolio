# Header / Chrome overlay Specification

## Overview
- **Target file:** `src/components/Header.tsx` (+ MenuToggle morphing button) + `src/components/AwwardsBadge.tsx`
- **Interaction model:** static layout; click-driven (MENU toggle); hover-driven (logo + badge).
- **Screenshot ref:** top-left CHK logo + top-right "MENU" pill with sage dot (see hero screenshots) + right-edge "W. Honors" vertical badge.

## DOM Structure
```
<header className="site-header">
  <a href="#top" className="brand" aria-label="Dev Agarwalla — Home">
    <Image src="/images/brand/Logo.svg" alt="" width={48} height={48} />
  </a>
  <button className="menu-toggle" aria-controls="site-menu" aria-expanded={open}>
    <span className="lbl">{open ? '' : 'MENU'}</span>
    <span className={`icon ${open ? 'opened' : ''}`}>
      <span className="bar" /><span className="bar" />
    </span>
  </button>
</header>

<aside className="awwards-badge" aria-label="Awwwards honors">
  <a href="https://www.awwwards.com/sites/chkstepan" target="_blank" rel="noopener noreferrer">
    <span className="w">W.</span>
    <span className="honors">Honors</span>
  </a>
</aside>
```

## Computed Styles
- `.site-header` — fixed top 0 left 0 right 0; padding 24px clamp(20px, 4vw, 64px); display flex justify-between align-items center; z-index 999; pointer-events none on container, all on children.
- `.brand` — width 48px height 48px, opacity 1 (on dark sections logo light; on light sections swap to LogoDark via state).
- `.menu-toggle` — display flex align-items center gap 12px; padding 14px 24px; border 0; bg `#EBEDEC`; color `#212121`; font Nohemi 600 14px uppercase letter-spacing 0.04em; border-radius 9999px; pointer-events all; transition bg 200ms, color 200ms, padding 320ms.
  - When `open`: bg `#729E84`; color `#FDFDFD`; padding shrinks to a circle (44×44); the `MENU` label fades out and the bars rotate into an X.
- `.icon .bar` — 14px × 1.5px white, transitions to X via `rotate(45deg)` / `rotate(-45deg)` and translateY.
- `.awwards-badge` — fixed right 0 top 50% translateY(-50%); width 28px; bg `#212121`; color `#FDFDFD`; padding 12px 0; display flex flex-direction column align-items center gap 16px; font Nohemi 600 12px uppercase letter-spacing 0.06em; z-index 999.
  - The "Honors" label is rotated 90° (writing-mode: vertical-rl).
  - On hover: background lightens to `#494949`, scale 1.04 transform-origin right center, transition 300ms ease-out.

## Behavior
### Logo color swap
- IntersectionObserver watches sections with `data-bg="light"`. While intersecting the viewport center, add `body.on-light` class. Header swaps Logo→LogoDark + menu pill colors invert.

### Menu open toggle
- Click toggle → set state `open=true` in a Zustand store or context.
- The morph: bars rotate to X over 320ms `cubic-bezier(0.65,0,0.35,1)`; bg color crossfades sage; padding shrinks.

### Scroll-trigger shrink
- After 100px scroll, header gains class `.scrolled`: padding-top reduces from 24px → 14px.

## Responsive
- Below 480px: hide "W. Honors" badge (`display: none`).

## Assets
- `/images/brand/Logo.svg`, `LogoDark.svg`.
- No Awwards icon — pure text.

## Builder notes
- Use `data-cursor="hover"` on the toggle + brand + badge for custom cursor scale-up.
- `aria-expanded` is the source of truth for the menu's open state.
- Don't reuse `<header>` for the menu overlay — it lives in its own portal.
