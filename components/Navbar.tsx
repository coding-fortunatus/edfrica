"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  companyNav,
  pillars,
  services,
  type Pillar,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { getIcon } from "@/components/iconRegistry";
import {
  ChevronDownIcon,
  CloseIcon,
  ExternalLinkIcon,
  MenuIcon,
} from "@/components/icons";

/** Routes that open with a dark, full-bleed hero the header can sit over. */
const transparentHeaderRoutes = new Set(["/"]);

const toneDot: Record<Pillar["tone"], string> = {
  green: "bg-green-deep",
  indigo: "bg-indigo",
  parchment: "bg-ink/35",
};

type MenuId = "company" | "services" | "whoweare";

export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [previousPathname, setPreviousPathname] = useState(pathname);

  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent only over a dark hero, and only until the user scrolls past it.
  const overHero =
    transparentHeaderRoutes.has(pathname) && !scrolled && !mobileOpen;

  const toggle = (id: MenuId) =>
    setOpenMenu((current) => (current === id ? null : id));

  const triggerClasses = (open: boolean) =>
    `flex items-center gap-1 text-sm font-medium transition-colors ${
      overHero
        ? "text-white hover:text-green"
        : open
          ? "text-green-deep"
          : "text-ink hover:text-green-deep"
    }`;

  const linkClasses = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      overHero
        ? "text-white hover:text-green"
        : active
          ? "text-green-deep"
          : "text-ink hover:text-green-deep"
    }`;

  const panel =
    "absolute top-full mt-3 rounded-2xl border border-ink/15 bg-white p-2 shadow-xl ring-1 ring-black/5";

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        overHero
          ? "border-transparent bg-transparent"
          : "border-ink/10 bg-paper/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Edfrica home"
        >
          <ImageWithSkeleton
            src="/icon-mark.png"
            alt=""
            width={40}
            height={40}
            priority
            shimmer={false}
            className="h-9 w-9"
          />
          <span
            className={`font-display text-2xl font-semibold transition-colors ${
              overHero ? "text-white" : "text-ink"
            }`}
          >
            Edfrica
          </span>
        </Link>

        <nav
          ref={navRef}
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {/* Company */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggle("company")}
              aria-expanded={openMenu === "company"}
              aria-haspopup="true"
              className={triggerClasses(openMenu === "company")}
            >
              Company
              <ChevronDownIcon
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu === "company" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "company" && (
              <div className={`${panel} left-1/2 w-72 -translate-x-1/2`}>
                {companyNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-2.5 text-sm text-ink hover:bg-parchment"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services — mega-menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggle("services")}
              aria-expanded={openMenu === "services"}
              aria-haspopup="true"
              className={triggerClasses(openMenu === "services")}
            >
              Services
              <ChevronDownIcon
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "services" && (
              <div className={`${panel} left-1/2 w-176 -translate-x-1/2`}>
                <div className="grid grid-cols-2 gap-1">
                  {services.map((service) => {
                    const Icon = getIcon(service.icon);
                    return (
                      <Link
                        key={service.slug}
                        href={`/services#${service.slug}`}
                        className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-parchment"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mint text-green-deep">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink">
                            {service.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-ink/55">
                            {service.descriptor}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-1 border-t border-ink/10 px-3 pt-3 pb-1">
                  <Link
                    href="/services"
                    className="font-mono text-xs tracking-wider text-green-deep uppercase hover:text-indigo"
                  >
                    All services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Who We Are */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggle("whoweare")}
              aria-expanded={openMenu === "whoweare"}
              aria-haspopup="true"
              className={triggerClasses(openMenu === "whoweare")}
            >
              Who We Are
              <ChevronDownIcon
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu === "whoweare" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "whoweare" && (
              <div className={`${panel} left-1/2 w-80 -translate-x-1/2`}>
                {pillars.map((pillar) => {
                  const label = (
                    <span className="flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className={`h-2 w-2 shrink-0 rounded-full ${toneDot[pillar.tone]}`}
                      />
                      <span>
                        {pillar.navLabel}
                        <span className="ml-2 font-mono text-xs text-ink/45">
                          {pillar.name}
                        </span>
                      </span>
                    </span>
                  );
                  const className =
                    "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-ink hover:bg-parchment";

                  return pillar.external ? (
                    <a
                      key={pillar.id}
                      href={pillar.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {label}
                      <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-ink/40" />
                    </a>
                  ) : (
                    <Link key={pillar.id} href={pillar.href} className={className}>
                      {label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/contact" className={linkClasses(pathname === "/contact")}>
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button
            href="/partner"
            variant={overHero ? "outline-light" : "primary"}
          >
            Partner With Us
          </Button>
        </div>

        <button
          type="button"
          className={overHero ? "text-white lg:hidden" : "text-ink lg:hidden"}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-paper px-6 pt-2 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <MobileGroup label="Company">
              {companyNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-parchment hover:text-green-deep"
                >
                  {link.label}
                </Link>
              ))}
            </MobileGroup>

            <MobileGroup label="Services">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-parchment hover:text-green-deep"
                >
                  {service.title}
                </Link>
              ))}
            </MobileGroup>

            <MobileGroup label="Who We Are">
              {pillars.map((pillar) =>
                pillar.external ? (
                  <a
                    key={pillar.id}
                    href={pillar.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-parchment hover:text-green-deep"
                  >
                    {pillar.navLabel}
                    <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    key={pillar.id}
                    href={pillar.href}
                    className="rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-parchment hover:text-green-deep"
                  >
                    {pillar.navLabel}
                  </Link>
                ),
              )}
            </MobileGroup>

            <Link
              href="/contact"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-parchment"
            >
              Contact
            </Link>

            <Button href="/partner" variant="primary" className="mt-3 w-full">
              Partner With Us
            </Button>
          </nav>
        </div>
      )}
    </header>

    {/* The header is fixed, so routes without a full-bleed hero underneath it
        need the height back. Must match the header's rendered height. */}
    {!transparentHeaderRoutes.has(pathname) && (
      <div aria-hidden="true" className="h-16.5" />
    )}
    </>
  );
}

function MobileGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-parchment">
        {label}
        <ChevronDownIcon className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-0.5 mb-1 ml-3 flex flex-col gap-0.5 border-l border-ink/10 pl-3">
        {children}
      </div>
    </details>
  );
}
