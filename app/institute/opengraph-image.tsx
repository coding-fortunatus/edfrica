import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Edfrica Institute for Innovation & Enterprise";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "The Institute",
    title: "Innovation & enterprise support, ESO and ISO",
    subtitle:
      "Headquartered in Abeokuta, with a regional network across all 15 ECOWAS and Alliance of Sahel States countries.",
  });
}
