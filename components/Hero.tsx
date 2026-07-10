import { Button } from "@/components/ui/Button";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { AnnotationTag } from "@/components/AnnotationTag";
import { SketchArrow } from "@/components/SketchArrow";
import { orgName } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-indigo text-white">
      <AmbientBackdrop tone="dark" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-green/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-green">
              {orgName} · Est. 2017
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
              Turning African ambition{" "}
              <em className="text-green italic">into impact.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              A five-pillar ecosystem — media, enterprise, education,
              infrastructure, and social impact — equipping young Africans to
              lead and build, across all 15 ECOWAS and Alliance of Sahel
              States countries.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <div className="relative inline-block">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 left-0 z-10 hidden flex-col items-start gap-1 lg:flex"
                >
                  <SketchArrow
                    variant="toButton"
                    className="h-10 w-14 rotate-180 text-green"
                  />
                  <AnnotationTag tone="green" rotate="right">
                    Start here
                  </AnnotationTag>
                </div>
                <Button href="#ecosystem" variant="primary">
                  Explore the Ecosystem
                </Button>
              </div>
              <Button href="/partner" variant="outline-light">
                Partner With Us
              </Button>
            </div>
          </div>

          <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
            <ImageWithSkeleton
              src="/photos/hub-exterior.jpg"
              alt="The Edfrica Hub building exterior in Sokenu, Abeokuta"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 z-10 hidden lg:block">
              <AnnotationTag tone="paper" rotate="left">
                The Hub · Abeokuta
              </AnnotationTag>
            </div>
          </div>
        </div>

        <a
          href="#ecosystem"
          className="pointer-events-auto absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-green lg:flex"
        >
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase">
            See the Ecosystem
          </span>
          <SketchArrow variant="scrollDown" dashed className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}
