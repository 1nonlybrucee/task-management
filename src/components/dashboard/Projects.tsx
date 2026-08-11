import { projectService } from "../../services/projectService";
import { taskService } from "../../services/taskService";

export default function Projects() {
  const projects = projectService.getProjects();
  const tasks = taskService.getTasks();

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Projects</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Overview of active projects and task loads
          </p>
        </div>
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Tasks
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {projects.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-6">
            No projects found.
          </p>
        ) : (
          projects.map((project) => {
            const taskCount = tasks.filter(
              (t) => t.projectId === project.id,
            ).length;

            return (
              <div
                key={project.id}
                className="flex items-center justify-between py-3.5 px-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <p className="text-sm font-medium text-slate-800">
                    {project.name}
                  </p>
                </div>

                <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">
                  {taskCount} {taskCount === 1 ? "task" : "tasks"}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
