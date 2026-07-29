import { PersonIcon } from "@/components/icons";

type Tone = "green" | "indigo" | "parchment";

type AvatarPlaceholderProps = {
  name: string;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const tones: Record<Tone, string> = {
  green: "from-mint via-paper to-green/25",
  indigo: "from-indigo-soft via-indigo to-[#0d0a30]",
  parchment: "from-parchment via-paper to-mint",
};

const sizes = {
  sm: "h-16 w-16",
  md: "h-20 w-20",
  lg: "h-28 w-28",
};

export function AvatarPlaceholder({
  name,
  tone = "green",
  size = "md",
  className = "",
}: AvatarPlaceholderProps) {
  const isDark = tone === "indigo";

  return (
    <div
      role="img"
      aria-label={`Placeholder photo for ${name}. Portrait to be supplied.`}
      className={`relative flex items-center justify-center overflow-hidden rounded-full border bg-gradient-to-br ${tones[tone]} ${sizes[size]} ${
        isDark ? "border-white/20" : "border-ink/10"
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 10px)",
          color: isDark ? "#ffffff" : "var(--ink)",
        }}
      />
      <PersonIcon
        className={`relative h-8 w-8 ${isDark ? "text-white/70" : "text-ink/35"}`}
      />
    </div>
  );
}
