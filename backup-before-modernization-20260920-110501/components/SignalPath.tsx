export function SignalPath({ nodes }: { nodes: number }) {
  const width = 100;
  const gap = width / nodes;
  return (
    <svg
      className="absolute left-0 top-6 hidden w-full lg:block"
      viewBox={`0 0 ${width} 4`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1={gap / 2}
        y1="2"
        x2={width - gap / 2}
        y2="2"
        stroke="#2A2A2E"
        strokeWidth="0.3"
      />
      <line
        x1={gap / 2}
        y1="2"
        x2={width - gap / 2}
        y2="2"
        stroke="#FF6A00"
        strokeWidth="0.3"
        strokeDasharray="2 3"
        className="animate-dash-flow"
      />
      {Array.from({ length: nodes }).map((_, i) => (
        <circle
          key={i}
          cx={gap / 2 + i * gap}
          cy="2"
          r="0.9"
          fill="#FF6A00"
          className="animate-pulse-node"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}
