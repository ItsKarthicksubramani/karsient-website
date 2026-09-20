import type { Metadata } from "next";
import { ServiceGroupPage } from "@/components/templates/ServiceGroupPage";
import { aiSolutionsGroup } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/services/ai-solutions" },
  title: "AI Solutions",
  description: aiSolutionsGroup.description,
};

export default function AISolutionsPage() {
  return <ServiceGroupPage group={aiSolutionsGroup} />;
}
