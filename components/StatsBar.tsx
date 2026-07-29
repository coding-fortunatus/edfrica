"use client";

import { useEffect, useMemo, useState } from "react";
import { stats as defaultStats, type Stat } from "@/lib/content";
import { useInView } from "@/lib/useInView";

type Tone = "light" | "dark";

function parseValue(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  const [, prefix, numberPart, suffix] = match;
  return { prefix, target: parseInt(numberPart.replace(/,/g, ""), 10), suffix };
}

const numberTone: Record<Tone, string> = {
  light: "text-ink",
  dark: "text-white",
};

const labelTone: Record<Tone, string> = {
  light: "text-ink/60",
  dark: "text-white/60",
};

function StatItem({
  value,
  label,
  tone = "light",
  align = "start",
}: Stat & { tone?: Tone; align?: "start" | "center" }) {
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

  // Values like "15-country" or "Ages 3–15" don't parse; they render as-is.
  const text = parsed
    ? `${parsed.prefix}${display.toLocaleString()}${parsed.suffix}`
    : value;

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-1 px-4 py-2 ${
        align === "center"
          ? "items-center text-center"
          : "items-center text-center sm:items-start sm:text-left"
      }`}
    >
      <span
        className={`font-mono text-3xl font-normal sm:text-4xl ${numberTone[tone]}`}
      >
        {text}
      </span>
      <span className={`text-sm ${labelTone[tone]}`}>{label}</span>
    </div>
  );
}

type StatsRowProps = {
  stats?: Stat[];
  tone?: Tone;
  align?: "start" | "center";
  className?: string;
};

/** The bare grid of animated stats, reused inside the hero and elsewhere. */
export function StatsRow({
  stats = defaultStats,
  tone = "light",
  align = "start",
  className = "",
}: StatsRowProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-y-8 ${
        stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
      } ${className}`}
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} tone={tone} align={align} />
      ))}
    </div>
  );
}

/** Standalone parchment stat band, used on interior pages. */
export function StatsBar() {
  return (
    <section
      aria-label="Impact statistics"
      className="border-b border-ink/10 bg-parchment/60"
    >
      <StatsRow className="mx-auto max-w-7xl px-6 py-10 lg:px-8" />
    </section>
  );
}
