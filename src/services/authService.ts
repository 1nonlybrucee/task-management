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
  register(data: RegisterData): User {
    const users = getUsers();

    const emailExists = users.some(
      (user) =>
        user.email.toLocaleLowerCase() === data.email.toLocaleLowerCase(),
    );

    if (emailExists) {
      throw new Error("Email is already registered.");
    }

    const newUser: RegisteredUser = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email.trim().toLocaleLowerCase(),
      password: data.password,
    };

    users.push(newUser);
    saveUsers(users);

    const currentUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    return currentUser;
  },

  login(credentials: LoginCredentials): User {
    const users = getUsers();

    const foundUser = users.find(
      (user) =>
        user.email.trim().toLocaleLowerCase() ===
          credentials.email.trim().toLowerCase() &&
        user.password === credentials.password,
    );

    if (!foundUser) {
      throw new Error("Invalid email or password");
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
