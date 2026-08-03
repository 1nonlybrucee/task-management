export type Task = {
  id: string;
  projectId: string;
  title: string;
  status: "todo" | "in-progress" | "completed";
};
