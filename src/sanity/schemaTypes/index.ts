import { articleType } from "./articleType";
import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { workExperienceType } from "./workExperience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, workExperienceType, articleType],
};
