import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/lib/queries";
import Project from "@/components/Project";

import { ProjectType } from "@/lib/types";

const ProjectSection = async () => {
  const projects = await sanityFetch({ query: PROJECT_QUERY });
  return (
    <section className="container py-12">
      <div className="flex flex-wrap gap-6">
        <div>
          {projects.data.map((project: ProjectType, index: number) => (
            <Project key={project._id || index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
