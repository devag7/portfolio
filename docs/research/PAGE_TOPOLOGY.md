# Page Topology — chkstepan.com (Overview /)

Extracted from live DOM at 1470px viewport on 2026-05-17. Total page height: **9068px**.

## Top-level structure

```
html.lenis
└── body
    ├── div#awwwards            (175px, ribbon-style honors callout, position: relative)
    ├── div.wrapper             (722px, viewport-pinned hero wrapper, position: fixed top — used as a stage)
    ├── div.screenWidthWarning  (display:none unless <320px wide)
    └── div.screenContent       (9068px tall — the actual scrolling document)
         └── div
             ├── header.container                         y=0    h=88    (logo + MENU pill)
             ├── div.container (hero content)             y=176  h=498   (metadata row + hero headline + about p)
             ├── div.waves                                y=0    h=712   (absolute canvas of generative wavy lines, behind hero)
             ├── div.stripesWrapper                       y=674  h=7795
             │    ├── div.backgroundStripes              y=674  h=7795   (absolute z=-2 — the 12-col vertical grid lines that span all sections)
             │    ├── div.container (strategy intro)     y=674  h=2104
             │    │     └── div.content
             │    │           ├── eyebrow "Strategy"
             │    │           ├── h2 "How I Approach Every Project?"
             │    │           ├── marquee strap "chkstepan ✦ chkstepan ✦ …"
             │    │           └── 5 stripe rows         (Performance First / Clean & Scalable Code / Modern UI & UX / SEO & Best Practices / Reliable Delivery)
             │    └── section.contentWrapper             y=2777 h=5691
             │          ├── div.stickyContainer          y=2777 h=2166   (the giant "CLARITY + PERFORMANCE" text + cross-mask reveal)
             │          └── div.afterMaskContent        y=4943 h=3525   (bg #FDFDFD — "What you get when clarity meets performance" + 3 case-study slabs + CTA)
             └── footer                                  y=8469 h=599    (footer columns + giant CHKSTEPAN wordmark)
```

## Fixed overlays (independent of scroll)

| Element | Purpose |
|---|---|
| `header.container` (z=999) | Top bar with CHK logo (top-left) + MENU pill (top-right). Stays fixed at top of viewport. |
| `aside / div` right-side badge stack (z=999) | Vertical "W." over "Honors" links — awwwards badge. Fixed to right edge, vertically centered. |
| `nav.menu` (z=999, bg `#FDFDFD`, h=100vh) | Full-screen white menu overlay. Hidden by default; revealed when MENU pill clicked. Contains ABOUT/PROJECTS/CONTACT, About paragraph, moon SVG, footer-mini info. |
| Cursor follower (small circle dot with "•") | A custom cursor element that follows mouse. Visible across all sections. |

## Section sequence (top → bottom)

### 1. Hero (y=0 → 712, dark)
- Top metadata row: "50+ Projects Completed | 5+ Years of Experience | 98.3/100 Average Performance Score" (counters animate up from 1+ on first load)
- Three-line oversized headline: "I BUILD MODERN [accent=sage]WEBSITES[/accent] THAT WORK" — "WORK" has sage underline
- Bottom-left: "About" eyebrow + paragraph + "Learn more ↗"
- Background: animated wavy line canvas (procedural lines)

### 2. Strategy intro (y=712 → ~960, dark)
- "Strategy" eyebrow (top-left)
- "How I Approach Every Project?" big headline (Thunder-LC ~110px)
- Right-side: rotating planet/globe badge ("chkstepan – Portfolio – chkstepan – Portfolio …") small circular wordmark

### 3. Marquee strap (y=~960 → ~1020, sage band)
- Horizontal marquee: "chkstepan ✦ chkstepan ✦ chkstepan ✦ chkstepan ✦ chkstepan ✦" repeating, sage `#729E84` background, ink text, scroll-left animation

### 4. Strategy stripes (y=~1020 → 2777, dark with light/sage slabs)
Five **layered horizontal slabs** that pin and stack as you scroll. Each slab has:
- Title left (Thunder-LC ~110px)
- Description center-right (Nohemi 16px)
- "Learn more ↗" link bottom-center
- Huge ghost numeral on right edge (Thunder-LC, translucent)

