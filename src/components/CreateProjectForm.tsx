import { useState } from "react";

type CreateProjectCardProp = {
  onCreate: (name: string) => void;
};

export default function CreateProjectForm({ onCreate }: CreateProjectCardProp) {
  const [projectName, setProjectName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!projectName.trim()) return;
    onCreate(projectName);
    setProjectName("");
  };

  return (
    <div className="flex h-full w-full overflow-hidden items-center justify-center bg-slate-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="text-center">
          <h1 className="text-xl font-bold text-slate-900">Create project</h1>
          <p className="mt-1 text-xs text-slate-500">
            Set up a new workspace to start tracking tasks.
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold tracking-wide text-slate-700">
            Project name
          </label>
          <input
            value={projectName}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="e.g. Website Redesign"
          />
        </div>

        <button
          type="submit"
          className="mt-1 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.99]"
        >
          Create project
        </button>
      </form>
    </div>
  );
}
