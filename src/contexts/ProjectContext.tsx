"use client";

import { createContext, useState, useContext } from "react";

export type ProjectStateType = {
  project: string | null;
  setProject: (project: string | null) => void;
};

export const ProjectContext = createContext<ProjectStateType>({
  project: null,
  setProject: () => {},
});

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [project, setProject] = useState<string | null>(null);

  const value = { project, setProject };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectProvider;
