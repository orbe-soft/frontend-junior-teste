"use client";

import EmptyCartMessage from "@/components/fragments/feed/EmptyCart";
import CartCard from "@/components/layout/CartCard";
import { useCartStore } from "@/hooks/useCart";
import { formatToBRL } from "@/utils/formatters";
import React from "react";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.total);
  console.log(cart);

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <h1>Seu carrinho de compras</h1>

      {cart.length !== 0 ? (
        <div>
          {cart.map((item) => (
            <CartCard key={item.id} bike={item} />
          ))}
          <h3>{formatToBRL(total)}</h3>
        </div>
      ) : (
        <EmptyCartMessage/>
      )}
    </div>
  );
};

export default Cart;
