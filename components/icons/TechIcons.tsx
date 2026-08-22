import type { SVGProps, JSX } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* Generic AI (neural node mark) */
export function IconAI(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="6" r="3" fill="url(#ai-grad)" />
      <circle cx="6" cy="16" r="3" fill="url(#ai-grad)" />
      <circle cx="26" cy="16" r="3" fill="url(#ai-grad)" />
      <circle cx="16" cy="26" r="3" fill="url(#ai-grad)" />
      <circle cx="16" cy="16" r="4.4" fill="url(#ai-grad)" />
      <g stroke="url(#ai-grad)" strokeWidth="1.6">
        <path d="M16 9v3M16 20v3M9 16h3M20 16h3" />
      </g>
      <defs>
        <linearGradient id="ai-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FF6A00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* OpenAI-style chip mark */
export function IconGPT(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect x="4" y="4" width="24" height="24" rx="7" stroke="currentColor" strokeWidth="2" />
      <rect x="11" y="11" width="10" height="10" rx="2.4" fill="currentColor" />
      <path d="M16 1v3M16 28v3M1 16h3M28 16h3M6 6l2 2M24 24l2 2M6 26l2-2M24 8l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* Anthropic / Claude inspired sunburst */
export function IconClaude(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <g fill="#FF6A00">
        <rect x="14.4" y="2" width="3.2" height="9" rx="1.6" />
        <rect x="14.4" y="21" width="3.2" height="9" rx="1.6" transform="rotate(180 16 25.5)" />
        <rect x="14.4" y="2" width="3.2" height="9" rx="1.6" transform="rotate(30 16 16)" />
        <rect x="14.4" y="2" width="3.2" height="9" rx="1.6" transform="rotate(-30 16 16)" />
        <rect x="14.4" y="2" width="3.2" height="9" rx="1.6" transform="rotate(60 16 16)" />
        <rect x="14.4" y="2" width="3.2" height="9" rx="1.6" transform="rotate(-60 16 16)" />
        <rect x="14.4" y="2" width="3.2" height="9" rx="1.6" transform="rotate(90 16 16)" />
      </g>
    </svg>
  );
}

export function IconLangChain(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="11" cy="11" r="6" stroke="#3DDC97" strokeWidth="2.4" />
      <circle cx="21" cy="21" r="6" stroke="#1C9A6C" strokeWidth="2.4" />
      <path d="M14.5 14.5 17.5 17.5" stroke="#3DDC97" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconRAG(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="13" cy="13" r="8" stroke="#FF8A3D" strokeWidth="2.2" />
      <path d="M19 19 27 27" stroke="#FF8A3D" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="10" cy="11" r="1.6" fill="#FF6A00" />
      <circle cx="15" cy="10" r="1.6" fill="#FF6A00" />
      <circle cx="12.5" cy="15" r="1.6" fill="#FF6A00" />
    </svg>
  );
}

/* Databricks flame / lakehouse mark */
export function IconDatabricks(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M4 10 16 4l12 6-12 6-12-6Z" fill="#FF3621" />
      <path d="M4 16 16 10l12 6-12 6-12-6Z" fill="#FF3621" opacity="0.75" />
      <path d="M4 22 16 16l12 6-12 6-12-6Z" fill="#FF3621" opacity="0.5" />
    </svg>
  );
}

/* Apache Spark flame */
export function IconSpark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 2c2 4-2 6-2 9 0 2 1.5 3 3 3 2 0 3-1.6 3-3.4C23 14 25 18 25 21c0 5-4 9-9 9s-9-4-9-9c0-3.4 2-6 4-8-.3 2 .6 3.4 2 3.4 1.6 0 2-1.6 1-3C12 10.6 13.2 5.6 16 2Z"
        fill="url(#spark-grad)"
      />
      <defs>
        <linearGradient id="spark-grad" x1="7" y1="2" x2="25" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC93C" />
          <stop offset="1" stopColor="#E8542A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Microsoft Azure */
export function IconAzure(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M13.4 4h6.4l8.4 22.6H20l-4.6-13.4L13.4 4Z" fill="#0078D4" />
      <path d="M2 27.6 12.4 4h5L7.3 24l-5.3 3.6Z" fill="#50E6FF" />
    </svg>
  );
}

