"use client";

import React, { useEffect } from "react";
import MenuItem from "./NavItem";
import { useSectionContext, SectionType } from "../contexts/SectionProvider";

const Navigation = () => {
  const { setSection, isScrollLocked } = useSectionContext();

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling && !isScrollLocked) {
        window.requestAnimationFrame(() => {
          const sections = [
            document.getElementById("about"),
            document.getElementById("experience"),
            document.getElementById("projects"),
          ];

          const viewportHeight = window.innerHeight;
          const scrollPosition = window.scrollY + viewportHeight * 0.3;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
              setSection(Object.values(SectionType)[i]);
              break;
            }
          }
          isScrolling = false;
        });
      }
      isScrolling = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setSection, isScrollLocked]);

  return (
    <nav className="flex flex-col items-left justify-center gap-3">
      <MenuItem text={SectionType.ABOUT} />
      <MenuItem text={SectionType.EXPERIENCE} />
      <MenuItem text={SectionType.PROJECTS} />
    </nav>
  );
};

export default Navigation;
