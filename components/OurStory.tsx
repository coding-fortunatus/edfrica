import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { timeline } from "@/lib/content";

export function OurStory() {
  return (
    <section className="bg-parchment/40 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
              Our story
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              From a leadership conference to a five-pillar ecosystem
            </h2>

            <ol className="mt-12 flex flex-col">
              {timeline.map((entry, index) => (
                <li key={entry.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="h-3 w-3 shrink-0 rounded-full bg-green-deep" />
                    {index < timeline.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-ink/15" />
                    )}
                  </div>
                  <div className="pb-10">
                    <span className="inline-block rounded-full bg-indigo px-3 py-1 font-mono text-xs font-medium text-white">
                      {entry.year}
                    </span>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/75">
                      {entry.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
              <ImageWithSkeleton
                src="/photos/business-consulting.jpg"
                alt="An Edfrica consultant leading a business training session"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
