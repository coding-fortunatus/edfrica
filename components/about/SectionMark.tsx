/**
 * The section label for the About page. Uses the same mono-caps eyebrow the
 * rest of the site sets, so this page differs by layout rather than by type.
 */
export function SectionMark({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-xs tracking-[0.2em] text-green-deep uppercase ${className}`}
    >
      {children}
    </p>
  );
}
