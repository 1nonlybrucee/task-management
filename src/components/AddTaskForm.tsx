import { useState } from "react";

type AddTaskProps = {
  projectId: string;
  onCreate: (projectId: string, title: string) => void;
  onClose: () => void;
};

export default function AddTaskForm({
  onCreate,
  projectId,
  onClose,
}: AddTaskProps) {
  const [taskName, setTaskName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onCreate(projectId, taskName);
    setTaskName("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-3 max-w-sm">
      <div className="flex flex-col gap-1 flex-1">
        <label
          htmlFor="task-name"
          className="text-left text-xs font-semibold text-gray-700"
        >
          Task name
        </label>
        <input
          value={taskName}
          onChange={handleChange}
          id="task-name"
          type="text"
          className="w-full border border-gray-300 rounded-xl px-3 py-1 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="e.g. karigos"
        />
      </div>

      <button
        type="submit"
        className="font-semibold text-sm bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-xl transition cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}
