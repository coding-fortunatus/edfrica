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

/**
 * Motifs are deliberately large — a typical section should show only a handful
 * of repeats, not a fine mesh. Every SVG tile uses a viewBox matching its mask
 * size so strokes stay hairline rather than scaling up with the tile.
 */
const specs: Record<PatternVariant, Spec> = {
  // The signature texture — rationed to once per page.
  dots: {
    image: "radial-gradient(circle, black 1.5px, transparent 2px)",
    size: "88px 88px",
    opacity: 1,
  },
  grid: {
    image:
      "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
    size: "170px 170px, 170px 170px",
    opacity: 0.85,
  },
  diagonals: {
    image:
      "repeating-linear-gradient(45deg, black 0 1.2px, transparent 1.2px 170px)",
    size: "auto",
    opacity: 0.95,
  },
  crosshatch: {
    image:
      "repeating-linear-gradient(45deg, black 0 1.2px, transparent 1.2px 190px), repeating-linear-gradient(-45deg, black 0 1.2px, transparent 1.2px 190px)",
    size: "auto",
    opacity: 0.9,
  },
  // A few wide radiating rings — reads as reach and ripple.
  arcs: {
    image:
      "repeating-radial-gradient(circle at 50% 128%, black 0 1.3px, transparent 1.3px 155px)",
    size: "auto",
    opacity: 1,
  },
  chevron: {
    image: svg(stroke("M0 122 L80 42 L160 122 L240 42 L320 122", 1.5), 320, 164),
    size: "320px 164px",
    opacity: 0.95,
  },
  // Interlocking diamond lattice, in the spirit of woven textile.
  weave: {
    image: svg(
      `<g fill='none' stroke='black' stroke-width='1.3' stroke-linecap='round'>${[
        "M0 130h260M130 0v260",
        "M0 0l130 130M260 0L130 130M0 260l130-130M260 260L130 130",
      ]
        .map((d) => `<path d='${d}'/>`)
        .join("")}</g>`,
      260,
      260,
    ),
    size: "260px 260px",
    opacity: 0.85,
  },
  // Four topographic lines — echoes the 15-country regional footprint.
  contour: {
    image: svg(
      `<g fill='none' stroke='black' stroke-width='1.4' stroke-linecap='round'>${[
        90, 205, 320, 435,
      ]
        .map((y) => `<path d='M0 ${y} q190-70 380 0 t380 0'/>`)
        .join("")}</g>`,
      760,
      500,
    ),
    size: "760px 500px",
    opacity: 1,
  },
  triangles: {
    image: svg(
      `<g fill='none' stroke='black' stroke-width='1.4' stroke-linejoin='round'>
        <path d='M110 26 L196 176 L24 176 Z'/>
        <path d='M0 216 L54 300 L-54 300 Z'/>
        <path d='M220 216 L274 300 L166 300 Z'/>
      </g>`,
      220,
      300,
    ),
    size: "220px 300px",
    opacity: 0.9,
  },
  waves: {
    image: svg(stroke("M0 74 q45-52 90 0 t90 0 t90 0 t90 0", 1.4), 360, 150),
    size: "360px 150px",
    opacity: 0.95,
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
          // Deliberately near-threshold: the texture should register as paper
          // grain, not as a graphic element competing with the content.
          opacity: (tone === "dark" ? 0.055 : 0.045) * spec.opacity,
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
