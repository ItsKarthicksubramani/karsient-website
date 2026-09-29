import Image from "next/image";

const industryImages: Record<string, string> = {
  insurance: "/industries/insurance.jpg",
  healthcare: "/industries/healthcare.jpg",
  "banking-financial-services": "/industries/banking-financial-services.jpg",
  retail: "/industries/retail.jpg",
  manufacturing: "/industries/manufacturing.jpg",
  agriculture: "/industries/agriculture.jpg",
  logistics: "/industries/logistics.jpg",
};

export function IndustryVisual({ slug, name }: { slug: string; name: string }) {
  const src = industryImages[slug];
  if (!src) return null;

  return (
    <div className="group/visual relative aspect-[12/5] w-full overflow-hidden rounded-xl border border-white/10">
      {/* subtle blue glow */}
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-[#3B82F6]/25 blur-xl transition-opacity duration-500 group-hover/visual:opacity-80" />
      <Image
        src={src}
        alt={`${name} industry visual`}
        fill
        sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 90vw"
        loading="lazy"
        className="object-cover transition-transform duration-500 ease-out group-hover/visual:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
    </div>
  );
}
