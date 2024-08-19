"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/page";
import { ItemContent } from "@/components/item/item";
import { UndoButton } from "@/components/undo/undo";

interface ItemProps {
  params: { slug: string };
}

export default function Item({ params }: ItemProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col items-center px-[4%] xl:px-[8%] 2xl:px-[12%]">
        <UndoButton />

        <ItemContent slug={params.slug} />
      </main>
    </QueryClientProvider>
  );
}