| # | Title | Bg | Numeral |
|---|---|---|---|
| 01 | PERFORMANCE FIRST | `#EBEDEC` light | 01 |
| 02 | CLEAN & SCALABLE CODE | `#729E84` sage | 02 |
| 03 | MODERN UI & UX | `#FDFDFD` paper | 03 |
| 04 | SEO & BEST PRACTICES | `#729E84` sage | 04 |
| 05 | RELIABLE DELIVERY | `#FDFDFD` paper | 05 |

The stripes pin at top of viewport and stack on top of each other (later ones push prior ones up but earlier ones remain partially visible behind). Implementation: `position: sticky; top: 0;` on each stripe, or a JS-driven pinning. Looks like CSS `position: sticky` with offsetting heights.

### 5. CLARITY + PERFORMANCE banner (y=2777 → ~4943, dark)
- Sticky container holding huge "CLARITY + PERFORMANCE" text (full-bleed, white on dark, scroll horizontally / scales)
- As you scroll, a **white plus/cross-shaped mask** grows from center and reveals the next light section. Effectively, a `clip-path` or SVG mask transitioning from a small `+` to filling the viewport, revealing the section behind.

### 6. "What You Get When Clarity Meets Performance" (y=4943 → ~5400, light `#FDFDFD`)
- Centered display headline (Thunder-LC weight 900, sized via clamp — measured ~80–90px on 1440 viewport)
- The word "PERFORMANCE" is rendered with **Thunder-HC italic** (high-contrast italic) for visual flourish — partial top-clipping is intentional
- Small `+` corner marks at four corners of an inset rectangle (decorative `PlusDark.svg`)
- Cursor target circle visible at center-bottom (it's the custom cursor follower passing through)

### 7. Three tilted case-study slabs (y=~5400 → 7795)
Each slab tilts at a slight angle (~3°) and the next slides up from below at the opposite tilt, creating a zig-zag. Each contains:
- Eyebrow numeral `01` / `02` / `03`
- Multi-line paragraph (Nohemi 16px, ink text on its color zone)
- Right-side caption label in parentheses (e.g., "(its intention)", "(every 2 weeks)", "(choosing the right problem)")
- Bottom-left: giant uppercase word ("DESIGN" / "ENGINEERING" / "STRATEGY") in Thunder-LC ghost grey
- Bottom-left: "Learn more ↗" link
- Right side: a meme/illustration image:
  - Design slab: bg `#B69178` tan, image = "Design thinking is… No it's not!" Batman-slap meme (`DesignCardFirst.webp`)
  - Engineering slab: bg `#F27CA3` pink, image = X-ray skull cracking head (`EngineeringCardSecond.webp`)
  - Strategy slab: bg `#608FBA` cornflower blue, image = "Two-buttons sweating man" decision meme (`StrategyCardThird.webp`)

### 8. CTA "Ready to build something that actually works?" (y=7795 → 8469, light)
- Centered headline (Thunder-LC ~80px)
- Subtitle (Nohemi 16px): "Clear design, solid engineering, and focused strategy — working together as one system."
- `LET'S TALK` pill button (Nohemi 600 uppercase, bg `#EBEDEC`, color ink, padding 18×40, fully rounded)

### 9. Footer (y=8469 → 9068, dark)
- Top row: contact column | sitemap column | socials column | legal column
- Below: massive `CHKSTEPAN` wordmark (full-bleed vector via FooterText.svg / `Thunder-LC` 900) — slightly tilted, partially clipped at bottom edge
- Floating dribbble screenshot mockup (small floating UI card showing chkstepan miniature) at bottom-right corner

## z-index map (approximate)
| Element | z |
|---|---|
| menu overlay | 999 |
| header bar | 999 |
| awwwards right-edge badge | 999 |
| custom cursor follower | 999998 |
| Cross-mask transition layer | ~10 |
| Strategy stripes (sticky) | ascending 1→5 |
| backgroundStripes (column grid) | -2 |

## Interaction model summary
- **Scroll-driven** stripe stacking (sticky pin)
- **Scroll-driven** clarity+performance → cross-mask → light section reveal
- **Click-driven** MENU open/close (overlay slide-in)
- **Hover-driven** menu item marquee reveal (horizontal sage band slides across when an item is hovered)
- **Time-driven** marquees (chkstepan strap, planet rotation, hover marquees once active)
- **Time-driven** preloader counter (1% → 100%, ~3s) on first load
- **Auto-scrolling** Lenis smooth scroll for the whole page
