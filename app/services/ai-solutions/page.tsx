import type { Metadata } from "next";
import { ServiceGroupPage } from "@/components/templates/ServiceGroupPage";
import { aiSolutionsGroup } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Solutions",
  description: aiSolutionsGroup.description,
};

export default function AISolutionsPage() {
  return <ServiceGroupPage group={aiSolutionsGroup} />;
}
