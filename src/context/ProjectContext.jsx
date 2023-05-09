import { useState, createContext } from "react";

export const ProjectContext = createContext();

export default function ProjectProvider({children}) {
    const [selectedProject, setSelectedProject] = useState(null);

    const selectProject = (project) => {
        setSelectedProject(project);
    };

    const deselectProject = () => {
        setSelectedProject(null);
    };

    const value={
        selectedProject,
        selectProject,
        deselectProject
    };

    return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
};