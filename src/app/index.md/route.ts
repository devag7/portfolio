import { pageMarkdown } from "@/lib/markdown";
import { SITE } from "@/lib/profile";

export const dynamic = "force-static";

export function GET() {
  return new Response(pageMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: `<${SITE}/>; rel="canonical"`,
      "X-Robots-Tag": "noindex",
      Vary: "Accept",
    },
  });
}
