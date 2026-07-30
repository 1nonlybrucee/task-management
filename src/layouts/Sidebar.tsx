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
    <aside className="w-64 bg-white border border-slate-200/80 justify-between flex flex-col">
      <div className="flex flex-col ">
        <span className="font-bold text-xs text-gray-500 tracking-wide px-3 mb-2 mt-1 "></span>
        <NavLink to={"/"} className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to={"/projects"} className={linkClass}>
          Projects
        </NavLink>
        <NavLink to={"/tasks"} className={linkClass}>
          Tasks
        </NavLink>
      </div>
      <div className="border-t border-gray-300 p-4">
        <SettingsButton />
      </div>
    </aside>
  );
}
