import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { contact } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { LocationMap } from "@/components/LocationMap";

export function ContactDetails() {
  return (
    <>
      <section className="bg-paper pt-16 pb-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
              Contact
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
              Let&rsquo;s talk
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
              Reach out about partnerships, programmes, or press and
              we&rsquo;ll route your message to the right team.
            </p>

            <dl className="mt-10 flex flex-col gap-6">
              <div>
                <dt className="font-mono text-xs tracking-wider text-ink/50 uppercase">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg font-normal text-ink hover:text-green-deep"
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
                      className="text-lg font-normal text-ink hover:text-green-deep"
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
                <dd className="mt-1.5 text-lg font-normal text-ink">
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
                src="/photos/edfrica-building.jpg"
                alt="The Edfrica building in Sokenu, Abeokuta"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-ink/50">
              The Edfrica Hub, Sokenu, Abeokuta
            </p>
          </div>
        </div>
      </section>

      <LocationMap />
    </>
  );
}
