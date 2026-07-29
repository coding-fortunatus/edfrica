import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica: Data Protection Policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Data Protection Policy",
    subtitle: "Our data protection commitments under Nigeria's Data Protection Act.",
  });
}
