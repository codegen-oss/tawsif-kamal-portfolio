import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: UserIcon,
  // Make it a singleton
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
      initialValue: "Tawsif Kamal",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "school",
      title: "School",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currentJob",
      title: "Current Job",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({ title }) {
      return {
        title: title || "Profile",
      };
    },
  },
});
