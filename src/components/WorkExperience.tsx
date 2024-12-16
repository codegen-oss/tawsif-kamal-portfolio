import React from "react";
import { WorkExperienceType } from "@/lib/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

interface WorkExperienceProps {
  workExperience: WorkExperienceType;
  index: number;
}

const WorkExperience = ({ workExperience, index }: WorkExperienceProps) => {
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const isEven = index % 2 === 0;

  return (
    <HoverCard openDelay={50} closeDelay={0}>
      <HoverCardTrigger asChild>
        <div
          className={cn(
            "relative flex items-center w-[62%] group cursor-pointer",
            isEven ? "self-start" : "self-end",
            isEven ? "justify-start" : "justify-end"
          )}
        >
          {/* Connecting Line */}
          <div
            className={cn(
              "absolute h-24 w-[2px] bg-[#34495e]",
              isEven ? "left-[25px]" : "right-[25px]",
              isEven ? "top-1/2" : "-top-12"
            )}
          />

          {/* Pin Component - Position as needed */}
          <div
            className={cn(
              "absolute w-3 h-3 z-10",
              isEven
                ? "top-[140px] left-[22px]" // Even: below the line
                : "right-[18px] -top-[50px]" // Odd: above the line
            )}
          >
            {/* Main Pin Head */}
            <div className="absolute w-2 h-2 bg-black rounded-full shadow-lg ring-1 ring-black">
              {/* Pin Shadow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            </div>
          </div>

          <div
            className={cn(
              "relative flex items-center gap-4 bg-[#f5f5f5] rounded-lg p-4 w-[80%] transition-all duration-300 hover:shadow-lg hover:bg-[#e8e8e8] cursor-pointer shadow-[0_2px_8px_rgba(111,67,67,0.1)]",
              isEven ? "flex-row" : "flex-row-reverse"
            )}
          >
            {/* Company Logo */}
            <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white p-2 ring-2 ring-[#34495e] transition-all duration-300 group-hover:ring-[#8b5cf6]">
              <Image
                src={urlFor(workExperience.logo).url()}
                alt={workExperience.companyName}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>

            {/* Company Info */}
            <div className={`flex-1 ${isEven ? "text-left" : "text-right"}`}>
              <h3 className="text-lg font-semibold text-gray-900">
                {workExperience.companyName}
              </h3>
              <p className="text-sm text-gray-700">{workExperience.position}</p>
              <p className="text-sm text-gray-600">
                {formatDate(workExperience.startDate)} -{" "}
                {workExperience.isPresent
                  ? "Present"
                  : formatDate(workExperience.endDate)}
              </p>
            </div>
          </div>
        </div>
      </HoverCardTrigger>

      <HoverCardContent
        className="w-80 bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 duration-100"
        side="left"
        // align="start"
        sideOffset={20}
      >
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900">
            {workExperience.companyName}
          </h4>
          <p className="text-sm text-gray-700">{workExperience.position}</p>
          <p className="text-sm text-gray-600">{workExperience.description}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {workExperience.technologies?.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-[#34495e] text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default WorkExperience;
