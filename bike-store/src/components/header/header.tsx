import Image from "next/image";
import { Search } from "@/components/search/search";

export const Header = () => {
  return (
    <header className="bg-shape-primary flex h-20 w-full items-center justify-center px-[4%] xl:px-[8%] 2xl:px-[12%]">
      <nav className="flex h-20 w-full max-w-[1280px] items-center justify-between">
        <Image src="/logo.png" alt="Bike Store" width={120} height={40} />
        <Search />
        <div className="bg-shape-secondary h-6 w-6"></div>
      </nav>
    </header>
  );
};
