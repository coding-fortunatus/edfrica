import { networks } from "@/lib/content";
import { Pattern } from "@/components/Pattern";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";

export function OurNetworks() {
  return (
    <section
      id="networks"
      className="relative scroll-mt-24 overflow-hidden bg-paper py-20"
    >
      <Pattern variant="waves" tone="light" anchor="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Our networks
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            We don&rsquo;t work alone
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            Membership of these networks is how our reach extends past our own
            programmes, from Nigeria&rsquo;s innovation hubs to partners across
            Africa and Europe.
          </p>
        </div>

        <ul className="mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {networks.map((network) => (
            <li
              key={network.name}
              className="rounded-2xl border border-ink/10 bg-parchment/40 p-5 text-center"
            >
              {/* The marks are transparent artwork with dark ink, and the ISN
                  source carries a white background — a white plate keeps all
                  three legible in either theme. */}
              <div className="flex h-24 items-center justify-center rounded-xl bg-white px-6">
                <ImageWithSkeleton
                  src={network.logo}
                  alt={`${network.fullName} logo`}
                  width={network.width}
                  height={network.height}
                  className="h-12 w-auto"
                  shimmer={false}
                />
              </div>
              <p className="mt-4 text-sm leading-snug text-ink/60">
                {network.fullName}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
