import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica — Privacy Policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "How we collect, use and protect personal data across the Edfrica ecosystem.",
  });
}
