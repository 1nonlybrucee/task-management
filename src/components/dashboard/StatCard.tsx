type StatCardProps = {
  title: string;
  value: string | number;
  description: string;
};

export default function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="my-1 text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}
