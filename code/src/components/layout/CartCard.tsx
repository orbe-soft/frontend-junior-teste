import React from "react";
import Slider from "./Slider";
import { formatToBRL, percentageDiscount } from "@/utils/formatters";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/hooks/useCart";
import { BikeProps } from "@/types/bikeTypes";

const CartCard = ({ bike }: {bike: BikeProps}) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  return (
    <div className="relative bg-gray-200 border-2 border-gray-300 flex items-center justify-center w-[85dvw] flex-wrap p-2 rounded-md hover:border-gray-500 transition-default">
      <section className="">
        <Slider images={bike.images} height={180} width={280} />
      </section>
      <section className="flex-2 ml-2 text-center md:text-start">
        <h1 className="text-xl font-semibold mt-1 mb-2">{bike.name}</h1>
        <div className="my-4">
          <h2 className="font-semibold text-lg underline">
            Por: {formatToBRL(bike.price)}
          </h2>
          <p className="font-normal">Em até 8x sem juros</p>
        </div>
        <p className="font-medium font-semibold bg-green-500  p-1 rounded-md mt-2">
          À vista no pix: {percentageDiscount(bike.price)}
        </p>
      </section>

      <section className="flex-1 flex flex-col justify-end items-center md:items-end">
        <div className="flex-2 flex flex-col w-[100%] items-center md:items-end justify-end mt-2">
          <Link
            href={`/bikes/${bike.id}`}
            className="flex p-2 bg-blue-500 rounded-sm text-white mt-2 text-sm transition-default hover:rounded-md"
          >
            Mais Detalhes
          </Link>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <button
            className="flex items-center justify-center text-xl font-semibold p-2 w-8 h-8 bg-green-700 rounded-sm text-white text-sm transition-default hover:rounded-md"
            onClick={() => decrementQuantity(bike.id)}
          >
            -
          </button>
          <span className="text-sm">{bike.quantity}</span>
          <button
            className="flex items-center justify-center text-xl font-semibold p-2 w-8 h-8 bg-green-700 rounded-sm text-white text-sm transition-default hover:rounded-md"
            onClick={() => incrementQuantity(bike.id)}
          >
            +
          </button>
        </div>
        <button
          className="flex p-2 bg-gray-900 rounded-sm text-white mt-2 text-sm transition-default hover:rounded-md"
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
      </section>
    </div>
  );
};

export default CartCard;
