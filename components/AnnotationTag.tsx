import type { ReactNode } from "react";

type AnnotationTagProps = {
  tone?: "green" | "indigo" | "paper";
  rotate?: "left" | "right";
  children: ReactNode;
  className?: string;
};

const toneClasses: Record<NonNullable<AnnotationTagProps["tone"]>, string> = {
  green: "bg-green text-indigo",
  indigo: "bg-indigo text-white",
  paper: "border border-ink/10 bg-paper text-ink",
};

const rotateClasses: Record<NonNullable<AnnotationTagProps["rotate"]>, string> = {
  left: "-rotate-2",
  right: "rotate-2",
};

export function AnnotationTag({
  tone = "green",
  rotate = "left",
  children,
  className = "",
}: AnnotationTagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] tracking-wide uppercase shadow-sm ${toneClasses[tone]} ${rotateClasses[rotate]} ${className}`}
    >
      {children}
    </span>
  );
}
