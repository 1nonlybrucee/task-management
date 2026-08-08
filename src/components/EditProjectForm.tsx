import { useState } from "react";
import type { Project } from "../types/project";

type EditProjectProps = {
  project: Project;
  onSave: (project: Project) => void;
};

export default function EditProjectForm({ project, onSave }: EditProjectProps) {
  const [name, setName] = useState(project.name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave({
      ...project,
      name: name.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
      <div className="text-center pr-4">
        <h1 className="text-xl font-bold text-slate-900">Edit Project</h1>
        <p className="mt-1 text-xs text-slate-500">
          Enter the new name of the project.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold tracking-wide text-slate-700">
          Project name
        </label>
        <input
          type="text"
          placeholder="Updated name"
          className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          value={name}
          onChange={handleChange}
          autoFocus
        />
      </div>

      <button
        type="submit"
        className="mt-1 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.99]"
      >
        Save
      </button>
    </form>
  );
}
