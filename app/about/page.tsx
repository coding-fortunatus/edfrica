import { WhoWeAre } from "@/components/WhoWeAre";
import { OurStory } from "@/components/OurStory";
import { StatsBar } from "@/components/StatsBar";
import { TrustSignals } from "@/components/TrustSignals";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/about";
const title = "About Us — Our Story & Mission";
const description =
  "Edfrica's mission and story — a five-pillar social enterprise turning African ambition into impact since 2017, from Abeokuta across all 15 ECOWAS and Alliance of Sahel States countries.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  socialTitle: "Our story, mission and impact",
});

const crumbs = [{ name: "About", path }];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            path,
            name: title,
            description,
            type: "AboutPage",
            crumbs,
          }),
          breadcrumbNode(crumbs),
        ])}
      />
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
