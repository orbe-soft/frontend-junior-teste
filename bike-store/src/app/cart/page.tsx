"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/page";
import { UndoButton } from "@/components/undo/undo";
import { CartComponent } from "@/components/cart/cart";

export default function Cart() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col items-center px-[4%] xl:px-[8%] 2xl:px-[12%]">
        <UndoButton />
        <CartComponent />
      </main>
    </QueryClientProvider>
  );
}
