"use client";

import React from "react";
import { useSectionContext, SectionType } from "../contexts/SectionProvider";

type MenuItemProps = {
  text: SectionType;
};

const MenuItem: React.FC<MenuItemProps> = ({ text }: { text: SectionType }) => {
  const { section, setSection } = useSectionContext();
  const active = section === text;

  const onClick = () => {
    setSection(text);
    const element = document.getElementById(text.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="flex flex-row items-center gap-2 group cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-[50px] h-[2px] rounded-full mr-4 
          bg-gradient-to-r from-[#a2aecb] via-[#8494b7] to-[#a2aecb]
          transition-all duration-300 ease-in-out 
          hover:w-[70px] group-hover:w-[70px]
          group-hover:from-white group-hover:via-blue-200 group-hover:to-white
          group-hover:shadow-[0_0_10px_#ffffff80] group-hover:h-[3px]
          ${active ? "w-[70px] from-white via-blue-200 to-white shadow-[0_0_10px_#ffffff80] h-[3px]" : ""}`}
      ></div>
      <span
        className={`text-xl ${active ? "text-white" : "text-primary-foreground"}`}
      >
        {text}
      </span>
    </button>
  );
};

export default MenuItem;
