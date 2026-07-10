import Image from "next/image";
import Link from "next/link";
import { contact, footerNav, pillars } from "@/lib/content";
import { ExternalLinkIcon } from "@/components/icons";

export function CtaFooter() {
  return (
    <footer className="border-t border-white/10 bg-indigo text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Edfrica"
              width={140}
              height={42}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              A five-pillar social enterprise ecosystem turning African
              ambition into impact.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-white/40">
              {contact.location}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white/40">
              Ecosystem
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {pillars.map((pillar) => (
                <li key={pillar.id}>
                  <a
                    href={pillar.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-green"
                  >
                    {pillar.role}
                    <ExternalLinkIcon className="h-3 w-3 text-white/40" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white/40">
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
            <h3 className="font-mono text-xs uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
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
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Edfrica Solutions Limited. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white/70">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
