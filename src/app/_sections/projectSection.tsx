import React from "react";
import Project from "@/components/Project";

import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

import { ProjectType } from "@/utils/types";

const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(_createdAt desc)`
);

const ProjectSection = async () => {
  const projects = await sanityFetch({ query: PROJECTS_QUERY });
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
