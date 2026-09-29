"use client";

import { useEffect, useRef, useState } from "react";
import { TechIcon, techLabels, type LogoKey } from "@/components/icons/TechIcons";

export function TechCarousel({ logos }: { logos: LogoKey[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clickPaused, setClickPaused] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 180) + 20;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Slow, continuous right-to-left drift (auto-scroll). Pauses on
  // hover/touch, and can be stopped/resumed by clicking anywhere on the strip.
  useEffect(() => {
    if (hovering || clickPaused) return;
    let raf: number;
    const speed = 0.4; // px per frame — gentle, ~1 card every few seconds
    const step = () => {
      const el = trackRef.current;
      if (el) {
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        if (atEnd) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += speed;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hovering, clickPaused]);

  return (
    <div
      className="group/carousel relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
      onClick={() => setClickPaused((v) => !v)}
      role="button"
      tabIndex={0}
      aria-label={clickPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink to-transparent sm:w-16" />

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto px-10 py-2 [scrollbar-width:none] sm:gap-5 sm:px-16 [&::-webkit-scrollbar]:hidden"
      >
        {logos.map((key, i) => (
          <div
            key={`${key}-${i}`}
            data-card
            className="flex w-[190px] shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:bg-white/[0.06] hover:shadow-[0_0_35px_-8px_rgba(255,106,0,0.2)] sm:w-[200px] lg:w-[220px]"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2.5 text-ink shadow-[0_8px_20px_-6px_rgba(0,0,0,0.4)] sm:h-24 sm:w-24 sm:p-3">
              <TechIcon name={key} bare className="h-full w-full" />
            </div>
            <span className="text-center font-body text-sm font-medium text-mist">
              {techLabels[key]}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll platforms left"
        onClick={(e) => {
          e.stopPropagation();
          setClickPaused(true);
          scrollByCard(-1);
        }}
        className="focus-ring absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white backdrop-blur transition-colors hover:border-signal/60 hover:text-signal sm:flex"
      >
        &larr;
      </button>
      <button
        type="button"
        aria-label="Scroll platforms right"
        onClick={(e) => {
          e.stopPropagation();
          setClickPaused(true);
          scrollByCard(1);
        }}
        className="focus-ring absolute right-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white backdrop-blur transition-colors hover:border-signal/60 hover:text-signal sm:flex"
      >
        &rarr;
      </button>
    </div>
  );
}
