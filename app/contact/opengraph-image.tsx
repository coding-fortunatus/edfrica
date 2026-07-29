import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Contact Edfrica";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Talk to the Edfrica team",
    subtitle: "Abeokuta, Ogun State, Nigeria · contact@edfrica.org",
  });
}
