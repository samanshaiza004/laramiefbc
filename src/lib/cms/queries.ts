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

const imageProjection = /* groq */ `{
  "src": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  alt
}`;

const seriesProjection = /* groq */ `{
  "id": _id,
  title,
  "slug": slug.current,
  description,
  "image": image ${imageProjection}
}`;

const sermonProjection = /* groq */ `{
  "id": _id,
  title,
  "slug": slug.current,
  "speaker": speaker->{ name, role },
  date,
  scripture,
  "series": series->{ title, "slug": slug.current },
  description,
  videoUrl,
  audioUrl,
  "thumbnail": thumbnail ${imageProjection},
  "featured": coalesce(featured, false)
}`;

const eventProjection = /* groq */ `{
  "id": _id,
  title,
  "slug": slug.current,
  start,
  end,
  location,
  description,
  "image": image ${imageProjection},
  registrationUrl
}`;

const ministryProjection = /* groq */ `{
  "id": _id,
  title,
  "slug": slug.current,
  summary,
  "description": pt::text(description),
  "image": image ${imageProjection},
  contactUrl
}`;

const personProjection = /* groq */ `{
  "id": _id,
  name,
  role,
  "bio": pt::text(bio),
  "photo": photo ${imageProjection},
  email
}`;

const announcementProjection = /* groq */ `{
  "id": _id,
  title,
  summary,
  publishedAt,
  expiresAt,
  "priority": coalesce(priority, "normal")
}`;

export const CMS_CONTENT_QUERY = defineQuery(/* groq */ `{
  "settings": *[_id == "siteSettings"][0] ${settingsProjection},
  "homepage": *[_id == "homePage"][0] ${pageProjection},
  "visitPage": *[_id == "visitPage"][0] ${pageProjection},
  "aboutPage": *[_id == "aboutPage"][0] ${aboutPageProjection},
  "givingPage": *[_id == "givingPage"][0] ${pageProjection},
  "sermonSeries": *[_type == "sermonSeries"] | order(title asc) ${seriesProjection},
  "sermons": *[_type == "sermon"] | order(date desc) ${sermonProjection},
  "events": *[_type == "event" && coalesce(end, start) >= now()] | order(start asc) ${eventProjection},
  "ministries": *[_type == "ministry"] | order(title asc) ${ministryProjection},
  "people": *[_type == "person"] | order(name asc) ${personProjection},
  "announcements": *[_type == "announcement" && (!defined(expiresAt) || expiresAt > now())] | order(priority desc, publishedAt desc) ${announcementProjection}
}`);
