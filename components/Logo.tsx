import Link from "next/link";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 6 L6 42 L14 42 L14 26 L30 42 L41 42 L21 22 L40 6 L29 6 L14 19 L14 6 Z"
        fill="url(#karsient-k-gradient)"
      />
      <path d="M24 2 L27.2 14 L39.5 17 L27.2 20 L24 32 L20.8 20 L8.5 17 L20.8 14 Z" fill="#FF6A00" />
      <defs>
        <linearGradient id="karsient-k-gradient" x1="6" y1="6" x2="41" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FF6A00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 focus-ring rounded-md ${className}`}
      aria-label="Karsient home"
    >
      <LogoMark className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:rotate-[8deg]" />
      <span className="font-display text-xl font-semibold tracking-tight text-white">
        karsient
      </span>
    </Link>
  );
}
