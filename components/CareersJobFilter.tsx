"use client";

import { useState, useMemo } from "react";
import { site } from "@/lib/data";

type JobRole = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  technologies: string[];
  description: string;
  highlight: string;
};

const allJobs: JobRole[] = [
  {
    id: "sr-data-eng",
    title: "Senior Data Platform Engineer",
    department: "Data Engineering",
    location: "Madurai / Remote",
    type: "Full-time",
    technologies: ["Databricks", "Apache Spark", "Delta Lake", "Python", "dbt"],
    description: "Design and implement high-concurrency batch and streaming Lakehouse pipelines on Databricks with Unity Catalog governance.",
    highlight: "Direct production ownership alongside enterprise client teams.",
  },
  {
    id: "databricks-arch",
    title: "Databricks Solutions Architect",
    department: "Solutions Architecture",
    location: "Bengaluru / Remote",
    type: "Full-time",
    technologies: ["Databricks", "Azure", "AWS", "Unity Catalog", "Terraform"],
    description: "Architect target-state lakehouse landing zones, migrate legacy SQL/ETL estates, and optimize DBU compute workloads.",
    highlight: "Lead technical discovery, architecture design, and cutover strategies.",
  },
  {
    id: "ai-ml-engineer",
    title: "Machine Learning & Generative AI Engineer",
    department: "AI & Machine Learning",
    location: "Madurai / Remote",
    type: "Full-time",
    technologies: ["Python", "LangChain", "Vector Search", "RAG", "MLflow"],
    description: "Build enterprise RAG pipelines, fine-tune models, and deploy multi-step AI agents with production observability guardrails.",
    highlight: "Take generative AI systems from proof-of-concept to monitored production.",
  },
  {
    id: "cloud-platform-consultant",
    title: "Cloud Infrastructure & FinOps Consultant",
    department: "Cloud Platforms",
    location: "Remote",
    type: "Contract",
    technologies: ["Azure", "AWS", "Terraform", "FinOps", "Docker"],
    description: "Assess enterprise cloud infrastructure, implement secure multi-account landing zones, and engineer compute cost optimizations.",
    highlight: "Measurable cloud cost reduction and security hardening.",
  },
  {
    id: "bi-analytics-consultant",
    title: "Enterprise BI & Semantic Model Architect",
    department: "BI & Analytics",
    location: "Madurai / Remote",
    type: "Full-time",
    technologies: ["Power BI", "Microsoft Fabric", "DAX", "SQL", "Tabular Editor"],
    description: "Build governed semantic models on DirectLake and design executive dashboard suites across enterprise business domains.",
    highlight: "Single-source-of-truth modeling for Fortune 500 decision makers.",
  },
];

export function CareersJobFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const departments = ["All", "Data Engineering", "Solutions Architecture", "AI & Machine Learning", "Cloud Platforms", "BI & Analytics"];
  const locations = ["All", "Madurai / Remote", "Bengaluru / Remote", "Remote"];
  const types = ["All", "Full-time", "Contract"];

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.technologies.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchDept = selectedDept === "All" || job.department === selectedDept;
      const matchLoc = selectedLocation === "All" || job.location === selectedLocation;
      const matchType = selectedType === "All" || job.type === selectedType;

      return matchSearch && matchDept && matchLoc && matchType;
    });
  }, [searchTerm, selectedDept, selectedLocation, selectedType]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="rounded-2xl border border-ink-line/80 bg-ink-soft/40 p-5 backdrop-blur-xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Keyword Search */}
          <div>
            <label htmlFor="search" className="font-mono text-xs uppercase tracking-wider text-mist">
              Search Roles or Tech
            </label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="e.g. Databricks, Python, Architect..."
              className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-3.5 py-2.5 font-body text-xs text-white placeholder:text-mist/50"
            />
          </div>

          {/* Department Filter */}
          <div>
            <label htmlFor="dept" className="font-mono text-xs uppercase tracking-wider text-mist">
              Practice Area
            </label>
            <select
              id="dept"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-3.5 py-2.5 font-body text-xs text-white"
            >
              {departments.map((d) => (
                <option key={d} value={d} className="bg-ink text-white">
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label htmlFor="loc" className="font-mono text-xs uppercase tracking-wider text-mist">
              Location
            </label>
            <select
              id="loc"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-3.5 py-2.5 font-body text-xs text-white"
            >
              {locations.map((l) => (
                <option key={l} value={l} className="bg-ink text-white">
                  {l}
                </option>
              ))}
            </select>
          </div>

          {/* Employment Type */}
          <div>
            <label htmlFor="type" className="font-mono text-xs uppercase tracking-wider text-mist">
              Employment Type
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="focus-ring mt-1.5 w-full rounded-xl border border-ink-line bg-ink px-3.5 py-2.5 font-body text-xs text-white"
            >
              {types.map((t) => (
                <option key={t} value={t} className="bg-ink text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-ink-line/60 pt-3 text-xs font-mono text-mist">
          <span>
            Showing <strong className="text-white">{filteredJobs.length}</strong> open engineering positions
          </span>
          {(searchTerm || selectedDept !== "All" || selectedLocation !== "All" || selectedType !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedDept("All");
                setSelectedLocation("All");
                setSelectedType("All");
              }}
              className="text-signal hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-2xl border border-ink-line/70 bg-ink-soft/30 p-6 backdrop-blur-md transition-all hover:border-signal/50 hover:bg-ink-soft/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="badge-saffron text-[10px]">{job.department}</span>
                    <span className="font-mono text-xs text-mist">{job.location} &middot; {job.type}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white group-hover:text-signal transition-colors">
                    {job.title}
                  </h3>
                </div>

                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    `Engineering Application: ${job.title} (${job.id})`
                  )}`}
                  className="btn-primary text-xs shrink-0 self-start sm:self-center"
                >
                  Apply for Role &rarr;
                </a>
              </div>

              <p className="mt-3 font-body text-xs text-mist leading-relaxed max-w-3xl">
                {job.description}
              </p>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-ink-line/50 pt-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-mist/70 mr-1">
                    Tech:
                  </span>
                  {job.technologies.map((t) => (
                    <span key={t} className="chip-tech text-[10px] py-0.5 px-2.5">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-[11px] text-cyan-soft">
                  ★ {job.highlight}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-ink-line/80 bg-ink-soft/20 p-12 text-center text-mist">
            <p className="font-display text-lg text-white">No exact role matches found.</p>
            <p className="mt-1 text-xs">Try broadening your search terms or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
