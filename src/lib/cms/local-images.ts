import type { ImageMetadata } from "astro";
import jackieCarter from "../../assets/church/leadership/jackie-carter.jpg";
import morleyAndJane from "../../assets/church/leadership/morley-and-jane-langdon.jpg";
import phyllisDunbar from "../../assets/church/leadership/phyllis-dunbar.jpg";

export interface LocalPersonImage {
  source: ImageMetadata;
  alt: string;
}

export const localLeadershipImages: Record<string, LocalPersonImage> = {
  morleyAndJane: {
    source: morleyAndJane,
    alt: "Morley Langdon and his wife Jane Langdon standing together in front of a quilt at First Baptist Church.",
  },
  phyllisDunbar: {
    source: phyllisDunbar,
    alt: "Phyllis Dunbar wearing a Faith T-shirt inside First Baptist Church’s brick fellowship room.",
  },
  jackieCarter: {
    source: jackieCarter,
    alt: "Jackie Carter wearing glasses and smiling inside First Baptist Church’s brick fellowship room.",
  },
};
