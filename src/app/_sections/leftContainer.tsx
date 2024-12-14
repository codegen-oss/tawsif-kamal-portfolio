import React from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Profile } from "@/utils/types";
import { urlFor } from "@/sanity/lib/image";

const socialLinks = [
  {
    href: "https://www.youtube.com/channel/UCfYIV34hpU_DXoOnYGngfWQ",
    icon: "/assets/profileIcons/youtube-outline.png",
    alt: "YouTube",
  },
  {
    href: "https://www.linkedin.com/in/tawsif-kamal/",
    icon: "/assets/profileIcons/linkedin-outline.png",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/tawsifkamal",
    icon: "/assets/profileIcons/github-outline.png",
    alt: "GitHub",
  },
  {
    href: "https://medium.com/@tawsifkamal",
    icon: "/assets/profileIcons/medium-outline.png",
    alt: "Medium",
  },
];

const LeftContainer = ({ profile }: { profile: Profile }) => {
  return (
    <div className="w-2/5 fixed top-0 left-0 h-screen bg-primary p-20">
      <div className="flex flex-col gap-2">
        <h1 className="font-inter font-bold text-[2.3rem] tracking-[2px] -ml-[5px] text-secondary-foreground">
          {profile.name}
        </h1>

        <h3 className="font-inter font-bold text-xl text-secondary-foreground">
          {profile.school} | {profile.currentJob}
        </h3>

        <Image
          src={urlFor(profile.profileImage).url()}
          alt="Profile"
          width={400}
          height={200}
          className="object-cover rounded-lg shadow-lg object-[-40%_20%] mb-8"
        />

        <Navigation />
        <div className="flex gap-4 my-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              className="transition-transform hover:scale-102"
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={35}
                height={35}
                className="social-icon"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
