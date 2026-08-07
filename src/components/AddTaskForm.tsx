import { useState } from "react";

type AddTaskFormProps = {
  projectId: string;
  onCreate: (projectId: string, title: string) => void;
  onClose: () => void;
};

export default function AddTaskForm({
  projectId,
  onCreate,
  onClose,
}: AddTaskFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onCreate(projectId, title.trim());
    setTitle("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title..."
        autoFocus
        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />

      <div className="flex items-center justify-end gap-2 text-xs">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-1.5 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
