"use client";

import { useCartStore } from "@/hooks/useCart";
import { getSingleBike } from "@/services/bike";
import {
  formatToBRL,
  getInstallments,
  percentageDiscount,
} from "@/utils/formatters";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BikeProps } from "@/types/bikeTypes";

interface RouteParamsProps {
  id: string;
}

const BikeDetails = ({ params }: { params: RouteParamsProps }) => {
  const { id } = params;
  const [bike, setBike] = useState<BikeProps | undefined>(undefined);

  useEffect(() => {
    const fetchBike = async () => {
      const fetchedBike = await getSingleBike(id);
      setBike(fetchedBike);
    };

    fetchBike();
  }, [id]);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const cartBike = cart.find((cartItem) => cartItem.id === bike?.id);
  const isInCart = cart.some((item) => item.id === bike?.id);

  if (!bike) return <div>Loading...</div>;

  return (
    <main className="flex flex-col items-center justify-center mt-16 px-4">
      <article className="flex flex-col md:flex-row items-center w-full md:w-[85vw] m-auto bg-gray-100 p-6 rounded-md overflow-hidden">
        <section className="w-full md:w-1/2 mb-4 md:mb-0 relative">
          <div className="relative w-full h-48 md:h-[300px]">
            <Image
              src={bike.images[0].url}
              layout="fill"
              objectFit="cover"
              alt={`Imagem da bicicleta ${bike.name}`}
              className="absolute top-0 left-0"
            />
          </div>
        </section>
        <section className="w-full md:w-1/2 flex flex-col justify-between bg-gray-200 rounded-md ml-2 p-4">
          <header className="mb-4">
            <h1 className="font-semibold text-2xl">Bicicleta {bike.name}</h1>
            <h2 className="font-semibold text-lg">{bike.brand}</h2>
          </header>
          <p className="font-medium text-md mb-4">{bike.description}</p>
          <div className="mb-4">
            <h3 className="text-lg text-green-500 font-semibold">
              Por: {formatToBRL(bike.price)}
            </h3>
            <h2>
              Em até 8X de {getInstallments(bike.price)} sem juros no cartão de
              crédito!
            </h2>
          </div>
          <h2 className="mb-4">
            <strong className="font-semibold text-2xl text-green-500">
              {percentageDiscount(bike.price)}
            </strong>{" "}
            à vista no pix
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              className="flex items-center p-2 bg-gray-700 rounded-sm text-white hover:bg-gray-900 hover:rounded-md transition-all"
              onClick={() =>
                isInCart ? removeFromCart(bike.id) : addToCart(bike)
              }
            >
              {isInCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
              <Image
                src={
                  isInCart
                    ? "/icons/removefromcart-24.png"
                    : "/icons/addtocart-white-24.png"
                }
                width={24}
                height={24}
                alt={
                  isInCart
                    ? "Ícone de remover do carrinho"
                    : "Ícone de adicionar ao carrinho"
                }
                className="ml-1"
              />
            </button>
            {cartBike && (
              <div className="flex items-center space-x-2 mt-2">
                <label className="mr-1 font-semibold">Quantidade:</label>
                <button
                  className="flex items-center justify-center text-xl font-semibold p-2 w-8 h-8 bg-green-700 rounded-sm text-white text-sm transition-all hover:rounded-md"
                  onClick={() => decrementQuantity(bike.id)}
                >
                  -
                </button>
                <span className="text-sm">{cartBike?.quantity || 0}</span>
                <button
                  className="flex items-center justify-center text-xl font-semibold p-2 w-8 h-8 bg-green-700 rounded-sm text-white text-sm transition-all hover:rounded-md"
                  onClick={() => incrementQuantity(bike.id)}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </section>
      </article>
    </main>
  );
};

export default BikeDetails;
