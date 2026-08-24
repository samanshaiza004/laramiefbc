export type CmsSource = "local" | "sanity";

export interface Address {
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface ServiceTime {
  label: string;
  day: string;
  time: string;
  notes: string;
  schemaDay?: string;
  schemaOpens?: string;
  schemaCloses?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface ChurchSettings {
  name: string;
  shortName: string;
  region: string;
  description: string;
  footerDescription: string;
  address: Address;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  services: ServiceTime[];
  directionsUrl: string;
  mapUrl: string;
  socialLinks: SocialLink[];
}

export interface PageContent {
  title: string;
  description: string;
}

export interface CmsContent {
  source: CmsSource;
  settings: ChurchSettings;
  homepage: PageContent;
  visitPage: PageContent;
  aboutPage: PageContent;
  givingPage: PageContent;
}

export interface RuntimeEnv {
  NODE_ENV?: string;
  MODE?: string;
  BUILD_MODE?: string;
  CMS_SOURCE?: string;
  SANITY_PROJECT_ID?: string;
  SANITY_DATASET?: string;
}
