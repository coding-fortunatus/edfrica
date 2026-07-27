import { Button } from "@/components/ui/Button";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { SketchArrow } from "@/components/SketchArrow";
import { StatsRow } from "@/components/StatsBar";
import { orgName } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-indigo text-white">
      {/* Full-bleed backdrop: photo, flat scrim, then a vertical gradient so
          the stats strip at the bottom stays legible. */}
      <div aria-hidden="true" className="absolute inset-0">
        <ImageWithSkeleton
          src="/photos/hub-exterior.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-indigo/80" />
        <div className="absolute inset-0 bg-linear-to-t from-indigo via-indigo/70 to-indigo/40" />
        <AmbientBackdrop tone="dark" />
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-green/12 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-28 pb-12 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-green uppercase">
            {orgName} · Est. 2017
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            Turning African ambition{" "}
            <em className="text-green italic">into impact.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            A five-pillar ecosystem — media, enterprise, education,
            infrastructure, and social impact — equipping young Africans to
            lead and build, across all 15 ECOWAS and Alliance of Sahel States
            countries.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="#ecosystem" variant="primary">
              Explore the Ecosystem
            </Button>
            <Button href="/partner" variant="outline-light">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 lg:px-8">
        <StatsRow
          tone="dark"
          align="center"
          className="border-t border-white/15 pt-8"
        />
        <a
          href="#ecosystem"
          className="mx-auto mt-6 hidden w-fit flex-col items-center gap-2 text-white/50 transition-colors hover:text-green lg:flex"
        >
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase">
            See the Ecosystem
          </span>
          <SketchArrow variant="scrollDown" dashed className="h-7 w-7" />
        </a>
      </div>
    </section>
  );
}
