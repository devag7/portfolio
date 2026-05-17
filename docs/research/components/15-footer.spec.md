# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static layout + live clock + giant wordmark scroll-reveal.
- **Screenshot refs:** screenshots 10.06.47 / 10.06.50 / 10.07.20 — 4-column row + giant CHKSTEPAN wordmark + floating dribbble-style card.

## DOM Structure
```
<footer className="footer" data-bg="dark">
  <div className="cols">
    <div className="col contact">
      <a href="mailto:devagarwalla2016@gmail.com">devagarwalla2016@gmail.com</a>
      <span>Bengaluru, India – <Clock /></span>
    </div>
    <nav className="col sitemap" aria-label="Footer sitemap">
      <a href="#top">Overview</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="col socials">
      <a href="https://github.com/devag7" target="_blank" rel="noopener noreferrer">github</a>
      <a href="https://linkedin.com/in/devagarwalla" target="_blank" rel="noopener noreferrer">linkedin</a>
      <a href="mailto:devagarwalla2016@gmail.com">email</a>
    </div>
    <div className="col legal">
      <a href="/privacy">Privacy Policy</a>
      <span>©2026 All Rights Reserved</span>
    </div>
  </div>

  <h2 className="wordmark" aria-hidden="true">DEVAGARWALLA</h2>

  <div className="card-float" aria-hidden="true">
    {/* small floating dribbble-style screenshot mockup */}
    <Image src="/images/footerExplosion/ProjectImage1.webp" alt="" width={220} height={140} />
  </div>
</footer>
```

## Computed Styles
- `.footer` — background `#212121`; color `#FDFDFD`; padding 64px clamp(20px, 4vw, 64px) 0; position relative; overflow hidden.
- `.cols` — display grid grid-template-columns 1fr 1fr 1fr 1fr; gap 32px; padding-bottom 48px; border-bottom 1px solid rgba(253,253,253,0.15); margin-bottom 24px.
- `.col` — display flex flex-direction column gap 12px; font Nohemi 400 14px.
- `.col a` — color `#FDFDFD`; text-decoration underline; text-decoration-thickness 1px; text-underline-offset 4px; transition opacity 200ms.
- `.col a:hover` — opacity 0.7.
- `.col.legal` — text-align right.
- `.wordmark` — font Thunder-LC 900 clamp(120px, 21vw, 320px); line-height 0.88; letter-spacing -0.02em; color `#FDFDFD`; text-align center; margin 0; padding 0 8px; transform translateY(2vh); /* slight bottom-clip illusion */; overflow visible.
- `.card-float` — position absolute right 40px bottom 40px; width 220px; aspect-ratio 4/3; box-shadow 0 24px 48px rgba(0,0,0,0.4); transform rotate(-4deg); border-radius 4px; overflow hidden; pointer-events none.

## Behavior
- `<Clock />` ticks every 60s in IST.
- The `.wordmark` enters with translateY 60px → 2vh on scroll.

## Responsive
- ≤1024px: `.cols` collapses to 2×2 grid.
- ≤640px: `.cols` collapses to single column with 16px gap; card-float drops to 120px width and moves to top-right of footer to avoid overlap.

## a11y
- Wordmark is `aria-hidden` so SR doesn't read "DEVAGARWALLA" out as text — it's purely decorative.
- Footer sitemap is a real `<nav aria-label="Footer sitemap">`.
- Social links carry `rel="noopener noreferrer"`.

## Builder notes
- We can use one of the `ProjectImage1-9.webp` files from `/public/images/footerExplosion/` (downloaded from chkstepan) as the floating preview card, OR render a screenshot of our own clone once built. For v1 use ProjectImage1.webp as placeholder.
- Add `data-cursor="hover"` to all anchor links.
