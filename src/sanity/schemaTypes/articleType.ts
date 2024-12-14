import { DocumentSheetIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: DocumentSheetIcon,
  fields: [
    defineField({
      name: "articleName",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
  ],
});
