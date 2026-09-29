export type InsightBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string; emoji?: string }
  | { kind: "list"; items: string[] }
  | { kind: "flow"; steps: string[] }
  | { kind: "callout"; title?: string; items: string[] }
  | { kind: "quote"; text: string };

export type InsightArticle = {
  slug: string;
  series?: string;
  tag: string;
  title: string;
  summary: string;
  readTime: string;
  body: InsightBlock[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "medallion-architecture-layers",
    tag: "Lakehouse",
    title: "Medallion Architecture: More Than Just Bronze, Silver & Gold",
    summary:
      "When organizations build a modern data platform, one of the most widely used patterns is Medallion Architecture. But what actually happens in each layer?",
    readTime: "6 min read",
    body: [
      {
        kind: "p",
        text: "When organizations build a modern data platform, one of the most widely used patterns is Medallion Architecture. But what actually happens in each layer?",
      },
      { kind: "h3", emoji: "\u{1F949}", text: "Bronze \u2014 Raw Data Layer" },
      {
        kind: "p",
        text: "The goal is to preserve data as it arrives from the source. Sources can include ERP & CRM systems, APIs, SaaS applications, Kafka / streaming, IoT, files, and CDC databases.",
      },
      {
        kind: "list",
        items: [
          "Ingestion",
          "Schema capture",
          "Metadata & audit information",
          "Incremental/CDC processing",
          "Minimal transformation",
        ],
      },
      {
        kind: "quote",
        text: "Key principle: Keep the source data reproducible and auditable. If business logic changes later, Bronze allows you to reprocess the data without repeatedly extracting everything from the source.",
      },
      { kind: "h3", emoji: "\u{1F948}", text: "Silver \u2014 Clean & Conformed Data" },
      { kind: "p", text: "This is where raw data becomes trusted data." },
      {
        kind: "list",
        items: [
          "Data cleansing",
          "Deduplication",
          "Data validation",
          "Schema enforcement",
          "Data type standardization",
          "CDC handling",
          "Joining multiple sources",
          "Business-rule validation",
        ],
      },
      { kind: "flow", steps: ["CRM + ERP + Billing", "Unified Customer Dataset"] },
      {
        kind: "p",
        text: "Silver creates standardized, reusable data for analytics, ML, and downstream data products.",
      },
      { kind: "h3", emoji: "\u{1F947}", text: "Gold \u2014 Business-Ready Data" },
      { kind: "p", text: "Gold converts technical datasets into business-focused information \u2014 revenue analytics, risk analytics, customer analytics, executive KPIs, ML features, and AI/RAG datasets." },
      {
        kind: "p",
        text: "Instead of exposing raw technical fields, Gold can provide meaningful business concepts such as Revenue, Customer Lifetime Value, Claim Severity, and Churn Rate.",
      },
      {
        kind: "quote",
        text: "The question Gold should answer is: what business decision can this data support?",
      },
      { kind: "h2", text: "Why is Medallion useful?" },
      { kind: "p", text: "It creates a controlled progression: Raw \u2192 Clean \u2192 Trusted \u2192 Business Ready." },
      {
        kind: "list",
        items: [
          "Data quality",
          "Reprocessing",
          "Governance",
          "Lineage",
          "Maintainability",
          "Separation of responsibilities",
          "Batch + streaming pipelines",
          "Analytics & AI consumption",
        ],
      },
      {
        kind: "p",
        text: "But here is the important architecture point: Medallion is not the only data architecture. It is a data refinement pattern that can work together with other approaches \u2014 which leads to the next question: should you use Medallion, Data Vault, Dimensional Modeling, Data Mesh, or Lakehouse? That's where architecture decisions become interesting.",
      },
    ],
  },
  {
    slug: "medallion-vs-data-vault-vs-data-mesh",
    tag: "Data Architecture",
    title: "Medallion vs Data Vault vs Data Mesh vs Dimensional Modeling",
    summary:
      "A common mistake in data architecture is asking 'which architecture is better?' The better question is: which problem are we trying to solve?",
    readTime: "8 min read",
    body: [
      {
        kind: "p",
        text: "A common mistake in data architecture is asking \u201cwhich architecture is better?\u201d The better question is \u201cwhich problem are we trying to solve?\u201d Different architectural patterns solve different problems.",
      },
      { kind: "h3", emoji: "\u{1F949}", text: "Medallion Architecture \u2014 Purpose: Data Refinement" },
      { kind: "flow", steps: ["Bronze", "Silver", "Gold"] },
      {
        kind: "list",
        items: [
          "Progressive data quality",
          "Raw-data preservation",
          "Data transformation",
          "Batch + streaming",
          "Analytics & AI pipelines",
        ],
      },
      { kind: "h3", emoji: "\u{1F3DB}\uFE0F", text: "Data Vault \u2014 Purpose: Historical Enterprise Data Integration" },
      { kind: "p", text: "Built around Hubs, Links, and Satellites. Useful when you have many source systems, complex enterprise integration, strong historical requirements, auditability, and frequently changing source systems." },
      {
        kind: "p",
        text: "Data Vault and Medallion don't necessarily compete \u2014 for example: Bronze for raw ingestion, Silver modeled as Data Vault, Gold for business models.",
      },
      { kind: "h3", emoji: "\u{1F4CA}", text: "Dimensional Modeling \u2014 Purpose: Analytics & BI" },
      { kind: "p", text: "Typical structures are fact tables and dimension tables \u2014 for example FactSales, DimCustomer, DimProduct, DimDate." },
      {
        kind: "list",
        items: ["BI dashboards", "Reporting", "KPIs", "Analytical workloads", "Business-facing data marts"],
      },
      {
        kind: "p",
        text: "Medallion can provide the refinement pipeline while dimensional modeling structures the Gold layer.",
      },
      { kind: "h3", emoji: "\u{1F310}", text: "Data Mesh \u2014 Purpose: Domain Ownership" },
      {
        kind: "p",
        text: "Instead of one centralized team owning everything, domains like Finance, Healthcare, Supply Chain, Retail, and Marketing can own their respective data products.",
      },
      {
        kind: "list",
        items: ["Domain ownership", "Data as a product", "Self-service platform", "Federated governance"],
      },
      { kind: "p", text: "Medallion can still be used inside individual domains." },
      { kind: "h3", emoji: "\u2601\uFE0F", text: "Lakehouse \u2014 Purpose: Modern Data Platform" },
      {
        kind: "p",
        text: "A Lakehouse brings together capabilities traditionally associated with a Data Lake, a Data Warehouse, and ML/AI.",
      },
      { kind: "flow", steps: ["Object Storage", "Bronze", "Silver", "Gold", "BI / ML / RAG / AI Agents / Applications"] },
      { kind: "p", text: "Medallion therefore can be a logical organization pattern inside a Lakehouse." },
      { kind: "h2", text: "Modern Enterprise Architecture" },
      { kind: "p", text: "These patterns can work together, end to end:" },
      {
        kind: "flow",
        steps: [
          "Sources (ERP, CRM, APIs, Kafka, SaaS)",
          "Ingestion (Batch / CDC / Streaming)",
          "Bronze \u2014 Raw + Auditable",
          "Silver \u2014 Clean + Conformed + Integrated",
          "Data Modeling (Data Vault / Dimensional / Domain Models)",
          "Gold \u2014 Business Data Products",
          "Consumption (BI / ML / RAG / Agentic AI / Applications)",
        ],
      },
      {
        kind: "callout",
        title: "Governance runs across all layers",
        items: ["Security", "Quality", "Lineage", "Catalog", "Observability"],
      },
      { kind: "h2", text: "The key takeaway" },
      {
        kind: "list",
        items: [
          "Medallion \u2014 how data gets refined",
          "Data Vault \u2014 how enterprise history is integrated",
          "Dimensional Modeling \u2014 how analytics data is structured",
          "Data Mesh \u2014 who owns and manages data",
          "Lakehouse \u2014 where modern data workloads can operate",
        ],
      },
      {
        kind: "quote",
        text: "The best enterprise architecture often combines these patterns based on business requirements. Don't choose an architecture because it is popular.",
      },
    ],
  },
  {
    slug: "iceberg-vs-delta-lake-vs-hudi",
    tag: "Lakehouse",
    title: "Apache Iceberg vs Delta Lake vs Hudi: Choosing the Right Open Table Format",
    summary:
      "There isn't a universal winner. The real architectural question is: what does your enterprise need five years from now?",
    readTime: "6 min read",
    body: [
      {
        kind: "p",
        text: "There isn't a universal winner. Modern data platforms increasingly need an open table format that can support ACID transactions, schema evolution, streaming, CDC, governance, and multiple processing engines.",
      },
      { kind: "quote", text: "The real architectural question is: what does your enterprise need five years from now?" },
      {
        kind: "list",
        items: [
          "\u{1F9CA} Iceberg \u2014 a strong choice for open, multi-engine architectures.",
          "\u26A1 Delta Lake \u2014 compelling for mature lakehouse and Databricks-centric workloads.",
          "\u{1F525} Hudi \u2014 particularly useful for incremental processing and high-volume upserts.",
        ],
      },
      {
        kind: "p",
        text: "At Karsient, we believe table-format selection should start with business workload and target architecture \u2014 not technology hype.",
      },
      { kind: "h2", text: "Architecture insight" },
      { kind: "p", text: "Choose Iceberg when interoperability across Spark, Trino, Flink, Snowflake, and other engines is a priority." },
      { kind: "p", text: "Choose Delta Lake when you need mature ACID transactions, governance, streaming + batch convergence, and a strong Databricks lakehouse architecture." },
      { kind: "p", text: "Choose Hudi when your platform is heavily driven by CDC, upserts, and incremental processing." },
      { kind: "h2", text: "Our perspective" },
      { kind: "p", text: "Don't select a table format because it's trending. Select it based on:" },
      {
        kind: "flow",
        steps: ["Workload", "Engines", "Governance", "CDC", "Performance", "Cost", "Future architecture"],
      },
      { kind: "quote", text: "Architecture beats hype." },
    ],
  },
  {
    slug: "mcp-ai-agents-enterprise-tools",
    tag: "Agentic AI",
    series: "Enterprise AI Watch",
    title: "MCP \u2014 How AI Agents Connect to Enterprise Tools",
    summary:
      "An AI agent can reason. But reasoning alone doesn't make an agent useful — it needs to securely interact with the systems where work actually happens.",
    readTime: "7 min read",
    body: [
      { kind: "p", text: "An AI agent can reason. But reasoning alone doesn't make an agent useful." },
      {
        kind: "p",
        text: "To create real business impact, an agent needs to securely interact with the systems where work actually happens: data, APIs, databases, applications, documents, and enterprise tools. That is where Model Context Protocol (MCP) comes in.",
      },
      { kind: "quote", text: "Think of MCP as a connectivity layer for AI agents." },
      {
        kind: "p",
        text: "Instead of building a custom integration for every agent-to-tool connection, one standardized protocol can provide a consistent way for agents to discover and use tools, resources, and prompts.",
      },
      { kind: "flow", steps: ["AI Agent", "MCP", "Enterprise Tools & Data"] },
      { kind: "h2", text: "A simple enterprise scenario" },
      { kind: "p", text: "Imagine a Procurement AI Agent. A user asks: \u201cFind the best supplier for this order and create a purchase recommendation.\u201d" },
      { kind: "p", text: "The agent may need to:" },
      {
        kind: "list",
        items: [
          "Search supplier data",
          "Compare prices",
          "Check contracts",
          "Query ERP systems",
          "Review spend analytics",
          "Apply procurement policies",
          "Generate a recommendation",
        ],
      },
      {
        kind: "p",
        text: "Without a standardized connectivity layer, every integration can become another custom engineering problem. With MCP, the agent can interact with these capabilities through a common protocol:",
      },
      {
        kind: "list",
        items: [
          "Agent \u2192 MCP \u2192 Supplier DB",
          "Agent \u2192 MCP \u2192 Contract Repository",
          "Agent \u2192 MCP \u2192 ERP",
          "Agent \u2192 MCP \u2192 Analytics APIs",
        ],
      },
      { kind: "h2", text: "Why this matters" },
      {
        kind: "list",
        items: [
          "Interoperability \u2014 connect agents with many tools and platforms",
          "Scalability \u2014 add capabilities without redesigning the entire agent",
          "Governance \u2014 enterprise access controls and policies still matter at every interaction",
          "Observability \u2014 understand what tools agents are using and how",
          "Faster innovation \u2014 move from building integrations repeatedly to building reusable agent capabilities",
        ],
      },
      {
        kind: "p",
        text: "The ecosystem is moving quickly. The MCP 2026-07-28 specification introduces a stateless protocol core, improved routing, cacheable discovery results, and stronger authorization mechanisms \u2014 important steps toward production-scale agent infrastructure.",
      },
      {
        kind: "p",
        text: "Databricks is also bringing MCP directly into its enterprise AI architecture, allowing agents and AI assistants to connect with Databricks data and tools, while Unity AI Gateway can govern MCP servers and their interactions.",
      },
      { kind: "h2", text: "The bigger picture" },
      { kind: "flow", steps: ["LLM", "Agent", "MCP", "Tools", "Enterprise Systems"] },
      {
        kind: "quote",
        text: "The future isn't just AI that can answer. It's AI that can reason, access, act, and operate \u2014 securely.",
      },
      {
        kind: "p",
        text: "At Karsient, we believe the next generation of enterprise architecture will be built around this shift from AI assistants, to AI agents, to governed agent ecosystems. The future is agentic. The foundation is connectivity.",
      },
    ],
  },
  {
    slug: "databricks-ontology-enterprise-ai-context",
    tag: "AI Governance",
    series: "Hot Topic \u201301",
    title: "Databricks Ontology: Giving Enterprise AI the Context It Needs",
    summary:
      "Data can be technically correct — yet still mean different things to different teams. That's where ontology becomes powerful.",
    readTime: "6 min read",
    body: [
      { kind: "p", text: "Data can be technically correct \u2014 yet still mean different things to different teams. That's where ontology becomes powerful." },
      {
        kind: "p",
        text: "Databricks' Genie Ontology creates a business-aware map of your organization by connecting business terms, definitions, relationships, metrics, and knowledge across enterprise data. It is designed to help Genie deliver more accurate, context-aware answers.",
      },
      { kind: "h2", text: "A simple example: insurance claims" },
      { kind: "p", text: "Imagine three teams using the same business concept:" },
      {
        kind: "list",
        items: ["Claims team: Policy ID", "Finance team: Policy Number", "Underwriting team: Policy No."],
      },
      {
        kind: "p",
        text: "Technically, these may point to the same business entity \u2014 but without shared context, analytics and AI systems can interpret them inconsistently.",
      },
      { kind: "p", text: "With an ontology, the organization can establish:" },
      { kind: "flow", steps: ["Policy", "Customer", "Claim", "Coverage", "Payment"] },
      { kind: "p", text: "\u2026 along with the business definitions, relationships, and trusted sources behind those concepts." },
      { kind: "quote", text: "Now an AI assistant doesn't just see columns and tables. It understands the business context behind them." },
      { kind: "h2", text: "Why this matters" },
      {
        kind: "list",
        items: [
          "More consistent business definitions",
          "Better context for AI & GenAI",
          "More trustworthy analytics",
          "Faster data discovery",
          "Stronger alignment between business and data teams",
          "A foundation for context-aware enterprise agents",
        ],
      },
      { kind: "p", text: "The bigger shift is this:" },
      { kind: "flow", steps: ["Data", "Information", "Context", "Intelligence"] },
      {
        kind: "quote",
        text: "At Karsient, we see ontology as an important step toward building enterprise data platforms where AI doesn't simply query data \u2014 it understands how the business works.",
      },
      { kind: "p", text: "Turn your data into intelligence. With context." },
    ],
  },
];
