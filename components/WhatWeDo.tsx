import { services } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { ServiceCarousel } from "@/components/ServiceCarousel";

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-24 overflow-hidden bg-parchment/50 py-24"
    >
      <AmbientBackdrop tone="light" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          Capabilities
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl">
          Our services
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
          Entrepreneurship support (ESO) and innovation support (ISO) run
          through the Edfrica Institute — from first strategy session to
          investment readiness and cross-border market entry.
        </p>

        <div className="mt-12">
          <ServiceCarousel services={services} />
        </div>

        <div className="mt-4">
          <Button href="/services" variant="secondary">
            See all services
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}
