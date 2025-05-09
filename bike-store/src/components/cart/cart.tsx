import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CartItem } from "./cartitem";
import { api } from "@/lib/api";
import { Bike, itemType } from "@/lib/types";
import { GetItens } from "@/services/get-itens";
import { AddCart } from "@/services/add-cart"; // Assumindo que você tenha uma função AddCart para adicionar itens
import { req } from "@/lib/requests";

type CartItemType = Bike & { quantity: number };

export const CartComponent = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingCost, setShippingCost] = useState(40);

  const calculateTotal = (items: CartItemType[]) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setTotalAmount(total);
    setShippingCost(total > 900 ? 0 : 40);
  };

  const fetchCartItems = async () => {
    const items = await GetItens();
    const fetchItemData = async (item: itemType) => {
      const response = await api.get(req.byId(item.id));
      return { ...response.data, quantity: item.quantity };
    };
    const data = await Promise.all(items.map(fetchItemData));
    setCartItems(data);
    calculateTotal(data);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addItem = async (id: string) => {
    await AddCart({ id });
    fetchCartItems();
  };

  const removeItem = async (id: string) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
    );
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
    localStorage.setItem(
      "cart@bikestore",
      JSON.stringify(
        updatedCartItems
          .filter((item) => item.quantity > 0)
          .map(({ id, quantity }) => ({ id, quantity })),
      ),
    );
    calculateTotal(updatedCartItems);
  };

  const clearItem = async (id: string) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: 0 } : item,
    );
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
    localStorage.setItem(
      "cart@bikestore",
      JSON.stringify(
        updatedCartItems
          .filter((item) => item.quantity > 0)
          .map(({ id, quantity }) => ({ id, quantity })),
      ),
    );
    calculateTotal(updatedCartItems);
  };

  if (!cartItems.length) return <p>Carregando...</p>;

  return (
    <section className="grid w-full max-w-[1280px] grid-cols-12 gap-8">
      <div className="lg :mr-8 col-span-12 flex flex-col items-start text-base text-text-secondary lg:col-span-8">
        <h1 className="text-2xl font-semibold uppercase text-text-primary">
          Seu carrinho
        </h1>
        <p className="mb-9 font-light">
          Total ({cartItems.length} produtos)
          <span className="font-semibold"> R${totalAmount.toFixed(2)}</span>
        </p>
        <div className="w-full">
          {cartItems.map((item) => (
            <div key={item.id}>
              <CartItem
                id={item.id}
                name={item.name}
                brand={item.brand}
                price={item.price}
                quantity={item.quantity}
                image={item.images[0].url}
                addItem={addItem}
                removeItem={removeItem}
                clearItem={clearItem}
              />
              <hr className="my-8 h-[2px] w-full text-text-secondary" />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-12 flex w-full flex-col items-start bg-white px-8 py-12 text-text-primary lg:col-span-4">
        <h3 className="mb-16 text-lg font-semibold">Resumo do pedido</h3>
        <div className="mb-3 flex w-full justify-between text-base font-normal">
          <p>Subtotal de produtos</p>
          <p>R${totalAmount.toFixed(2)}</p>
        </div>
        <div className="mb-3 flex w-full justify-between text-base font-normal">
          <p>Entrega</p>
          <p>R${shippingCost.toFixed(2)}</p>
        </div>
        <hr className="mb-3 w-full" />
        <div className="mb-16 flex w-full justify-between text-base font-semibold">
          <p>Total</p>
          <p>R${(totalAmount + shippingCost).toFixed(2)}</p>
        </div>
        <Button className="flex w-full items-center gap-4 rounded bg-others-success px-14 py-4 font-semibold uppercase text-white hover:bg-text-primary">
          <p>Finalizar Compra</p>
        </Button>
      </div>
    </section>
  );
};
