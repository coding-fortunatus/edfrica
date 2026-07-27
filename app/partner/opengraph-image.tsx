import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Partner with Edfrica";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Partnerships",
    title: "Partner with Edfrica",
    subtitle:
      "For NGOs, donors, corporates, government agencies and academic institutions scaling work across West Africa.",
  });
}
