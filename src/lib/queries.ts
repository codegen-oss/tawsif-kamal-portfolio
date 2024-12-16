import { defineQuery } from "next-sanity";

export const WORK_EXPERIENCE_QUERY = defineQuery(
  `*[_type == "workExperience"] | order(_createdAt desc)`
);
export const PROJECT_QUERY = defineQuery(
  `*[_type == "project"] | order(_createdAt desc)`
);
export const ARTICLE_QUERY = defineQuery(
  `*[_type == "article"] | order(_createdAt desc)`
);
export const PROFILE_QUERY = defineQuery(`*[_type == "profile"] `);