/* AWS */
export function IconAWS(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <text x="16" y="18" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="13" fill="#FF9900">
        aws
      </text>
      <path d="M5 22c5.5 3.4 16.5 3.4 22 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M24.5 20.8c1.6-.5 2.8-.3 3 .1.2.4-.4 1.7-1.5 2.7" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* Power BI */
export function IconPowerBI(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect x="4" y="14" width="6" height="14" rx="1.2" fill="#F2C811" />
      <rect x="13" y="8" width="6" height="20" rx="1.2" fill="#F2C811" opacity="0.8" />
      <rect x="22" y="2" width="6" height="26" rx="1.2" fill="#F2C811" opacity="0.6" />
    </svg>
  );
}

/* Microsoft Fabric */
export function IconFabric(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M16 3 27 9.5v13L16 29 5 22.5v-13L16 3Z" stroke="url(#fabric-grad)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 3v26M5 9.5l11 6.5 11-6.5M5 22.5l11-6.5 11 6.5" stroke="url(#fabric-grad)" strokeWidth="1.4" opacity="0.6" />
      <defs>
        <linearGradient id="fabric-grad" x1="5" y1="3" x2="27" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BFF8" />
          <stop offset="1" stopColor="#9B6BF2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Snowflake */
export function IconSnowflake(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <g stroke="#29B5E8" strokeWidth="2" strokeLinecap="round">
        <path d="M16 3v26M4.5 9.5l23 13M4.5 22.5l23-13" />
        <path d="M16 3l-2.4 2.4M16 3l2.4 2.4M16 29l-2.4-2.4M16 29l2.4-2.4" />
        <path d="M4.5 9.5l3.3.4M4.5 9.5l1-3.2M27.5 22.5l-3.3-.4M27.5 22.5l-1 3.2" />
        <path d="M4.5 22.5l3.3-.4M4.5 22.5l1 3.2M27.5 9.5l-3.3.4M27.5 9.5l-1-3.2" />
      </g>
    </svg>
  );
}

/* dbt bowtie */
export function IconDbt(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="9" cy="16" r="6" stroke="#FF694B" strokeWidth="2.4" />
      <circle cx="23" cy="9" r="4" stroke="#FF694B" strokeWidth="2.4" />
      <circle cx="23" cy="23" r="4" stroke="#FF694B" strokeWidth="2.4" />
    </svg>
  );
}

/* Apache Kafka */
export function IconKafka(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <g fill="currentColor">
        <circle cx="7" cy="8" r="2.6" />
        <circle cx="7" cy="24" r="2.6" />
        <circle cx="16" cy="16" r="2.6" />
        <circle cx="25" cy="8" r="2.6" />
        <circle cx="25" cy="24" r="2.6" />
      </g>
      <g stroke="currentColor" strokeWidth="1.4">
        <path d="M9.3 9.3 14 14.6M9.3 22.7 14 17.4M18 14.6l4.7-5.3M18 17.4l4.7 5.3" />
      </g>
    </svg>
  );
}

/* Python */
export function IconPython(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M15.9 3c-4.6 0-4.3 2-4.3 2v3h4.4v.9H8.3S5 8.5 5 13.2s2.9 4.6 2.9 4.6h1.9v-3.1s-.1-2.9 2.9-2.9h4.4s2.8 0 2.8-2.7V5.7S20.3 3 15.9 3Zm-2.4 1.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
        fill="#3776AB"
      />
      <path
        d="M16.1 29c4.6 0 4.3-2 4.3-2v-3h-4.4v-.9h7.7s3.3.4 3.3-4.3-2.9-4.6-2.9-4.6h-1.9v3.1s.1 2.9-2.9 2.9h-4.4s-2.8 0-2.8 2.7v4.4S11.7 29 16.1 29Zm2.4-1.6a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

/* SQL / relational database */
export function IconSQL(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <ellipse cx="16" cy="7" rx="11" ry="4" stroke="#4DA1FF" strokeWidth="2" />
      <path d="M5 7v9c0 2.2 4.9 4 11 4s11-1.8 11-4V7" stroke="#4DA1FF" strokeWidth="2" />
      <path d="M5 16v9c0 2.2 4.9 4 11 4s11-1.8 11-4v-9" stroke="#4DA1FF" strokeWidth="2" />
    </svg>
  );
}

