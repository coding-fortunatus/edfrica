import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { WhoWeAreTeaser } from "@/components/WhoWeAreTeaser";
import { Ecosystem } from "@/components/Ecosystem";
import { PartnerTeaser } from "@/components/PartnerTeaser";
import { ClosingCta } from "@/components/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhoWeAreTeaser />
      <Ecosystem />
      <PartnerTeaser />
      <ClosingCta />
    </>
  );
}
