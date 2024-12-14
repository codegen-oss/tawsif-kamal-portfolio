import {ProjectsIcon} from "@sanity/icons";
import {defineArrayMember, defineField, defineType} from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "projectName",
      type: "string",
    }),
    defineField({
      name: "projectDescription",
      type: "string",
    }),
    defineField({
      name: "thumbnailImage",
      type: "image",
    }),
    defineField({
      name: "linkIcon",
      type: "image",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
    defineField({
      name: "skillTags",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "prize",
      type: "string",
    }),
  ],
});
