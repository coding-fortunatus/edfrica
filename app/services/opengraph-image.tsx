import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica services: business support delivered end to end";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Services",
    title: "Business support, delivered end to end",
    subtitle:
      "Strategy, market assessments, financial modelling, compliance, access to finance and investment readiness.",
  });
}
