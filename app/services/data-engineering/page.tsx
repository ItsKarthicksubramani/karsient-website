import type { Metadata } from "next";
import { ServiceGroupPage } from "@/components/templates/ServiceGroupPage";
import { dataEngineeringGroup } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/services/data-engineering" },
  title: "Data Engineering",
  description: dataEngineeringGroup.description,
};

export default function DataEngineeringPage() {
  return <ServiceGroupPage group={dataEngineeringGroup} />;
}
