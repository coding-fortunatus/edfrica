import { partnerAudiences } from "@/lib/content";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/components/iconRegistry";
import { ArrowRightIcon } from "@/components/icons";

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="scroll-mt-24 bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          Who We Serve
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">
          Partners we build with
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Built for donor and institutional due diligence — NGOs, corporates,
          government agencies, and academic institutions all plug into the same
          trusted infrastructure.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerAudiences.map((audience) => {
            const Icon = getIcon(audience.icon);
            return (
              <article
                key={audience.title}
                className="group relative aspect-4/5 overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1.5"
              >
                <ImageWithSkeleton
                  src={audience.photo}
                  alt={audience.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/50 to-ink/10"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {audience.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <Button href="/partner" variant="secondary">
            Partner with us
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}
