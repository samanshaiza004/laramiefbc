import type { ChurchSettings } from "./cms/types";

export function createChurchStructuredData(settings: ChurchSettings, site: URL): Record<string, unknown> {
  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Church", "PlaceOfWorship"],
    name: settings.name,
    url: site.href,
    description: settings.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address.street,
      addressLocality: settings.address.locality,
      addressRegion: settings.address.region,
      postalCode: settings.address.postalCode,
      addressCountry: settings.address.country,
    },
  };

  if (settings.phoneHref) structuredData.telephone = settings.phoneHref;
  if (settings.email) structuredData.email = settings.email;
  if (settings.socialLinks.length > 0) structuredData.sameAs = settings.socialLinks.map((link) => link.url);

  const serviceSpecifications = settings.services
    .filter((service) => service.schemaDay)
    .map((service) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${service.schemaDay}`,
      opens: service.schemaOpens,
      closes: service.schemaCloses,
    }));

  if (serviceSpecifications.length > 0) {
    structuredData.openingHoursSpecification = serviceSpecifications;
  }

  return structuredData;
}
