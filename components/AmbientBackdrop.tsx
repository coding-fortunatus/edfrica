type AmbientBackdropProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function AmbientBackdrop({ tone = "light", className = "" }: AmbientBackdropProps) {
  const isDark = tone === "dark";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        isDark ? "text-white/12" : "text-ink/10"
      } ${className}`}
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1.5px)",
        backgroundSize: "24px 24px",
        maskImage:
          "radial-gradient(ellipse 100% 100% at 50% 20%, black 60%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 100% 100% at 50% 20%, black 60%, transparent 100%)",
      }}
    />
  );
}
