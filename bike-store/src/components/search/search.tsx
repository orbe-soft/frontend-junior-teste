import { LuSearch } from "react-icons/lu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Search = () => {
  return (
    <div className="text-text-secondary flex h-[42px] w-[352px] items-center justify-between overflow-hidden rounded-lg">
      <Input
        type="text"
        placeholder="Pesquise aqui"
        className="bg-background text-text-primary w-full rounded-none border-0"
      />
      <Button variant="search" size="icon">
        <LuSearch size={24} />
      </Button>
    </div>
  );
};
