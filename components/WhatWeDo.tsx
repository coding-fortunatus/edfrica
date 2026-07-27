import Link from "next/link";
import { services } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/components/iconRegistry";
import { ArrowRightIcon } from "@/components/icons";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-24 overflow-hidden bg-parchment/50 py-24"
    >
      <AmbientBackdrop tone="light" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          Our Services
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">
          Services, delivered end to end
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Entrepreneurship support (ESO) and innovation support (ISO) run
          through the Edfrica Institute — from first strategy session to
          investment readiness and cross-border market entry.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-green-deep/30 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-green-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] text-ink/30">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg leading-snug font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {service.descriptor}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-[11px] tracking-wider text-green-deep uppercase">
                  Learn more
                  <ArrowRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <Button href="/services" variant="secondary">
            See all services
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}
