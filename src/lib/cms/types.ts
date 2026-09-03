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

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export interface AboutPageContent extends PageContent {
  mission: string;
  history: ContentSection[];
  beliefs: ContentSection[];
  values: ContentSection[];
}

export interface CmsImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SermonSeries {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image?: CmsImage;
}

export interface PersonReference {
  name: string;
  role?: string;
}

export interface Sermon {
  id: string;
  title: string;
  slug: string;
  speaker: PersonReference;
  date: string;
  scripture?: string;
  series?: Pick<SermonSeries, "title" | "slug">;
  description: string;
  videoUrl?: string;
  audioUrl?: string;
  thumbnail?: CmsImage;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  start: string;
  end?: string;
  location?: string;
  description: string;
  image?: CmsImage;
  registrationUrl?: string;
}

export interface Ministry {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description?: string;
  image?: CmsImage;
  contactUrl?: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  bio?: string;
  photo?: CmsImage;
  email?: string;
}

export interface Announcement {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  expiresAt?: string;
  priority: "normal" | "featured";
  href?: string;
}

export interface CmsContent {
  source: CmsSource;
  settings: ChurchSettings;
  homepage: PageContent;
  visitPage: PageContent;
  aboutPage: AboutPageContent;
  givingPage: PageContent;
  sermons: Sermon[];
  sermonSeries: SermonSeries[];
  events: Event[];
  ministries: Ministry[];
  people: Person[];
  announcements: Announcement[];
}

export interface RuntimeEnv {
  NODE_ENV?: string;
  MODE?: string;
  BUILD_MODE?: string;
  CMS_SOURCE?: string;
  SANITY_PROJECT_ID?: string;
  SANITY_DATASET?: string;
}
