export const site = {
  name: "Karsient",
  legalName: "Karsient Private Limited",
  tagline: "Building intelligent AI solutions for the future",
  subTagline: "Engineering Tomorrow's Intelligent Enterprises",
  domain: "karsient.com",
  url: "https://karsient.com",
  email: "contact@karsient.com",
  phone: "+91 76048 89603",
  phoneRaw: "917604889603",
  address: "21/114, Sammattipuram Main Road, Madurai, Tamil Nadu 625016, India",
  linkedin: "https://www.linkedin.com/company/karsient",
  directors: ["Parameshwari Jeyaraj", "Jeyaraj A"],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "databricks-consulting",
    name: "Databricks Consulting",
    short: "Lakehouse architecture, migration, and optimisation.",
    description:
      "We design, build, and tune Databricks lakehouses that unify your data and AI workloads — from workspace architecture to Unity Catalog governance and job-cost optimisation.",
    capabilities: [
      "Lakehouse architecture & workspace design",
      "Unity Catalog governance setup",
      "Delta Live Tables pipelines",
      "Cluster & cost optimisation",
    ],
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    short: "Reliable pipelines that turn raw data into a product.",
    description:
      "We build batch and streaming pipelines engineered for scale, observability, and low maintenance overhead — so your teams trust the numbers on day one.",
    capabilities: [
      "Batch & streaming pipeline design",
      "Orchestration (Airflow, Dagster, Workflows)",
      "Data quality & observability",
      "Schema & contract management",
    ],
  },
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    short: "Applied models that ship, not just prototypes.",
    description:
      "From predictive models to generative AI copilots, we take use cases from proof of concept to production, with monitoring and guardrails built in from the start.",
    capabilities: [
      "ML model development & MLOps",
      "LLM & generative AI applications",
      "Forecasting & recommendation engines",
      "Model monitoring & retraining pipelines",
    ],
  },
  {
    slug: "cloud-migration",
    name: "Cloud Migration",
    short: "Move workloads without moving risk.",
    description:
      "We plan and execute migrations to AWS, Azure, and GCP with minimal downtime, clear cost modelling, and a rollback path at every stage.",
    capabilities: [
      "Migration assessment & roadmap",
      "Lift-and-shift & re-architecture",
      "Cost modelling & FinOps",
      "Post-migration validation",
    ],
  },
  {
    slug: "data-platform-modernisation",
    name: "Data Platform Modernisation",
    short: "Retire legacy debt, keep the institutional knowledge.",
    description:
      "We modernise legacy warehouses and ETL estates into modular, cloud-native platforms — preserving business logic while removing years of technical debt.",
    capabilities: [
      "Legacy-to-cloud replatforming",
      "ETL-to-ELT redesign",
      "Metadata-driven architecture",
      "Phased cutover planning",
    ],
  },
  {
    slug: "data-governance",
    name: "Data Governance",
    short: "Trust, lineage, and compliance built in.",
    description:
      "We implement governance frameworks that give you lineage, access control, and audit-readiness without slowing your teams down.",
    capabilities: [
      "Data cataloguing & lineage",
      "Access control & masking",
      "Regulatory compliance (GDPR, HIPAA, etc.)",
      "Governance operating models",
    ],
  },
  {
    slug: "data-warehousing",
    name: "Data Warehousing",
    short: "A single source of truth your teams actually use.",
    description:
      "We design dimensional and modern warehouse models tuned for the way your analysts and applications actually query data.",
    capabilities: [
      "Dimensional & Data Vault modelling",
      "Warehouse performance tuning",
      "Semantic layer design",
      "Historical data migration",
    ],
  },
  {
    slug: "real-time-analytics",
    name: "Real-time Analytics",
    short: "Decisions at the speed of your data.",
    description:
      "We build streaming analytics pipelines that surface signals the moment they happen — for fraud detection, operations, and live dashboards.",
    capabilities: [
      "Event streaming (Kafka, Kinesis, Event Hubs)",
      "Stream processing & CEP",
      "Real-time dashboards & alerting",
      "Low-latency serving layers",
    ],
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    short: "Self-serve reporting people trust and use.",
    description:
      "We deliver BI ecosystems — from data models to dashboards — that give every team a single, governed way to answer their own questions.",
    capabilities: [
      "Executive & operational dashboards",
      "Self-serve semantic models",
      "Power BI / Tableau / Looker delivery",
      "Adoption & enablement training",
    ],
  },
  {
    slug: "managed-data-services",
    name: "Managed Data Services",
    short: "Your platform, continuously operated and improved.",
    description:
      "An ongoing partnership where we monitor, support, and evolve your data platform — so your internal team can focus on the roadmap, not the pager.",
    capabilities: [
      "24/7 platform monitoring & support",
      "SLA-backed incident response",
      "Continuous cost & performance tuning",
      "Quarterly roadmap reviews",
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  description: string;
  useCases: string[];
};

export const industries: Industry[] = [
  {
    slug: "insurance",
    name: "Insurance",
    description:
      "Modernising claims, underwriting, and risk data so decisions move at the speed of the customer.",
    useCases: ["Claims fraud detection", "Underwriting risk models", "Policyholder 360 platforms"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Secure, compliant data platforms that connect clinical, operational, and payer data.",
    useCases: ["Patient outcome analytics", "Interoperability pipelines", "Compliance-ready governance"],
  },
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    description:
      "Real-time, governed data for risk, compliance, and personalised financial products.",
    useCases: ["Real-time fraud monitoring", "Regulatory reporting automation", "Credit risk modelling"],
  },
  {
    slug: "retail",
    name: "Retail",
    description:
      "Unified customer and inventory data that powers personalisation and demand planning.",
    useCases: ["Demand forecasting", "Customer 360 & personalisation", "Inventory optimisation"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Connecting shop-floor sensors to enterprise systems for predictive, data-driven operations.",
    useCases: ["Predictive maintenance", "Supply chain visibility", "Quality analytics"],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    description:
      "Data platforms that turn field, weather, and yield data into operational decisions.",
    useCases: ["Yield prediction models", "Precision farming analytics", "Supply chain traceability"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    description:
      "Real-time visibility across fleets, routes, and warehouses to cut cost and delay.",
    useCases: ["Route & fleet optimisation", "Real-time shipment tracking", "Warehouse analytics"],
  },
];

export const metrics = [
  { label: "Projects delivered", value: 40, suffix: "+" },
  { label: "Consultants & engineers", value: 25, suffix: "+" },
  { label: "Client satisfaction", value: 98, suffix: "%" },
  { label: "Industries served", value: 7, suffix: "" },
];

export const process = [
  {
    step: "Discover",
    detail: "We map your data landscape, business goals, and constraints before proposing anything.",
  },
  {
    step: "Design",
    detail: "Architecture and roadmap are designed against your scale, budget, and compliance needs.",
  },
  {
    step: "Build",
    detail: "Agile delivery in short cycles, with working increments you can see every sprint.",
  },
  {
    step: "Operate",
    detail: "We hand over with documentation, training, and an optional managed-services partnership.",
  },
];

export const whyKarsient = [
  {
    title: "Platform-agnostic expertise",
    detail: "Deep experience across Databricks, AWS, Azure, and GCP — we recommend what fits, not what's familiar.",
  },
  {
    title: "Engineers, not just advisors",
    detail: "Our consultants write and ship production code alongside your team, not just slide decks.",
  },
  {
    title: "Governance from day one",
    detail: "Security, lineage, and compliance are built into every architecture, not bolted on later.",
  },
  {
    title: "Outcome-based partnership",
    detail: "We measure success in decisions enabled and cost removed, not hours billed.",
  },
];

export const testimonials = [
  {
    quote:
      "Karsient rebuilt our data platform in months, not years, and our analysts finally trust the numbers.",
    name: "VP of Data, Enterprise Client",
    role: "Financial Services",
  },
  {
    quote:
      "Their team felt like an extension of ours — technically sharp and genuinely invested in the outcome.",
    name: "Director of Engineering",
    role: "Retail Client",
  },
  {
    quote:
      "The governance framework they implemented turned audits from a scramble into a formality.",
    name: "Head of Compliance",
    role: "Healthcare Client",
  },
];

export const faqs = [
  {
    q: "What industries does Karsient work with?",
    a: "We work primarily with Insurance, Healthcare, Banking & Financial Services, Retail, Manufacturing, Agriculture, and Logistics organisations, from mid-market to Fortune 500 scale.",
  },
  {
    q: "Do you work with our existing cloud provider?",
    a: "Yes. We are platform-agnostic and work across Databricks, AWS, Azure, and GCP, and will recommend the platform that fits your constraints rather than a single default stack.",
  },
  {
    q: "Can you take over an existing, half-built data platform?",
    a: "Yes — a large share of our engagements start with an assessment of an existing platform, followed by a phased modernisation plan that preserves what already works.",
  },
  {
    q: "Do you offer ongoing support after a project ends?",
    a: "Our Managed Data Services team can take on monitoring, incident response, and continuous optimisation once a platform is live, on a retainer basis.",
  },
  {
    q: "How do we get started?",
    a: "Book a free consultation through our contact page. We typically follow up within one business day to schedule a discovery call.",
  },
];

export const caseStudies = [
  {
    slug: "insurance-claims-fraud",
    industry: "Insurance",
    title: "Cutting claims-fraud investigation time by 60%",
    summary:
      "A mid-market insurer partnered with Karsient to build a real-time fraud-scoring pipeline on top of a modernised claims data platform.",
    results: ["60% faster fraud triage", "35% reduction in false positives", "Real-time scoring at claim intake"],
  },
  {
    slug: "retail-demand-forecasting",
    industry: "Retail",
    title: "Demand forecasting that cut stockouts across 200+ stores",
    summary:
      "We built a forecasting platform on Databricks that combined POS, weather, and promotional data into a single demand signal.",
    results: ["22% fewer stockouts", "Forecast refresh time cut from days to hours", "Unified data model across 200+ stores"],
  },
  {
    slug: "banking-regulatory-reporting",
    industry: "Banking & Financial Services",
    title: "Automating regulatory reporting for a regional bank",
    summary:
      "A governed data warehouse and lineage framework replaced a spreadsheet-driven reporting process prone to manual error.",
    results: ["Reporting cycle reduced from 5 days to 6 hours", "Full lineage for every regulatory figure", "Zero manual reconciliation steps"],
  },
];
