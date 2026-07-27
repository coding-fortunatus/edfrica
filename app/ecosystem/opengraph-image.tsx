import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "The Edfrica five-pillar ecosystem";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Our ecosystem",
    title: "Five pillars, one system",
    subtitle:
      "Media, Institute, Education (TLab), Infrastructure (The Hub) and Foundation — each feeding the next.",
  });
}
