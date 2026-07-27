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
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  ArrowRightIcon,
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

/** Shared dropdown item styling — icon tile, title, supporting line. */
const itemClasses =
  "group/item relative flex items-start gap-3.5 rounded-2xl px-3.5 py-3 transition-colors hover:bg-parchment";
const iconTile =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mint text-green-deep transition-colors group-hover/item:bg-green-deep group-hover/item:text-white";
const itemTitle =
  "block text-sm font-semibold text-ink transition-colors group-hover/item:text-green-deep";
const itemBody = "mt-0.5 block text-xs leading-relaxed text-ink/55";

type DropdownProps = {
  id: MenuId;
  label: string;
  width: string;
  openMenu: MenuId | null;
  setOpenMenu: (id: MenuId | null) => void;
  toggle: (id: MenuId) => void;
  triggerClasses: (open: boolean) => string;
  children: React.ReactNode;
};

/**
 * Opens on hover for pointer users and on click/Enter for everyone else. The
 * panel wrapper keeps its top padding inside the hoverable area so there's no
 * dead gap between the trigger and the menu.
 */
function Dropdown({
  id,
  label,
  width,
  openMenu,
  setOpenMenu,
  toggle,
  triggerClasses,
  children,
}: DropdownProps) {
  const open = openMenu === id;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(id)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button
        type="button"
        onClick={() => toggle(id)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`${triggerClasses(open)} py-2`}
      >
        {label}
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 ${width} ${
          open
            ? "pointer-events-auto"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          className={`rounded-3xl border border-ink/10 bg-paper p-2.5 shadow-[0_28px_70px_-24px_rgba(22,17,75,0.4)] ring-1 ring-black/5 transition-all duration-200 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

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
          <Dropdown
            id="company"
            label="Company"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            toggle={toggle}
            triggerClasses={triggerClasses}
            width="w-84"
          >
            {companyNav.map((link) => {
              const Icon = getIcon(link.icon);
              return (
                <Link key={link.href} href={link.href} className={itemClasses}>
                  <span className={iconTile}>
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className={itemTitle}>{link.label}</span>
                    <span className={itemBody}>{link.description}</span>
                  </span>
                </Link>
              );
            })}
          </Dropdown>

          {/* Services — mega-menu */}
          <Dropdown
            id="services"
            label="Services"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            toggle={toggle}
            triggerClasses={triggerClasses}
            width="w-180"
          >
            <div className="grid grid-cols-2 gap-0.5">
              {services.map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <Link
                    key={service.slug}
                    href={`/services#${service.slug}`}
                    className={itemClasses}
                  >
                    <span className={iconTile}>
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className={itemTitle}>{service.title}</span>
                      <span className={itemBody}>{service.descriptor}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-2 flex items-center justify-between rounded-2xl bg-parchment px-4 py-3">
              <p className="text-xs text-ink/60">
                Delivered end to end by the Edfrica Institute.
              </p>
              <Link
                href="/services"
                className="flex shrink-0 items-center gap-1.5 font-mono text-xs tracking-wider text-green-deep uppercase hover:text-ink"
              >
                All services
                <ArrowRightIcon className="h-3 w-3" />
              </Link>
            </div>
          </Dropdown>

          {/* Who We Are */}
          <Dropdown
            id="whoweare"
            label="Who We Are"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            toggle={toggle}
            triggerClasses={triggerClasses}
            width="w-96"
          >
            {pillars.map((pillar) => {
              const body = (
                <>
                  <span
                    aria-hidden="true"
                    className={`mt-2 h-2 w-2 shrink-0 rounded-full ${toneDot[pillar.tone]}`}
                  />
                  <span className="min-w-0 flex-1">
                    <span className={itemTitle}>
                      {pillar.navLabel}
                      {pillar.external && (
                        <ExternalLinkIcon className="ml-1.5 inline-block h-3 w-3 align-[-1px] text-ink/35" />
                      )}
                    </span>
                    <span className={itemBody}>{pillar.tagline}</span>
                  </span>
                </>
              );

              return pillar.external ? (
                <a
                  key={pillar.id}
                  href={pillar.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={itemClasses}
                >
                  {body}
                </a>
              ) : (
                <Link key={pillar.id} href={pillar.href} className={itemClasses}>
                  {body}
                </Link>
              );
            })}
          </Dropdown>

          <Link href="/contact" className={linkClasses(pathname === "/contact")}>
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle onDark={overHero} />
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

            <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-5">
              <span className="font-mono text-xs tracking-wider text-ink/45 uppercase">
                Theme
              </span>
              <ThemeToggle />
            </div>
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
