import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";

type PlateProps = {
  src: string;
  alt: string;
  /** Set in italic beneath the frame, the way a book captions a plate. */
  caption: string;
  priority?: boolean;
};

/**
 * A photograph as a framed plate: hairline border, square corners, caption.
 *
 * The outer section carries the padding rather than the figure: page sections
 * are children of `main`, which is a column flex container, and an auto
 * horizontal margin on a flex item overrides `stretch` and collapses it to
 * fit-content. Centring the figure inside a plain block avoids that entirely.
 */
export function Plate({ src, alt, caption, priority = false }: PlateProps) {
  return (
    <section className="bg-paper px-6 lg:px-8">
      <figure className="mx-auto max-w-6xl">
        <div className="relative aspect-video overflow-hidden border border-ink/12 sm:aspect-16/7">
          <ImageWithSkeleton
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1152px) 72rem, 100vw"
            priority={priority}
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-sm text-ink/55 italic">
          {caption}
        </figcaption>
      </figure>
    </section>
  );
}
