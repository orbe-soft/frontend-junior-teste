"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "@/components/main/main";
import { CartProvider } from "@/hooks/cart-provider";

export const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Main />
      </CartProvider>
    </QueryClientProvider>
  );
}
