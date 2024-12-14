"use client";
import React, { useEffect } from "react";
import MenuItem from "./NavItem";
import { SectionType, useSectionContext } from "../contexts/SectionProvider";

const Navigation = () => {
  const { setSection } = useSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        [SectionType.ABOUT]: document.getElementById('about'),
        [SectionType.EXPERIENCE]: document.getElementById('experience'),
        [SectionType.PROJECTS]: document.getElementById('projects'),
      };

      const scrollPosition = window.scrollY + 100; // offset for better detection

      for (const [section, element] of Object.entries(sections)) {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setSection(section as SectionType);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSection]);

  return (
    <nav className="flex flex-col items-left justify-center gap-3">
      <MenuItem text={SectionType.ABOUT} />
      <MenuItem text={SectionType.EXPERIENCE} />
      <MenuItem text={SectionType.PROJECTS} />
    </nav>
  );
};

export default Navigation;
