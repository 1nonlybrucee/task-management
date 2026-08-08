import { Plus, SquarePen, Trash } from "lucide-react";
import type { Project } from "../types/project";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";
import TaskList from "./TaskList";
import { taskService } from "../services/taskService";
import type { Task } from "../types/task";
import AddProjectButton from "./AddProjectButton";

type ProjectsProps = {
  projects: Project[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onAdd: () => void;
};

export default function ProjectsList({
  projects,
  onDelete,
  onEdit,
  onAdd,
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

  const handleDeleteTask = (id: string) => {
    taskService.deleteTask(id);
    const newTask = taskService.getTasks();
    setTasks(newTask);
  };

  const handleEditTask = (id: string, name: string) => {
    taskService.updateTask(id, name);
    const updatedTasks = taskService.getTasks();
    setTasks(updatedTasks);
  };

  const handleToggleStatus = (id: string) => {
    const updatedTask = taskService.toggleComplete(id);
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? updatedTask : task)),
    );
  };

  return (
    <div className="flex h-full min-h-0 items-start gap-4 overflow-x-auto overflow-y-hidden p-1">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex max-h-full w-72 shrink-0 flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate text-lg font-bold text-slate-800">
              {project.name}
            </h3>

            <div className="flex shrink-0 items-center gap-1 text-slate-400">
              <button
                onClick={() => onEdit(project.id)}
                className="rounded-md p-1 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label="Edit project"
              >
                <SquarePen className="h-5 w-5" />
              </button>

              <button
                onClick={() => onDelete(project.id)}
                className="rounded-md p-1 transition-colors hover:bg-red-50 hover:text-red-600"
                aria-label="Delete project"
              >
                <Trash className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-2">
            {selectedProjectId === project.id && (
              <AddTaskForm
                onCreate={handleCreateTask}
                projectId={project.id}
                onClose={() => setSelectedProjectId(null)}
              />
            )}

            <div className="min-h-0 overflow-y-auto">
              <TaskList
                projectId={project.id}
                tasks={tasks}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
                onToggle={handleToggleStatus}
              />
            </div>

            <button
              onClick={() => setSelectedProjectId(project.id)}
              className="mt-1 flex w-fit items-center justify-center rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              aria-label="Add task"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}

      <div className="shrink-0">
        <AddProjectButton onClick={onAdd} />
      </div>
    </div>
  );
}
