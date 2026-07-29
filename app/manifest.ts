import type { MetadataRoute } from "next";
import { defaultDescription, siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Edfrica: Turning African Ambition Into Impact",
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16114b",
    lang: "en",
    icons: [
      {
        src: "/icon-mark.png",
        sizes: "320x320",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-square.jpeg",
        sizes: "447x447",
        type: "image/jpeg",
      },
    ],
  };
}
