import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MigrationSolutionPage } from "@/components/templates/MigrationSolutionPage";
import { migrationSolutions } from "@/lib/data";

const solution = migrationSolutions.find((s) => s.slug === "vertica-databricks")!;

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/vertica-databricks" },
  title: "Vertica to Databricks Migration",
  description: solution.heroSubhead,
};

export default function Page() {
  if (!solution) notFound();
  return <MigrationSolutionPage solution={solution} />;
}
