import { randomUUID } from "node:crypto";
import { resolve } from "node:path";
import { localContent } from "../src/lib/cms/local-content";

type SanityDocument = Record<string, unknown> & { _id?: string; _type: string };

const makeKey = () => randomUUID().replaceAll("-", "").slice(0, 16);

const sections = (items: typeof localContent.aboutPage.history) =>
  items.map(({ heading, paragraphs }) => ({
    _key: makeKey(),
    _type: "contentSection",
    heading,
    paragraphs,
  }));

const serviceTimes = localContent.settings.services.map((service) => ({
  _key: makeKey(),
  _type: "serviceTime",
  ...service,
}));

const recurringGatherings = localContent.visitPage.recurringGatherings.map((gathering) => ({
  _key: makeKey(),
  _type: "recurringGathering",
  ...gathering,
}));

const people: SanityDocument[] = localContent.people.map((person) => ({
  _type: "person",
  name: person.name,
  role: person.role,
  committeeMemberships: person.committeeMemberships,
  ...(person.bio
    ? {
        bio: [
          {
            _key: makeKey(),
            _type: "block",
            style: "normal",
            markDefs: [],
            children: [{ _key: makeKey(), _type: "span", text: person.bio, marks: [] }],
          },
        ],
      }
    : {}),
}));

const address = {
  _type: "address",
  street: "1517 E. Canby St.",
  locality: localContent.settings.address.locality,
  region: localContent.settings.address.region,
  postalCode: localContent.settings.address.postalCode,
  country: localContent.settings.address.country,
};

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=1517%20E.%20Canby%20St.%2C%20Laramie%2C%20WY%2082072";

const documents: SanityDocument[] = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    ...localContent.settings,
    address,
    services: serviceTimes,
    directionsUrl: mapsUrl,
    mapUrl: mapsUrl,
    socialLinks: [],
  },
  {
    _id: "homePage",
    _type: "homePage",
    title: localContent.homepage.title,
    description: localContent.homepage.description,
  },
  {
    _id: "visitPage",
    _type: "visitPage",
    title: localContent.visitPage.title,
    description: localContent.visitPage.description,
    recurringGatherings,
    communionNote: localContent.visitPage.communionNote,
  },
  {
    _id: "aboutPage",
    _type: "aboutPage",
    title: localContent.aboutPage.title,
    description: localContent.aboutPage.description,
    mission: localContent.aboutPage.mission,
    history: sections(localContent.aboutPage.history),
    beliefs: sections(localContent.aboutPage.beliefs),
    values: sections(localContent.aboutPage.values),
  },
  {
    _id: "givingPage",
    _type: "givingPage",
    title: localContent.givingPage.title,
    description: "For information about giving, contact the church at 307-745-4106 or Laramiefirstbaptist@gmail.com.",
  },
  ...people,
];

const outputPath = resolve(process.argv[2] ?? "/private/tmp/fbclaramie-sanity-seed.ndjson");
const ndjson = `${documents.map((document) => JSON.stringify(document)).join("\n")}\n`;

await Bun.write(outputPath, ndjson);
console.log(`Prepared ${documents.length} supplied church content documents at ${outputPath}.`);
console.log("Synthetic sermon, event, and giving fixture data were excluded.");