/* Delta Lake */
export function IconDeltaLake(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M16 4 28 26H4L16 4Z" stroke="#00ADD4" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M16 12 22 23H10L16 12Z" fill="#00ADD4" opacity="0.5" />
    </svg>
  );
}

/* Unity Catalog */
export function IconUnityCatalog(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M16 3 27 8v9c0 6.5-4.6 10.8-11 12-6.4-1.2-11-5.5-11-12V8l11-5Z" stroke="#8A5CF7" strokeWidth="2" strokeLinejoin="round" />
      <path d="M11 16l3.5 3.5L21 12" stroke="#8A5CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Azure Monitor - pulse */
export function IconAzureMonitor(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="13" stroke="#0078D4" strokeWidth="2" opacity="0.4" />
      <path d="M5 17h4l2.5-7 4 14 2.5-9h4.6" stroke="#0078D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Cloud operations */
export function IconCloudOps(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M10 22a5.5 5.5 0 0 1-.6-11 6.5 6.5 0 0 1 12.6-2.2A5 5 0 0 1 23 18.9V19H10Z"
        stroke="#9AA5B1"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 22v6M13 25.5h6" stroke="#9AA5B1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Terraform */
export function IconTerraform(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <g fill="#7B42BC">
        <path d="M6 4 14 8.4v9L6 13V4Z" />
        <path d="M15.4 8.6 23.4 4v9l-8 4.6v-9Z" opacity="0.75" />
        <path d="M6 14.4 14 18.8v9L6 23.8v-9.4Z" opacity="0.55" />
      </g>
    </svg>
  );
}

/* Vector search */
export function IconVectorSearch(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="9" cy="9" r="4" fill="#FF8A3D" opacity="0.5" />
      <circle cx="21" cy="8" r="3" fill="#FF6A00" opacity="0.7" />
      <circle cx="15" cy="18" r="3.4" fill="#FF6A00" />
      <circle cx="24" cy="20" r="2.4" fill="#FF8A3D" opacity="0.6" />
      <path d="M11.5 11 13.8 15.8M18 9.6 16.4 15.6M17.7 19 21.7 19.6" stroke="#FF6A00" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="25" cy="25" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M28.5 28.5 31 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Semantic model */
export function IconSemanticModel(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect x="4" y="4" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="19" y="4" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="11.5" y="19" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 13v3.5a3 3 0 0 0 3 3H14M23.5 13v3.5a3 3 0 0 1-3 3H18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/* AI Genie Dashboard illustration — conversational analytics / executive insights */
export function AnalyticsGenieIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 80" fill="none" {...props}>
      {/* dashboard panel */}
      <rect x="2" y="6" width="140" height="68" rx="12" className="fill-white/[0.04]" stroke="url(#genie-grad)" strokeWidth="1.4" />
      {/* bars */}
      <rect x="16" y="46" width="14" height="18" rx="3" fill="url(#genie-grad)" opacity="0.55" />
      <rect x="36" y="34" width="14" height="30" rx="3" fill="url(#genie-grad)" opacity="0.75" />
      <rect x="56" y="22" width="14" height="42" rx="3" fill="url(#genie-grad)" />
      {/* trend line */}
      <path d="M84 52 100 38 112 44 130 20" stroke="url(#genie-grad)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="130" cy="20" r="3" fill="#FF8A3D" />
      {/* genie chat bubble */}
      <g transform="translate(140 2)">
        <rect x="0" y="0" width="78" height="46" rx="14" className="fill-white/[0.06]" stroke="url(#genie-grad)" strokeWidth="1.4" />
        <path d="M14 46 6 58 22 46Z" className="fill-white/[0.06]" stroke="url(#genie-grad)" strokeWidth="1.4" strokeLinejoin="round" />
        <path
          d="M39 10 42 17 49 19 42 21 39 28 36 21 29 19 36 17Z"
          fill="url(#genie-grad)"
        />
        <path d="M14 30h30M14 36h20" stroke="url(#genie-grad)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      </g>
      <defs>
        <linearGradient id="genie-grad" x1="2" y1="2" x2="218" y2="78" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FF6A00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Talend (stylised abstract mark, not the literal brand logo) */
export function IconTalend(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="10" cy="16" r="6.4" fill="#1A8CFF" />
      <circle cx="21.5" cy="9.5" r="4.2" fill="#FF6D2D" />
      <circle cx="21.5" cy="22.5" r="4.2" fill="#00C6B3" />
    </svg>
  );
}

/* Vertica (stylised abstract mark, not the literal brand logo) */
export function IconVertica(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M6 27 16 5l10 22" stroke="#0F6FDE" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M11 20h10" stroke="#0F6FDE" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/* Oracle (stylised abstract mark, not the literal brand logo) */
export function IconOracle(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect x="4" y="12" width="24" height="8" rx="4" stroke="#F80000" strokeWidth="2.4" />
    </svg>
  );
}

/* Informatica (stylised abstract mark, not the literal brand logo) */
export function IconInformatica(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="10" cy="16" r="5" stroke="#FF4F1F" strokeWidth="2.4" />
      <circle cx="22" cy="16" r="5" stroke="#00263E" strokeWidth="2.4" />
    </svg>
  );
}

/* SSIS / SQL Server Integration Services (stylised abstract mark) */
export function IconSSIS(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M5 22 12 10h8l7 12" stroke="#A4373A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/* Teradata (stylised abstract mark, not the literal brand logo) */
export function IconTeradata(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="10" r="4" fill="#F37440" />
      <circle cx="9" cy="21" r="4" fill="#8F3494" />
      <circle cx="23" cy="21" r="4" fill="#0D0D0D" stroke="#666" strokeWidth="0.5" />
    </svg>
  );
}

export type LogoKey =
  | "ai"
  | "gpt"
  | "openai"
  | "claude"
  | "langchain"
  | "rag"
  | "vectorsearch"
  | "semanticmodel"
  | "databricks"
  | "spark"
  | "azure"
  | "aws"
  | "powerbi"
  | "fabric"
  | "snowflake"
  | "dbt"
  | "kafka"
  | "python"
  | "sql"
  | "deltalake"
  | "unitycatalog"
  | "azuremonitor"
  | "cloudops"
  | "terraform"
  | "talend"
  | "vertica"
  | "oracle"
  | "informatica"
  | "ssis"
  | "teradata"
  | "airflow"
  | "postgresql"
  | "salesforce"
  | "googlecloud"
  | "sap"
  | "cockroachdb"
  | "mongodb"
  | "pinecone";

export const techIconMap: Record<LogoKey, (props: IconProps) => JSX.Element> = {
  ai: IconAI,
  gpt: IconGPT,
  openai: IconGPT,
  claude: IconClaude,
  langchain: IconLangChain,
  rag: IconRAG,
  vectorsearch: IconVectorSearch,
  semanticmodel: IconSemanticModel,
  databricks: IconDatabricks,
  spark: IconSpark,
  azure: IconAzure,
  aws: IconAWS,
  powerbi: IconPowerBI,
  fabric: IconFabric,
  snowflake: IconSnowflake,
  dbt: IconDbt,
  kafka: IconKafka,
  python: IconPython,
  sql: IconSQL,
  deltalake: IconDeltaLake,
  unitycatalog: IconUnityCatalog,
  azuremonitor: IconAzureMonitor,
  cloudops: IconCloudOps,
  terraform: IconTerraform,
  talend: IconTalend,
  vertica: IconVertica,
  oracle: IconOracle,
  informatica: IconInformatica,
  ssis: IconSSIS,
  teradata: IconTeradata,
  airflow: IconCloudOps,
  postgresql: IconSQL,
  salesforce: IconCloudOps,
  googlecloud: IconCloudOps,
  sap: IconCloudOps,
  cockroachdb: IconSQL,
  mongodb: IconSQL,
  pinecone: IconVectorSearch,
};

export const techLabels: Record<LogoKey, string> = {
  ai: "Generative AI",
  gpt: "GPT",
  openai: "OpenAI",
  claude: "Claude",
  langchain: "LangChain",
  rag: "RAG",
  vectorsearch: "Vector Search",
  semanticmodel: "Semantic Models",
  databricks: "Databricks",
  spark: "Apache Spark",
  azure: "Microsoft Azure",
  aws: "AWS",
  powerbi: "Power BI",
  fabric: "Microsoft Fabric",
  snowflake: "Snowflake",
  dbt: "dbt",
  kafka: "Apache Kafka",
  python: "Python",
  sql: "SQL",
  deltalake: "Delta Lake",
  unitycatalog: "Unity Catalog",
  azuremonitor: "Azure Monitor",
  cloudops: "Cloud Operations",
  terraform: "Terraform",
  talend: "Talend",
  vertica: "Vertica",
  oracle: "Oracle",
  informatica: "Informatica",
  ssis: "SSIS",
  teradata: "Teradata",
  airflow: "Apache Airflow",
  postgresql: "PostgreSQL",
  salesforce: "Salesforce",
  googlecloud: "Google Cloud",
  sap: "SAP",
  cockroachdb: "CockroachDB",
  mongodb: "MongoDB",
  pinecone: "Pinecone",
};

/**
 * Real brand logo assets (provided by the user), served from /public/logos.
 * TechIcon prefers these over the hand-drawn SVG components below when a
 * real asset is available for a given key.
 */
export const logoImageMap: Partial<Record<LogoKey, { src: string; wide?: boolean; onDark?: boolean }>> = {
  databricks: { src: "/logos/databricks.svg" },
  spark: { src: "/logos/spark.svg" },
  azure: { src: "/logos/azure.svg" },
  aws: { src: "/logos/aws.svg" },
  powerbi: { src: "/logos/powerbi.svg" },
  snowflake: { src: "/logos/snowflake.png", wide: true },
  dbt: { src: "/logos/dbt.svg" },
  kafka: { src: "/logos/kafka.svg" },
  python: { src: "/logos/python.svg" },
  sql: { src: "/logos/sql.png" },
  deltalake: { src: "/logos/deltalake.svg" },
  unitycatalog: { src: "/logos/unitycatalog.svg" },
  terraform: { src: "/logos/terraform.svg" },
  talend: { src: "/logos/talend.svg" },
  gpt: { src: "/logos/openai-alt.svg", onDark: true },
  openai: { src: "/logos/openai-alt.svg", onDark: true },
  langchain: { src: "/logos/langchain.svg", wide: true },
  airflow: { src: "/logos/airflow.svg" },
  postgresql: { src: "/logos/postgresql.svg" },
  salesforce: { src: "/logos/salesforce.svg" },
  fabric: { src: "/logos/fabric.svg" },
  teradata: { src: "/logos/teradata.svg" },
  googlecloud: { src: "/logos/googlecloud.svg" },
  claude: { src: "/logos/claude.svg" },
  sap: { src: "/logos/sap.svg" },
  cockroachdb: { src: "/logos/cockroachdb.svg" },
  mongodb: { src: "/logos/mongodb.svg" },
  pinecone: { src: "/logos/pinecone.svg" },
};

export function TechIcon({
  name,
  className,
  bare,
}: {
  name: LogoKey;
  className?: string;
  /** Skip the auto white-chip wrapper — use when the parent already supplies a white/light background. */
  bare?: boolean;
}) {
  const logo = logoImageMap[name];
  if (logo) {
    if (logo.onDark || bare) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo.src} alt={techLabels[name]} className={`${className ?? ""} object-contain`} loading="lazy" />
      );
    }
    return (
      <span className={`${className ?? ""} inline-flex items-center justify-center rounded-[6px] bg-white p-[3%]`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt={techLabels[name]} className="h-full w-full object-contain" loading="lazy" />
      </span>
    );
  }
  const Cmp = techIconMap[name];
  return <Cmp className={className} />;
}
