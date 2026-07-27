import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { missionVision } from "@/lib/content";
import { Pattern } from "@/components/Pattern";
import { CompassIcon, StarIcon } from "@/components/icons";

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-paper pt-16 pb-20">
      <Pattern variant="dots" tone="light" anchor="top" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
              Who we are
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
              A social enterprise turning African ambition into impact
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              {missionVision.intro}
            </p>
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
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-green-deep/15 bg-mint p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-deep text-white">
              <CompassIcon />
            </span>
            <p className="mt-4 font-mono text-xs tracking-wider text-green-deep uppercase">
              Our mission
            </p>
            <p className="mt-3 font-display text-xl leading-snug font-medium text-ink">
              {missionVision.mission}
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-parchment p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo text-white">
              <StarIcon />
            </span>
            <p className="mt-4 font-mono text-xs tracking-wider text-ink/60 uppercase">
              Our vision
            </p>
            <p className="mt-3 font-display text-xl leading-snug font-medium text-ink">
              {missionVision.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
