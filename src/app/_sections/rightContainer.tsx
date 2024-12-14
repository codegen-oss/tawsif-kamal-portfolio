import React from "react";
import WorkExperienceSection from "./workExperienceSection";
import ArticleSection from "./articleSection";
import { Separator } from "@radix-ui/react-separator";
import ProjectSection from "./projectSection";
import { Profile } from "@/utils/types";

interface RightContainerProps {
  profile: Profile;
}

const rightContainer = ({ profile }: RightContainerProps) => {
  return (
    <div className="w-3/5 ml-[40%] p-10 overflow-y-auto">
      <div className="flex-1 p-20">
        <div
          id="about"
          className="whitespace-pre-line text-lg leading-relaxed mb-20 font-outfit"
        >
          {profile.bio}
        </div>

        <div id="experience" className="min-h-screen">
          <WorkExperienceSection />
        </div>

        <div id="projects" className="min-h-screen">
          <Separator className="bg-secondary" />
          <ProjectSection />
        </div>

        <div id="articles">
          <Separator className="bg-secondary" />
          <ArticleSection />
        </div>
      </div>
    </div>
  );
};

export default rightContainer;
