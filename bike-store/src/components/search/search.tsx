import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface SearchFormData {
  query: string;
}

export const Search = () => {
  const { register, handleSubmit, reset } = useForm<SearchFormData>();
  const router = useRouter();

  const onSubmit = (data: SearchFormData) => {
    const { query } = data;
    if (query) {
      router.push(`/filtred/${encodeURIComponent(query)}`);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-[42px] w-full items-center justify-between overflow-hidden rounded-lg text-text-secondary md:w-[352px]"
    >
      <Input
        type="text"
        id="search-field"
        placeholder="Pesquise aqui"
        className="w-full rounded-none border-0 bg-background text-text-primary"
        {...register("query")}
      />
      <Button variant="search" size="icon" type="submit">
        <LuSearch size={24} />
      </Button>
    </form>
  );
};
