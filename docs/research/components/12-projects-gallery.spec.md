# Projects Gallery Specification (added section, from LinkedIn data)

## Overview
- **Target file:** `src/components/ProjectsGallery.tsx`
- **Interaction model:** static list with hover-reveal on row + scroll-into-view reveal.
- **Source reference:** Portfolio.html lines 320–361 (proj-row pattern) + LinkedIn projects data.
- **Note:** this section is NOT in live chkstepan.com but is needed for Dev's actual portfolio per user scope decision.

## DOM Structure
```
<section className="projects" id="projects" data-bg="light">
  <div className="head">
    <span className="meta">Selected projects (02)</span>
    <h2 className="display-h2">Crafted Projects.<br/>Real Results.</h2>
  </div>

  <div className="proj-list">
    <a className="proj-row" href="https://pastyy.run.place/" target="_blank" rel="noopener noreferrer" data-cursor="hover">
      <span className="name"><span className="idx">01</span>Pastyy</span>
      <span className="year">2025</span>
      <span className="cat">MERN · JWT · Google OAuth · Cloud Drive</span>
      <span className="live"><span>See live</span><ArrowUpRightBlack/></span>
    </a>
    <a className="proj-row" href="http://157.245.110.163:3009/" target="_blank" rel="noopener noreferrer">
      <span className="name"><span className="idx">02</span>RentWise</span>
      <span className="year">2025</span>
      <span className="cat">Next.js 15 · MongoDB · Tailwind · Real-estate</span>
      <span className="live"><span>See live</span><ArrowUpRightBlack/></span>
    </a>
  </div>

  <div className="proj-foot">
    <span>More on GitHub — github.com/devag7</span>
    <a className="see-all" href="https://github.com/devag7" target="_blank" rel="noopener noreferrer">
      <span>See all repositories</span><ArrowUpRightBlack/>
    </a>
  </div>
</section>
```

## Computed Styles
- `.projects` — background `#FDFDFD`; color `#212121`; padding clamp(96px, 12vh, 160px) clamp(20px, 4vw, 64px).
- `.head` — display grid grid-template-columns 1fr 2fr; gap 32px; margin-bottom 64px.
- `.head .meta` — Nohemi 400 13px; opacity 0.6.
- `.head .display-h2` — Thunder-LC 900 clamp(56px, 8vw, 110px); line-height 0.9; text-transform uppercase.
- `.proj-list` — display flex flex-direction column; border-top 1px solid rgba(33,33,33,0.18).
- `.proj-row` — display grid grid-template-columns 2fr 1fr 2fr 1fr; align-items center; padding 32px 0; border-bottom 1px solid rgba(33,33,33,0.18); text-decoration none; color `#212121`; transition background 200ms.
- `.proj-row:hover` — background rgba(33,33,33,0.04).
- `.proj-row .name` — Thunder-LC 800 40px; text-transform uppercase; display flex align-items baseline gap 16px.
- `.proj-row .idx` — Nohemi 400 13px opacity 0.6 vertical-align top.
- `.proj-row .year, .cat` — Nohemi 400 14px opacity 0.7.
- `.proj-row .live` — Nohemi 500 14px display inline-flex align-items center gap 6px justify-self end.
- `.proj-foot` — display flex justify-content space-between; padding-top 32px; font Nohemi 400 14px.

## Per-state content (from LinkedIn)
| idx | Name | Year | Category | Description (tooltip on hover or expanded) |
|---|---|---|---|---|
| 01 | **Pastyy** | 2025 | Full-Stack · MERN · JWT | Collaborative cloud storage and file-sharing platform with secure authentication, team-based file management, responsive UI, and modern full-stack architecture for seamless document collaboration. |
| 02 | **RentWise** | 2025 | Next.js 15 · MongoDB · Tailwind | Full-stack real estate platform built with Next.js 15, React.js, Node.js, MongoDB, and Tailwind CSS — secure authentication, advanced property filtering, REST APIs, and responsive UI architecture. |

## Behavior
- On scroll into view: each `.proj-row` translateY 40px → 0 with 80ms stagger.
- On hover row: arrow icon translates 4px right + bg lightens.

## Responsive
- ≤768px: rows collapse to 2-column grid (name + arrow on top; year+cat on bottom).

## Builder notes
- Links target user's actual GitHub since live demo URLs not provided in LinkedIn data — surface this honestly ("See code" not "See live").
- If user later provides live URLs, swap the hrefs.
- a11y: each row is a single `<a>` with descriptive text content.
