import { defineArrayMember, defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title override", type: "string", validation: (rule) => rule.max(70) }),
    defineField({ name: "description", title: "Description override", type: "text", rows: 3, validation: (rule) => rule.max(160) }),
    defineField({ name: "image", title: "Social image", type: "image", options: { hotspot: true } }),
    defineField({ name: "noIndex", title: "Hide from search engines", type: "boolean", initialValue: false }),
  ],
});

export const address = defineType({
  name: "address",
  title: "Address",
  type: "object",
  fields: [
    defineField({ name: "street", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "locality", title: "City", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "region", title: "State", type: "string", validation: (rule) => rule.required().length(2) }),
    defineField({ name: "postalCode", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "country", type: "string", initialValue: "US", validation: (rule) => rule.required().length(2) }),
  ],
});

export const serviceTime = defineType({
  name: "serviceTime",
  title: "Service time",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "day", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "time", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "notes", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "schemaDay", title: "Schema day (optional)", type: "string" }),
    defineField({ name: "schemaOpens", title: "Schema opening time (optional)", type: "string" }),
    defineField({ name: "schemaCloses", title: "Schema closing time (optional)", type: "string" }),
  ],
});

export const socialLink = defineType({
  name: "socialLink",
  title: "Social link",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "url", type: "url", validation: (rule) => rule.required() }),
  ],
});

export const contentSection = defineType({
  name: "contentSection",
  title: "Content section",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text" })],
      validation: (rule) => rule.min(1),
    }),
  ],
});

export const pageReference = defineType({
  name: "pageReference",
  title: "Page reference",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", type: "string", validation: (rule) => rule.required().regex(/^\//) }),
  ],
});

export const richText = defineType({
  name: "richText",
  title: "Rich text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
      ],
    }),
  ],
});
