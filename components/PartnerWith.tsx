import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { partnerAudiences, whyPartner, contact } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import {
  HeartIcon,
  BriefcaseIcon,
  LandmarkIcon,
  GraduationCapIcon,
} from "@/components/icons";

const audienceIcons: Record<string, typeof HeartIcon> = {
  "NGOs & donors": HeartIcon,
  "Corporates & foundations": BriefcaseIcon,
  "Government & public sector": LandmarkIcon,
  "Academic & research institutions": GraduationCapIcon,
};

export function PartnerWith() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper pt-16 pb-16">
        <AmbientBackdrop tone="light" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
                Partnership
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
                Why organizations partner with Edfrica
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
                From donors to government agencies, partners plug into an
                established network instead of building from scratch.
              </p>
            </div>

            <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
              <ImageWithSkeleton
                src="/photos/community-outreach.jpg"
                alt="Edfrica volunteers and children at a community outreach event"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-parchment/40 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {partnerAudiences.map((audience) => {
              const Icon = audienceIcons[audience.title] ?? HeartIcon;
              return (
                <div
                  key={audience.title}
                  className="rounded-3xl border border-ink/10 bg-white p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-green-deep">
                    <Icon />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                    {audience.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {audience.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Why organizations choose to work with us
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {whyPartner.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-ink/75"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-xs text-green-deep"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white">
        <ImageWithSkeleton
          src="/photos/digital-platform.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-indigo/85" />
        <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Ready to explore a partnership?
          </h2>
          <p className="mt-3 text-white/70">
            Reach out and we&rsquo;ll route your inquiry to the right pillar.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href={`mailto:${contact.email}`} external variant="outline-light">
              Email {contact.email}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
