import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "The Edfrica Hub — co-working, training and event space in Abeokuta";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "The Hub",
    title: "Where the ecosystem meets",
    subtitle:
      "Co-working desks, training rooms, an event hall and an incubation bay in Sokenu, Abeokuta South LGA.",
  });
}
