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
    onSave({
      ...project,
      name: name.trim(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  flex-col items-center w-full bg-white border border-slate-200 shadow-sm max-w-sm rounded-xl p-6"
    >
      <div className="flex flex-col items-center mb-4">
        <h1 className="font-bold text-xl">Edit Project</h1>
        <p className="text-sm text-gray-500">
          Enter the new name of the project.
        </p>
      </div>

      <div className="flex flex-col">
        <label className="text-xs font-semibold">Project name</label>
        <input
          type="text"
          placeholder="Updated name"
          className="border py-1.5 border-slate-400/80 rounded-md  focus:outline-blue-300 px-4"
          value={name}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-1 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.99]"
        >
          Save{" "}
        </button>
      </div>
    </form>
  );
}
