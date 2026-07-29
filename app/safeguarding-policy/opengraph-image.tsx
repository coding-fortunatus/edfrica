import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica: Safeguarding & Child Protection";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Safeguarding & Child Protection",
    subtitle: "Our safeguarding commitments, including child protection on TLab.",
  });
}
