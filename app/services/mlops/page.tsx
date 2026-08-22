import type { Metadata } from "next";
import { ServiceGroupPage } from "@/components/templates/ServiceGroupPage";
import { mlopsGroup } from "@/lib/data";

export const metadata: Metadata = {
  title: "MLOps",
  description: mlopsGroup.description,
};

export default function MLOpsPage() {
  return <ServiceGroupPage group={mlopsGroup} />;
}
