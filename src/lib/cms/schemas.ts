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

export const cmsContentSchema = z.object({
  source: z.enum(["local", "sanity"]),
  settings: churchSettingsSchema,
  homepage: pageContentSchema,
  visitPage: pageContentSchema,
  aboutPage: pageContentSchema,
  givingPage: pageContentSchema,
}).strict();

export type ParsedCmsContent = z.infer<typeof cmsContentSchema>;
