"use client";

import { useEffect, useMemo, useState } from "react";
import { stats, type Stat } from "@/lib/content";
import { useInView } from "@/lib/useInView";

function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  const [, prefix, numberPart, suffix] = match;
  return { prefix, target: parseInt(numberPart.replace(/,/g, ""), 10), suffix };
}

function StatItem({ value, label }: Stat) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;
    const target = parsed.target;
    const duration = 1100;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed]);

  const text = parsed
    ? `${parsed.prefix}${display.toLocaleString()}${parsed.suffix}`
    : value;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 px-4 py-2 text-center sm:items-start sm:text-left"
    >
      <span className="font-mono text-3xl font-medium text-indigo sm:text-4xl">
        {text}
      </span>
      <span className="text-sm text-ink/60">{label}</span>
    </div>
  );
}

export function StatsBar() {
  return (
    <section
      aria-label="Impact statistics"
      className="border-b border-ink/10 bg-parchment/60"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
