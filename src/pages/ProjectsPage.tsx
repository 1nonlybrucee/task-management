import { useState } from "react";
import { projectService } from "../services/projectService";
import type { Project } from "../types/project";
import CreateProjectCard from "../components/CreateProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(
    projectService.getProjects(),
  );
  const handleCreateProject = (name: string) => {
    const newProject = projectService.create(name);
    setProjects((prev) => [...prev, newProject]);
  };

  if (projects.length === 0) {
    return <CreateProjectCard onCreate={handleCreateProject} />;
  }

  return <h1>This is projects page</h1>;
}
