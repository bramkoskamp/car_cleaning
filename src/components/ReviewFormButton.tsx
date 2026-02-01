import { Star } from "lucide-react";

interface ReviewFormButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export function ReviewFormButton({ onClick, isVisible }: ReviewFormButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed right-6 bottom-16 bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:scale-110 transition-all duration-500 ease-out z-50 rounded-full p-5 ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-24 opacity-0 pointer-events-none"
      }`}
      aria-label="Schrijf een review"
      title="Schrijf een review"
    >
      <Star className="w-7 h-7 fill-white" />
    </button>
  );
}
