"use client";

import { createContext, useState, useContext, useMemo } from "react";

export enum SectionType {
  ABOUT = "ABOUT",
  EXPERIENCE = "EXPERIENCE",
  PROJECTS = "PROJECTS",
}

export type SectionStateType = {
  section: SectionType;
  setSection: (section: SectionType) => void;
};

export const SectionContext = createContext<SectionStateType>({
  section: SectionType.ABOUT,
  setSection: () => {},
});

export const useSectionContext = () => {
  return useContext(SectionContext);
};

const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [section, setSection] = useState(SectionType.ABOUT);

  const value = useMemo(() => ({ section, setSection }), [section]);

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
};

export default SectionProvider;
