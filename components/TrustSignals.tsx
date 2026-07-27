import { trustSignals } from "@/lib/content";
import { getIcon } from "@/components/iconRegistry";

export function TrustSignals() {
  return (
    <section
      id="trust"
      className="relative scroll-mt-24 overflow-hidden border-y border-ink/10 bg-parchment/40 py-24"
    >
      {/* Decorative dot field, echoing the reference layout's right-hand mark. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--ink) 22%, transparent) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 75% 50%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 75% 50%, #000 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Certifications
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
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
                    index < 2 ? "sm:border-b sm:border-ink/10" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
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
