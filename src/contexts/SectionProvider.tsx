"use client";

import { createContext, useState, useContext } from "react";
import { SectionContextType, SectionType } from "@/lib/types";

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
}

const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [section, setSection] = useState(SectionType.ABOUT);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  return (
    <SectionContext.Provider
      value={{ section, setSection, isScrollLocked, setIsScrollLocked }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
