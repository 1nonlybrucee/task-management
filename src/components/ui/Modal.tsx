import { CircleX } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="rounded-lg bg-white p-6">
        <button onClick={onClose}>
          <CircleX />
        </button>
        {children}
      </div>
    </div>
  );
}
