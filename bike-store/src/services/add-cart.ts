import { AddCartProps, itemType } from "@/lib/types";
import { GetItens } from "./get-itens";

export const AddCart = async ({ id }: AddCartProps) => {
  try {
    const currentCart = await GetItens();

    // Se o carrinho estiver vazio, adiciona o item diretamente
    if (currentCart.length === 0) {
      localStorage.setItem(
        "cart@bikestore",
        JSON.stringify([{ id, quantity: 1 }]),
      );
    } else {
      let itemExists = false;
      const newCart = currentCart.map((item: itemType) => {
        if (item.id === id) {
          itemExists = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      // Se o item não existir no carrinho, adiciona-o ao final
      if (!itemExists) {
        newCart.push({ id, quantity: 1 });
      }

      localStorage.setItem("cart@bikestore", JSON.stringify(newCart));
    }

    return true;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return false;
  }
};
