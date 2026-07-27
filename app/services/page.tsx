import Link from "next/link";
import { services } from "@/lib/content";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/components/iconRegistry";
import { Pattern } from "@/components/Pattern";
import { ArrowRightIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbNode,
  graph,
  serviceListNode,
  webPageNode,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/services";
const title = "Our Services";
const description =
  "Business development, market assessments, financial modelling, compliance, access to finance, investment readiness, cross-border market access, and acceleration — delivered end to end by the Edfrica Institute.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  socialTitle: "Services, delivered end to end",
});

const crumbs = [{ name: "Services", path }];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            path,
            name: title,
            description,
            type: "CollectionPage",
            crumbs,
          }),
          breadcrumbNode(crumbs),
          serviceListNode(),
        ])}
      />
      <section className="relative overflow-hidden bg-paper pt-16 pb-10">
        <Pattern variant="grid" tone="light" anchor="right" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Our services
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Services, delivered end to end
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            Entrepreneurship support (ESO) and innovation support (ISO) run
            through the Edfrica Institute — carrying a community network of
            5,000+ members and 20,000+ MSMEs, backed by delivery standards
            drawn from World Bank/ECOWAS, GIZ, and GOPA-managed programmes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-ink/15 px-4 py-2 font-mono text-xs tracking-wide text-ink/70 uppercase hover:border-green-deep hover:text-green-deep"
              >
                {service.number} — {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divide-y divide-ink/10">
        {services.map((service, index) => {
          const Icon = getIcon(service.icon);
          const reversed = index % 2 === 1;

          const textBlock = (
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-green-deep">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-5 font-mono text-xs text-ink/40">
                {service.number}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
                {service.title}
              </h2>
              <p className="mt-1 text-base text-ink/60">{service.descriptor}</p>
              <p className="mt-5 text-base leading-relaxed text-ink/75">
                {service.body}
              </p>
              <div className="mt-7">
                <Button href="/partner" variant="secondary">
                  Talk to us about this
                  <ArrowRightIcon />
                </Button>
              </div>
            </div>
          );

          const imageBlock = (
            <div className="relative aspect-3/2 overflow-hidden rounded-2xl">
              <ImageWithSkeleton
                src={service.photo}
                alt={service.photoAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
          );

          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 py-16 ${reversed ? "bg-parchment/30" : "bg-paper"}`}
            >
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                  {reversed ? (
                    <>
                      {imageBlock}
                      {textBlock}
                    </>
                  ) : (
                    <>
                      {textBlock}
                      {imageBlock}
                    </>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
