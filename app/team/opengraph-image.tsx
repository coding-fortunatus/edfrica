import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica leadership and team";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Leadership",
    title: "The team behind the ecosystem",
    subtitle:
      "Directors, advisors and a management team running programming across five pillars.",
  });
}
