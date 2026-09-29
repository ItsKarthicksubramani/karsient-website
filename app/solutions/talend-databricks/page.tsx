import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MigrationSolutionPage } from "@/components/templates/MigrationSolutionPage";
import { migrationSolutions } from "@/lib/data";

const solution = migrationSolutions.find((s) => s.slug === "talend-databricks")!;

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/talend-databricks" },
  title: "Talend to Databricks Migration",
  description: solution.heroSubhead,
};

export default function Page() {
  if (!solution) notFound();
  return <MigrationSolutionPage solution={solution} />;
}
