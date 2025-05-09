"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/page";
import { UndoButton } from "@/components/undo/undo";
import { NameContent } from "@/components/item/name";

interface NameProps {
  params: { name: string };
}

export default function Name({ params }: NameProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col items-center px-[4%] xl:px-[8%] 2xl:px-[12%]">
        <UndoButton />

        <NameContent name={params.name} />
      </main>
    </QueryClientProvider>
  );
}
