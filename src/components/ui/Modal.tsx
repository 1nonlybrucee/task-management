import { CircleX } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="rounded-lg bg-slate-50 p-6">
        <button
          onClick={onClose}
          className="hover:text-red-500 transition-transform"
        >
          <CircleX />
        </button>
        {children}
      </div>
    </div>
  );
}
