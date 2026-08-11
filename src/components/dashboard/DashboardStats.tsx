import { projectService } from "../../services/projectService";
import { taskService } from "../../services/taskService";
import StatCard from "./StatCard";

export default function DashboardStats() {
  const projects = projectService.getProjects();
  const tasks = taskService.getTasks();

  const completedTasks = tasks.filter((task) => task.status).length;

  const completionRate =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatCard
        title="Projects"
        value={projects.length}
        description={"Total projects"}
      />

      <StatCard
        title="Tasks"
        value={tasks.length}
        description={`${completedTasks} out of ${tasks.length} tasks completed`}
      />

      <StatCard
        title="Completed"
        value={`${completionRate}%`}
        description={"Overall task progress"}
      />
    </div>
  );
}
