import { insights } from "@/lib/content";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { ExternalLinkIcon } from "@/components/icons";

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
              Insights
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-ink sm:text-4xl">
              Insights and opportunities that matter
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Funding calls, sector analysis, and enterprise news, published
              daily on Edfrica Media.
            </p>
          </div>
          <Button href="https://media.edfrica.org" external variant="secondary">
            View all insights
            <ExternalLinkIcon />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <a
              key={index}
              href={insight.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <ImageWithSkeleton
                  src={insight.photo}
                  alt={insight.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Chip tone="green">{insight.category}</Chip>
                <h3 className="mt-4 font-display text-lg leading-snug font-bold text-ink">
                  {insight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {insight.excerpt}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-[11px] tracking-wider text-green-deep uppercase">
                  Read on Edfrica Media
                  <ExternalLinkIcon className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
