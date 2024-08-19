"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "@/components/main/main";

export const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}
