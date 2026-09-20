import type { JSX, ReactNode } from "react";

type Token = { t: string; c?: string };

/** Renders a single line of syntax-colored pseudo-code as an SVG <text> with <tspan> runs. */
function codeLine(x: number, y: number, tokens: Token[], size = 11, key?: string | number): ReactNode {
  return (
    <text key={key} x={x} y={y} fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize={size}>
      {tokens.map((tok, i) => (
        <tspan key={i} fill={tok.c ?? "#C7CCD9"} xmlSpace="preserve">
          {tok.t}
        </tspan>
      ))}
    </text>
  );
}

const KW = "#FF8A3D"; // keyword orange
const STR = "#7FD98A"; // string green
const ID = "#9AD1FF"; // identifier blue
const MUT = "#6B7280"; // muted / comment
const TXT = "#C7CCD9"; // plain text

function WindowChrome({ label }: { label: string }) {
  return (
    <>
      <rect x="0" y="0" width="640" height="34" rx="16" fill="#1F222C" />
      <circle cx="20" cy="17" r="5" fill="#FF6259" />
      <circle cx="38" cy="17" r="5" fill="#FFBD2E" />
      <circle cx="56" cy="17" r="5" fill="#28C840" />
      <text x="320" y="22" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#8B93A7">
        {label}
      </text>
    </>
  );
}

