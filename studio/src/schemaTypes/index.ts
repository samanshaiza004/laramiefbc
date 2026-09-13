import { announcement, event, ministry, person, sermon, sermonSeries } from "./collections";
import { address, contentSection, pageReference, recurringGathering, richText, seo, serviceTime, socialLink } from "./objects";
import { aboutPage, givingPage, homePage, siteSettings, visitPage } from "./singletons";

export const schemaTypes = [
  siteSettings,
  homePage,
  visitPage,
  aboutPage,
  givingPage,
  sermon,
  sermonSeries,
  event,
  ministry,
  person,
  announcement,
  seo,
  address,
  serviceTime,
  recurringGathering,
  socialLink,
  contentSection,
  pageReference,
  richText,
];
