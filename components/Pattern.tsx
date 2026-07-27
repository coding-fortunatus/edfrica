/**
 * Decorative section backdrops. Every variant is drawn as a CSS mask over a
 * flat theme-coloured layer, so patterns inherit the light/dark palette
 * automatically and never ship a second image request.
 *
 * House rule: `dots` is the signature texture and may appear AT MOST ONCE per
 * page — and never on the landing page. Pick another variant otherwise.
 */

export type PatternVariant =
  | "dots"
  | "grid"
  | "diagonals"
  | "crosshatch"
  | "chevron"
  | "weave"
  | "contour"
  | "arcs"
  | "triangles"
  | "waves";

type PatternProps = {
  variant: PatternVariant;
  tone?: "light" | "dark";
  /** Where the texture is densest before it fades out. */
  anchor?: "top" | "center" | "bottom" | "right";
  className?: string;
};

function svg(body: string, width: number, height: number) {
  const markup = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>${body}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(markup)}")`;
}

const stroke = (d: string, w = 1.4) =>
  `<path d='${d}' fill='none' stroke='black' stroke-width='${w}' stroke-linecap='round'/>`;

type Spec = { image: string; size: string; opacity: number };

const specs: Record<PatternVariant, Spec> = {
  // The original signature texture — rationed to once per page.
  dots: {
    image: "radial-gradient(circle, black 1px, transparent 1.5px)",
    size: "24px 24px",
    opacity: 1,
  },
  grid: {
    image:
      "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
    size: "48px 48px, 48px 48px",
    opacity: 0.75,
  },
  diagonals: {
    image:
      "repeating-linear-gradient(45deg, black 0 1px, transparent 1px 16px)",
    size: "auto",
    opacity: 0.8,
  },
  crosshatch: {
    image:
      "repeating-linear-gradient(45deg, black 0 1px, transparent 1px 22px), repeating-linear-gradient(-45deg, black 0 1px, transparent 1px 22px)",
    size: "auto",
    opacity: 0.7,
  },
  // Radiating rings — reads as reach and ripple.
  arcs: {
    image:
      "repeating-radial-gradient(circle at 50% 118%, black 0 1.2px, transparent 1.2px 46px)",
    size: "auto",
    opacity: 0.9,
  },
  chevron: {
    image: svg(stroke("M0 15 L10 5 L20 15 L30 5 L40 15"), 40, 20),
    size: "40px 20px",
    opacity: 0.85,
  },
  // Interlocking diamond lattice, in the spirit of woven textile.
  weave: {
    image: svg(
      `<g fill='none' stroke='black' stroke-width='1.3' stroke-linecap='round'>${[
        "M0 20h40M20 0v40",
        "M0 0l20 20M40 0L20 20M0 40l20-20M40 40L20 20",
      ]
        .map((d) => `<path d='${d}'/>`)
        .join("")}</g>`,
      40,
      40,
    ),
    size: "40px 40px",
    opacity: 0.7,
  },
  // Topographic lines — echoes the 15-country regional footprint.
  contour: {
    image: svg(
      `<g fill='none' stroke='black' stroke-width='1.2' stroke-linecap='round'>${[
        "M0 12q20-11 40 0t40 0",
        "M0 26q20-11 40 0t40 0",
        "M0 40q20-11 40 0t40 0",
      ]
        .map((d) => `<path d='${d}'/>`)
        .join("")}</g>`,
      80,
      48,
    ),
    size: "80px 48px",
    opacity: 0.85,
  },
  triangles: {
    image: svg(
      `<g fill='none' stroke='black' stroke-width='1.2' stroke-linejoin='round'>
        <path d='M15 3 L28 25 L2 25 Z'/>
        <path d='M0 29 L7 41 L-7 41 Z'/>
        <path d='M30 29 L37 41 L23 41 Z'/>
      </g>`,
      30,
      44,
    ),
    size: "30px 44px",
    opacity: 0.75,
  },
  waves: {
    image: svg(stroke("M0 9 q5-6 10 0 t10 0 t10 0 t10 0", 1.2), 40, 18),
    size: "40px 18px",
    opacity: 0.8,
  },
};

const fades: Record<NonNullable<PatternProps["anchor"]>, string> = {
  top: "radial-gradient(ellipse 100% 100% at 50% 15%, black 45%, transparent 88%)",
  center:
    "radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 78%)",
  bottom:
    "radial-gradient(ellipse 100% 90% at 50% 100%, black 25%, transparent 80%)",
  right:
    "radial-gradient(ellipse 70% 90% at 100% 50%, black 20%, transparent 78%)",
};

export function Pattern({
  variant,
  tone = "light",
  anchor = "top",
  className = "",
}: PatternProps) {
  const spec = specs[variant];
  const fade = fades[anchor];

  return (
    <div
      aria-hidden="true"
      data-pattern={variant}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    >
      <div
        className={`absolute inset-0 ${tone === "dark" ? "bg-white" : "bg-ink"}`}
        style={{
          opacity: (tone === "dark" ? 0.14 : 0.1) * spec.opacity,
          maskImage: spec.image,
          WebkitMaskImage: spec.image,
          maskSize: spec.size,
          WebkitMaskSize: spec.size,
          maskRepeat: "repeat",
          WebkitMaskRepeat: "repeat",
        }}
      />
    </div>
  );
}
