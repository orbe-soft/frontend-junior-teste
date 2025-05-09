import { useCart } from "@/hooks/cart-provider";
import { useRouter } from "next/navigation";

import { FiShoppingBag } from "react-icons/fi";

export const CartIcon = () => {
  const { itemCount } = useCart();
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/cart")}
      className="relative cursor-pointer"
    >
      <FiShoppingBag className="text-2xl" />
      {itemCount > 0 && (
        <span className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-bs-orange text-xs text-white">
          {itemCount}
        </span>
      )}
    </div>
  );
};
