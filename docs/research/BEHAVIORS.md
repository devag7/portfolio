# Behaviors — chkstepan.com

Interaction sweep findings. These are the dynamic behaviors that must be reproduced for the clone to feel right.

## Global

### Smooth scroll: Lenis
- `html` element receives class `lenis` confirming Lenis library is mounted globally.
- Wheel events are translated to inertial scrolling with a slight ease.
- Recommended clone implementation: install `lenis` and mount it in a `<ClientLenis>` provider in the App Router root.

### Preloader (every navigation, ~3–5s)
- Bottom-right counter ticks from `1%` → `100%`. Each digit is **Thunder-LC weight 800, 200px**, color `#FDFDFD`, on `#212121`.
- Slot-machine roll: each digit slot animates by stacking `span.digit` (current) + `span.digitAbsolute` (next) and translating Y between them — verified in DOM.
- During preload, the rest of the page is hidden / masked.
- Once 100%, fades out and content "drops in" — hero metadata row counters then animate from `1+` up to their real values (`50+ / 5+ / 98.3/100`).

### Custom cursor
- A small circle with a centered dot follows the cursor across the page.
- Visible at all times. Has a subtle delay/easing (cursor catch-up).
- On hover over interactive elements, the circle scales slightly. (Not destructive if omitted in v1 but is part of the aesthetic.)

### Right-edge fixed badge "W. Honors"
- Vertical narrow black tab pinned to viewport right edge, vertically centered.
- "W." on top, "Honors" rotated 90° below.
- Links to chkstepan's awwwards profile.

## Hero

### Wavy line canvas background
- Canvas element rendering procedural curving vertical lines.
- Lines slowly drift / breathe (animated on rAF).
- Color: `rgba(253,253,253, ~0.15)` thin strokes over `#212121`.
- Clone implementation: a `<canvas>` with a simple sine-perlin curve generator running on requestAnimationFrame.

### Hero counters
- Three numbers in metadata row count up from `1` on first load (~1.2s ease-out).
- Final values: `50+`, `5+`, `98.3/100`.

### "WORK" sage underline
- The final word "WORK" (rendered as `h1.subTitle > .lineMask` "Work" at 177.85px Thunder-LC 900) carries a sage `#729E84` underline.
- The underline is **not** a `text-decoration` value (verified `text-decoration: none`). It is implemented as an absolutely-positioned `<div>` or `::after` pseudo-element placed under the word, ~4–6px tall, full-word-width.
- No hover effect on the headline itself.

## Strategy stripes — scroll-pinned stack

INTERACTION MODEL: **scroll-driven**, not click-driven.

### Mechanism
Five horizontal slab elements each have `position: sticky; top: 0;`. As the user scrolls, each slab pins to the top of the viewport, then the next slab scrolls up over it, partially covering the prior — creating a layered card-deck effect.

- Slab heights are roughly equal (~340–360px each visible band on landing).
- The "stickiness" allows the previous slab's top edge to remain visible at the top while the new slab consumes the rest of the viewport.
- Pixels of overlap when stacked: each slab covers the previous one by ~75–85% — only a thin band of the prior remains visible behind the new one's top edge.

### Variant: parallax oversize numeral
The huge "01 / 02 / 03 / 04 / 05" ghost numeral on the right edge of each slab is the slab's own background-text — not parallaxed independently. It is clipped by the slab bounds.

## Clarity + Performance → cross mask transition

INTERACTION MODEL: **scroll-driven**.

### Phase A: enter (dark)
- Section bg is `#212121`.
- A horizontally-overflowing "CLARITY + PERFORMANCE" Thunder-LC text scrolls fully into view as the user scrolls. The text is so wide it extends past viewport edges (only middle visible at any time).
- A subtle horizontal drift may apply.

### Phase B: cross mask reveal
- As the user continues scrolling, a white **plus/cross-shaped clip-path** appears at center of viewport.
- The cross expands until it fills the viewport, revealing the next section (`#FDFDFD` background) behind it.
- This is implemented via SVG mask or CSS `clip-path: polygon(...)` interpolated based on scroll progress (likely via `useScroll` + transform of clip values).
- Final state: full white viewport, ready for the "What you get…" header.

### Phase C: exit (light)
- Section transitions to light bg via the mask completion.
- The huge "WHAT YOU GET WHEN CLARITY MEETS PERFORMANCE" headline (with italic "PERFORMANCE") fades up.

