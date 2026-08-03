import { v4 as uuidv4 } from "uuid";
import type { Project } from "../types/project";

const PROJECTS_KEY = "projects";

function getProjects(): Project[] {
  const projects = localStorage.getItem(PROJECTS_KEY);
  if (!projects) {
    return [];
  }
  try {
    return JSON.parse(projects);
  } catch {
    return [];
  }
}
function getProjectById(id: string): Project | undefined {
  const projects = getProjects();
  return projects.find((project) => project.id === id);
}

function saveProjects(projects: Project[]) {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

export const projectService = {
  getProjects(): Project[] {
    return getProjects();
  },
  getProjectById(id: string): Project | undefined {
    return getProjectById(id);
  },

  create(name: string): Project {
    const trimmedName = name.trim();

    if (!trimmedName) {
      throw new Error("Project name is required.");
    }
    const projects = getProjects();

    const newProject: Project = {
      id: uuidv4(),
      name: trimmedName,
    };
    projects.push(newProject);
    saveProjects(projects);
    return newProject;
  },

  update(id: string, name: string) {
    const projects = getProjects();
    const trimmedName = name.trim();
    if (!trimmedName) {
      throw new Error("Project name is required.");
    }

    const toEdit = projects.find((p) => p.id === id);
    if (!toEdit) {
      throw new Error("Project not found.");
    }
    toEdit.name = trimmedName;
    saveProjects(projects);
    return toEdit;
  },

  delete(id: string) {
    const projects = getProjects();
    const filtered = projects.filter((p) => p.id !== id);
    saveProjects(filtered);
  },
};
