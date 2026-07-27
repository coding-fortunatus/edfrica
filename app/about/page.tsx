import type { Metadata } from "next";
import { WhoWeAre } from "@/components/WhoWeAre";
import { OurStory } from "@/components/OurStory";
import { StatsBar } from "@/components/StatsBar";
import { TrustSignals } from "@/components/TrustSignals";

export const metadata: Metadata = {
  title: "About Us — Our Story & Mission",
  description:
    "Edfrica's mission and story — a five-pillar social enterprise turning African ambition into impact since 2017, from Abeokuta across all 15 ECOWAS and Alliance of Sahel States countries.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Anchor targets for the Company menu in the navbar. */}
      <div id="mission-vision" className="scroll-mt-24">
        <WhoWeAre />
      </div>
      <OurStory />
      <div id="impact" className="scroll-mt-24">
        <StatsBar />
        <TrustSignals />
      </div>
    </>
  );
}
