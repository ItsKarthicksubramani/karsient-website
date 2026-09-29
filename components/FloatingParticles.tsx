"use client";

const particles = [
  { left: "6%", top: "18%", size: 4, anim: "animate-float", delay: "0s", opacity: 0.5 },
  { left: "14%", top: "62%", size: 3, anim: "animate-float-slow", delay: "0.6s", opacity: 0.35 },
  { left: "22%", top: "35%", size: 5, anim: "animate-float", delay: "1.2s", opacity: 0.45 },
  { left: "31%", top: "80%", size: 3, anim: "animate-float-slow", delay: "0.2s", opacity: 0.3 },
  { left: "40%", top: "12%", size: 4, anim: "animate-float", delay: "1.6s", opacity: 0.4 },
  { left: "48%", top: "55%", size: 6, anim: "animate-float-slow", delay: "0.9s", opacity: 0.5 },
  { left: "58%", top: "24%", size: 3, anim: "animate-float", delay: "0.4s", opacity: 0.35 },
  { left: "66%", top: "70%", size: 5, anim: "animate-float-slow", delay: "1.4s", opacity: 0.45 },
  { left: "74%", top: "40%", size: 4, anim: "animate-float", delay: "0.7s", opacity: 0.4 },
  { left: "82%", top: "16%", size: 3, anim: "animate-float-slow", delay: "1.1s", opacity: 0.3 },
  { left: "89%", top: "60%", size: 5, anim: "animate-float", delay: "0.3s", opacity: 0.45 },
  { left: "94%", top: "85%", size: 3, anim: "animate-float-slow", delay: "1.8s", opacity: 0.3 },
  { left: "10%", top: "90%", size: 4, anim: "animate-float", delay: "1.0s", opacity: 0.35 },
  { left: "52%", top: "88%", size: 3, anim: "animate-float-slow", delay: "0.5s", opacity: 0.3 },
];

export function FloatingParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-signal shadow-[0_0_12px_rgba(255,106,0,0.8)] ${p.anim}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
