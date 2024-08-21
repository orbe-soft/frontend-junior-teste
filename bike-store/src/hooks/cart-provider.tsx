import React, { createContext, useContext, useState, useEffect } from "react";

interface CartContextProps {
  itemCount: number;
  updateItemCount: () => void;
}

const CartContext = createContext<CartContextProps>({
  itemCount: 0,
  updateItemCount: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [itemCount, setItemCount] = useState(0);

  // Função para atualizar a contagem de itens
  const updateItemCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart@bikestore") || "[]");
    const count = cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0,
    );
    setItemCount(count);
  };

  // Atualiza a contagem a cada segundo
  useEffect(() => {
    updateItemCount(); // Atualiza a primeira vez quando o componente é montado

    const intervalId = setInterval(() => {
      updateItemCount();
    }, 500); // Atualiza a cada 1 segundo

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <CartContext.Provider value={{ itemCount, updateItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
