import type { MetadataRoute } from "next";
import { site, aiSolutionsGroup, mlopsGroup, dataEngineeringGroup, databricksConsultingGroup, migrationSolutions, products, caseStudies, industries } from "@/lib/data";
import { insightArticles } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/ai-solutions",
    ...aiSolutionsGroup.items.map((i) => `/services/ai-solutions/${i.slug}`),
    "/services/mlops",
    ...mlopsGroup.items.map((i) => `/services/mlops/${i.slug}`),
    "/services/data-engineering",
    ...dataEngineeringGroup.items.map((i) => `/services/data-engineering/${i.slug}`),
    "/services/databricks-consulting",
    ...databricksConsultingGroup.items.map((i) => `/services/${i.slug}`),
    "/solutions",
    ...migrationSolutions.map((s) => `/solutions/${s.slug}`),
    "/products",
    ...products.map((p) => `/products/${p.slug}`),
    "/industries",
    ...industries.map((i) => `/industries/${i.slug}`),
    "/case-studies",
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    "/careers",
    "/insights",
    ...insightArticles.map((a) => `/insights/${a.slug}`),
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
