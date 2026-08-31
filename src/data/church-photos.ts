import type { ImageMetadata } from "astro";

import churchExterior from "../assets/church/church-exterior-wide.jpg";
import churchExteriorCloser from "../assets/church/church-exterior.jpg";
import churchExteriorClouds from "../assets/church/church-exterior-clouds.jpg";
import commissioning from "../assets/church/commissioning.jpg";
import communityGathering from "../assets/church/community-gathering.jpg";
import fellowshipHall from "../assets/church/fellowship-hall.jpg";
import fellowshipTable from "../assets/church/fellowship-table.jpg";
import churchFamilyOutdoors from "../assets/church/church-family-outdoors.jpg";
import leadershipGroup from "../assets/church/leadership-group.jpg";
import leadershipGroupWide from "../assets/church/leadership-group-wide.jpg";
import peopleAtAltar from "../assets/church/people-at-the-altar.jpg";
import peopleAtChristmas from "../assets/church/people-at-christmas.jpg";
import tableFellowship from "../assets/church/table-fellowship.jpg";

export interface ChurchPhoto {
  source: ImageMetadata;
  alt: string;
  label: string;
}

const photo = (source: ImageMetadata, label: string, alt: string): ChurchPhoto => ({
  source,
  label,
  alt,
});

export const churchPhotos = {
  hero: photo(
    churchExterior,
    "Our building",
    "First Baptist Church of Laramie beneath a wide Wyoming sky, with its brick building, trees, and cross-topped bell tower visible from the street.",
  ),
  welcome: photo(
    communityGathering,
    "At the table",
    "People from First Baptist Church gathered around a decorated table for a shared meal and conversation.",
  ),
  history: photo(
    churchFamilyOutdoors,
    "Church family",
    "A group of First Baptist Church members standing together outside the church building in Laramie.",
  ),
  gallery: [
    photo(
      churchExteriorClouds,
      "The church in Laramie",
      "First Baptist Church of Laramie beneath dramatic clouds, with the church sign and bell tower visible.",
    ),
    photo(
      churchExteriorCloser,
      "A familiar place",
      "The brick First Baptist Church building, sign, bell tower, and front garden viewed from the street.",
    ),
    photo(
      fellowshipHall,
      "Making room",
      "A full fellowship hall at First Baptist Church, with people sharing a meal around decorated tables.",
    ),
    photo(
      tableFellowship,
      "Conversation over a meal",
      "Friends gathered around a table in the church fellowship hall, with food and flowers between them.",
    ),
    photo(
      fellowshipTable,
      "Shared life",
      "People enjoying a meal together in the church fellowship hall, surrounded by quilts and handmade decorations.",
    ),
    photo(
      leadershipGroupWide,
      "A gathered community",
      "A group of church members standing together in the sanctuary beneath the cross and stained-glass windows.",
    ),
    photo(
      leadershipGroup,
      "Together in worship",
      "Church members gathered for a group portrait in front of the sanctuary cross.",
    ),
    photo(
      peopleAtAltar,
      "A worship moment",
      "Two people standing beside the Advent wreath near the church altar, with the sanctuary behind them.",
    ),
    photo(
      peopleAtChristmas,
      "Celebrating together",
      "Two people smiling beside the Advent wreath in the warm wood-paneled sanctuary.",
    ),
    photo(
      commissioning,
      "A church welcome",
      "Two people sharing a moment at the front of the sanctuary during a church gathering.",
    ),
  ],
} as const;

