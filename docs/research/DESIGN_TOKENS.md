# Design Tokens — chkstepan.com

Extracted from live site via Chrome DevTools getComputedStyle + @font-face inspection on 2026-05-17.

## Color Palette

### Core neutrals
| Name | Hex | RGB | Usage |
|---|---|---|---|
| `--ink` | `#212121` | rgb(33,33,33) | Primary dark. Body bg of hero, dark sections, CTA section bg outside cards, footer bg, button text on cream pill |
| `--paper` | `#FDFDFD` | rgb(253,253,253) | Primary light. Strategy slabs odd numbers, "What you get" header bg, footer wordmark text |
| `--paper-soft` | `#EBEDEC` | rgb(235,237,236) | Slightly muted off-white. Some stripe variants and the LET'S TALK pill background |
| `--muted` | `#494949` | rgb(73,73,73) | Body paragraph text on dark backgrounds, secondary labels |
| `--muted-ink-20` | `rgba(33,33,33,0.2)` | — | Horizontal divider lines, faint grid lines on dark sections |
| `--paper-25` | `rgba(253,253,253,0.25)` | — | Vertical column grid lines on dark sections |
| `--paper-47` | `rgba(253,253,253,0.467)` | — | Disabled / placeholder white |

### Brand accent
| Name | Hex | RGB | Usage |
|---|---|---|---|
| `--sage` | `#729E84` | rgb(114,158,132) | Signature accent. "WEBSITES" hero word, underline under "WORK", menu pill dot, Clean&Scalable Code stripe bg, hover marquee bars in menu |

### Case-study zone colors (each section bg)
| Name | Hex | RGB | Section |
|---|---|---|---|
| `--zone-design` | `#B69178` | rgb(182,145,120) | Design case-study slab (tan) |
| `--zone-engineering` | `#F27CA3` | rgb(242,124,163) | Engineering case-study slab (pink) |
| `--zone-strategy` | `#608FBA` | rgb(96,143,186) | Strategy case-study slab (cornflower) |

### Extras
| Name | Hex | RGB | Usage |
|---|---|---|---|
| `--periwinkle` | `#9E9EFF` | rgb(158,158,255) | Accent (text selection / highlight) |
| `--overlay-70` | `rgba(0,0,0,0.7)` | — | Modal/overlay scrim |

## Typography

### Font families (all self-hosted woff2)
| Family | Weights | Use |
|---|---|---|
| **Thunder-LC** (condensed display) | Thin–Black + italics | Massive display headlines: "I BUILD MODERN WEBSITES", "PERFORMANCE FIRST", "CLEAN & SCALABLE CODE", "CLARITY + PERFORMANCE", "DESIGN" / "ENGINEERING" / "STRATEGY" giant word, "READY TO BUILD…", footer "CHKSTEPAN" wordmark, menu items |
| **Thunder-HC** (high-contrast variant) | Thin–Black + italics | Specific accent weights / italics (e.g., the "PERFORMANCE" italic in "Clarity meets Performance") |
| **Nohemi** (geometric sans) | Thin (100) – Black (900) | All body text, metadata labels ("01 …"), nav labels, button labels, footer links, small caps labels ("Strategy", "About") |
| **Dirtyline** | Display brush face | Decorative occasional use (likely loader / accent — keep available) |

### Type scale — verified via getComputedStyle on live elements (1440px viewport)
| Token | px | weight | family | element verified | example |
|---|---|---|---|---|---|
| `--text-hero-sub` | **177.85px** | **900** | Thunder-LC | `h1.subTitle` | "That Work" hero line 2 |
| `--text-hero-main` | ~178px (same scale, per-letter spans) | 900 | Thunder-LC | `h1.mainTitle > spans` | "I Build Modern Websites" (the per-letter `WWW eee bbb…` triplication is the entrance scramble effect) |
| `--text-case-giant` | **227.64px** | **800** | Thunder-LC | `p.title` in `servicesOverview` | "DESIGN" / "ENGINEERING" / "STRATEGY" giant word |
| `--text-preloader-digit` | **200px** | **800** | Thunder-LC | `span.digit` in preloader | Preloader counter digits |
| `--text-menu-item` | **170.30px** | **800** | Thunder-LC | `a.menuItemLink` | "ABOUT / PROJECTS / CONTACT" menu items |
| `--text-menu-marquee` | **170.30px** | **800** | Thunder-LC | `span.marqueeText` | Sage hover marquee "MY JOURNEY", "RECENT WORK", "LET'S TALK" |
| `--text-stripe-title` | ~110–130px (estimate from visual) | 900 | Thunder-LC | strategy stripe `<h3>` | "PERFORMANCE FIRST" etc. (re-measure during spec phase) |
| `--text-display-banner` | ~clamp(160px, 18vw, 260px) | 900 | Thunder-LC | "CLARITY + PERFORMANCE" / CHKSTEPAN footer | full-bleed huge text |
| `--text-section-h2` | ~80–90px (estimate) | 900 | Thunder-LC | "How I Approach Every Project?", "What You Get When Clarity Meets Performance", "Ready To Build..." | re-measure during spec phase |
| `--text-body` | 16px / 1.5 | 400 | Nohemi | paragraphs | descriptions |
| `--text-body-sm` | 13px / 1.4 | 400 | Nohemi | metadata | "Local time", "© 2026 All Rights Reserved" |
| `--text-link` | 14px | 500 | Nohemi | inline links | "Learn more ↗", "My workflow ↗" |
| `--text-eyebrow` | **11.65px** | **200 (extra-light)** | Nohemi | `p.title` eyebrow | "Strategy", "About" labels — Title Case, **not** uppercase, **not** tracked |
| `--text-num-label` | 13px | 400 | Nohemi | small digit prefix | "01 / 02 / 03" before menu items + before stripe titles |
| `--text-button` | 14px / +0.04em / uppercase | 600 | Nohemi | pill buttons | "LET'S TALK", "MENU" |
| `--text-ghost-num` | ~360px | 900 | Thunder-LC | absolutely-positioned ghost numeral | The huge translucent "01..05" right-edge of strategy stripes |

