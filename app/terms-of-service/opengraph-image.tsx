import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica: Terms of Service";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Terms of Service",
    subtitle: "The terms governing use of Edfrica's platforms and services.",
  });
}
