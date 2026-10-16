# me.devshipit.com

Dev Agarwalla's personal site: experience, work, skills and contact. Products, case studies, prices and freelance services live on [devshipit.com](https://devshipit.com); this site links there instead of repeating them.

- Next.js 16 (App Router), deployed on Vercel from `main`.
- All content comes from one file, `src/lib/profile.ts`. The page, the JSON-LD (`src/lib/structured-data.ts`), `/llms.txt` and the Markdown twin `/index.md` all read from it, so they never drift apart.
- Agents can request the page as Markdown with `Accept: text/markdown` (rewrite in `next.config.ts`) or open `/index.md`.
- Search: `robots.ts`, `sitemap.ts`, `manifest.ts`, a ProfilePage + Person graph whose `@id` (`https://me.devshipit.com/#person`) devshipit.com also uses, and `og.png`.

```
npm ci
npm run dev       # http://localhost:3000
npm run check     # lint, typecheck and build
```

Rules: only real facts and numbers (each one is on LinkedIn or devshipit.com), one accent colour (sage), no em or en dashes in copy, and only Dev's own screenshots and code as images.
