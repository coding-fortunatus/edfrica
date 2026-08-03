"use client";

import { useEffect, useMemo, useState } from "react";
import { stats as defaultStats, type Stat } from "@/lib/content";
import { useInView } from "@/lib/useInView";

type Tone = "light" | "dark";
/** `classical` is the About page's treatment: larger numerals, ruled columns. */
type Variant = "default" | "classical";

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
  variant = "default",
}: Stat & { tone?: Tone; align?: "start" | "center"; variant?: Variant }) {
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

  const isClassical = variant === "classical";

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
        className={`font-mono font-normal ${
          isClassical ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
        } ${numberTone[tone]}`}
      >
        {text}
      </span>
      <span
        className={
          isClassical
            ? `mt-1 font-mono text-[0.7rem] tracking-[0.16em] uppercase ${labelTone[tone]}`
            : `text-sm ${labelTone[tone]}`
        }
      >
        {label}
      </span>
    </div>
  );
}

type StatsRowProps = {
  stats?: Stat[];
  tone?: Tone;
  align?: "start" | "center";
  variant?: Variant;
  className?: string;
};

/** The bare grid of animated stats, reused inside the hero and elsewhere. */
export function StatsRow({
  stats = defaultStats,
  tone = "light",
  align = "start",
  variant = "default",
  className = "",
}: StatsRowProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-y-8 ${
        stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
      } ${className}`}
    >
      {stats.map((stat) => (
        <StatItem
          key={stat.label}
          {...stat}
          tone={tone}
          align={align}
          variant={variant}
        />
      ))}
    </div>
  );
}

/**
 * Standalone stat band. Only the About page renders it, so it carries that
 * page's classical treatment directly: larger numerals in columns divided by
 * rules, on paper rather than a tinted band.
 */
export function StatsBar() {
  return (
    <section aria-label="Impact statistics" className="bg-paper px-6 lg:px-8">
      <StatsRow
        align="center"
        variant="classical"
        className="mx-auto max-w-5xl border-y border-ink/12 py-12 sm:divide-x sm:divide-ink/12"
      />
    </section>
  );
}
