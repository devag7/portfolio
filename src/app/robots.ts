import type { MetadataRoute } from "next";
import { MAIN, SITE } from "@/lib/profile";

/** Lists this site's sitemap and the devshipit.com sitemap, which also includes this page (cross-submission). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [`${SITE}/sitemap.xml`, `${MAIN}/sitemap.xml`],
  };
}
