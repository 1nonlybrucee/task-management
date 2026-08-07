import { ClipboardPlus } from "lucide-react";

type AddProjectButtonProps = {
  onClick: () => void;
};

export default function AddProjectButton({ onClick }: AddProjectButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md transition hover:bg-blue-600 hover:shadow-lg active:scale-95 active:bg-blue-700"
      aria-label="Add Project"
      title="Add Project"
    >
      <ClipboardPlus size={22} />
    </button>
  );
}
