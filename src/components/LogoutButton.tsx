import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      aria-label="Log out"
      title="Log out"
      className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/20"
    >
      <LogOut className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:-translate-x-0.5" />
      <span className="hidden sm:inline">Log out</span>
    </button>
  );
}
