"use client"

import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  total: number;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  total: 0,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      let newCart;
      if (existingItem) {
        newCart = state.cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        newCart = [...state.cart, { ...item, quantity: 1 }];
      }
      const newTotal = newCart.reduce(
        (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
        0
      );
      return { cart: newCart, total: newTotal };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      const newTotal = newCart.reduce(
        (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
        0
      );
      return { cart: newCart, total: newTotal };
    }),

  incrementQuantity: (id) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const newTotal = newCart.reduce(
        (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
        0
      );
      return { cart: newCart, total: newTotal };
    }),

  decrementQuantity: (id) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      const newTotal = newCart.reduce(
        (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
        0
      );
      return { cart: newCart, total: newTotal };
    }),

  clearCart: () => set({ cart: [], total: 0 }),
}));


