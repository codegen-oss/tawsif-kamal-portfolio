"use client";

import React from "react";
import { useSectionContext } from "../contexts/SectionProvider";
import { SectionType } from "../lib/types";

type MenuItemProps = {
  text: SectionType;
};

const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  const { section, setSection, setIsScrollLocked } = useSectionContext();
  const active = section === text;

  const onClick = () => {
    const element = document.getElementById(text.toLowerCase());
    if (element) {
      setIsScrollLocked(true);
      setSection(text);
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
          bg-[#b98c5f] opacity-60
          transition-all duration-200 ease-out
          hover:w-[70px] group-hover:w-[70px]
          group-hover:opacity-100 group-hover:h-[3px]
          ${active ? "w-[70px] opacity-100 h-[3px]" : ""}`}
      ></div>
      <span
        className={`text-2xl font-medium ${active ? "text-[#8b4513]" : "text-[#b98c5f]"}`}
      >
        {text}
      </span>
    </button>
  );
};

export default MenuItem;
