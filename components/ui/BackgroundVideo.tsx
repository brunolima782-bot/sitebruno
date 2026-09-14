"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function BackgroundVideo({
  src,
  poster,
  alt,
  className,
  sizes = "100vw",
}: {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    // Read the current value once on mount (SSR always starts with video markup,
    // then swaps to the poster image here if the OS prefers reduced motion).
    handler({ matches: mq.matches } as MediaQueryListEvent);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) {
    return <Image src={poster} alt={alt} fill sizes={sizes} className={className} />;
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
      aria-hidden="true"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
