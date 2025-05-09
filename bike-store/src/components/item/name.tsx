import { useState } from "react";
import api from "@/lib/api";
import { req } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "@/lib/types";

import { CardProduct } from "@/components/product/card";
import { BsPagination } from "../bs-pagination/bs-pagination";
import Load from "../loading/load";

interface NameContentProps {
  name: string;
}

export type order = "ASC" | "DESC";

export const NameContent = ({ name }: NameContentProps) => {
  const [currentRequest, setCurrentRequest] = useState(req.filterName(name));
  console.log(name);
  const { data, error, isLoading } = useQuery<ApiResponse>({
    queryKey: ["name", currentRequest],
    queryFn: () =>
      api
        .get(req.filterName(name))
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.error("Error: ", err);
        }),
  });

  if (isLoading) {
    return <Load />;
  }

  if (data) {
    console.log(data);
  }

  if (error) {
    return <div>Não existe bike com esse nome.</div>;
  }

  return (
    <main className="flex w-full flex-col items-center px-[4%] pt-20 xl:px-[8%] 2xl:px-[12%]">
      {data && (
        <>
          <section className="grid w-full max-w-[1280px] grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.content.map((product, index) => (
              <CardProduct
                key={index}
                id={product.id}
                brand={product.brand}
                image={product.images[0].url}
                name={product.name}
                price={product.price}
              />
            ))}
          </section>
        </>
      )}
    </main>
  );
};
