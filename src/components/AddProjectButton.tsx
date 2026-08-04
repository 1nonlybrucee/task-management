import { ClipboardPlus } from "lucide-react";

type AddProjectButtonProps = {
  onClick: () => void;
};

export default function AddProjectButton({ onClick }: AddProjectButtonProps) {
  return (
    <button onClick={onClick}>
      <ClipboardPlus />
    </button>
  );
}
