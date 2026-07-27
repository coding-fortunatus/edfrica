import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { WhoWeServe } from "@/components/WhoWeServe";
import { WhatWeDo } from "@/components/WhatWeDo";
import { SuccessStories } from "@/components/SuccessStories";
import { TrustSignals } from "@/components/TrustSignals";
import { TalentPipeline } from "@/components/TalentPipeline";
import { Insights } from "@/components/Insights";
import { ClosingCta } from "@/components/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <WhoWeServe />
      <WhatWeDo />
      <SuccessStories />
      <TrustSignals />
      <TalentPipeline />
      <Insights />
      <ClosingCta />
    </>
  );
}
