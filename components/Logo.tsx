import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group focus-ring relative inline-flex flex-col rounded-md ${className}`}
      aria-label="Karsient home"
    >
      {/* soft ambient glow, always breathing gently, blooms further on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-full bg-signal/25 opacity-40 blur-xl animate-glow transition-opacity duration-500 group-hover:opacity-90"
      />
      <span className="relative font-display text-2xl font-bold tracking-tight">
        <span className="relative bg-signal-gradient bg-clip-text text-transparent">
          Kar
        </span>
        <span className="text-white">sient</span>
        {/* diagonal light sweep, repeats continuously */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -skew-x-12 animate-shine bg-[length:250%_100%] bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.75)_50%,transparent_65%)] bg-clip-text text-transparent mix-blend-overlay"
        >
          Karsient
        </span>
      </span>
      <span className="h-[2px] w-0 origin-left rounded-full bg-signal-gradient transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