### Letter-spacing & casing rules (verified)
- Thunder display headlines: `text-transform: uppercase` (applied via Thunder font glyphs being all-caps already), `letter-spacing: normal` (no tracking applied in computed styles)
- Nohemi eyebrows ("About" / "Strategy"): **Title Case as written** (NOT uppercased), weight 200, no tracking
- Pill buttons / "MENU": `text-transform: uppercase`, `letter-spacing: +0.04em`, weight 600
- Body Nohemi: normal case, default tracking, weight 400

## Spacing

Site uses an 8px base with frequent half-steps. Detected from gap/padding values across slabs.

| Token | px |
|---|---|
| `--space-1` | 4 |
| `--space-2` | 8 |
| `--space-3` | 12 |
| `--space-4` | 16 |
| `--space-5` | 20 |
| `--space-6` | 24 |
| `--space-8` | 32 |
| `--space-10` | 40 |
| `--space-12` | 48 |
| `--space-16` | 64 |
| `--space-20` | 80 |
| `--space-24` | 96 |
| `--space-32` | 128 |
| `--space-40` | 160 |

Container `.container` is a 12-column grid spanning ~1440px max with ~88px horizontal padding. Vertical column grid lines visible on dark sections at every column boundary.

## Radii

| Token | px | usage |
|---|---|---|
| `--radius-pill` | 9999 | MENU pill, LET'S TALK CTA button, awwwards/honors floating arrow on hover circle |
| `--radius-card` | 0 (no rounding) | Strategy slabs and case-study slabs are square-edged |

## Shadows

- Slabs do **not** carry box-shadow; depth is implied by stacking and z-order only.
- Buttons / pills: no shadow.
- Menu overlay: no shadow — flat white panel.

## Borders / Dividers

- 1px horizontal lines `rgba(33,33,33,0.2)` separate menu items inside overlay
- 1px horizontal line `rgba(253,253,253,0.2)` separates hero metadata row from headline
- Vertical column grid lines: 1px `rgba(253,253,253,0.08)` on dark sections, `rgba(33,33,33,0.06)` on light sections

## Motion tokens

| Token | value | usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default UI ease (Lenis-friendly) |
| `--ease-snap` | `cubic-bezier(0.65, 0, 0.35, 1)` | Slab transitions / menu open |
| `--dur-fast` | 200ms | hover color/transform |
| `--dur-med` | 400ms | button press, menu icon morph |
| `--dur-slow` | 800–1200ms | preloader counter, marquee restart |
| `--marquee-dur` | ~14s linear infinite | Strategy "chkstepan ✦" marquee + menu hover marquees |

Smooth scroll = **Lenis** (`html.lenis` class confirmed on root). No GSAP.

## Iconography
All icons are local SVGs in `public/images/arrows/` and `public/images/icons/`:
- `MainArrowBlack.svg`, `MainArrowWhite.svg`, `MainArrowGray.svg` — outbound arrow ↗ (used everywhere)
- `LongArrowWhite.svg` — long arrow inside marquee strap
- `PlusDark.svg` — the small `+` corner marks on the "What you get when clarity meets performance" container
- `Logo.svg` (light), `LogoDark.svg` (for light bgs) — CHK monogram in oval seal
- `Planet.svg` — globe shown in menu / awwwards badge
- `FooterText.svg` — vector path of the massive "CHKSTEPAN" word

## Layout / Canvas

- Page renders at a fixed-feel desktop canvas. There is no responsive breakpoint shift to mobile layout; the site shows a small "Only for devices wider than 320px!" warning at sub-320px, and otherwise scales the same composition.
- Page total height ≈ **9068px** at 1470w viewport (matches our 1440 target).
- Background grid: vertical column lines span entire scroll length behind content.
- Right edge: fixed vertical badge stack ("W." over "Honors") — links to awwwards profile.

## Notes for builder
- Use `next/font/local` to register Thunder-LC, Thunder-HC, Nohemi, Dirtyline pointing at `public/fonts/...`
- Default body font: Nohemi 400, color `--paper`, bg `--ink`.
- Display headlines use `Thunder-LC` weight 900 with `text-transform: uppercase` and `line-height: 0.85–0.9` (tight, to allow stacking).
- The "ghost" oversized numerals (01–05) on the strategy slabs are the same Thunder-LC weight 900 but at `color: rgba(33,33,33,0.08)` on light slabs and `rgba(253,253,253,0.06)` on dark slabs, positioned absolute right, vertically clipped by slab bounds.
