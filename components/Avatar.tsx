import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";

type Tone = "green" | "indigo" | "parchment";

type AvatarProps = {
  name: string;
  /** Omit where no headshot exists — an initials monogram is drawn instead. */
  photo?: string;
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
  sm: "h-20 w-20",
  md: "h-28 w-28",
  lg: "h-36 w-36",
};

const monogramSizes = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-4xl",
};

/**
 * "Dr. Emmanuel Odumusi" -> "EO". Honorifics are dropped so they never eat one
 * of the two slots, and single-word names fall back to their first letter.
 */
function initialsFrom(name: string) {
  const honorifics = new Set(["dr", "mr", "mrs", "ms", "prof", "engr"]);
  const words = name
    .split(/\s+/)
    .map((word) => word.replace(/[^\p{L}]/gu, ""))
    .filter((word) => word && !honorifics.has(word.toLowerCase()));

  if (words.length === 0) return "?";
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function Avatar({
  name,
  photo,
  tone = "green",
  size = "md",
  className = "",
}: AvatarProps) {
  const isDark = tone === "indigo";

  return (
    <div
      role="img"
      aria-label={photo ? `Portrait of ${name}` : `${name}, no portrait supplied`}
      className={`relative flex items-center justify-center overflow-hidden rounded-full border bg-linear-to-br ${tones[tone]} ${sizes[size]} ${
        isDark ? "border-white/20" : "border-ink/10"
      } ${className}`}
    >
      {photo ? (
        <ImageWithSkeleton
          src={photo}
          alt=""
          fill
          sizes="144px"
          className="object-cover"
          shimmer={false}
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 10px)",
              color: isDark ? "#ffffff" : "var(--ink)",
            }}
          />
          <span
            aria-hidden="true"
            className={`relative font-display font-bold tracking-wide ${monogramSizes[size]} ${
              isDark ? "text-white/80" : "text-ink/45"
            }`}
          >
            {initialsFrom(name)}
          </span>
        </>
      )}
    </div>
  );
}
