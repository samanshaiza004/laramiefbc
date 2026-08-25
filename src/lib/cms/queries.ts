import { defineQuery } from "groq";

const settingsProjection = /* groq */ `{
  name,
  shortName,
  region,
  description,
  footerDescription,
  address { street, locality, region, postalCode, country },
  phoneDisplay,
  phoneHref,
  email,
  services[] { _key, label, day, time, notes, schemaDay, schemaOpens, schemaCloses },
  directionsUrl,
  mapUrl,
  socialLinks[] { _key, label, url }
}`;

const pageProjection = /* groq */ `{ title, description }`;
const aboutPageProjection = /* groq */ `{
  title,
  description,
  mission,
  history[] { _key, heading, paragraphs[] },
  beliefs[] { _key, heading, paragraphs[] },
  values[] { _key, heading, paragraphs[] }
}`;

export const CMS_CONTENT_QUERY = defineQuery(/* groq */ `{
  "settings": *[_id == "siteSettings"][0] ${settingsProjection},
  "homepage": *[_id == "homePage"][0] ${pageProjection},
  "visitPage": *[_id == "visitPage"][0] ${pageProjection},
  "aboutPage": *[_id == "aboutPage"][0] ${aboutPageProjection},
  "givingPage": *[_id == "givingPage"][0] ${pageProjection}
}`);
