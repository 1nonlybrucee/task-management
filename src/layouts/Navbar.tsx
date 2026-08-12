import { Search } from "lucide-react";
import clsx from "clsx";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import { useState } from "react";
import NavSearch from "../components/NavSearch";

export default function Navbar() {
  const linkClass = ({ isActive }: NavLinkRenderProps) =>
    clsx(
      "flex items-center px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150",
      {
        "bg-blue-50 text-blue-700 font-semibold": isActive,
        "text-slate-600 hover:bg-slate-100 hover:text-slate-900": !isActive,
      },
    );

  const [searchInput, setInputSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between gap-2 border-b border-slate-200/80 bg-white px-3 py-3 shadow-sm sm:gap-4 sm:px-6">
      <h1 className="shrink-0 text-lg font-bold text-blue-800 sm:text-2xl">
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
              value={searchInput}
              onChange={handleChange}
              aria-label="Search projects and tasks"
              className="w-full rounded-full border border-slate-300 py-1 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 sm:py-2 sm:pl-10 sm:pr-4 sm:text-sm"
              placeholder="Search..."
            />

            <NavSearch input={searchInput} onClear={() => setInputSearch("")} />
          </div>
        </form>

        <div
          className="hidden h-5 w-px bg-slate-200 xs:block"
          aria-hidden="true"
        />

        <LogoutButton />
      </div>
    </header>
  );
}
