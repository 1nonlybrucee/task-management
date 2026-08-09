export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Total Projects</p>
          <p className="text-2xl font-bold">3</p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Total Tasks</p>
          <p className="text-2xl font-bold">9</p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-2xl font-bold">55%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Upcoming Tasks</h2>

          <div className="mt-4 space-y-3">
            <p>• Finish dashboard</p>
            <p>• Fix task filtering</p>
            <p>• Add authentication</p>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="font-semibold">Recent Activity</h2>

          <div className="mt-4 space-y-3">
            <p>Added "karigos" to project "hahaha"</p>
            <p>Completed "Fix task filtering"</p>
            <p>Created project "Portfolio"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
