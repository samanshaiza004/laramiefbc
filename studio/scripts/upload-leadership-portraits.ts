import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2025-01-01" }).withConfig({ useCdn: false });

const portraits = [
  {
    name: "Morley Langdon",
    file: "../src/assets/church/leadership/morley-and-jane-langdon.jpg",
    alt: "Morley Langdon and his wife Jane Langdon standing together in front of a quilt at First Baptist Church.",
  },
  {
    name: "Phyllis Dunbar",
    file: "../src/assets/church/leadership/phyllis-dunbar.jpg",
    alt: "Phyllis Dunbar wearing a Faith T-shirt inside First Baptist Church’s brick fellowship room.",
  },
  {
    name: "Jackie Carter",
    file: "../src/assets/church/leadership/jackie-carter.jpg",
    alt: "Jackie Carter wearing glasses and smiling inside First Baptist Church’s brick fellowship room.",
  },
];

for (const portrait of portraits) {
  const people = await client.fetch<Array<{ _id: string }>>(
    '*[_type == "person" && name == $name]{_id}',
    { name: portrait.name },
  );

  if (people.length !== 1) {
    throw new Error(`Expected one Sanity profile for ${portrait.name}, found ${people.length}.`);
  }

  const image = await client.assets.upload(
    "image",
    await readFile(resolve(process.cwd(), portrait.file)),
    { filename: portrait.file.split("/").at(-1) },
  );

  await client
    .patch(people[0]._id)
    .set({
      photo: {
        _type: "image",
        asset: { _type: "reference", _ref: image._id },
        alt: portrait.alt,
      },
    })
    .commit();

  console.log(`Uploaded and attached the portrait for ${portrait.name}.`);
}
