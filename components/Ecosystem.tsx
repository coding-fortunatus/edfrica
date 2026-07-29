import { pillars, type Pillar } from "@/lib/content";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";
import { Pattern } from "@/components/Pattern";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/iconRegistry";

const pillarIcons: Record<string, string> = {
  media: "megaphone",
  institute: "landmark",
  education: "graduation",
  infrastructure: "building",
  foundation: "globe",
};

const accent: Record<Pillar["tone"], string> = {
  green: "bg-green-deep",
  indigo: "bg-indigo",
  parchment: "bg-green-deep",
};

function PillarCard({ pillar, wide = false }: { pillar: Pillar; wide?: boolean }) {
  const externalProps = pillar.external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Visit ${pillar.name}, opens in a new tab`,
      }
    : { "aria-label": `Visit ${pillar.name}` };

  return (
    <a
      href={pillar.href}
      {...externalProps}
      className={`group relative flex overflow-hidden rounded-3xl border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:border-green-deep/30 hover:shadow-[0_28px_60px_-28px_rgba(22,17,75,0.45)] ${
        wide ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      {/* Contained image panel — full-bleed to the card edge, never floating. */}
      <div
        className={`relative shrink-0 overflow-hidden ${
          wide ? "aspect-video sm:aspect-auto sm:w-2/5" : "aspect-video"
        }`}
      >
        <ImageWithSkeleton
          src={pillar.photo}
          alt={pillar.photoAlt}
          fill
          sizes={wide ? "(min-width: 640px) 20vw, 90vw" : "(min-width: 1024px) 30vw, 90vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-indigo/25 transition-opacity duration-500 group-hover:opacity-0"
        />
        <span
          aria-hidden="true"
          className={`absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-lg ${accent[pillar.tone]}`}
        >
          <Icon name={pillarIcons[pillar.id] ?? "megaphone"} className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] tracking-[0.16em] text-green-deep uppercase">
          {pillar.role}
        </p>
        <h3 className="mt-2 font-display text-xl leading-tight font-bold text-ink">
          {pillar.navLabel}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          {pillar.tagline}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-ink/8 pt-5">
          <div className="min-w-0">
            <p className="font-mono text-base font-bold text-ink">
              {pillar.stat.value}
            </p>
            <p className="truncate text-[11px] text-ink/50">
              {pillar.stat.label}
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-all duration-300 group-hover:border-green-deep group-hover:bg-green-deep group-hover:text-white">
            {pillar.external ? (
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            ) : (
              <ArrowRightIcon className="h-3.5 w-3.5" />
            )}
          </span>
        </div>
      </div>
    </a>
  );
}

type EcosystemProps = {
  showDeepDiveLink?: boolean;
};

export function Ecosystem({ showDeepDiveLink = true }: EcosystemProps) {
  const topRow = pillars.slice(0, 3);
  const bottomRow = pillars.slice(3);

  return (
    <section
      id="ecosystem"
      className="relative scroll-mt-24 overflow-hidden bg-paper py-24"
    >
      <Pattern variant="weave" tone="light" anchor="right" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
              The Ecosystem
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-ink sm:text-4xl">
              Five pillars, one Edfrica
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              Each pillar is its own destination with its own team and roadmap.
              Step through to explore.
            </p>
          </div>
          {showDeepDiveLink && (
            <Button href="/ecosystem" variant="secondary">
              See what&rsquo;s inside each pillar
              <ArrowRightIcon />
            </Button>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topRow.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {bottomRow.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} wide />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
