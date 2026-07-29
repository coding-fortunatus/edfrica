import type { ReactNode } from "react";
import { contact } from "@/lib/content";

export type LegalSection = {
  id: string;
  heading: string;
  body: ReactNode;
};

type LegalPageLayoutProps = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPageLayout({
  title,
  intro,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-2xl border border-green-deep/20 bg-mint px-5 py-4 text-sm leading-relaxed text-ink/80">
          <span className="font-bold text-green-deep">
            Draft, pending legal review.
          </span>{" "}
          This page reflects standard industry practice and will be finalized
          by Edfrica&rsquo;s legal team before formal publication.
        </div>

        <p className="mt-8 font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-2 font-mono text-xs tracking-wider text-ink/40 uppercase">
          Last updated: {lastUpdated}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
          {intro}
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr]">
          <nav aria-label="Table of contents" className="hidden lg:block">
            <div className="sticky top-24">
              <p className="font-mono text-xs tracking-wider text-ink/40 uppercase">
                On this page
              </p>
              <ul className="mt-4 flex flex-col gap-2 border-l border-ink/10 pl-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-ink/60 hover:text-green-deep"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-display text-xl font-bold text-ink">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-ink/75">
                  {section.body}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-ink/10 bg-parchment/50 p-6">
              <p className="text-sm leading-relaxed text-ink/75">
                Questions about this policy? Contact us at{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-normal text-ink hover:text-green-deep"
                >
                  {contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
