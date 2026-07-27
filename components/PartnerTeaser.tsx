import Link from "next/link";
import { partnerAudiences } from "@/lib/content";
import { Chip } from "@/components/ui/Chip";
import { ArrowRightIcon } from "@/components/icons";

export function PartnerTeaser() {
  return (
    <section className="border-y border-ink/10 bg-parchment/50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
              Partnership
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Built for donor and institutional due diligence
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              NGOs, corporates, government agencies, and academic institutions
              all plug into the same trusted infrastructure.
            </p>
            <Link
              href="/partner"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-green-deep hover:text-ink"
            >
              See why organizations partner with us <ArrowRightIcon />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
            {partnerAudiences.map((audience) => (
              <Chip key={audience.title}>{audience.title}</Chip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
