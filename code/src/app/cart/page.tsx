"use client";

import EmptyCartMessage from "@/components/fragments/feed/EmptyCart";
import CartCard from "@/components/layout/CartCard";
import { useCartStore } from "@/hooks/useCart";
import { formatToBRL, percentageDiscount } from "@/utils/formatters";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.total);

  return (
    <main className="flex flex-col items-center justify-center p-12">
      <h1 className="font-semibold text-2xl mb-4">Seu carrinho:</h1>

      {cart.length !== 0 ? (
        <section className="flex flex-col items-center w-full max-w-4xl">
          <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
            {cart.map((item) => (
              <CartCard key={item.id} bike={item} />
            ))}
          </div>
          <aside className="bg-gray-200 border-2 border-green-400 p-4 flex flex-col justify-center items-center w-full max-w-xs rounded-md">
            <h3 className="font-semibold text-lg">
              Valor Total: {formatToBRL(total)}
            </h3>
            <h3 className="font-semibold text-green-600 my-2 underline">
              Valor à vista no PIX: {percentageDiscount(total)}
            </h3>
            <Link
              href="/comprar"
              className="p-2 rounded-sm bg-green-500 font-semibold text-white transition-all hover:rounded-md"
            >
              Finalizar compra
            </Link>
          </aside>
        </section>
      ) : (
        <EmptyCartMessage />
      )}
    </main>
  );
};

export default Cart;
