import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { WORK_EXPERIENCE_QUERY } from "@/lib/queries";
import WorkExperience from "@/components/WorkExperience";
import { WorkExperienceType } from "@/lib/types";

const WorkExperienceSection = async () => {
  const workExperience = await sanityFetch({ query: WORK_EXPERIENCE_QUERY });
  return (
    <div id="experience" className="py-12">
      <div className="space-y-8 mx-auto flex flex-col w-full">
        {workExperience.data.map((experience: WorkExperienceType, index: number) => (
          <WorkExperience
            key={experience._id}
            workExperience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
