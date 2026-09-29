import { site } from "@/lib/data";

/**
 * Organization + WebSite JSON-LD. Renders once, site-wide, from the root
 * layout. This is the primary signal that helps Google understand
 * "Karsient" as a distinct organization/entity — separate from ranking
 * for individual page content, which the per-page metadata handles.
 *
 * Kept deliberately conservative: only verified, real facts (legal name,
 * URL, logo, LinkedIn). No invented social profiles, no reviews/ratings,
 * no awards, no partnership claims.
 */
export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    alternateName: "Karsient",
    url: site.url,
    logo: `${site.url}/icon.svg`,
    description:
      "Karsient is an AI and Data Engineering company helping enterprises modernize data platforms, build production AI, and engineer intelligent enterprise solutions.",
    slogan: site.subTagline,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "21/114, Sammattipuram Main Road",
      addressLocality: "Madurai",
      addressRegion: "Tamil Nadu",
      postalCode: "625016",
      addressCountry: "IN",
    },
    sameAs: [site.linkedin],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
