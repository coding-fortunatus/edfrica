import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { contact } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { MapPinIcon } from "@/components/icons";

const address =
  "The Edfrica Hub, Sokenu, off Nawairudeen Road, Abeokuta South LGA, Ogun State, Nigeria";
const encodedAddress = encodeURIComponent(address);
const mapEmbedSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

function MapHero() {
  return (
    <section className="relative bg-indigo">
      <div className="relative h-85 w-full sm:h-105">
        <iframe
          src={mapEmbedSrc}
          className="absolute inset-0 h-full w-full border-0 grayscale-15"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map showing the location of The Edfrica Hub in Abeokuta"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center px-6 pb-6 sm:justify-start sm:pl-12">
        <div className="pointer-events-auto flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white/95 p-5 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-start gap-3">
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-green-deep" />
            <div>
              <p className="text-sm font-semibold text-ink">The Edfrica Hub</p>
              <p className="max-w-xs text-sm text-ink/60">{address}</p>
            </div>
          </div>
          <Button
            href={directionsHref}
            external
            variant="secondary"
            className="shrink-0"
          >
            Get directions
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ContactDetails() {
  return (
    <>
      <MapHero />

      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Let&rsquo;s talk
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
              Reach out about partnerships, programmes, or press — we&rsquo;ll
              route your message to the right team.
            </p>

            <dl className="mt-10 flex flex-col gap-6">
              <div>
                <dt className="font-mono text-xs tracking-wider text-ink/50 uppercase">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg font-medium text-ink hover:text-green-deep"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-wider text-ink/50 uppercase">
                  Phone
                </dt>
                <dd className="mt-1.5 flex flex-col gap-1">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="text-lg font-medium text-ink hover:text-green-deep"
                    >
                      {phone}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-wider text-ink/50 uppercase">
                  Location
                </dt>
                <dd className="mt-1.5 text-lg font-medium text-ink">
                  {contact.location}
                </dd>
              </div>
            </dl>

            {/* Interim contact path — swap for a form once a submissions backend exists */}
            <div className="mt-10">
              <Button href={`mailto:${contact.email}`} external variant="primary">
                Send us an email
              </Button>
            </div>
          </div>

          <div>
            <div className="relative aspect-3/2 overflow-hidden rounded-2xl">
              <ImageWithSkeleton
                src="/photos/hub-exterior.jpg"
                alt="The Edfrica Hub building exterior in Sokenu, Abeokuta"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-ink/50">
              The Edfrica Hub — Sokenu, Abeokuta
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
