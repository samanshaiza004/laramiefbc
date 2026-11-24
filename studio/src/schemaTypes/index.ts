import { announcement, event, ministry, person, sermon, sermonSeries } from "./collections";
import { address, contentSection, denominationalFact, missionSection, pageReference, recurringGathering, richText, seo, serviceTime, socialLink, specialOffering } from "./objects";
import { aboutPage, givingPage, homePage, missionsPage, siteSettings, visitPage } from "./singletons";

export const schemaTypes = [
  siteSettings,
  homePage,
  visitPage,
  aboutPage,
  missionsPage,
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
  missionSection,
  specialOffering,
  recurringGathering,
  socialLink,
  contentSection,
  denominationalFact,
  pageReference,
  richText,
];
