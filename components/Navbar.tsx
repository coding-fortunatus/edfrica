"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { pillars, type Pillar } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import {
  ChevronDownIcon,
  CloseIcon,
  ExternalLinkIcon,
  MenuIcon,
} from "@/components/icons";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const toneDot: Record<Pillar["tone"], string> = {
  green: "bg-green-deep",
  indigo: "bg-indigo",
  parchment: "bg-ink/35",
};

export function Navbar() {
  const pathname = usePathname();
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [previousPathname, setPreviousPathname] = useState(pathname);

  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setMobileOpen(false);
    setEcosystemOpen(false);
  }

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setEcosystemOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setEcosystemOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
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
          <span className="font-display text-2xl font-semibold text-ink">
            Edfrica
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-green-deep ${
              isActive("/about") ? "text-green-deep" : "text-ink"
            }`}
          >
            About
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setEcosystemOpen((v) => !v)}
              aria-expanded={ecosystemOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-green-deep ${
                isActive("/ecosystem") ? "text-green-deep" : "text-ink"
              }`}
            >
              Ecosystem
              <ChevronDownIcon
                className={`h-3.5 w-3.5 transition-transform ${ecosystemOpen ? "rotate-180" : ""}`}
              />
            </button>

            {ecosystemOpen && (
              <div className="absolute top-full left-1/2 mt-3 w-80 -translate-x-1/2 rounded-2xl border border-ink/15 bg-white p-2 shadow-xl ring-1 ring-black/5">
                <Link
                  href="/ecosystem"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-indigo hover:bg-parchment"
                >
                  Ecosystem overview
                  <span className="mt-0.5 block font-mono text-xs font-normal tracking-wider text-ink/50 uppercase">
                    All five pillars, one page →
                  </span>
                </Link>
                <div className="my-1 border-t border-ink/10" />
                {pillars.map((pillar) => (
                  <a
                    key={pillar.id}
                    href={pillar.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-ink hover:bg-parchment"
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className={`h-2 w-2 shrink-0 rounded-full ${toneDot[pillar.tone]}`}
                      />
                      <span>
                        {pillar.role}
                        <span className="ml-2 font-mono text-xs text-ink/45">
                          {pillar.name}
                        </span>
                      </span>
                    </span>
                    <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-ink/40" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks
            .filter((l) => l.label !== "About")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-deep ${
                  isActive(link.href) ? "text-green-deep" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/partner" variant="primary">
            Partner With Us
          </Button>
        </div>

        <button
          type="button"
          className="text-ink lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink/10 bg-paper px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <Link
              href="/about"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-parchment"
            >
              About
            </Link>
            <Link
              href="/ecosystem"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-parchment"
            >
              Ecosystem
            </Link>
            <div className="ml-3 flex flex-col gap-0.5 border-l border-ink/10 pl-3">
              {pillars.map((pillar) => (
                <a
                  key={pillar.id}
                  href={pillar.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wide text-ink/60 hover:bg-parchment hover:text-green-deep"
                >
                  {pillar.role}
                  <ExternalLinkIcon className="h-3 w-3" />
                </a>
              ))}
            </div>
            <Link
              href="/team"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-parchment"
            >
              Team
            </Link>
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
  );
}
