"use client";

import { useEffect, useState } from "react";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";

export type HeroSlide = {
  photo: string;
  photoAlt: string;
};

const INTERVAL_MS = 6000;

/**
 * Crossfading background slides with numbered manual navigation, sitting
 * behind the hero copy. Auto-advance pauses once the visitor picks a slide.
 */
export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [paused, slides.length]);

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.photo}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithSkeleton
              src={slide.photo}
              alt=""
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
        {/* Kept light enough that the photography actually reads on the right,
            while the copy column stays solidly dark. */}
        <div className="absolute inset-0 bg-indigo/55" />
        <div className="absolute inset-0 bg-linear-to-r from-indigo via-indigo/75 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-indigo via-transparent to-indigo/40" />
      </div>

      <nav
        aria-label="Hero slides"
        className="absolute top-1/2 right-6 z-20 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex lg:right-10"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.photo}
            type="button"
            onClick={() => {
              setActive(index);
              setPaused(true);
            }}
            aria-label={`Show slide ${index + 1}: ${slide.photoAlt}`}
            aria-current={index === active}
            className="group flex items-center gap-3 font-mono text-xs text-white/45 transition-colors hover:text-white"
          >
            <span
              aria-hidden="true"
              className={`h-px transition-all duration-300 ${
                index === active
                  ? "w-10 bg-green"
                  : "w-4 bg-white/30 group-hover:w-8"
              }`}
            />
            <span className={index === active ? "text-white" : undefined}>
              {index + 1}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
