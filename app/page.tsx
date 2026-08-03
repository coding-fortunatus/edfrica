import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { WhoWeServe } from "@/components/WhoWeServe";
import { WhatWeDo } from "@/components/WhatWeDo";
import { TrustSignals } from "@/components/TrustSignals";
import { OurNetworks } from "@/components/OurNetworks";
import { TalentPipeline } from "@/components/TalentPipeline";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { graph, pillarListNode, webPageNode } from "@/lib/schema";
import { defaultDescription, defaultTitle } from "@/lib/seo";
// Insights is built and ready — re-enable once real articles are available.
// See components/Insights.tsx and the `insights` array in lib/content.ts.
// import { Insights } from "@/components/Insights";

export default function Home() {
  return (
    <>
      {/* No breadcrumb on the homepage — it is the root of every trail. */}
      <JsonLd
        data={graph([
          webPageNode({
            path: "/",
            name: defaultTitle,
            description: defaultDescription,
          }),
          pillarListNode(),
        ])}
      />
      <Hero />
      <Ecosystem />
      <WhoWeServe />
      <WhatWeDo />
      <TrustSignals />
      <OurNetworks />
      <TalentPipeline />
      {/* <Insights /> */}
      <ClosingCta />
    </>
  );
}
