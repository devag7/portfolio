import type { MetadataRoute } from "next";
import { PROJECTS, SITE } from "@/lib/profile";

/** One page, plus its real screenshots and code images as an image sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const images = [`${SITE}/og.png`, ...PROJECTS.flatMap((p) => (p.image ? [`${SITE}${p.image.src}`] : []))];
  return [{ url: `${SITE}/`, lastModified: new Date("2026-10-16T12:00:00+05:30"), changeFrequency: "monthly", priority: 1, images }];
}
