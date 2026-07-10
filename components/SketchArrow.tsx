type SketchArrowVariant = "toButton" | "scrollDown" | "toGrid";

type SketchArrowProps = {
  variant: SketchArrowVariant;
  dashed?: boolean;
  className?: string;
};

const variants: Record<
  SketchArrowVariant,
  { viewBox: string; curve: string; head: string }
> = {
  toButton: {
    viewBox: "0 0 60 50",
    curve: "M50,4 C36,4 20,14 12,34",
    head: "M4,25 L12,34 L23,29",
  },
  scrollDown: {
    viewBox: "0 0 40 70",
    curve: "M20,2 C28,20 12,40 20,60",
    head: "M11,50 L20,60 L29,50",
  },
  toGrid: {
    viewBox: "0 0 80 60",
    curve: "M8,4 C40,0 68,18 58,52",
    head: "M47,44 L58,52 L68,46",
  },
};

export function SketchArrow({ variant, dashed = false, className = "" }: SketchArrowProps) {
  const { viewBox, curve, head } = variants[variant];

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={curve}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={dashed ? "1 9" : undefined}
      />
      <path
        d={head}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
