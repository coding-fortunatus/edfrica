import { AboutTitlePage } from "@/components/about/AboutTitlePage";
import { Plate } from "@/components/about/Plate";
import { MissionVision } from "@/components/about/MissionVision";
import { Chronicle } from "@/components/about/Chronicle";
import { StatsBar } from "@/components/StatsBar";
import { TrustSignals } from "@/components/TrustSignals";
import { OurNetworks } from "@/components/OurNetworks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/about";
const title = "About Us: Our Story & Mission";
const description =
  "Edfrica's mission and story: a five-pillar social enterprise turning African ambition into impact, from Abeokuta outward since 2017.";

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
      <AboutTitlePage />
      <Plate
        src="/photos/edfrica-building.jpg"
        alt="The Edfrica building in Sokenu, Abeokuta"
        caption="The Edfrica Hub &mdash; Sokenu, off Nawarudeen Road, Abeokuta South."
        priority
      />
      {/* Anchor targets for the Company menu in the navbar. */}
      <MissionVision />
      <Chronicle />
      <Plate
        src="/photos/business-consulting.jpg"
        alt="An Edfrica consultant leading a business training session"
        caption="A business advisory session at the Hub."
      />
      <div id="impact" className="scroll-mt-24">
        <StatsBar />
        <TrustSignals variant="classical" />
        <OurNetworks variant="classical" />
      </div>
    </>
  );
}
