import type { Metadata } from "next";
import {
  contact,
  hubFacilities,
  hubOccupants,
  hubPricing,
  pillars,
} from "@/lib/content";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Pattern } from "@/components/Pattern";
import { getIcon } from "@/components/iconRegistry";
import { ArrowRightIcon, CheckIcon, MapPinIcon } from "@/components/icons";

const hub = pillars.find((pillar) => pillar.id === "infrastructure")!;

export const metadata: Metadata = {
  title: "The Edfrica Hub",
  description:
    "A co-working, training, and event space in Sokenu, Abeokuta South LGA, Ogun State — co-working desks, training rooms, an event hall, and an incubation bay. Home to OGEII and the wider Edfrica ecosystem.",
  alternates: { canonical: "/hub" },
};

export default function HubPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-indigo text-white">
        <Pattern variant="waves" tone="dark" anchor="right" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-green uppercase">
                Innovation Hub
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight font-semibold sm:text-5xl">
                The Edfrica Hub
              </h1>
              <p className="mt-3 text-lg text-white/70">{hub.tagline}</p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
                {hub.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <Chip tone="dark">
                  <MapPinIcon className="h-3.5 w-3.5" />
                  {contact.offices[0].city}
                </Chip>
                <Chip tone="dark">Open to members &amp; visitors</Chip>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="#pricing" variant="primary">
                  See pricing
                </Button>
                <Button href="/contact" variant="outline-light">
                  Book a visit
                </Button>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
              <ImageWithSkeleton
                src={hub.photo}
                alt={hub.photoAlt}
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Facilities
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            What&rsquo;s inside
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hubFacilities.map((facility) => {
              const Icon = getIcon(facility.icon);
              return (
                <div
                  key={facility.name}
                  className="rounded-3xl border border-ink/10 bg-parchment/50 p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-deep text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {facility.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {facility.descriptor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-parchment/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Who works from here
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            A working building, not a showroom
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {hubOccupants.map((occupant) => {
              const Icon = getIcon(occupant.icon);
              return (
                <div
                  key={occupant.name}
                  className="flex items-start gap-4 rounded-3xl border border-ink/10 bg-paper p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {occupant.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                      {occupant.descriptor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Plans and rates
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Rates are being finalised. Get in touch and we&rsquo;ll confirm
            current pricing and availability for the space you need.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hubPricing.map((tier) => (
              <div
                key={tier.name}
                className={`flex h-full flex-col rounded-3xl border p-6 ${
                  tier.featured
                    ? "border-green-deep/25 bg-mint"
                    : "border-ink/10 bg-paper"
                }`}
              >
                {tier.featured && (
                  <span className="mb-4 w-fit rounded-full bg-green-deep px-3 py-1 font-mono text-[10px] tracking-wider text-white uppercase">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-ink">
                  {tier.name}
                </h3>
                <p className="mt-4 font-mono text-3xl font-medium text-indigo">
                  {tier.price}
                </p>
                <p className="mt-1 text-xs text-ink/50">{tier.unit}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-ink/70"
                    >
                      <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-green-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <Button
                    href="/contact"
                    variant={tier.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-parchment/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
                Find us
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                {contact.offices[0].city}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                {contact.offices[0].address}
              </p>
              <ul className="mt-6 flex flex-col gap-2 text-sm text-ink/75">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-green-deep"
                  >
                    {contact.email}
                  </a>
                </li>
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="hover:text-green-deep"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Book a visit
                  <ArrowRightIcon />
                </Button>
              </div>
            </div>

            <div className="relative aspect-3/2 overflow-hidden rounded-3xl">
              <ImageWithSkeleton
                src="/photos/hub-exterior.jpg"
                alt={hub.photoAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
