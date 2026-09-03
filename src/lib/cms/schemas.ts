import { z } from "zod";

const addressSchema = z.object({
  street: z.string().min(1),
  locality: z.string().min(1),
  region: z.string().min(1),
  postalCode: z.string().min(1),
  country: z.string().length(2),
}).strict();

const serviceTimeSchema = z.object({
  label: z.string().min(1),
  day: z.string().min(1),
  time: z.string().min(1),
  notes: z.string(),
  schemaDay: z.string().optional(),
  schemaOpens: z.string().optional(),
  schemaCloses: z.string().optional(),
}).strict();

const socialLinkSchema = z.object({
  label: z.string().min(1),
  url: z.url(),
}).strict();

export const churchSettingsSchema = z.object({
  name: z.string().min(1),
  shortName: z.string().min(1),
  region: z.string().min(1),
  description: z.string().min(1),
  footerDescription: z.string().min(1),
  address: addressSchema,
  phoneDisplay: z.string(),
  phoneHref: z.string(),
  email: z.email(),
  services: z.array(serviceTimeSchema),
  directionsUrl: z.url(),
  mapUrl: z.url(),
  socialLinks: z.array(socialLinkSchema),
}).strict();

const pageContentSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
}).strict();

const contentSectionSchema = z.object({
  heading: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
}).strict();

const aboutPageSchema = pageContentSchema.extend({
  mission: z.string().min(1),
  history: z.array(contentSectionSchema).min(1),
  beliefs: z.array(contentSectionSchema).min(1),
  values: z.array(contentSectionSchema).min(1),
}).strict();

const cmsImageSchema = z.object({
  src: z.url(),
  alt: z.string().min(1),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
}).strict();

const sermonSeriesSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1).optional(),
  image: cmsImageSchema.optional(),
}).strict();

const personReferenceSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1).optional(),
}).strict();

const sermonSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().min(1),
  speaker: personReferenceSchema,
  date: z.string().min(1),
  scripture: z.string().min(1).optional(),
  series: z.object({ title: z.string().min(1), slug: z.string().min(1) }).strict().optional(),
  description: z.string().min(1),
  videoUrl: z.url().optional(),
  audioUrl: z.url().optional(),
  thumbnail: cmsImageSchema.optional(),
  featured: z.boolean(),
}).strict();

const eventSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().min(1),
  start: z.string().min(1),
  end: z.string().min(1).optional(),
  location: z.string().min(1).optional(),
  description: z.string().min(1),
  image: cmsImageSchema.optional(),
  registrationUrl: z.url().optional(),
}).strict();

const ministrySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  slug: z.string().min(1),
  summary: z.string().min(1),
  description: z.string().min(1).optional(),
  image: cmsImageSchema.optional(),
  contactUrl: z.url().optional(),
}).strict();

const personSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  bio: z.string().min(1).optional(),
  photo: cmsImageSchema.optional(),
  email: z.email().optional(),
}).strict();

const announcementSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  publishedAt: z.string().min(1),
  expiresAt: z.string().min(1).optional(),
  priority: z.enum(["normal", "featured"]),
  href: z.string().min(1).optional(),
}).strict();

export const cmsContentSchema = z.object({
  source: z.enum(["local", "sanity"]),
  settings: churchSettingsSchema,
  homepage: pageContentSchema,
  visitPage: pageContentSchema,
  aboutPage: aboutPageSchema,
  givingPage: pageContentSchema,
  sermons: z.array(sermonSchema),
  sermonSeries: z.array(sermonSeriesSchema),
  events: z.array(eventSchema),
  ministries: z.array(ministrySchema),
  people: z.array(personSchema),
  announcements: z.array(announcementSchema),
}).strict();

export type ParsedCmsContent = z.infer<typeof cmsContentSchema>;
