import { Button } from "@/components/ui/Button";
import { HeroCarousel, type HeroSlide } from "@/components/HeroCarousel";
import { StatsRow } from "@/components/StatsBar";
import { orgName } from "@/lib/content";

const slides: HeroSlide[] = [
  {
    photo: "/photos/hub-exterior.jpg",
    photoAlt: "The Edfrica Hub building exterior in Sokenu, Abeokuta",
  },
  {
    photo: "/photos/robotics-workshop.jpg",
    photoAlt: "A student-built robotics project from a TLab STEAM session",
  },
  {
    photo: "/photos/business-consulting.jpg",
    photoAlt: "An Edfrica consultant leading a business training session",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-indigo text-white">
      <HeroCarousel slides={slides} />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-28 pb-12 lg:px-8 lg:pt-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-green uppercase">
            {orgName} · Est. 2017
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            Turning African ambition{" "}
            <em className="text-green italic">into impact.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            A five-pillar ecosystem — media, enterprise, education,
            infrastructure, and social impact — equipping young Africans to
            lead and build, across all 15 ECOWAS and Alliance of Sahel States
            countries.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#ecosystem" variant="primary">
              Explore the Ecosystem
            </Button>
            <Button href="/partner" variant="outline-light">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 lg:px-8">
        <StatsRow tone="dark" className="border-t border-white/15 pt-8" />
      </div>
    </section>
  );
}
