"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface IndustryItem {
  name: string;
  slug: string;
  image: string;
  tagline: string;
  stats: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    name: "Insurance",
    slug: "insurance",
    image: "/industries/insurance.jpg",
    tagline: "Claims fraud detection, actuarial lakehouses & unified policyholder graphs.",
    stats: "4.2x Faster Claims Triage",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    image: "/industries/healthcare.jpg",
    tagline: "HIPAA-compliant longitudinal EHR lakehouses & real-time clinical analytics.",
    stats: "Sub-second Query Latency",
  },
  {
    name: "Banking & Financial Services",
    slug: "banking-financial-services",
    image: "/industries/banking-financial-services.jpg",
    tagline: "Real-time AML, credit risk scoring & automated regulatory capital reporting.",
    stats: "100% Audit Reconciliation",
  },
  {
    name: "Retail",
    slug: "retail",
    image: "/industries/retail.jpg",
    tagline: "Omnichannel inventory optimization, demand forecasting & customer 360.",
    stats: "28% Reduction in Stockouts",
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    image: "/industries/manufacturing.jpg",
    tagline: "Industrial IoT telemetry, predictive maintenance & supply chain resilience.",
    stats: "99.8% Defect Prevention",
  },
  {
    name: "Logistics",
    slug: "logistics",
    image: "/industries/logistics.jpg",
    tagline: "Fleet route optimization, real-time freight tracking & capacity allocation.",
    stats: "18% Fuel Cost Efficiency",
  },
  {
    name: "Agriculture",
    slug: "agriculture",
    image: "/industries/agriculture.jpg",
    tagline: "Yield intelligence, soil moisture sensor ingestion & commodity forecasting.",
    stats: "High-density Geo-Spatial DAGs",
  },
];

export function IndustryShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="relative overflow-hidden bg-[#070E1A] py-24 border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 -left-20 h-[450px] w-[500px] rounded-full bg-orange-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[500px] rounded-full bg-cyan-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header matching Screenshot 2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
              INDUSTRY EXPERTISE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Built for regulated, data-intensive industries
            </h2>
            <p className="mt-4 text-base text-slate-300 font-body leading-relaxed">
              Every industry has its own data gravity and compliance load. We bring pattern-matched experience, not generic playbooks.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/industries"
              className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-orange-400/50"
            >
              View all industries
            </Link>

            {/* Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous industry"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                  canScrollLeft
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-orange-500/50"
                    : "border-white/10 bg-white/[0.02] text-slate-600 cursor-not-allowed"
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next industry"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                  canScrollRight
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-orange-500/50"
                    : "border-white/10 bg-white/[0.02] text-slate-600 cursor-not-allowed"
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track with Real Images (Screenshot 2 Anatomy) */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {INDUSTRIES.map((item, idx) => (
            <motion.div
              key={item.slug}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] md:w-[380px]"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/industries/${item.slug}`}
                className="group block h-full rounded-2xl border border-white/15 bg-gradient-to-b from-[#0F1B2E]/90 to-[#070D18] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#FF6B00]/60 hover:shadow-[0_16px_45px_rgba(255,107,0,0.2)]"
              >
                {/* Real High-Resolution Photographic Image Frame */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 300px, 380px"
                  />
                  {/* Subtle Cinematic Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-black/20" />
                  
                  {/* Performance / Compliance Metric Pill */}
                  <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
                    {item.stats}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-[#FF6B00]">
                      {item.name}
                    </h3>
                    <span className="text-[#FF6B00] opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                  <p className="mt-2.5 font-body text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-slate-500">Enterprise Lakehouse Pattern</span>
                    <span className="text-orange-400 font-semibold group-hover:underline">
                      Explore Architecture
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
