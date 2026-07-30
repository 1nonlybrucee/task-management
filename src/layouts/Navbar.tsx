import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-20 w-full border-b border-slate-200/80">
      <nav className="flex items-center gap-8 px-6 py-3.5 justify-between">
        <h1 className="font-bold text-lg text-slate-800">Task Management</h1>
        <div className="flex gap-6 items-center">
          <form className="flex items-center justify-center gap-1">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              <input
                type="text"
                className="border w-full rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search projects..."
              />
            </div>
          </form>

          <button>
            <Bell />
          </button>
        </div>
      </nav>
    </header>
  );
}
