import { useState } from "react";
import { PenLine, X, Check, ClipboardList } from "lucide-react";
import type { Task } from "../types/task";

type TasklistProps = {
  projectId: string;
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string) => void;
  onToggle: (id: string) => void;
};

export default function TaskList({
  projectId,
  tasks,
  onDelete,
  onEdit,
  onToggle,
}: TasklistProps) {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [newName, setNewName] = useState("");

  const projectTasks = tasks.filter((task) => task.projectId === projectId);

  const handleStartEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setNewName(task.title);
  };

  const handleSaveEdit = (id: string) => {
    if (newName.trim()) {
      onEdit(id, newName.trim());
    }
    setEditingTaskId(null);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setNewName("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: string,
  ) => {
    if (e.key === "Enter") {
      handleSaveEdit(id);
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  if (projectTasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50">
        <ClipboardList className="h-8 w-8 text-slate-300 mb-2" />
        <p className="text-sm font-medium text-slate-500">No tasks found</p>
        <p className="text-xs text-slate-400">Add a task to get started.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {projectTasks.map((task) => {
        const isEditing = editingTaskId === task.id;

        return (
          <div
            key={task.id}
            className="group flex items-center justify-between gap-3 px-3.5 py-2.5 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow transition-all duration-150"
          >
            {isEditing ? (
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, task.id)}
                  className="w-full text-sm font-medium text-slate-800 bg-slate-50 border border-indigo-300 rounded-lg px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  autoFocus
                />
              </div>
            ) : (
              <label className="flex-1 flex items-center gap-3 cursor-pointer min-w-0 select-none">
                <input
                  type="checkbox"
                  checked={task.status}
                  onChange={() => onToggle(task.id)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500/20 transition-all cursor-pointer"
                />
                <span
                  className={`text-sm font-medium truncate transition-colors ${
                    task.status
                      ? "text-slate-400 line-through"
                      : "text-slate-700"
                  }`}
                >
                  {task.title}
                </span>
              </label>
            )}

            <div className="flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
              {isEditing ? (
                <>
                  <button
                    onClick={() => handleSaveEdit(task.id)}
                    className="p-1.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                    title="Save (Enter)"
                    aria-label="Save changes"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    title="Cancel (Esc)"
                    aria-label="Cancel editing"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleStartEdit(task)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    title="Edit task"
                    aria-label="Edit task"
                  >
                    <PenLine className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onDelete(task.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete task"
                    aria-label="Delete task"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
