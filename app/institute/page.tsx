import type { Metadata } from "next";
import Link from "next/link";
import { pillars, services, whyEiieExists } from "@/lib/content";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Pattern } from "@/components/Pattern";
import { EsoIsoSplit } from "@/components/EsoIsoSplit";
import { RegionalNetworkGrid } from "@/components/RegionalNetworkGrid";
import { getIcon } from "@/components/iconRegistry";
import { ArrowRightIcon } from "@/components/icons";

const institute = pillars.find((pillar) => pillar.id === "institute")!;

export const metadata: Metadata = {
  title: "Edfrica Institute for Innovation & Enterprise",
  description:
    "Nigeria's entrepreneurship (ESO) and innovation (ISO) support institute, headquartered in Abeokuta with a regional network across all 15 ECOWAS and Alliance of Sahel States countries.",
  alternates: { canonical: "/institute" },
};

export default function InstitutePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-indigo text-white">
        <Pattern variant="crosshatch" tone="dark" anchor="right" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-green uppercase">
                Institute
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight font-semibold sm:text-5xl">
                Edfrica Institute for Innovation &amp; Enterprise
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
                {institute.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <Chip tone="dark">CAC 8196200</Chip>
                <Chip tone="dark">SCUML registered</Chip>
                <Chip tone="dark">Operating since 2017</Chip>
                <Chip tone="dark">15-country network</Chip>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/services" variant="primary">
                  Our services
                  <ArrowRightIcon />
                </Button>
                <Button href="/partner" variant="outline-light">
                  Partner with the Institute
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
              <ImageWithSkeleton
                src={institute.photo}
                alt={institute.photoAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Why EIIE exists
          </p>
          <p className="mt-6 font-display text-xl leading-relaxed text-ink italic sm:text-2xl">
            {whyEiieExists}
          </p>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-parchment/50 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Two mandates
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            ESO and ISO, under one roof
          </h2>
          <EsoIsoSplit />
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Delivered end to end
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="flex items-start gap-4 rounded-2xl border border-ink/10 p-5 transition-colors hover:border-green-deep/30 hover:bg-parchment/50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-green-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-semibold text-ink">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/65">
                      {service.descriptor}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-10">
            <Button href="/services" variant="secondary">
              Read the full service detail
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-parchment/40 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Regional network
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Fifteen countries, one delivery standard
          </h2>
          <RegionalNetworkGrid />

          <div className="mt-12 rounded-3xl border border-ink/10 bg-paper p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              OGEII — Ogun Enterprise &amp; Innovation Institute
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/70">
              Our Ogun State chapter, headquartered at The Edfrica Hub in
              Sokenu, Abeokuta.
            </p>
            <div className="mt-6">
              <Button href="/hub" variant="secondary">
                Visit The Edfrica Hub
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
