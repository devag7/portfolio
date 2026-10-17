import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Header } from "@/components/Header";
import { MenuOverlay } from "@/components/MenuOverlay";
import { IDENTITY, PROFILE, SITE } from "@/lib/profile";
import { structuredData } from "@/lib/structured-data";

// Only the weights the page uses: Thunder 800 and 900 for display, Nohemi 300 to 600 for text.
const thunderLC = localFont({
  src: [
    { path: "../../public/fonts/Thunder/Thunder-ExtraBoldLC.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/Thunder/Thunder-BlackLC.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-thunder-lc",
  display: "swap",
});

const nohemi = localFont({
  src: [
    { path: "../../public/fonts/Nohemi/Nohemi-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: PROFILE.title,
  description: PROFILE.description,
  applicationName: "Dev Agarwalla",
  authors: [{ name: PROFILE.name, url: SITE }],
  creator: PROFILE.name,
  keywords: ["Dev Agarwalla", "full-stack developer Bengaluru", "applied AI engineer", "DevShipIt", "JantaHR", "linkedin-mcp", "Next.js developer", "MERN developer", "freelance web developer Bangalore"],
  alternates: {
    canonical: "/",
    types: { "text/markdown": "/index.md" },
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Dev Agarwalla",
    title: PROFILE.title,
    description: PROFILE.description,
    locale: "en_IN",
    firstName: "Dev",
    lastName: "Agarwalla",
    username: "devagarwalla",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dev Agarwalla, full-stack and applied AI engineer in Bengaluru" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DevAgarwalla",
    creator: "@DevAgarwalla",
    title: PROFILE.title,
    description: PROFILE.description,
    images: ["/og.png"],
  },
  verification: { other: { "msvalidate.01": "4972657C4CF0F6777F0DFABF84005AE4" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "48x48" }, { url: "/icon.png", type: "image/png", sizes: "192x192" }],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#212121",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`lenis ${thunderLC.variable} ${nohemi.variable}`}>
      <head>
        <link rel="alternate" type="text/markdown" href="/index.md" title="This page as Markdown" />
        {IDENTITY.map((href) => <link key={href} rel="me" href={href} />)}
        <noscript>
          <style>{`.reveal, .reveal-line > * { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <LenisProvider>
          <div className="col-grid" aria-hidden="true" />
          <Header />
          <MenuOverlay />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
