"use client";

import { useState } from "react";
import { partnerAudiences } from "@/lib/content";
import { Icon } from "@/components/iconRegistry";

export function WhoWeServe() {
  const [active, setActive] = useState(0);
  const audience = partnerAudiences[active];

  return (
    <section id="who-we-serve" className="scroll-mt-24 bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-green-deep uppercase">
            Who We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Partnering for your growth
          </h2>
        </div>

        <div className="mx-auto mt-12 min-h-40 max-w-3xl text-center">
          <p className="text-xl leading-relaxed text-ink/75 sm:text-2xl">
            {audience.body}
          </p>
          <p className="mt-8 font-mono text-sm tracking-wide text-green-deep">
            {audience.title}
          </p>
        </div>

        {/* Audience switcher — the active tab carries the rule, the rest sit on
            a hairline, mirroring a logo strip. */}
        <div
          role="tablist"
          aria-label="Partner audiences"
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 border-t border-ink/12 sm:grid-cols-3 lg:grid-cols-5"
        >
          {partnerAudiences.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={`group relative -mt-px flex flex-col items-center gap-3 border-t-2 px-4 py-7 transition-colors ${
                  selected
                    ? "border-green-deep"
                    : "border-transparent hover:border-ink/20"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${
                    selected
                      ? "bg-green-deep text-white"
                      : "bg-parchment text-ink/40 group-hover:text-ink/70"
                  }`}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span
                  className={`text-center text-sm font-normal transition-colors ${
                    selected ? "text-ink" : "text-ink/45 group-hover:text-ink/75"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
