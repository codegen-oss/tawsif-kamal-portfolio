import React from "react";
import WorkExperience from "@/components/WorkExperience";

import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { WorkExperienceType } from "@/utils/types";

const WORK_EXPERIENCE_QUERY = defineQuery(
  `*[_type == "workExperience"] | order(_createdAt desc)`
);

const WorkExperienceSection = async () => {
  const workExperience = await sanityFetch({ query: WORK_EXPERIENCE_QUERY });
  return (
    <section className="container space-y-8 py-8">
      <div className="flex flex-wrap gap-6">
        <div>
          {workExperience.data.map((work: WorkExperienceType) => (
            <WorkExperience key={work._id} workExperience={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
