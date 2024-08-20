import React from "react";
import Slider from "./Slider";
import { formatToBRL, percentageDiscount } from "@/utils/formatters";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/hooks/useCart";

const CartCard = ({ bike }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  return (
    <div className="relative bg-gray-200 border-2 border-gray-300 flex flex-col items-start justify-start w-[320px] p-2 rounded-md">
      <Slider images={bike.images} height={180} width={300} />
      <h1 className="text-xl mt-1 mb-2">{bike.name}</h1>
      <p className="font-semibold text-lg">Por: {formatToBRL(bike.price)}</p>
      <p className="font-normal">Em até 8x sem juros</p>
      <p className="font-medium text-green-800 mt-2">
        À vista no pix: {percentageDiscount(bike.price)}
      </p>

      <div className="flex items-center space-x-2">
        <button
          className="p-2 bg-gray-900 rounded-sm text-white text-sm"
          onClick={() => decrementQuantity(bike.id)}
        >
          -
        </button>
        <span className="text-sm">{bike.quantity}</span>
        <button
          className="p-2 bg-gray-900 rounded-sm text-white text-sm"
          onClick={() => incrementQuantity(bike.id)}
        >
          +
        </button>
      </div>

      <div className="flex w-[100%] items-center justify-between mt-2">
        <Link
          href={`/bikes/${bike.id}`}
          className="flex p-2 bg-blue-500 rounded-sm text-white mt-2 text-sm"
        >
          Mais Detalhes
        </Link>

        <button
          className="flex p-2 bg-gray-900 rounded-sm text-white mt-2 text-sm"
          onClick={() => removeFromCart(bike.id)}
        >
          <Image
            src="/icons/removefromcart-24.png"
            width={20}
            height={20}
            alt="Ícone de remover ao carrinho"
            className="mr-1"
          />
          Remover do Carrinho
        </button>
      </div>
    </div>
  );
};

export default CartCard;