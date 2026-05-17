import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { IntroOverlay } from "@/components/IntroOverlay";
import { GlobalMoon } from "@/components/GlobalMoon";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { MenuOverlay } from "@/components/MenuOverlay";

const thunderLC = localFont({
  src: [
    { path: "../../public/fonts/Thunder/Thunder-LightLC.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Thunder/Thunder-MediumLC.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Thunder/Thunder-SemiBoldLC.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Thunder/Thunder-BoldLC.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Thunder/Thunder-ExtraBoldLC.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/Thunder/Thunder-BlackLC.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/Thunder/Thunder-BlackLCItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-thunder-lc",
  display: "swap",
});

const thunderHC = localFont({
  src: [
    { path: "../../public/fonts/Thunder/Thunder-BlackHC.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/Thunder/Thunder-BlackHCItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-thunder-hc",
  display: "swap",
});

const nohemi = localFont({
  src: [
    { path: "../../public/fonts/Nohemi/Nohemi-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/Nohemi/Nohemi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Agarwalla — Full-Stack Developer · Bengaluru",
  description: "Software Engineer · Full Stack Developer (MERN, Next.js, React.js) · Building scalable web applications. Based in Bengaluru, India.",
  metadataBase: new URL("https://devagarwalla.dev"),
  openGraph: {
    title: "Dev Agarwalla — Full-Stack Developer",
    description: "Building modern, fast, and reliable web applications with the MERN stack and Next.js.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DevAgarwalla",
    creator: "@DevAgarwalla",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`lenis ${thunderLC.variable} ${thunderHC.variable} ${nohemi.variable}`}>
      <body>
        <a href="#top" className="skip-link">Skip to content</a>
        <LenisProvider>
          <div className="col-grid" aria-hidden="true" />
          <IntroOverlay />
          <GlobalMoon />
          <Cursor />
          <Header />
          <MenuOverlay />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
