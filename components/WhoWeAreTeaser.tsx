import Link from "next/link";
import { missionVision } from "@/lib/content";
import { ArrowRightIcon, CompassIcon, StarIcon } from "@/components/icons";

export function WhoWeAreTeaser() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Who we are
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            A social enterprise turning African ambition into impact
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
            {missionVision.intro}
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green-deep hover:text-indigo"
          >
            Learn more about us <ArrowRightIcon />
          </Link>
        </div>

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
          <div className="my-6 h-px bg-ink/10" />
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo text-white">
            <StarIcon />
          </span>
          <p className="mt-4 font-mono text-xs tracking-wider text-green-deep uppercase">
            Our vision
          </p>
          <p className="mt-3 font-display text-xl leading-snug font-medium text-ink">
            {missionVision.vision}
          </p>
        </div>
      </div>
    </section>
  );
}
