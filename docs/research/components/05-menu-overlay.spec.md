# Menu Overlay Specification

## Overview
- **Target file:** `src/components/MenuOverlay.tsx` (+ CSS module)
- **Interaction model:** click-driven (open/close), hover-driven (per-item marquee reveal), time-driven (marquee scroll once visible).
- **Screenshot ref:** the white panel with ABOUT / PROJECTS / CONTACT, moon, and sage-marquee bands seen in screenshots 10.04.42 PM, 10.04.49 PM, 10.04.54 PM, 10.04.58 PM, and the live extraction.

## DOM Structure
```
<div className="menu-wrap" aria-hidden={!open}>
  <div className="menu-panel" role="dialog" aria-modal="true" aria-label="Site menu">
    <nav aria-label="Primary">
      <a className="menu-item" href="#about" data-cursor="hover">
        <span className="num">01</span>
        <span className="label">About</span>
        <span className="marquee" aria-hidden="true">
          <span className="track">
            <span>My Journey</span><span className="arrow-dot"/>
            … (repeat ×8 for smooth loop)
          </span>
        </span>
      </a>
      <a className="menu-item" href="#projects">…02 / Projects / Recent Work</a>
      <a className="menu-item" href="mailto:devagarwalla2016@gmail.com">…03 / Contact / Let's Talk</a>
    </nav>
    <div className="menu-foot">
      <p className="bio">I'm a Bengaluru-based full-stack developer focused on building reliable web applications. I work across the MERN stack, Next.js, and TypeScript.</p>
      <Image className="moon" src="/images/other/Planet.svg" alt="" width={220} height={220} />
      <div className="contact">
        <a href="mailto:devagarwalla2016@gmail.com">devagarwalla2016@gmail.com</a>
        <span>Bengaluru, India</span>
        <div className="socials">
          <a href="https://github.com/devag7">github</a>
          <a href="https://linkedin.com/in/devagarwalla">linkedin</a>
        </div>
      </div>
      <span className="copy">©2026 All Rights Reserved</span>
      <span className="clock">Local time – <Clock /></span>
    </div>
  </div>
</div>
```

## Computed Styles
- `.menu-wrap` — fixed inset 0; bg `#FDFDFD`; z-index 998; visibility hidden when closed; pointer-events none when closed.
- `.menu-panel` — full viewport; padding-top 88px (clear header bar); display grid grid-template-rows `1fr auto`.
- `.menu-item` — display flex align-items center justify-content center; height calc(100vh / 4); position relative; color `#212121`; text-decoration none.
- `.menu-item .num` — Nohemi 200 13px paper, absolute left calc(50% - 200px); top 50%; translateY(-100%); margin-right 24px.
- `.menu-item .label` — Thunder-LC 800 **170.30px** color `#212121` letter-spacing -0.01em uppercase no transform (font is naturally tall).
- `.menu-item .marquee` — absolute inset 0; overflow hidden; bg `#729E84`; clip-path inset(100% 0 0 0); transition clip-path 400ms cubic-bezier(0.65,0,0.35,1).
- `.menu-item:hover .marquee` — clip-path inset(0 0 0 0).
- `.menu-item .marquee .track` — display flex align-items center gap 32px; white-space nowrap; animation `marquee 14s linear infinite`.
- `.marquee .track span:not(.arrow-dot)` — Thunder-LC 800 **170.30px** color `#FDFDFD`.
- `.arrow-dot` — 56px circle, bg `#212121`, contains an SVG `↗` (MainArrowWhite.svg).
- `.menu-foot` — grid 4-column (bio | moon | contact | legal); padding 32px clamp(20px, 4vw, 64px); border-top 1px solid rgba(33,33,33,0.2).

## Behavior
### Open
- Trigger: header MenuToggle click. State stored in Zustand (`useMenu()`).
- State A: `.menu-wrap { visibility: hidden; clip-path: inset(0 0 100% 0); }` (collapsed up).
- State B: `.menu-wrap { visibility: visible; clip-path: inset(0 0 0 0); }`.
- Transition: `clip-path 540ms cubic-bezier(0.65,0,0.35,1)`. After open: lock body scroll (`useLockBody()`), focus the first `.menu-item`.

### Close
- Trigger: click X toggle OR press Escape OR click an anchor (after smooth-scroll completes).
- Reverse the open animation. Restore body scroll. Move focus back to MenuToggle.

### Hover marquee
- CSS-only via `.menu-item:hover .marquee` (no JS).
- Marquee animation: `@keyframes marquee { to { transform: translateX(-50%); } }` with 8 copies for a smooth loop.

## Per-state content
| Item | num | label | marquee text | anchor |
|---|---|---|---|---|
| 1 | 01 | About | My Journey | `#about` |
| 2 | 02 | Projects | Recent Work | `#projects` |
| 3 | 03 | Contact | Let's Talk | `mailto:devagarwalla2016@gmail.com` |

## Assets
- `/images/other/Planet.svg` (moon)
- `/images/arrows/MainArrowWhite.svg` for arrow-dot

## Responsive
- ≥1024px: 3 items vertically centered, big.
- 768–1024px: items 100px font-size, moon 140px.
- <768px: items 64px font-size, menu-foot stacks to 2 columns then 1.

## a11y
- `role="dialog"` + `aria-modal="true"`.
- Trap focus while open.
- Escape closes.
