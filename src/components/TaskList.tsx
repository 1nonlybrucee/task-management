import type { Task } from "../types/task";

type TasklistProps = {
  projectId: string;
  tasks: Task[];
};

export default function TaskList({ projectId, tasks }: TasklistProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {tasks
        .filter((task) => task.projectId === projectId)
        .map((task) => (
          <div
            key={task.id}
            className="px-3.5 py-3 bg-white rounded-xl border border-slate-200/80 shadow-sm text-sm font-medium text-slate-800 hover:border-slate-300 transition-all cursor-pointer"
          >
            {task.title}
          </div>
        ))}
    </div>
  );
}
