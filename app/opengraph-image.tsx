import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica: turning African ambition into impact";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Social enterprise ecosystem",
    title: "Turning African Ambition Into Impact",
    subtitle:
      "Five pillars: media, institute, education, infrastructure and foundation, equipping young Africans to lead and build.",
  });
}
