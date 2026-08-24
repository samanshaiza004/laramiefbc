import type { CmsContent } from "./types";

/**
 * Synthetic foundation content only. These values are intentionally obvious
 * placeholders so they cannot be mistaken for church-approved facts.
 */
export const localContent: CmsContent = {
  source: "local",
  settings: {
    name: "First Baptist Church of Laramie",
    shortName: "First Baptist",
    region: "Laramie, Wyoming",
    description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] A local church serving Laramie, Wyoming.",
    footerDescription: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Church description will be supplied by church leadership.",
    address: {
      street: "[ADDRESS TO BE CONFIRMED]",
      locality: "Laramie",
      region: "WY",
      postalCode: "[ZIP TO BE CONFIRMED]",
      country: "US",
    },
    phoneDisplay: "[PHONE TO BE CONFIRMED]",
    phoneHref: "",
    email: "placeholder@example.invalid",
    services: [
      {
        label: "Sunday School",
        day: "Sunday",
        time: "[TIME TO BE CONFIRMED]",
        notes: "[VERIFY WHETHER THIS SERVICE IS CURRENT]",
      },
      {
        label: "Worship",
        day: "Sunday",
        time: "[TIME TO BE CONFIRMED]",
        notes: "[VERIFY WHETHER THIS SERVICE IS CURRENT]",
      },
    ],
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Laramie%2C%20Wyoming",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Laramie%2C%20Wyoming",
    socialLinks: [],
  },
  homepage: {
    title: "First Baptist Church of Laramie",
    description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Homepage content is not yet approved.",
  },
  visitPage: {
    title: "Plan Your Visit",
    description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Visit information will be confirmed by church leadership.",
  },
  aboutPage: {
    title: "About First Baptist Church",
    description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Church story and beliefs will be supplied by church leadership.",
  },
  givingPage: {
    title: "Give",
    description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Giving instructions will be confirmed before launch.",
  },
};
