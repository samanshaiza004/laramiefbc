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
    defineField({ name: "fellowship", title: "Sunday fellowship gathering", type: "serviceTime", validation: (rule) => rule.required() }),
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
export const visitPage = defineType({
  name: "visitPage",
  title: "Visit page",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: "recurringGatherings",
      title: "Recurring gatherings",
      type: "array",
      of: [defineArrayMember({ type: "recurringGathering" })],
    }),
    defineField({ name: "communionNote", title: "Communion note", type: "string", validation: (rule) => rule.required() }),
    seoField,
  ],
});
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
    defineField({
      name: "denominationalAffiliation",
      title: "Our denominational affiliation",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "churchMembership", title: "Church membership", type: "text", rows: 2, validation: (rule) => rule.required() }),
        defineField({ name: "introduction", type: "text", rows: 2, validation: (rule) => rule.required() }),
        defineField({ name: "sourceUrl", title: "Source URL", type: "url", validation: (rule) => rule.required() }),
        defineField({
          name: "traditionParagraphs",
          title: "Shared Baptist tradition",
          type: "array",
          of: [defineArrayMember({ type: "text" })],
          validation: (rule) => rule.min(1),
        }),
        defineField({ name: "factsIntroduction", title: "Facts introduction", type: "text", rows: 2, validation: (rule) => rule.required() }),
        defineField({
          name: "facts",
          title: "Ten American Baptist facts",
          type: "array",
          of: [defineArrayMember({ type: "denominationalFact" })],
          validation: (rule) => rule.length(10).error("Include all ten facts."),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    seoField,
  ],
});

export const missionsPage = defineType({
  name: "missionsPage",
  title: "Missions and ministries page",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "heroHeading", title: "Page heading", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "introduction", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: "communitySections",
      title: "Laramie community",
      type: "array",
      of: [defineArrayMember({ type: "missionSection" })],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "campWyobaSections",
      title: "Camp Wyoba",
      type: "array",
      of: [defineArrayMember({ type: "missionSection" })],
      validation: (rule) => rule.min(1),
    }),
    defineField({ name: "offeringsIntroduction", title: "Offerings introduction", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: "specialOfferings",
      title: "Annual special offerings",
      type: "array",
      of: [defineArrayMember({ type: "specialOffering" })],
      validation: (rule) => rule.min(4),
    }),
    defineField({ name: "womenInMinistryIntroduction", title: "Women in ministry introduction", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({
      name: "womenInMinistrySections",
      title: "Women in ministry history",
      type: "array",
      of: [defineArrayMember({ type: "missionSection" })],
      validation: (rule) => rule.min(1),
    }),
    seoField,
  ],
});
