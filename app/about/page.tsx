import type { Metadata } from "next";
import { WhoWeAre } from "@/components/WhoWeAre";
import { OurStory } from "@/components/OurStory";

export const metadata: Metadata = {
  title: "About Us — Our Story & Mission",
  description:
    "Edfrica's mission and story — a five-pillar social enterprise turning African ambition into impact since 2017, from Abeokuta across all 15 ECOWAS and Alliance of Sahel States countries.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <WhoWeAre />
      <OurStory />
    </>
  );
}
