import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica — Cookie Policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Cookie Policy",
    subtitle: "How Edfrica uses cookies and similar technologies, and how to manage them.",
  });
}
