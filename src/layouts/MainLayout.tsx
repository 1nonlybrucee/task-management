import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-50">
      <Navbar />

      <main className="flex-1 overflow-y-auto py-5 px-8">
        <Outlet />
      </main>
    </div>
  );
}
