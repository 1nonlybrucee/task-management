import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { authService } from "../services/authService";
import type { User } from "../types/auth";
import { useState } from "react";

export default function MainLayout() {
  const [user] = useState<User | null>(() => authService.getCurrentUser());

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="p-6 flex-1">
          <div className="mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
