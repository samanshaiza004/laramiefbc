import { CogIcon, DocumentIcon, HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const seoField = defineField({ name: "seo", type: "seo" });

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  icon: CogIcon,
  type: "document",
  fields: [
    defineField({ name: "name", title: "Church name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "region", title: "Location label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "footerDescription", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "address", type: "address", validation: (rule) => rule.required() }),
    defineField({ name: "phoneDisplay", title: "Phone display", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "phoneHref", title: "Phone link value", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "email", type: "email", validation: (rule) => rule.required() }),
    defineField({ name: "services", type: "array", of: [defineArrayMember({ type: "serviceTime" })], validation: (rule) => rule.min(1) }),
    defineField({ name: "directionsUrl", type: "url", validation: (rule) => rule.required() }),
    defineField({ name: "mapUrl", type: "url", validation: (rule) => rule.required() }),
    defineField({ name: "socialLinks", type: "array", of: [defineArrayMember({ type: "socialLink" })] }),
  ],
});

function pageSingleton(name: string, title: string, icon = DocumentIcon) {
  return defineType({
    name,
    title,
    icon,
    type: "document",
    fields: [
      defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "description", type: "text", rows: 3, validation: (rule) => rule.required() }),
      seoField,
    ],
  });
}

export const homePage = pageSingleton("homePage", "Homepage", HomeIcon);
export const visitPage = pageSingleton("visitPage", "Visit page");
export const givingPage = pageSingleton("givingPage", "Giving page");

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "mission", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: "history",
      type: "array",
      of: [defineArrayMember({ type: "contentSection" })],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "beliefs",
      type: "array",
      of: [defineArrayMember({ type: "contentSection" })],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "values",
      type: "array",
      of: [defineArrayMember({ type: "contentSection" })],
      validation: (rule) => rule.min(1),
    }),
    seoField,
  ],
});
