import { useNavigate } from "react-router-dom";
import { projectService } from "../services/projectService";
import { taskService } from "../services/taskService";

type SearchProps = {
  input: string;
  onClear: () => void;
};

export default function NavSearch({ input, onClear }: SearchProps) {
  const projects = projectService.getProjects();
  const tasks = taskService.getTasks();

  const searchedProject = projects.filter((project) => {
    if (!input.trim()) return false;

    return project.name.toLowerCase().includes(input.toLowerCase());
  });

  const searchedTask = tasks.filter((task) => {
    if (!input.trim()) return false;

    return task.title.toLowerCase().includes(input.toLowerCase());
  });

  const hasResults = searchedProject.length > 0 || searchedTask.length > 0;
  const navigate = useNavigate();

  if (!input.trim() || !hasResults) {
    return null;
  }

  return (
    <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-72 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
      {searchedProject.length > 0 && (
        <div>
          <h2 className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Projects
          </h2>

          {searchedProject.map((project) => (
            <div
              onClick={() => {
                navigate("/projects");
                onClear();
              }}
              key={project.id}
              className="cursor-pointer rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
            >
              {project.name}
            </div>
          ))}
        </div>
      )}

      {searchedTask.length > 0 && (
        <div className="mt-2">
          <h2 className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Tasks
          </h2>

          {searchedTask.map((task) => (
            <div
              onClick={() => {
                navigate("/projects");
                onClear();
              }}
              key={task.id}
              className="cursor-pointer rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
            >
              {task.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
