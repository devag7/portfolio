import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    // The project's original Vercel address still serves this site; send people and crawlers to the real domain.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "dev-agarwalla-portfolio.vercel.app" }],
        destination: "https://me.devshipit.com/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      // Agents that ask for Markdown get the Markdown twin of the homepage (acceptmarkdown.com).
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "header", key: "accept", value: ".*text/markdown.*" }],
          destination: "/index.md",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          { key: "Vary", value: "Accept" },
          { key: "Link", value: '<https://me.devshipit.com/index.md>; rel="alternate"; type="text/markdown", <https://me.devshipit.com/llms.txt>; rel="describedby"' },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
