import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import Navigation from "../components/Navigation";
import ProjectSection from "./_sections/projectSection";
import WorkExperienceSection from "./_sections/workExperienceSection";
import ArticleSection from "./_sections/articleSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-2/5 fixed top-0 left-0 h-screen bg-primary p-20">
        <div className="flex flex-col gap-2">
          <h1 className="font-inter font-bold text-[2.3rem] tracking-[2px] -ml-[5px] text-secondary-foreground">
            Tawsif Kamal
          </h1>

          <h3 className="font-inter text-xl text-secondary-foreground">
            CS @ Georgia Tech | IoT Intern @ IBM
          </h3>

          <h4 className="primary-text">
            Fullstack developer interested in Reinforcement Learning
          </h4>
          <Image
            src="/assets/images/profile.jpeg"
            alt="Profile"
            width={250}
            height={300}
            className="object-cover rounded-lg shadow-lg object-[-40%_20%] mb-8"
          />

          <Navigation />
          <div className="flex gap-4 my-4">
            <Link
              href="https://www.youtube.com/channel/UCfYIV34hpU_DXoOnYGngfWQ"
              target="_blank"
              className="transition-transform hover:scale-102"
            >
              <Image
                src="/assets/profileIcons/youtube-outline.png"
                alt="YouTube"
                width={35}
                height={35}
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/tawsif-kamal/"
              target="_blank"
              className="transition-transform hover:scale-102"
            >
              <Image
                src="/assets/profileIcons/linkedin-outline.png"
                alt="LinkedIn"
                width={35}
                height={35}
              />
            </Link>

            <Link
              href="https://github.com/tawsifkamal"
              target="_blank"
              className="transition-transform hover:scale-102"
            >
              <Image
                src="/assets/profileIcons/github-outline.png"
                alt="GitHub"
                width={35}
                height={35}
              />
            </Link>

            <Link
              href="https://medium.com/@tawsifkamal"
              target="_blank"
              className="transition-transform hover:scale-102"
            >
              <Image
                src="/assets/profileIcons/medium-outline.png"
                alt="Medium"
                width={35}
                height={35}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-3/5 ml-[40%] p-10 overflow-y-auto">
        <div className="flex-1 p-20">
          <div id="about">
            Hey! I'm a 3rd year Computer Science student at Georgia Tech with a
            concentration in AI and Networking. I'm currently interning as a
            Machine Learning Developer &#64; IBM and have previously worked at
            NCR and LogicomUSA as a Fullstack Developer. I also help make apps
            for non-profits at my school club Bits of Good.
            <br />
            <br />
            My journey involves learning and exploring the fundamentals behind
            Large Language Models (LLMs) and Natural Language Processing (NLP).
            In my current internship, I'm diving into the intricacies of
            Kubernetes and LLMOps infrastructure. I'm equally fascinated by the
            nuances of full-stack development, continually exploring Angular,
            Vue, React and the subtle differences between frontend/backend
            frameworks. <br />
            <br />
            When I'm not at the computer, you can find me experimenting with my
            camera, hitting the gym, or eating out!
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
    </div>
  );
}
