import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Content")
    .items([
      // Singleton for Profile
      S.listItem()
        .title("Profile")
        .id("profile")
        .child(S.document().schemaType("profile").documentId("profile")),
      // Other document types
      ...S.documentTypeListItems().filter(
        (listItem) => !["profile"].includes(listItem.getId() as string)
      ),
    ]);
