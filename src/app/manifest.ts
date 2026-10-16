import type { MetadataRoute } from "next";
import { PROFILE } from "@/lib/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: PROFILE.name,
    short_name: "Dev Agarwalla",
    description: PROFILE.description,
    start_url: "/",
    display: "browser",
    background_color: "#212121",
    theme_color: "#212121",
    lang: "en-IN",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
