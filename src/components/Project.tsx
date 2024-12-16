"use client";

import React from "react";
import { ProjectType } from "@/lib/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useProjectContext } from "@/contexts/ProjectProvider";

const Project = ({ project }: { project: ProjectType }) => {
  const { project: selectedProject, setProject: setSelectedProject } =
    useProjectContext();

  return (
    <Link
      href={project.link}
      target="_blank"
      className={`block text-inherit group no-underline cursor-pointer rounded-lg transition-all duration-200 ease-in-out ${
        selectedProject !== project.projectName &&
        selectedProject &&
        "opacity-60"
      }`}
    >
      <div
        className="flex gap-4 my-4 pl-3 hover:shadow-lg transition-all ease-in-out hover:bg-[#1A304919] p-4 rounded-lg"
        onMouseEnter={() => setSelectedProject(project.projectName)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <div>
          <Image
            src={urlFor(project.thumbnailImage).url()}
            alt={project.projectName}
            width={200}
            height={200}
            className="rounded-lg shadow-[5px_10px_20px_rgba(0,0,0,0.1)] object-cover object-[0%_1%] w-[200px] h-[105px]"
          />
        </div>

        <div className="pl-2 pr-3 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="font-bold text-xl text-black relative group-hover:text-tertiary-foreground transition-all duration-300 ease-in-out">
              <span>{project.projectName}</span>
            </h3>
            {project.linkIcon && (
              <Image
                src={urlFor(project.linkIcon).url()}
                alt="link icon"
                width={24}
                height={24}
                className="hidden lg:block group-hover:scale-125 transition-all duration-200 ease-in-out"
              />
            )}
          </div>

          <p className="text-wrap mb-2">{project.projectDescription}</p>

          {project.prize && (
            <p className="text-amber-400 mb-2"> {project.prize}</p>
          )}

          <div className="flex flex-wrap gap-2">
            {project.skillTags.map((skill, index) => (
              <span
                key={index}
                className="text-sm bg-secondary hover:bg-[#34495e] hover:shadow-lg text-tertiary-foreground px-2 py-1 rounded-2xl transition-all duration-200 ease-in-out"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
