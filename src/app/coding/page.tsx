import { sanityFetch } from "@/sanity/lib/live";
import { PROFILE_QUERY } from "@/lib/queries";
import WorkExperienceSection from "@/_sections/work/workExperienceSection";
import { Separator } from "@/components/ui/separator";
import ProjectSection from "@/_sections/work/projectSection";
import ArticleSection from "@/_sections/work/articleSection";
import { Profile } from "@/lib/types";

export default async function CodingPage() {
  const profile: Profile = (await sanityFetch({ query: PROFILE_QUERY }))
    .data[0];

  return (
    <div className="flex min-h-screen">
      <div className="w-3/5 ml-[40%] p-10 overflow-y-auto">
        <div className="flex-1 p-20">
          <div
            id="about"
            className="whitespace-pre-line text-2xl leading-relaxed mb-20 font-outfit"
          >
            {profile.bio}
          </div>

          <div id="experience">
            <Separator className="bg-secondary" />
            <WorkExperienceSection />
          </div>

          <div id="projects">
            <Separator className="bg-secondary" />
            <ProjectSection />
          </div>

          <div id="articles">
            <Separator className="bg-secondary" />
            <ArticleSection />
          </div>
        </div>
      </div>
    </div>
  );
}
