import type { Task } from "../types/task";
import { v4 as uuidv4 } from "uuid";

const TASKS_KEY = "tasks";

function getTasks(): Task[] {
  const tasks = localStorage.getItem(TASKS_KEY);
  if (!tasks) {
    return [];
  }
  return JSON.parse(tasks);
}

function saveTask(tasks: Task[]) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export const taskService = {
  getTasks(): Task[] {
    return getTasks();
  },

  createTask(projectId: string, title: string) {
    const tasks = getTasks();
    const trimmedTitle = title.trim();

    const newTask: Task = {
      id: uuidv4(),
      projectId,
      title: trimmedTitle,
      status: false,
    };

    tasks.push(newTask);
    saveTask(tasks);
  },

  updateTask(id: string, title: string) {
    const trimmedTitle = title.trim();
    const tasks = getTasks();
    if (!trimmedTitle) {
      throw new Error("Task name is required.");
    }
    const toEdit = tasks.find((task) => id === task.id);
    if (!toEdit) {
      throw new Error("Task not found.");
    }
    toEdit.title = trimmedTitle;
    saveTask(tasks);
    return toEdit;
  },

  deleteTask(id: string) {
    const tasks = getTasks();
    const newTask = tasks.filter((t) => t.id !== id);
    saveTask(newTask);
  },

  toggleComplete(id: string) {
    const tasks = getTasks();
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      throw new Error("Task not found.");
    }
    task.status = !task.status;
    saveTask(tasks);
  },
};
