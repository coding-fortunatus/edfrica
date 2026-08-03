import { trustSignals } from "@/lib/content";
import { getIcon } from "@/components/iconRegistry";
import { Pattern } from "@/components/Pattern";
import { SectionMark } from "@/components/about/SectionMark";

/**
 * The About page's treatment: no icon medallions, no pattern, credentials as
 * ruled label/value rows. The homepage keeps the default.
 */
function ClassicalTrustSignals() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 bg-parchment/50 px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionMark>Credentials</SectionMark>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-[1.2] font-normal text-ink sm:text-4xl">
          De-risking your partnership
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
          Impact delivers the greatest value when it&rsquo;s built on a
          foundation of trust, compliance, and operational discipline. Our
          credentials let partners move faster with reduced risk.
        </p>

        <dl className="mt-12 border-t border-ink/12">
          {trustSignals.map((signal) => (
            <div
              key={signal.title}
              className="grid gap-1 border-b border-ink/12 py-6 sm:grid-cols-[18rem_1fr] sm:gap-10"
            >
              <dt className="font-display text-lg font-bold text-ink">
                {signal.title}
              </dt>
              <dd className="max-w-xl text-base leading-relaxed text-ink/65">
                {signal.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function TrustSignals({
  variant = "default",
}: {
  variant?: "default" | "classical";
}) {
  if (variant === "classical") return <ClassicalTrustSignals />;

  return (
    <section
      id="trust"
      className="relative scroll-mt-24 overflow-hidden border-y border-ink/10 bg-parchment/40 py-24"
    >
      {/* Contour lines on the right, echoing the reference layout's mark. */}
      <Pattern
        variant="contour"
        tone="light"
        anchor="right"
        className="hidden lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Certifications
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            De-risking your partnership
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            Impact delivers the greatest value when it&rsquo;s built on a
            foundation of trust, compliance, and operational discipline. Our
            credentials let partners move faster with reduced risk.
          </p>

          <div className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {trustSignals.map((signal, index) => {
              const Icon = getIcon(signal.icon);
              return (
                <div
                  key={signal.title}
                  className={`flex items-start gap-4 py-6 ${
                    // Everything except the final two-column row carries a rule.
                    index < trustSignals.length - 2
                      ? "sm:border-b sm:border-ink/10"
                      : ""
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {signal.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {signal.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
