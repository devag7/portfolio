import type { MetadataRoute } from "next";
import { SITE } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE}/`, lastModified: new Date("2026-10-16"), changeFrequency: "monthly", priority: 1 }];
}
