"use client";

import { useRef, type ReactNode } from "react";

export function RowCarousel({
  children,
  itemClassName = "w-[300px] shrink-0 sm:w-[320px]",
}: {
  children: ReactNode;
  itemClassName?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="group/row relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-ink to-transparent sm:w-12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-ink to-transparent sm:w-12" />

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div key={i} className={itemClassName}>
                {child}
              </div>
            ))
          : children}
      </div>

      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scroll(-1)}
        className="focus-ring absolute -left-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/90 text-white backdrop-blur transition-colors hover:border-signal/60 hover:text-signal sm:flex"
      >
        &larr;
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scroll(1)}
        className="focus-ring absolute -right-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/90 text-white backdrop-blur transition-colors hover:border-signal/60 hover:text-signal sm:flex"
      >
        &rarr;
      </button>
    </div>
  );
}
