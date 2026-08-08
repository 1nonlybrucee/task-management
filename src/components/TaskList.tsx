import { PenLine, X, Check } from "lucide-react";
import type { Task } from "../types/task";
import { useState } from "react";

type TasklistProps = {
  projectId: string;
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string) => void;
};

export default function TaskList({
  projectId,
  tasks,
  onDelete,
  onEdit,
}: TasklistProps) {
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [newName, setNewName] = useState("");

  const handleStartEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setNewName(task.title);
  };

  const handleSaveEdit = (id: string) => {
    onEdit(id, newName);
    setEditingTaskId(null);
  };

  return (
    <div className="flex flex-col gap-2.5">
      {tasks
        .filter((task) => task.projectId === projectId)
        .map((task) => (
          <div
            key={task.id}
            className="flex justify-between px-3.5 py-3 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all"
          >
            {editingTaskId === task.id ? (
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="min-w-0 flex-1 text-sm font-medium text-slate-800"
                autoFocus
              />
            ) : (
              <div className="text-sm font-medium text-slate-800">
                {task.title}
              </div>
            )}

            <div className="flex items-center gap-2">
              {editingTaskId === task.id ? (
                <button onClick={() => handleSaveEdit(task.id)}>
                  <Check className="h-5 w-5" />
                </button>
              ) : (
                <button onClick={() => handleStartEdit(task)}>
                  <PenLine className="h-4 w-4" />
                </button>
              )}

              <button onClick={() => onDelete(task.id)}>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
