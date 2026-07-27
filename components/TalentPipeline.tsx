import { Button } from "@/components/ui/Button";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { StatsRow } from "@/components/StatsBar";
import { ExternalLinkIcon } from "@/components/icons";
import { tlabRanks, type Stat } from "@/lib/content";

const talentStats: Stat[] = [
  { value: "200+", label: "Technical consultants" },
  { value: "20,000+", label: "MSMEs supported" },
  { value: "15-country", label: "Regional network" },
];

export function TalentPipeline() {
  return (
    <section
      id="talent"
      className="relative scroll-mt-24 overflow-hidden bg-indigo py-24 text-white"
    >
      <AmbientBackdrop tone="dark" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-green/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-green uppercase">
              Talent
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Building Africa&rsquo;s next builders
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              The pipeline starts young. TLab is a safe, gamified STEAM
              learning ecosystem for children aged 3 to 15 — fully COPPA and
              GDPR-K compliant — where learners earn XP and progress through
              five ranks.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              It feeds into the Institute&rsquo;s emerging-tech training in AI,
              IoT, cloud and data, and onward into a technical bench that
              delivers for MSMEs across the region.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {tlabRanks.map((rank, index) => (
                <li
                  key={rank}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase"
                >
                  <span className="text-green">{index + 1}</span>
                  {rank}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="https://tlab.edfrica.org" external variant="primary">
                Explore TLab
                <ExternalLinkIcon />
              </Button>
            </div>
          </div>

          <StatsRow
            stats={talentStats}
            tone="dark"
            align="center"
            className="rounded-3xl border border-white/12 bg-white/5 p-8 sm:grid-cols-3"
          />
        </div>
      </div>
    </section>
  );
}
