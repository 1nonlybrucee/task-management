type EmptyProjectsProps = {
  onCreateProject: () => void;
};

export default function EmptyProjects({ onCreateProject }: EmptyProjectsProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <h2 className="text-2xl font-semibold text-slate-800">No projects yet</h2>

      <p className="mt-2 text-slate-500">
        Create your first project to start organizing your tasks.
      </p>

      <button
        onClick={onCreateProject}
        className="mt-6 rounded-xl bg-blue-500 px-5 py-2 font-medium text-white transition hover:bg-blue-600"
      >
        Create Project
      </button>
    </div>
  );
}
