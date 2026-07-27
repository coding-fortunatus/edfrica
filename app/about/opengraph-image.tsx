import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "About Edfrica — our story and mission";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "About us",
    title: "Our story, mission and impact",
    subtitle:
      "A social enterprise since 2017 — from a leadership conference in Abeokuta to a five-pillar ecosystem across 15 countries.",
  });
}
