"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Service } from "@/lib/content";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { ArrowRightIcon } from "@/components/icons";

/**
 * Horizontally scrolling service cards driven by scroll-snap, with arrow
 * buttons that page by one card. Keeps native touch scrolling on mobile.
 */
export function ServiceCarousel({ services }: { services: Service[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function syncEdges() {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  }

  useEffect(syncEdges, []);

  function page(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={syncEdges}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services#${service.slug}`}
            className="group relative flex h-112 w-[85%] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl bg-indigo p-7 text-white sm:w-[46%] lg:w-[calc((100%-3rem)/3)]"
          >
            <div aria-hidden="true" className="absolute inset-0">
              <ImageWithSkeleton
                src={service.photo}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 46vw, 85vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Title sits top, button sits bottom — so both ends need to be
                  dark, with the photo readable through the middle. */}
              <div className="absolute inset-0 bg-scrim/55" />
              <div className="absolute inset-0 bg-linear-to-b from-scrim/85 via-scrim/25 to-scrim/90" />
            </div>

            <div className="relative">
              <h3 className="font-display text-xl leading-snug font-bold">
                {service.number}. {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {service.descriptor}
              </p>
            </div>

            <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold transition-colors group-hover:bg-white group-hover:text-indigo">
              Learn More
              <ArrowRightIcon />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-label="Previous services"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo text-white transition-opacity hover:bg-green-deep disabled:opacity-30"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-label="Next services"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo text-white transition-opacity hover:bg-green-deep disabled:opacity-30"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
