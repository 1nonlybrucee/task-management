import { Plus, SquarePen, Trash } from "lucide-react";
import type { Project } from "../types/project";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";
import TaskList from "./TaskList";
import { taskService } from "../services/taskService";
import type { Task } from "../types/task";

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
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const [tasks, setTasks] = useState<Task[]>(taskService.getTasks());

  const handleCreateTask = (projectId: string, title: string) => {
    const newTask = taskService.createTask(projectId, title);
    setTasks((prev) => [...prev, newTask]);
    return newTask;
  };

  return (
    <div className="flex gap-4 items-start overflow-x-auto p-1">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col gap-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm w-72 shrink-0"
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-slate-800 truncate">
              {project.name}
            </h3>
            <div className="flex items-center gap-1 text-slate-400 shrink-0">
              <button
                onClick={() => onEdit(project.id)}
                className="p-1 hover:text-slate-700 hover:bg-slate-100 transition-colors rounded-md"
                aria-label="Edit project"
              >
                <SquarePen className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(project.id)}
                className="p-1 hover:text-red-600 hover:bg-red-50 transition-colors rounded-md"
                aria-label="Delete project"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {selectedProjectId === project.id && (
              <AddTaskForm
                onCreate={handleCreateTask}
                projectId={project.id}
                onClose={() => setSelectedProjectId(null)}
              />
            )}

            <TaskList projectId={project.id} tasks={tasks} />

            <button
              onClick={() => setSelectedProjectId(project.id)}
              className="flex items-center justify-center p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors rounded-lg w-fit mt-1"
              aria-label="Add task"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
