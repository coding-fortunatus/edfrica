import type { Metadata } from "next";
import { WhoWeAre } from "@/components/WhoWeAre";
import { OurStory } from "@/components/OurStory";

export const metadata: Metadata = {
  title: "About",
  description:
    "Edfrica's mission and story — a social enterprise turning African ambition into impact since 2017.",
};

export default function AboutPage() {
  return (
    <>
      <WhoWeAre />
      <OurStory />
    </>
  );
}