export function ShiftIQMockup() {
  const sourceCode: Token[][] = [
    [{ t: "CREATE OR REPLACE ", c: KW }, { t: "PROCEDURE", c: KW }],
    [{ t: "  calc_customer_ltv(", c: TXT }, { t: "cust_id ", c: ID }, { t: "NUMBER", c: KW }, { t: ")", c: TXT }],
    [{ t: "IS", c: KW }, { t: "  v_total ", c: TXT }, { t: "NUMBER", c: KW }, { t: " := 0;", c: TXT }],
    [{ t: "BEGIN", c: KW }],
    [{ t: "  SELECT ", c: KW }, { t: "SUM(amount)", c: ID }],
    [{ t: "    INTO ", c: KW }, { t: "v_total", c: ID }],
    [{ t: "    FROM ", c: KW }, { t: "orders", c: ID }],
    [{ t: "   WHERE ", c: KW }, { t: "customer_id = cust_id;", c: TXT }],
    [{ t: "  RETURN v_total;", c: TXT }],
    [{ t: "END;", c: KW }],
    [{ t: "-- complexity: high, 3 refs", c: MUT }],
  ];

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="parseBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14161C" />
          <stop offset="100%" stopColor="#1B1E27" />
        </linearGradient>
        <linearGradient id="parseGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="16" fill="url(#parseBg)" />
      <circle cx="500" cy="80" r="140" fill="url(#parseGlow)" />
      <WindowChrome label="karsient-shiftiq — dependency graph" />

      {/* left: real pseudo-code being analyzed */}
      <g transform="translate(24,54)">
        <rect width="248" height="320" rx="10" fill="#191C24" stroke="#2A2E3A" />
        <text x="16" y="24" fontFamily="ui-monospace, monospace" fontSize="9" fill="#8B93A7">
          LEGACY_PROC.SQL
        </text>
        {sourceCode.map((line, i) => codeLine(16, 46 + i * 24, line, 10.5, i))}
        <rect x="14" y="242" width="220" height="18" rx="4" fill="#FF6A00" opacity="0.12" />
        <text x="24" y="255" fontFamily="ui-monospace, monospace" fontSize="9" fill="#FF6A00">
          Business rule detected: LTV calc
        </text>
      </g>

      {/* right: dependency graph with real labels */}
      <g transform="translate(288,54)">
        <rect width="328" height="320" rx="10" fill="#191C24" stroke="#2A2E3A" />
        <text x="16" y="24" fontFamily="ui-monospace, monospace" fontSize="9" fill="#8B93A7">
          DEPENDENCY GRAPH
        </text>
        <g stroke="#FF6A00" strokeOpacity="0.5" strokeWidth="1.5">
          <line x1="70" y1="90" x2="165" y2="150" />
          <line x1="165" y1="150" x2="255" y2="100" />
          <line x1="165" y1="150" x2="165" y2="235" />
          <line x1="165" y1="235" x2="80" y2="280" />
          <line x1="165" y1="235" x2="260" y2="280" />
        </g>
        {[
          [70, 90, "orders", false],
          [255, 100, "customers", false],
          [165, 150, "calc_ltv()", true],
          [165, 235, "ltv_calc", true],
          [80, 280, "dim_customer", false],
          [260, 280, "rpt_ltv", false],
        ].map(([cx, cy, lbl, hot], i) => (
          <g key={i}>
            <circle cx={cx as number} cy={cy as number} r={hot ? 15 : 10} fill={hot ? "#FF6A00" : "#3A3F4E"} stroke="#0F1116" strokeWidth="2" />
            <text x={cx as number} y={(cy as number) + (hot ? 28 : 22)} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#9AA3B5">
              {lbl}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function CodeShiftMockup() {
  const sourceCode: Token[][] = [
    [{ t: "SELECT ", c: KW }, { t: "customer_id,", c: TXT }],
    [{ t: "       SUM(amount) ", c: ID }, { t: "AS ", c: KW }, { t: "total", c: TXT }],
    [{ t: "FROM ", c: KW }, { t: "orders o", c: ID }],
    [{ t: "JOIN ", c: KW }, { t: "customers c", c: ID }],
    [{ t: "  ON o.cust_id = c.id", c: TXT }],
    [{ t: "WHERE ", c: KW }, { t: "o.status = ", c: TXT }, { t: "'PAID'", c: STR }],
    [{ t: "GROUP BY ", c: KW }, { t: "customer_id", c: TXT }],
  ];

  const targetCode: Token[][] = [
    [{ t: "df = (spark.table(", c: TXT }, { t: "\"orders\"", c: STR }, { t: ")", c: TXT }],
    [{ t: "  .join(customers, ", c: TXT }, { t: "\"cust_id\"", c: STR }, { t: ")", c: TXT }],
    [{ t: "  .filter(col(", c: TXT }, { t: "\"status\"", c: STR }, { t: ")==", c: TXT }, { t: "\"PAID\"", c: STR }, { t: ")", c: TXT }],
    [{ t: "  .groupBy(", c: TXT }, { t: "\"customer_id\"", c: STR }, { t: ")", c: TXT }],
    [{ t: "  .agg(sum(", c: TXT }, { t: "\"amount\"", c: STR }, { t: "))", c: TXT }],
    [{ t: ")", c: TXT }],
  ];

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shiftBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14161C" />
          <stop offset="100%" stopColor="#1B1E27" />
        </linearGradient>
        <linearGradient id="shiftGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="16" fill="url(#shiftBg)" />
      <circle cx="120" cy="340" r="150" fill="url(#shiftGlow)" />
      <WindowChrome label="karsient-codeshift — side-by-side diff" />

      {/* left column: real source SQL */}
      <g transform="translate(24,54)">
        <rect width="285" height="320" rx="10" fill="#191C24" stroke="#2A2E3A" />
        <text x="16" y="24" fontFamily="ui-monospace, monospace" fontSize="9" fill="#8B93A7">
          SOURCE SQL (Oracle)
        </text>
        {sourceCode.map((line, i) => codeLine(16, 48 + i * 22, line, 10.5, i))}
      </g>

      {/* arrow */}
      <g transform="translate(310,190)">
        <path d="M0 20 L34 20 M22 8 L34 20 L22 32" stroke="#FF6A00" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* right column: real converted PySpark */}
      <g transform="translate(354,54)">
        <rect width="262" height="320" rx="10" fill="#191C24" stroke="#FF6A00" strokeOpacity="0.4" />
        <text x="16" y="24" fontFamily="ui-monospace, monospace" fontSize="9" fill="#FF6A00">
          DATABRICKS · PYSPARK
        </text>
        {targetCode.map((line, i) => codeLine(16, 52 + i * 24, line, 10.5, i))}
        <g transform="translate(16,272)">
          <rect width="110" height="18" rx="9" fill="#28C840" opacity="0.15" />
          <text x="55" y="13" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#28C840">
            98% confidence
          </text>
        </g>
      </g>
    </svg>
  );
}

export function RevoCodeMockup() {
  const beforeCode: Token[][] = [
    [{ t: "SELECT o.id, c.name", c: TXT }],
    [{ t: "FROM orders o", c: TXT }],
    [{ t: "JOIN (", c: KW }],
    [{ t: "  SELECT * FROM customers", c: MUT }],
    [{ t: ") c ", c: TXT }, { t: "ON ", c: KW }, { t: "o.cid=c.id", c: TXT }],
  ];
  const afterCode: Token[][] = [
    [{ t: "SELECT o.id, c.name", c: TXT }],
    [{ t: "FROM orders o", c: TXT }],
    [{ t: "JOIN customers c", c: TXT }],
    [{ t: "  ON o.cid = c.id", c: TXT }],
    [{ t: "-- pruned unused columns", c: "#28C840" }],
  ];

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="revoBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14161C" />
          <stop offset="100%" stopColor="#1B1E27" />
        </linearGradient>
        <linearGradient id="revoGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="16" fill="url(#revoBg)" />
      <circle cx="480" cy="330" r="150" fill="url(#revoGlow)" />
      <WindowChrome label="karsient-revocode — optimization scorecard" />

      {/* Score cards row */}
      <g transform="translate(24,50)">
        <rect width="592" height="66" rx="10" fill="#191C24" stroke="#2A2E3A" />
        {[
          ["Maintainability", "82/100"],
          ["Technical Debt", "-34%"],
          ["Query Perf.", "+41%"],
          ["Cost Savings", "$18K/mo"],
        ].map(([label, val], i) => (
          <g key={label} transform={`translate(${20 + i * 148},14)`}>
            <text x="0" y="12" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#8B93A7">
              {label}
            </text>
            <text x="0" y="34" fontFamily="ui-monospace, monospace" fontSize="15" fill={i === 1 ? "#28C840" : "#FF6A00"}>
              {val}
            </text>
          </g>
        ))}
      </g>

      {/* Before / after optimization snippet */}
      <g transform="translate(24,128)">
        <rect width="285" height="132" rx="10" fill="#191C24" stroke="#2A2E3A" />
        <text x="16" y="20" fontFamily="ui-monospace, monospace" fontSize="9" fill="#8B93A7">
          BEFORE — nested subquery
        </text>
        {beforeCode.map((line, i) => codeLine(16, 42 + i * 18, line, 9.5, i))}
      </g>
      <g transform="translate(24,128)">
        <path d="M296 66 L318 66 M308 56 L318 66 L308 76" stroke="#FF6A00" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(331,128)">
        <rect width="285" height="132" rx="10" fill="#191C24" stroke="#28C840" strokeOpacity="0.4" />
        <text x="16" y="20" fontFamily="ui-monospace, monospace" fontSize="9" fill="#28C840">
          AFTER — flattened join
        </text>
        {afterCode.map((line, i) => codeLine(16, 42 + i * 18, line, 9.5, i))}
      </g>

      {/* Recommendations list */}
      <g transform="translate(24,270)">
        <rect width="592" height="104" rx="10" fill="#191C24" stroke="#2A2E3A" />
        <text x="16" y="20" fontFamily="ui-monospace, monospace" fontSize="9" fill="#8B93A7">
          RECOMMENDED OPTIMIZATIONS
        </text>
        {[
          ["Enable liquid clustering on gold.sales_fact", "High impact"],
          ["Deprecate unused bronze.legacy_staging job", "Low impact"],
          ["Right-size cluster for nightly batch job", "Medium impact"],
        ].map(([label, tag], i) => (
          <g key={label} transform={`translate(16,${38 + i * 22})`}>
            <rect width="7" height="7" rx="2" fill="#FF6A00" opacity="0.8" />
            <text x="14" y="7" fontFamily="ui-monospace, monospace" fontSize="9.5" fill="#C7CCD9">
              {label}
            </text>
            <rect x="430" y="-4" width="130" height="15" rx="7" fill="#FF6A00" opacity="0.12" />
            <text x="495" y="6.5" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#FF6A00">
              {tag}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function VeriqMockup() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="veriqBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14161C" />
          <stop offset="100%" stopColor="#1B1E27" />
        </linearGradient>
        <linearGradient id="veriqGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="16" fill="url(#veriqBg)" />
      <circle cx="480" cy="60" r="150" fill="url(#veriqGlow)" />
      <WindowChrome label="karsient-veriq — command center" />

      {/* Data Trust Score + top metrics */}
      <g transform="translate(24,50)">
        <rect width="592" height="72" rx="10" fill="#191C24" stroke="#2A2E3A" />
        <g transform="translate(20,14)">
          <text x="0" y="12" fontFamily="ui-monospace, monospace" fontSize="8.5" fill="#8B93A7">
            DATA TRUST SCORE
          </text>
          <text x="0" y="38" fontFamily="ui-monospace, monospace" fontSize="20" fill="#22D3EE">
            91.4
          </text>
        </g>
        {[
          ["Active Incidents", "6"],
          ["Quarantined", "312"],
          ["Auto-Resolved", "84%"],
          ["Avg. Resolution", "11m"],
        ].map(([label, val], i) => (
          <g key={label} transform={`translate(${170 + i * 108},14)`}>
            <text x="0" y="12" fontFamily="ui-monospace, monospace" fontSize="8" fill="#8B93A7">
              {label}
            </text>
            <text x="0" y="34" fontFamily="ui-monospace, monospace" fontSize="15" fill={i === 0 ? "#FF6A00" : "#C7CCD9"}>
              {val}
            </text>
          </g>
        ))}
      </g>

      {/* decision flow strip */}
      <g transform="translate(24,132)">
        <rect width="592" height="46" rx="10" fill="#191C24" stroke="#2A2E3A" />
        {["TRUST", "PASS", "WARN", "QUARANTINE", "REMEDIATE", "REVALIDATE", "RELEASE"].map((s, i) => (
          <g key={s} transform={`translate(${16 + i * 84},16)`}>
            <rect
              width="72"
              height="16"
              rx="8"
              fill={s === "QUARANTINE" ? "#FF6A00" : "#22D3EE"}
              opacity={s === "QUARANTINE" ? 0.22 : 0.12}
            />
            <text
              x="36"
              y="11"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              fontSize="6.5"
              fill={s === "QUARANTINE" ? "#FF6A00" : "#67E8F9"}
            >
              {s}
            </text>
          </g>
        ))}
      </g>

      {/* quarantine / incident list */}
      <g transform="translate(24,190)">
        <rect width="592" height="184" rx="10" fill="#191C24" stroke="#2A2E3A" />
        <text x="16" y="22" fontFamily="ui-monospace, monospace" fontSize="9" fill="#8B93A7">
          SMART QUARANTINE — ROOT CAUSE GROUPED
        </text>
        {[
          ["customers.date_of_birth — format anomaly", "1,204 records", "High"],
          ["orders.customer_id — referential integrity", "88 records", "Medium"],
          ["gold.revenue_kpi — aggregation drift", "3 datasets", "High"],
          ["silver.shipments — duplicate keys", "412 records", "Low"],
        ].map(([label, count, sev], i) => (
          <g key={label} transform={`translate(16,${42 + i * 34})`}>
            <rect width="7" height="7" rx="2" fill={sev === "High" ? "#FF6A00" : sev === "Medium" ? "#FFBD2E" : "#22D3EE"} />
            <text x="14" y="7" fontFamily="ui-monospace, monospace" fontSize="9.5" fill="#C7CCD9">
              {label}
            </text>
            <text x="14" y="21" fontFamily="ui-monospace, monospace" fontSize="8" fill="#6B7280">
              {count}
            </text>
            <rect x="480" y="-4" width="80" height="16" rx="8" fill="#22D3EE" opacity="0.12" />
            <text x="520" y="7" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#67E8F9">
              {sev} impact
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export const productMockups: Record<string, () => JSX.Element> = {
  "karsient-shiftiq": ShiftIQMockup,
  "karsient-codeshift": CodeShiftMockup,
  "karsient-revocode": RevoCodeMockup,
  "karsient-veriq": VeriqMockup,
};
