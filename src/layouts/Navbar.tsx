import clsx from "clsx";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }: NavLinkRenderProps) =>
    clsx("text-sm font-medium transition-colors", {
      "text-blue-700 ": isActive,
      "text-slate-600 hover:text-slate-900": !isActive,
    });

  return (
    <header className="bg-white sticky top-0 z-20 w-full border-b border-slate-200/80">
      <nav className="flex items-center gap-8 px-6 py-3.5">
        <h1 className="font-bold text-lg text-slate-800">Task Management</h1>
        <div className="flex gap-6 items-center">
          <NavLink to={"/"} className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to={"/projects"} className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to={"/tasks"} className={navLinkClass}>
            Tasks
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
