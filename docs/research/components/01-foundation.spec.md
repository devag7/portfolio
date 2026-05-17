# Foundation Specification

## Overview
- **Target files:** `src/app/layout.tsx`, `src/app/globals.css`, `src/lib/lenis.tsx`, `src/lib/clock.ts`, `src/components/icons.tsx`
- **Goal:** ship the global stylesheet (tokens, fonts, grid, Lenis init, base resets) so every page-level component has a solid floor.
- **Interaction model:** static (no behavior of its own beyond mounting Lenis).

## DOM Structure (layout.tsx)
```
<html lang="en" className="lenis">
  <body>
    <Providers> (LenisProvider + theme)
    <Preloader />     (first-mount only)
    <Cursor />        (always-on follower)
    <ChromeOverlay /> (header + AwwardsBadge fixed)
    {children}
  </body>
</html>
```

## Fonts (next/font/local)
Register 4 families from `public/fonts/`:
- **Thunder-LC** weights 100,200,300,500,600,700,800,900 (italic + normal). Skip Regular (404'd). CSS var: `--font-thunder-lc`.
- **Thunder-HC** same weights italic + normal. CSS var: `--font-thunder-hc`.
- **Nohemi** 100,200,300,400,500,600,700,800,900. CSS var: `--font-nohemi`.
- **Dirtyline** 400 normal. CSS var: `--font-dirtyline`.
All `display: swap`.

## CSS variables (globals.css)
Pull all tokens from `docs/research/DESIGN_TOKENS.md`. Required `:root` block:
```css
--ink: #212121; --paper: #FDFDFD; --paper-soft: #EBEDEC;
--muted: #494949; --sage: #729E84;
--zone-design: #B69178; --zone-engineering: #F27CA3; --zone-strategy: #608FBA;
--periwinkle: #9E9EFF;
--page-max: 1440px; --gutter: clamp(20px, 4vw, 88px);
--cols: 12; --col-line: rgba(253,253,253,0.08); --col-line-inv: rgba(33,33,33,0.06);
--ease-out: cubic-bezier(0.22, 1, 0.36, 1); --ease-snap: cubic-bezier(0.65, 0, 0.35, 1);
--dur-fast: 200ms; --dur-med: 400ms; --dur-slow: 800ms;
```
Body defaults: `background: var(--ink); color: var(--paper); font-family: var(--font-nohemi); font-size: 16px; line-height: 1.5;`

## Vertical column grid (background)
Render once as a fixed pseudo-layer behind all sections:
```css
.col-grid {
  position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(to right,
    transparent 0, transparent calc((100% / 12) - 1px),
    var(--col-line) calc((100% / 12) - 1px), var(--col-line) calc(100% / 12));
}
.on-light .col-grid { background-image: ... var(--col-line-inv) ... }
```

## Lenis init (`src/lib/lenis.tsx`)
Install `lenis`. Create a `<ClientLenis>` wrapper that mounts Lenis on first render with config `{ lerp: 0.1, smoothWheel: true }`. Add `class="lenis"` to `<html>` via Next's `html` attrs.

## Live clock (`src/lib/clock.ts`)
Export `useLocalTimeIST()` hook: returns `HH:MM` string updated each minute, computed in `Asia/Kolkata`. Used by hero, menu-foot, footer.

## Icons (src/components/icons.tsx)
Wrap downloaded SVGs as React components:
- `ArrowUpRightWhite` → `/images/arrows/LongArrowWhite.svg`
- `ArrowUpRightBlack` → `MainArrowBlack.svg`
- `ArrowUpRightGray` → `MainArrowGray.svg`
- `Plus` → `/images/icons/PlusDark.svg`
- `LogoMark` → `/images/brand/Logo.svg`
- `LogoMarkDark` → `/images/brand/LogoDark.svg`
- `GlobeMark` → `/images/other/Planet.svg`
- `FooterWordmark` → `/images/other/FooterText.svg`

All icons render via `<Image src ... />` from `next/image` with `priority` false except header logo.

## Build verification
After writing: `npm run build` must pass. Hero / sections still empty pages (just structure).
