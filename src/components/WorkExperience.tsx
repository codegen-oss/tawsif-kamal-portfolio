import React from "react";
import { WorkExperienceType } from "@/utils/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const WorkExperience = ({
  workExperience,
}: {
  workExperience: WorkExperienceType;
}) => {
  const formatDate = (dateString: string | undefined) => {

    if (!dateString) {
      return "";
    }

    const date = new Date(dateString);

    const month = date.toLocaleString("en-US", {
      month: "short",
      timeZone: "UTC",
    });
    const year = date.getFullYear();

    return `${month} ${year}`;
  };
  return (
    <div className="flex gap-4 my-4 pr-4">
      <div className="flex flex-col items-end gap-[13.5px]">
        <span className="text-primary-foreground mt-1">
          {formatDate(workExperience.startDate)} -{" "}
          {workExperience.isPresent
            ? "Present"
            : formatDate(workExperience.endDate)}
        </span>

        <Image
          src={urlFor(workExperience.logo).url()}
          alt={workExperience.companyName}
          width={200}
          height={200}
          className="rounded-lg shadow-[5px_10px_20px_rgba(0,0,0,0.1)] object-cover w-12 h-12"
        />
      </div>

      <div className="pl-2 pr-3 flex-1">
        <div className="flex items-center mb-1">
          <span className="font-bold text-lg text-black">
            {workExperience.position}
          </span>
          <span className="before:content-['·'] before:font-bold before:align-middle mx-[5px] before:text-2xl before:text-black"></span>
          <span className="font-bold text-lg text-black">
            {workExperience.companyName}
          </span>
        </div>

        <p className="text-wrap mb-2 text-primary-foreground">
          {workExperience.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-2">
          {workExperience.technologies &&
            workExperience.technologies.map((skill, index) => (
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
  );
};

export default WorkExperience;
