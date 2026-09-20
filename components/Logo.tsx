"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "compact";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "full", size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-11 w-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center gap-3 select-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg ${className}`}
      aria-label="Karsient Enterprise Cloud OS"
    >
      {/* Ultra-Attractive 3D Innovative Geometric Monogram Glyph */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        {/* Multi-depth Ambient Glow Halos */}
        <div
          aria-hidden="true"
          className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#FF6A00]/60 via-[#FFA040]/30 to-[#00F2FE]/40 opacity-75 blur-md transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
        />

        {/* 3D Chamfered Glass Outer Shell */}
        <div className="relative h-full w-full rounded-xl border border-white/30 bg-gradient-to-br from-[#13233D] via-[#0A1527] to-[#040813] p-[4px] shadow-[0_10px_28px_rgba(0,0,0,0.7),inset_0_1.5px_2px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full drop-shadow-[0_2px_10px_rgba(255,106,0,0.5)]"
          >
            <defs>
              {/* Primary Solar Orange Gradient with Depth */}
              <linearGradient id="k-primary-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA64D" />
                <stop offset="45%" stopColor="#FF6A00" />
                <stop offset="100%" stopColor="#D94800" />
              </linearGradient>

              {/* Beveled Side Shadow for 3D Spine */}
              <linearGradient id="k-bevel-dark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF8533" />
                <stop offset="100%" stopColor="#B33B00" />
              </linearGradient>

              {/* Electric Cyan Shard Gradient */}
              <linearGradient id="k-cyan-shard" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="60%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>

              {/* Modernization Violet Accent Gradient */}
              <linearGradient id="k-violet-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#00F2FE" />
              </linearGradient>

              {/* Specular Highlight for Top Edges */}
              <linearGradient id="k-specular-edge" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Left Vertical Monolith with 3D Facet */}
            <path
              d="M7 6C7 4.89543 7.89543 4 9 4H14C15.1046 4 16 4.89543 16 6V34C16 35.1046 15.1046 36 14 36H9C7.89543 36 7 35.1046 7 34V6Z"
              fill="url(#k-primary-orange)"
            />
            {/* 3D Shadow Ridge */}
            <path
              d="M13 4H14C15.1046 4 16 4.89543 16 6V34C16 35.1046 15.1046 36 14 36H13V4Z"
              fill="url(#k-bevel-dark)"
            />
            {/* Top Gloss Highlight */}
            <path
              d="M8.5 5.5H13.5V18H8.5V5.5Z"
              fill="url(#k-specular-edge)"
              opacity="0.35"
            />

            {/* Upper Right Dynamic Diagonal Wing (Orange Solar) */}
            <path
              d="M17.5 19.5L28.5 6.8C29.4 5.8 31 5.8 31.9 6.8L33.5 8.6C34.4 9.6 34.3 11.2 33.2 12.1L23.5 21.8L17.5 19.5Z"
              fill="url(#k-primary-orange)"
            />
            {/* Specular Wing Highlight */}
            <path
              d="M19 19L29 7.5L30.5 9L21 20L19 19Z"
              fill="#FFFFFF"
              opacity="0.25"
            />

            {/* Lower Right Modernization Shard (Electric Cyan & Violet) */}
            <path
              d="M18.5 22.5L30.2 33.8C31.2 34.8 32.8 34.7 33.7 33.7L35.2 31.9C36.1 30.8 35.9 29.2 34.8 28.3L24.8 19.2L18.5 22.5Z"
              fill="url(#k-cyan-shard)"
            />

            {/* Central Precision Luminous Neural Core */}
            <circle
              cx="21"
              cy="20.5"
              r="3.2"
              fill="#FFFFFF"
              className="animate-pulse drop-shadow-[0_0_10px_#FFA64D]"
            />
            <circle
              cx="21"
              cy="20.5"
              r="1.4"
              fill="#0A1527"
            />
          </svg>
        </div>
      </div>

      {/* Typography: Kar(orange) + sient(white), with Enterprise Cloud OS stacked underneath in a single line */}
      {variant !== "icon" && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-display font-black tracking-tight ${textSizes[size]}`}>
              <span className="text-[#FF6A00] transition-colors group-hover:text-[#FF8533]">Kar</span>
              <span className="text-white">sient</span>
            </span>

            {/* Micro AI Tag */}
            <span className="inline-flex items-center rounded-md border border-orange-500/30 bg-orange-500/10 px-1.5 py-0.5 text-[9px] font-mono font-semibold tracking-wider text-orange-300 uppercase shadow-[0_0_10px_rgba(255,106,0,0.15)]">
              AI
            </span>
          </div>

          {variant === "full" && (
            <span className="text-[10px] font-mono tracking-[0.16em] text-slate-400 uppercase mt-1 group-hover:text-slate-200 transition-colors whitespace-nowrap">
              Enterprise Cloud OS
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
