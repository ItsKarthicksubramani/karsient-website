import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubServicePage } from "@/components/templates/SubServicePage";
import { dataEngineeringGroup } from "@/lib/data";

export function generateStaticParams() {
  return dataEngineeringGroup.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = dataEngineeringGroup.items.find((i) => i.slug === slug);
  if (!item) return {};
  return { title: item.name, description: item.short };
}

export default async function DataEngineeringSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = dataEngineeringGroup.items.find((i) => i.slug === slug);
  if (!item) notFound();
  return <SubServicePage group={dataEngineeringGroup} item={item} />;
}
