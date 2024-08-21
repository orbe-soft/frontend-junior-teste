"use client";

import Image from "next/image";
import { Search } from "@/components/search/search";
import { useRouter } from "next/navigation";
import { CartProvider } from "@/hooks/cart-provider";
import { CartIcon } from "../cart/cart-badge";

export const Header = () => {
  const router = useRouter();

  return (
    <CartProvider>
      <header className="flex w-full items-center justify-center bg-shape-primary px-[4%] md:h-20 xl:px-[8%] 2xl:px-[12%]">
        <nav className="relative flex w-full max-w-[1280px] flex-col items-start justify-between gap-4 pb-6 md:h-20 md:flex-row md:items-center md:gap-0 md:pb-0">
          <Image
            src="/logo.png"
            alt="Bike Store"
            width={120}
            height={40}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
          <Search />
          <span className="absolute right-0 top-4 md:relative md:top-0">
            <CartIcon />
          </span>
        </nav>
      </header>
    </CartProvider>
  );
};
