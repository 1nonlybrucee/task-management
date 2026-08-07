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
    <div className="flex gap-4 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col gap-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm "
        >
          <div className="flex gap-2">
            <p className="text-xl font-semibold">{project.name}</p>
            <button
              onClick={() => onEdit(project.id)}
              className="hover:text-blue-600 hover:bg-blue-100 px-0.5 transition-colors rounded"
            >
              <SquarePen />
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="hover:text-red-500 hover:bg-red-100 px-0.5 transition-colors rounded"
            >
              <Trash />
            </button>
          </div>
          <div>
            {selectedProjectId === project.id && (
              <AddTaskForm
                onCreate={handleCreateTask}
                projectId={project.id}
                onClose={() => setSelectedProjectId(null)}
              />
            )}
            <div>
              <TaskList projectId={project.id} tasks={tasks} />
            </div>
            <button onClick={() => setSelectedProjectId(project.id)}>
              <Plus />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
