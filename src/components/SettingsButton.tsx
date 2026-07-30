import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Settings } from "lucide-react";
import clsx from "clsx";

export default function SettingsButton() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  return (
    <div className="relative">
      {isSettingsOpen && (
        <div className="absolute bottom-full mb-2 w-full bg-white border border-slate-200 shadow-lg rounded-lg">
          <NavLink
            to={"/profile"}
            className={
              "w-full flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-gray-100 transition-colors"
            }
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            Profile
          </NavLink>
          <NavLink
            to={"/login"}
            className={
              "w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            }
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            Log out
          </NavLink>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className="p-2 mb-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center"
      >
        <Settings
          className={clsx("w-5 h-5 transition-transform duration-300", {
            "rotate-90": isSettingsOpen,
          })}
        />
      </button>
    </div>
  );
}
