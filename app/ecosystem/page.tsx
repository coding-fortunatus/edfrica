import type { Metadata } from "next";
import Link from "next/link";
import { pillars } from "@/lib/content";
import { PillarDeepDive } from "@/components/PillarDeepDive";
import { EsoIsoSplit } from "@/components/EsoIsoSplit";
import { RegionalNetworkGrid } from "@/components/RegionalNetworkGrid";
import { TlabRankLadder } from "@/components/TlabRankLadder";

const extras: Record<string, React.ReactNode> = {
  institute: (
    <div className="flex flex-col gap-8">
      <EsoIsoSplit />
      <RegionalNetworkGrid />
    </div>
  ),
  education: <TlabRankLadder />,
};

export const metadata: Metadata = {
  title: "Our Five-Pillar Ecosystem",
  description:
    "A deep dive into Edfrica's five pillars — Media, Institute, Education (TLab), Infrastructure (The Hub), and Foundation — building youth entrepreneurship and STEAM innovation across Africa.",
  alternates: { canonical: "/ecosystem" },
};

export default function EcosystemPage() {
  return (
    <>
      <section className="bg-paper pt-16 pb-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            The ecosystem
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Five pillars, one Edfrica
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            Every pillar operates as its own platform with its own team and
            roadmap. Jump to any of them below, or scroll through the full
            picture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.id}
                href={`#${pillar.id}`}
                className="rounded-full border border-ink/15 px-4 py-2 font-mono text-xs tracking-wide text-ink/70 uppercase hover:border-green-deep hover:text-green-deep"
              >
                {pillar.number} — {pillar.role}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divide-y divide-ink/10">
        {pillars.map((pillar, index) => (
          <PillarDeepDive
            key={pillar.id}
            pillar={pillar}
            reversed={index % 2 === 1}
            tinted={index % 2 === 1}
            extra={extras[pillar.id]}
            priority={index === 0}
          />
        ))}
      </div>
    </>
  );
}
