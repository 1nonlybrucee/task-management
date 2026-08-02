import { v4 as uuidv4 } from "uuid";
import type {
  LoginCredentials,
  RegisterData,
  RegisteredUser,
  User,
} from "../types/auth";

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

function getUsers(): RegisteredUser[] {
  try {
    const users = localStorage.getItem(USERS_KEY);
    if (!users) {
      return [];
    }
    return JSON.parse(users);
  } catch {
    return [];
  }
}

function saveUsers(users: RegisteredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export const authService = {
  register(data: RegisterData): void {
    const users = getUsers();

    const emailExists = users.some(
      (user) => user.email.toLowerCase() === data.email.toLowerCase(),
    );

    if (emailExists) {
      throw new Error("Email is already registered.");
    }

    const newUser: RegisteredUser = {
      id: uuidv4(),
      name: data.name,
      email: data.email.trim().toLowerCase(),
      password: data.password,
    };

    users.push(newUser);
    saveUsers(users);
  },

  login(credentials: LoginCredentials): User {
    const users = getUsers();

    const foundUser = users.find(
      (user) =>
        user.email.trim().toLowerCase() ===
          credentials.email.trim().toLowerCase() &&
        user.password === credentials.password,
    );

    if (!foundUser) {
      throw new Error("Incorrect email or password.");
    }

    const currentUser: User = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    return currentUser;
  },

  logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser(): User | null {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  },

  isAuthenticated(): boolean {
    return authService.getCurrentUser() !== null;
  },
};
