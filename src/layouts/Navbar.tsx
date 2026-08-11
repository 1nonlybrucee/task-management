import { Search } from "lucide-react";
import clsx from "clsx";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

export default function Navbar() {
  const linkClass = ({ isActive }: NavLinkRenderProps) =>
    clsx(
      "flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150",
      {
        "bg-blue-50 text-blue-700 font-semibold": isActive,
        "text-slate-600 hover:bg-slate-100 hover:text-slate-900": !isActive,
      },
    );

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between gap-2 sm:gap-4 border-b border-slate-200/80 bg-white px-3 sm:px-6 py-3 shadow-sm">
      <h1 className="text-lg font-bold text-blue-800 shrink-0 sm:text-2xl">
        Task Management
      </h1>

      <nav aria-label="Main Navigation" className="flex items-center gap-1">
        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
      </nav>

      <div className="flex items-center gap-2 sm:gap-3">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center"
        >
          <div className="relative w-28 xs:w-36 sm:w-64 lg:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              aria-label="Search projects"
              className="w-full rounded-full border border-slate-300 pl-9 sm:pl-10 pr-3 sm:pr-4 py-1 sm:py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
        </form>

        <div
          className="h-5 w-px bg-slate-200 hidden xs:block"
          aria-hidden="true"
        />

        <LogoutButton />
      </div>
    </header>
  );
}
