#!/usr/bin/env node
// Download chkstepan.com assets (images + fonts + favicons) to public/
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const ORIGIN = "https://chkstepan.com";
const ROOT = new URL("../public/", import.meta.url).pathname;

const IMAGES = [
  "/images/arrows/LongArrowWhite.svg",
  "/images/arrows/MainArrowBlack.svg",
  "/images/arrows/MainArrowGray.svg",
  "/images/arrows/MainArrowWhite.svg",
  "/images/brand/Logo.svg",
  "/images/brand/LogoDark.svg",
  "/images/footerExplosion/ProjectImage1.webp",
  "/images/footerExplosion/ProjectImage2.webp",
  "/images/footerExplosion/ProjectImage3.webp",
  "/images/footerExplosion/ProjectImage4.webp",
  "/images/footerExplosion/ProjectImage5.webp",
  "/images/footerExplosion/ProjectImage6.webp",
  "/images/footerExplosion/ProjectImage7.webp",
  "/images/footerExplosion/ProjectImage8.webp",
  "/images/footerExplosion/ProjectImage9.webp",
  "/images/icons/PlusDark.svg",
  "/images/other/FooterText.svg",
  "/images/other/Planet.svg",
  "/images/servicesOverview/DesignCardFirst.webp",
  "/images/servicesOverview/EngineeringCardSecond.webp",
  "/images/servicesOverview/StrategyCardThird.webp",
];

const NOHEMI = ["Thin", "ExtraLight", "Light", "Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Black"];
const THUNDER_WEIGHTS = ["Thin", "ExtraLight", "Light", "Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Black"];

const FONTS = [
  "/fonts/Dirtyline/Dirtyline-36daysoftype2022.woff2",
  ...NOHEMI.map((w) => `/fonts/Nohemi/Nohemi-${w}.woff2`),
  // Thunder LC + HC, normal + italic
  ...THUNDER_WEIGHTS.flatMap((w) => [
    `/fonts/Thunder/Thunder-${w}LC.woff2`,
    `/fonts/Thunder/Thunder-${w}LCItalic.woff2`,
    `/fonts/Thunder/Thunder-${w}HC.woff2`,
    `/fonts/Thunder/Thunder-${w}HCItalic.woff2`,
  ]),
];

const SEO = [
  { src: "/favicon.ico", dst: "/seo/favicon.ico" },
  { src: "/apple-icon.png", dst: "/seo/apple-icon.png" },
];

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function download(srcPath, dstPath) {
  const full = join(ROOT, dstPath);
  if (await exists(full)) { return { skipped: true, path: dstPath }; }
  await mkdir(dirname(full), { recursive: true });
  const url = `${ORIGIN}${srcPath}`;
  const res = await fetch(url);
  if (!res.ok) return { failed: true, path: dstPath, status: res.status };
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(full, buf);
  return { ok: true, path: dstPath, bytes: buf.length };
}

async function batched(items, n, fn) {
  const out = [];
  for (let i = 0; i < items.length; i += n) {
    const chunk = items.slice(i, i + n);
    out.push(...(await Promise.all(chunk.map(fn))));
  }
  return out;
}

const tasks = [
  ...IMAGES.map((p) => ({ src: p, dst: p })),
  ...FONTS.map((p) => ({ src: p, dst: p })),
  ...SEO,
];

const results = await batched(tasks, 6, (t) => download(t.src, t.dst));
const ok = results.filter((r) => r.ok).length;
const skipped = results.filter((r) => r.skipped).length;
const failed = results.filter((r) => r.failed);
console.log(`Downloaded: ${ok}, skipped: ${skipped}, failed: ${failed.length}`);
if (failed.length) console.log("Failed:", failed);
