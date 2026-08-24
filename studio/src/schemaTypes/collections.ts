import { CalendarIcon, DocumentTextIcon, HeartIcon, PlayIcon, UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const sermonSeries = defineType({
  name: "sermonSeries",
  title: "Sermon series",
  icon: PlayIcon,
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
  ],
});

export const sermon = defineType({
  name: "sermon",
  title: "Sermon",
  icon: PlayIcon,
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "speaker", type: "reference", to: [{ type: "person" }], validation: (rule) => rule.required() }),
    defineField({ name: "date", type: "date", validation: (rule) => rule.required() }),
    defineField({ name: "scripture", type: "string" }),
    defineField({ name: "series", type: "reference", to: [{ type: "sermonSeries" }] }),
    defineField({ name: "description", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "videoUrl", title: "YouTube or video URL", type: "url" }),
    defineField({ name: "audioUrl", title: "Audio URL", type: "url" }),
    defineField({ name: "thumbnail", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
  ],
});

export const event = defineType({
  name: "event",
  title: "Event",
  icon: CalendarIcon,
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "start", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "end", type: "datetime" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "registrationUrl", type: "url" }),
  ],
});

export const ministry = defineType({
  name: "ministry",
  title: "Ministry",
  icon: HeartIcon,
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "array", of: [defineArrayMember({ type: "block" })] }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "contactUrl", type: "url" }),
  ],
});

export const person = defineType({
  name: "person",
  title: "Person",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "bio", type: "array", of: [defineArrayMember({ type: "block" })] }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "email", type: "email" }),
  ],
});

export const announcement = defineType({
  name: "announcement",
  title: "Announcement",
  icon: DocumentTextIcon,
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "body", type: "array", of: [defineArrayMember({ type: "block" })] }),
    defineField({ name: "publishedAt", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "expiresAt", type: "datetime" }),
    defineField({ name: "priority", type: "string", options: { list: ["normal", "featured"], layout: "radio" }, initialValue: "normal" }),
  ],
});
