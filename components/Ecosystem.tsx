import { pillars, type Pillar } from "@/lib/content";
import {
  ArrowRightIcon,
  MegaphoneIcon,
  LandmarkIcon,
  GraduationCapIcon,
  Building2Icon,
  GlobeIcon,
} from "@/components/icons";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { AnnotationTag } from "@/components/AnnotationTag";
import { SketchArrow } from "@/components/SketchArrow";
import { Button } from "@/components/ui/Button";

const toneClasses: Record<Pillar["tone"], string> = {
  green: "border-green-deep/15 bg-mint text-ink",
  indigo: "border-white/10 bg-indigo text-white",
  parchment: "border-ink/10 bg-parchment text-ink",
};

const badgeClasses: Record<Pillar["tone"], string> = {
  green: "bg-green-deep text-white",
  indigo: "bg-white/15 text-green",
  parchment: "bg-indigo text-white",
};

const pillarIcons: Record<string, typeof MegaphoneIcon> = {
  media: MegaphoneIcon,
  institute: LandmarkIcon,
  education: GraduationCapIcon,
  infrastructure: Building2Icon,
  foundation: GlobeIcon,
};

function GatewayCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillarIcons[pillar.id] ?? MegaphoneIcon;

  return (
    <a
      href={pillar.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${pillar.name}, opens in a new tab`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-t-[2.25rem] rounded-b-xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${toneClasses[pillar.tone]}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-1.5 rounded-b-full bg-green-deep"
      />

      <div className="flex items-start justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${badgeClasses[pillar.tone]}`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span className="font-mono text-[11px] opacity-40">{pillar.number}</span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold">{pillar.role}</h3>
      <p className="mt-2 text-sm leading-relaxed opacity-80">{pillar.tagline}</p>

      <div className="mt-auto flex items-end justify-between pt-6">
        <div>
          <p className="font-mono text-lg font-semibold">{pillar.stat.value}</p>
          <p className="text-[11px] opacity-60">{pillar.stat.label}</p>
        </div>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:translate-x-0.5 ${
            pillar.tone === "indigo"
              ? "border-white/25 text-white/85"
              : "border-ink/15 text-ink/70"
          }`}
        >
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

type EcosystemProps = {
  showDeepDiveLink?: boolean;
};

export function Ecosystem({ showDeepDiveLink = true }: EcosystemProps) {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-paper py-24">
      <AmbientBackdrop tone="light" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          The Ecosystem
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">
          Five pillars, one Edfrica
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Each pillar is its own destination with its own team and roadmap.
          Step through to explore — every card opens the live platform in a
          new tab.
        </p>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 right-4 z-10 hidden flex-col items-end gap-1 lg:flex"
          >
            <AnnotationTag tone="green" rotate="right">
              5 live destinations
            </AnnotationTag>
            <SketchArrow variant="toGrid" className="h-12 w-12 text-green-deep" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar) => (
              <GatewayCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>

        {showDeepDiveLink && (
          <div className="mt-10">
            <Button href="/ecosystem" variant="secondary">
              See what&rsquo;s inside each pillar
              <ArrowRightIcon />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
