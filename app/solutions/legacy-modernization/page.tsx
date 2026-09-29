import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MigrationSolutionPage } from "@/components/templates/MigrationSolutionPage";
import { migrationSolutions } from "@/lib/data";

const solution = migrationSolutions.find((s) => s.slug === "legacy-modernization")!;

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/legacy-modernization" },
  title: "Legacy Modernization to Databricks Lakehouse | Karsient",
  description:
    "Decouple legacy stored procedures, ETL pipelines, and mainframe workloads. Migrate Teradata, Oracle, Netezza and SQL Server to governed Databricks Lakehouse.",
};

export default function Page() {
  if (!solution) notFound();
  return <MigrationSolutionPage solution={solution} />;
}
