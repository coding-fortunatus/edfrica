import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  tone?: "default" | "dark" | "green";
  className?: string;
};

const tones = {
  default: "border-ink/15 bg-parchment text-ink",
  dark: "border-white/20 bg-white/10 text-white",
  green: "border-green-deep/30 bg-mint text-green-deep",
};

export function Chip({ children, tone = "default", className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
