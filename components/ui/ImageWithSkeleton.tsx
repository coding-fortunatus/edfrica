"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";

type ImageWithSkeletonProps = ImageProps & {
  /** Moving light-sweep on the skeleton. Disable for small icons/logos. */
  shimmer?: boolean;
};

export function ImageWithSkeleton({
  shimmer = true,
  className,
  onLoad,
  fill,
  width,
  height,
  sizes,
  alt,
  ...rest
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const handleLoad: NonNullable<ImageProps["onLoad"]> = (event) => {
    setLoaded(true);
    onLoad?.(event);
  };

  const skeleton = (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-parchment transition-opacity duration-500 ease-out ${
        loaded ? "opacity-0" : "opacity-100"
      }`}
    >
      {shimmer && (
        <div className="absolute inset-0 -translate-x-full animate-[skeleton-shimmer_1.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      )}
    </div>
  );

  const imageOpacity = `transition-opacity duration-500 ease-out ${
    loaded ? "opacity-100" : "opacity-0"
  }`;

  if (fill) {
    return (
      <>
        {skeleton}
        <Image
          ref={imgRef}
          fill
          alt={alt}
          sizes={sizes}
          className={`${imageOpacity} ${className ?? ""}`}
          onLoad={handleLoad}
          {...rest}
        />
      </>
    );
  }

  const numericWidth = Number(width);
  const numericHeight = Number(height);

  return (
    <span
      className={`relative inline-block overflow-hidden ${className ?? ""}`}
      style={{
        aspectRatio:
          numericWidth && numericHeight
            ? `${numericWidth} / ${numericHeight}`
            : undefined,
      }}
    >
      {skeleton}
      <Image
        ref={imgRef}
        fill
        alt={alt}
        sizes={sizes ?? (numericWidth ? `${numericWidth}px` : undefined)}
        className={`object-contain ${imageOpacity}`}
        onLoad={handleLoad}
        {...rest}
      />
    </span>
  );
}
