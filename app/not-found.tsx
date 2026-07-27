import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Pattern } from "@/components/Pattern";
import { footerNav } from "@/lib/content";

/**
 * A 404 must never be indexed, and it must never be a soft 404 either — this
 * file is rendered with a real 404 status by Next, and the noindex here keeps
 * the URL out of the index if a crawler reaches it from a stale link.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
  // Without this the page inherits the root layout's canonical and would tell
  // crawlers that every dead URL is a duplicate of the homepage.
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-paper py-24">
      <Pattern variant="dots" tone="light" anchor="top" />
      <div className="relative mx-auto w-full max-w-3xl px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          Error 404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
          We can&rsquo;t find that page
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
          The link may be out of date, or the page may have moved as the
          ecosystem has grown. Here&rsquo;s where most people are headed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>

        <nav
          aria-label="Popular pages"
          className="mt-12 border-t border-ink/10 pt-8"
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {[...footerNav.company, ...footerNav.explore].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-ink/70 transition-colors hover:text-green-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
