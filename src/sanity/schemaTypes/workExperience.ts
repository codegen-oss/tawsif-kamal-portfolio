import { defineArrayMember, defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const workExperienceType = defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "companyName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isPresent",
      title: "Currently working here",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "endDate",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      hidden: ({ document }) => document?.isPresent as boolean,
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          if (context.document?.isPresent) {
            return true;
          }
          if (!endDate) {
            return "End date is required when not currently working";
          }
          return true;
        }),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technologies",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
