import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { WhoWeServe } from "@/components/WhoWeServe";
import { WhatWeDo } from "@/components/WhatWeDo";
import { TrustSignals } from "@/components/TrustSignals";
import { TalentPipeline } from "@/components/TalentPipeline";
import { ClosingCta } from "@/components/ClosingCta";
// Insights is built and ready — re-enable once real articles are available.
// See components/Insights.tsx and the `insights` array in lib/content.ts.
// import { Insights } from "@/components/Insights";

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <WhoWeServe />
      <WhatWeDo />
      <TrustSignals />
      <TalentPipeline />
      {/* <Insights /> */}
      <ClosingCta />
    </>
  );
}
