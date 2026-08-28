import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MigrationSolutionPage } from "@/components/templates/MigrationSolutionPage";
import { migrationSolutions } from "@/lib/data";

const solution = migrationSolutions.find((s) => s.slug === "snowflake-databricks")!;

export const metadata: Metadata = {
  title: "Snowflake to Databricks Migration",
  description: solution.heroSubhead,
};

export default function Page() {
  if (!solution) notFound();
  return <MigrationSolutionPage solution={solution} />;
}
