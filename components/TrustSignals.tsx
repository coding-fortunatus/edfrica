import { trustSignals } from "@/lib/content";
import { getIcon } from "@/components/iconRegistry";

export function TrustSignals() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 border-y border-ink/10 bg-parchment/60 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          Trust &amp; Governance
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">
          De-risking your partnership
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Impact delivers the greatest value when it&rsquo;s built on a
          foundation of trust. Every credential below is documented and
          available for due diligence.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((signal) => {
            const Icon = getIcon(signal.icon);
            return (
              <div
                key={signal.title}
                className="flex items-start gap-4 rounded-3xl border border-ink/10 bg-paper p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-mono text-sm font-semibold tracking-wide text-ink">
                    {signal.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                    {signal.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
