import { LuUndo2 } from "react-icons/lu";
import { useRouter } from "next/navigation";

export const UndoButton = () => {
  const router = useRouter();

  const handleUndo = () => {
    router.back();
  };

  return (
    <div className="w-full max-w-[1280px] py-6 font-semibold text-text-secondary">
      <button
        onClick={handleUndo}
        className="flex items-center justify-start gap-1"
      >
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-text-secondary">
          <LuUndo2 size={15} />
        </span>
        <p>Voltar</p>
      </button>
    </div>
  );
};