## Case-study slabs — tilted slide-in

INTERACTION MODEL: **scroll-driven**.

### Tilt geometry
- Slab 1 (DESIGN, tan): top edge angled down ~3° left-to-right. Bottom edge angled up ~3°.
- Slab 2 (ENGINEERING, pink): tilts opposite — top edge up-left, slides in from below.
- Slab 3 (STRATEGY, blue): top edge angled the other way again, alternating zig-zag.
- Tilt achieved by `clip-path: polygon(...)` on each slab so its visible bounds are slanted, OR by `transform: skewY(-3deg)` on the wrapper with `skewY(3deg)` on content children to keep text upright.

### Enter animation
- As each slab enters viewport, its content (paragraph, giant word, image) translateY from ~80px → 0 with opacity 0 → 1, eased.
- Slabs do not pin/stick — they flow normally.

## "What you get" section

- Static layout, no on-scroll animation other than entrance fade.
- The four `+` plus-icon corner marks define a rectangular area where the headline sits — purely decorative.
- The italic "PERFORMANCE" word uses Thunder-HC italic; its letters are partially clipped at top — a deliberate cropped effect.

## CTA "Ready to build…" + LET'S TALK pill

- Centered display text with subtitle and pill button.
- Pill button hover: bg darkens slightly (~`#dadada` or scales 1.02). To verify on hover-test pass.

## Footer

- Footer columns are static.
- Below them, the huge "CHKSTEPAN" wordmark scrolls into view. It is slightly clipped at bottom (last 30–50px of glyphs cut off) by viewport / page end.
- A small floating dribbble card (chkstepan miniature mockup screenshot) sits at the bottom-right corner of the footer, slightly rotated — purely decorative.

## MENU overlay

### Open animation
- Click MENU pill → background morphs to green circle with white `×` (the bar icon rotates and reduces to an X).
- Full-bleed white panel slides in from the right OR fades in (visually it appears to be a fast crossfade with a subtle scale).
- Body scroll is locked while menu is open.

### Menu content (3 items) — verified
- Items are **center-aligned** horizontally, **not** left-aligned.
- Each item: `<a class="menuItemLink">` containing label in **Thunder-LC weight 800, 170.30px, color #212121** (verified via getComputedStyle).
- Numeric prefix `01 / 02 / 03` is positioned to the LEFT of each item baseline, Nohemi small.
- Below the 3 items: moon image (raster Moon, not Planet.svg), centered.
- Below moon: 4-zone footer-mini row (about paragraph | email+location | socials | privacy/©).

### Hover marquee
- On hovering an item, a **sage `#729E84` horizontal band** slides in covering the item's row.
- The band carries a marquee of repeating text: "My Journey ↗ My Journey ↗" for About, "Recent Work ↗" for Projects, "Let's Talk ↗" for Contact (Title Case as in source).
- Marquee text is `<span class="marqueeText">` Thunder-LC 800 **170.30px** color `#FDFDFD` (white on sage).
- Each marquee item carries a circular black arrow (`↗`) icon between repetitions.

### Bottom row inside menu
- Left: short About paragraph (4 lines of body text)
- Middle: a moon SVG (`Planet.svg` or similar — appears to be a high-detail moon raster)
- Right: contact email `chkstepan11@gmail.com` + location "Europe, Romania" + local time + socials (instagram, linkedin, dribbble)
- Bottom-left: `©2026 All Rights Reserved`
- Bottom-right: Local time clock "Local time – HH:MM" (live updating)

### Close
- Click `×` (the morphed menu button) → reverse animation, menu fades out.

## Responsive

- Site uses a **fixed desktop canvas** approach. There is no traditional mobile layout.
- At widths < 320px, a screen-warning overlay reads "Only for devices wider than 320px!".
- Between 320px and ~1440px, the same composition scales proportionally (via `clamp()` font sizing and percentage-based layouts).
- The clone should match: build at desktop, scale fluidly with `clamp()` and viewport units, do not redesign for mobile.

## Performance notes (relevant for clone fidelity)
- All images are `.webp` and lazy-loaded by Next/Image.
- All fonts are self-hosted woff2 with `font-display: swap`.
- The wavy canvas is the only continuous JS-driven animation; everything else is scroll-driven (cheap).
