import { SquarePen, Trash } from "lucide-react";
import type { Project } from "../types/project";

type ProjectsProps = {
  projects: Project[];
  onDelete: (id: string) => void;
};

export default function ProjectsList({ projects, onDelete }: ProjectsProps) {
  return (
    <div className="flex gap-4">
      {projects.map((project) => (
        <div key={project.id}>
          <div className="flex gap-2">
            {project.name}
            <button>
              <SquarePen />
            </button>
            <button onClick={() => onDelete(project.id)}>
              <Trash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
