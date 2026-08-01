import clsx from "clsx";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import SettingsButton from "../components/SettingsButton";

export default function Sidebar() {
  const linkClass = ({ isActive }: NavLinkRenderProps) =>
    clsx(
      "flex items-center px-3 py-2 font-medium text-sm transition-colors duration-150",
      {
        "bg-blue-50 text-blue-700 font-semibold": isActive,
        "text-slate-600 hover:bg-slate-100 hover:text-slate-900": !isActive,
      },
    );

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col justify-between border-r border-slate-200/80 bg-white">
      <div className="flex flex-col py-3">
        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        <NavLink to="/tasks" className={linkClass}>
          Tasks
        </NavLink>
      </div>
      <div className="border-t border-slate-200 p-4">
        <SettingsButton />
      </div>
    </aside>
  );
}
