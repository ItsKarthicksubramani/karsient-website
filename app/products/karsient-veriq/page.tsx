import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/templates/ProductPage";
import { products } from "@/lib/data";

const product = products.find((p) => p.slug === "karsient-veriq")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.heroSubhead,
};

export default function Page() {
  if (!product) notFound();
  return <ProductPage product={product} />;
}
