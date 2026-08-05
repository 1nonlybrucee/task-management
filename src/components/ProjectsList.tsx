import { SquarePen, Trash } from "lucide-react";
import type { Project } from "../types/project";

type ProjectsProps = {
  projects: Project[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export default function ProjectsList({
  projects,
  onDelete,
  onEdit,
}: ProjectsProps) {
  return (
    <div className="flex gap-4">
      {projects.map((project) => (
        <div key={project.id} className="flex gap-2">
          {project.name}
          <button onClick={() => onEdit(project.id)}>
            <SquarePen />
          </button>
          <button onClick={() => onDelete(project.id)}>
            <Trash />
          </button>
        </div>
      ))}
    </div>
  );
}
