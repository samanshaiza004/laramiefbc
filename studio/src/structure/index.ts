import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["siteSettings", "homePage", "visitPage", "aboutPage", "givingPage"]);

function singleton(S: Parameters<StructureResolver>[0], typeName: string, title: string) {
  return S.listItem()
    .title(title)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title));
}

export const studioStructure: StructureResolver = (S) =>
  S.list()
    .title("First Baptist Church website")
    .items([
      singleton(S, "siteSettings", "Site settings"),
      singleton(S, "homePage", "Homepage"),
      singleton(S, "visitPage", "Visit page"),
      singleton(S, "aboutPage", "About page"),
      singleton(S, "givingPage", "Giving page"),
      S.divider(),
      S.listItem().title("Sermons").child(S.documentTypeList("sermon").title("Sermons")),
      S.listItem().title("Sermon series").child(S.documentTypeList("sermonSeries").title("Sermon series")),
      S.listItem().title("Events").child(S.documentTypeList("event").title("Events")),
      S.listItem().title("Ministries").child(S.documentTypeList("ministry").title("Ministries")),
      S.listItem().title("People").child(S.documentTypeList("person").title("People")),
      S.listItem().title("Announcements").child(S.documentTypeList("announcement").title("Announcements")),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() ?? "")),
    ]);
