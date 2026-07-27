import Link from "next/link";
import { contact, footerNav, orgSocials, pillars } from "@/lib/content";
import {
  ExternalLinkIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const socialIcons = [
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  { key: "twitter", label: "X", Icon: TwitterIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
] as const;

export function CtaFooter() {
  const socials = socialIcons.filter(({ key }) => Boolean(orgSocials[key]));

  return (
    <footer className="border-t border-white/10 bg-indigo text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold">
              Opportunities, in your inbox
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
              Funding calls, fellowships, and enterprise news curated by Edfrica
              Media.
            </p>
          </div>
          <NewsletterSignup />
        </div>

        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <ImageWithSkeleton
              src="/logo.png"
              alt="Edfrica"
              width={140}
              height={42}
              shimmer={false}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              A five-pillar social enterprise ecosystem turning African
              ambition into impact.
            </p>

            {contact.offices.map((office) => (
              <div key={office.city} className="mt-6">
                <h3 className="font-mono text-xs tracking-wider text-white/40 uppercase">
                  {office.city}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
                  {office.address}
                </p>
              </div>
            ))}

            <ul className="mt-6 flex flex-col gap-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-green">
                  {contact.email}
                </a>
              </li>
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="hover:text-green"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-wider text-white/40 uppercase">
              Ecosystem
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {pillars.map((pillar) => (
                <li key={pillar.id}>
                  {pillar.external ? (
                    <a
                      href={pillar.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-green"
                    >
                      {pillar.navLabel}
                      <ExternalLinkIcon className="h-3 w-3 text-white/40" />
                    </a>
                  ) : (
                    <Link
                      href={pillar.href}
                      className="text-sm text-white/80 hover:text-green"
                    >
                      {pillar.navLabel}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-wider text-white/40 uppercase">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-wider text-white/40 uppercase">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNav.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} Edfrica Solutions Limited. All rights
            reserved.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white/70">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {socials.length > 0 && (
              <ul className="flex gap-3">
                {socials.map(({ key, label, Icon }) => (
                  <li key={key}>
                    <a
                      href={orgSocials[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Edfrica on ${label}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 hover:border-green hover:text-green"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
