import type { SVGProps, JSX, ReactNode } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const wrap = (children: ReactNode, props: IconProps) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);

/* ---------------- Methodology step icons ---------------- */

export function IconAssess(props: IconProps) {
  return wrap(
    <>
      <rect x="6" y="5" width="20" height="22" rx="2" />
      <path d="M11 12h10M11 17h10M11 22h6" />
    </>,
    props
  );
}

export function IconDiscover(props: IconProps) {
  return wrap(
    <>
      <circle cx="14" cy="14" r="8" />
      <path d="M20 20l6 6" />
    </>,
    props
  );
}

export function IconDesign(props: IconProps) {
  return wrap(
    <>
      <path d="M16 3v6M16 23v6M3 16h6M23 16h6" />
      <circle cx="16" cy="16" r="6.5" />
    </>,
    props
  );
}

export function IconMigrate(props: IconProps) {
  return wrap(
    <>
      <path d="M4 16h20" />
      <path d="M18 9l6 7-6 7" />
    </>,
    props
  );
}

export function IconValidate(props: IconProps) {
  return wrap(
    <>
      <path d="M6 16l6 7L27 8" />
    </>,
    props
  );
}

export function IconOptimize(props: IconProps) {
  return wrap(
    <>
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" />
      <circle cx="16" cy="16" r="4.5" />
    </>,
    props
  );
}

export function IconCutover(props: IconProps) {
  return wrap(
    <>
      <path d="M4 26 26 4M18 4h6v6" />
    </>,
    props
  );
}

export function IconOperate(props: IconProps) {
  return wrap(
    <>
      <circle cx="16" cy="16" r="4" />
      <path d="M16 5v3M16 24v3M5 16h3M24 16h3M8.2 8.2l2.1 2.1M21.7 21.7l2.1 2.1M8.2 23.8l2.1-2.1M21.7 10.3l2.1-2.1" />
    </>,
    props
  );
}

export const methodologyIconMap: Record<string, (props: IconProps) => JSX.Element> = {
  Discovery: IconDiscover,
  Assessment: IconAssess,
  Architecture: IconDesign,
  Design: IconDesign,
  Migration: IconMigrate,
  Migrate: IconMigrate,
  Engineering: IconCutover,
  Validation: IconValidate,
  Validate: IconValidate,
  Optimization: IconOptimize,
  Optimize: IconOptimize,
  Deployment: IconCutover,
  Cutover: IconCutover,
  Operate: IconOperate,
  Assess: IconAssess,
  Discover: IconDiscover,
  "Usage Analysis": IconAssess,
  "Workload Analysis": IconDiscover,
  "Compute Analysis": IconOptimize,
  "Storage Analysis": IconDesign,
  "Savings Measurement": IconValidate,
  Baseline: IconAssess,
  Profile: IconDiscover,
  "Identify Bottlenecks": IconDesign,
  Benchmark: IconValidate,
  "Production Rollout": IconCutover,
};

/* ---------------- "What we migrate" scope icons ---------------- */

export function IconData(props: IconProps) {
  return wrap(
    <>
      <ellipse cx="16" cy="7" rx="10" ry="3.5" />
      <path d="M6 7v18c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5V7" />
      <path d="M6 16c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5" />
    </>,
    props
  );
}

export function IconCode(props: IconProps) {
  return wrap(
    <>
      <path d="M11 9l-7 7 7 7M21 9l7 7-7 7" />
    </>,
    props
  );
}

export function IconPipeline(props: IconProps) {
  return wrap(
    <>
      <circle cx="7" cy="16" r="3.2" />
      <circle cx="25" cy="16" r="3.2" />
      <circle cx="16" cy="7" r="3.2" />
      <circle cx="16" cy="25" r="3.2" />
      <path d="M9.8 14.2 13.5 9.5M18.5 9.5l3.7 4.7M9.8 17.8l3.7 4.7M18.5 22.5l3.7-4.7" />
    </>,
    props
  );
}

export function IconShield(props: IconProps) {
  return wrap(
    <>
      <path d="M16 3l11 4v8c0 8-5 12.5-11 14-6-1.5-11-6-11-14V7l11-4Z" />
      <path d="M11.5 16l3 3 6-6" />
    </>,
    props
  );
}

export function IconChartBI(props: IconProps) {
  return wrap(
    <>
      <path d="M5 27V5M5 27h22" />
      <rect x="9" y="17" width="4" height="8" />
      <rect x="16" y="11" width="4" height="14" />
      <rect x="23" y="7" width="4" height="18" />
    </>,
    props
  );
}

export function IconCloud(props: IconProps) {
  return wrap(
    <>
      <path d="M9 24h14a5.5 5.5 0 0 0 1-10.9A7.5 7.5 0 0 0 9.6 11 6 6 0 0 0 9 24Z" />
    </>,
    props
  );
}

export function IconServer(props: IconProps) {
  return wrap(
    <>
      <rect x="5" y="6" width="22" height="8" rx="1.5" />
      <rect x="5" y="18" width="22" height="8" rx="1.5" />
      <path d="M9 10h.01M9 22h.01" />
    </>,
    props
  );
}

export const scopeIconMap: Record<string, (props: IconProps) => JSX.Element> = {
  Data: IconData,
  SQL: IconCode,
  Pipelines: IconPipeline,
  Security: IconShield,
  Analytics: IconChartBI,
  Jobs: IconPipeline,
  Transformations: IconCode,
  Operations: IconServer,
  Access: IconShield,
  Integration: IconCloud,
  "Platform setup": IconServer,
};
