"use client";

import { CardProduct } from "../product/card";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "@/lib/types";
import { BsPagination } from "../bs-pagination/bs-pagination";
import { api } from "@/lib/api";
import { req } from "@/lib/requests";
import { useState } from "react";
import { BsSelect } from "../bs-select/bs-select";
import { BsBrands } from "../bs-brands/bs-brands";

export type order = "ASC" | "DESC";

export const Main = () => {
  const [order, setOrder] = useState<undefined | order>(undefined);

  const [activeBrand, setActiveBrand] = useState("TODAS AS MARCAS");
  const [brands, setBrands] = useState<string[]>(["TODAS AS MARCAS"]);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentRequest, setCurrentRequest] = useState(
    req.filterPage(currentPage),
  );

  const { data, error, isLoading } = useQuery<ApiResponse>({
    queryKey: ["products", currentRequest],
    queryFn: () =>
      api
        .get(currentRequest)
        .then((res) => res.data)
        .catch((err) => {
          console.error("Error: ", err);
        }),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    order !== undefined
      ? setCurrentRequest(req.filterOrderPage(order, page))
      : setCurrentRequest(req.filterPage(page));
  };

  const handleOrderChange = (order: order) => {
    setOrder(order);
    activeBrand !== "TODAS AS MARCAS"
      ? setCurrentRequest(req.fiterOrderBrand(order, activeBrand))
      : setCurrentRequest(req.filterOrderPage(order, currentPage));
  };

  const handleBrandChange = (brand: string) => {
    setActiveBrand(brand);
    if (order !== undefined && brand !== "TODAS AS MARCAS") {
      setCurrentRequest(req.fiterOrderBrand(order, brand));
    } else if (brand !== "TODAS AS MARCAS") {
      setCurrentRequest(req.filterBrand(brand));
    } else if (order === undefined) {
      setCurrentRequest(req.filterPage(1));
      setCurrentPage(1);
    } else {
      setCurrentRequest(req.filterOrderPage(order, 1));
      setCurrentPage(1);
    }
  };

  if (isLoading) {
    return null;
  }

  if (error) {
    return <div>Ocorreu um erro ao carregar os produtos.</div>;
  }

  return (
    <main className="flex flex-col items-center px-[4%] pt-20 xl:px-[8%] 2xl:px-[12%]">
      {data && (
        <>
          <div className="mb-8 flex w-full max-w-[1280px] items-end justify-between">
            <BsBrands
              brands={brands}
              setBrands={setBrands}
              activeBrand={activeBrand}
              setActiveBrand={handleBrandChange}
            />
            <BsSelect state={order} setOrder={handleOrderChange} />
          </div>
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
          <BsPagination
            currentPage={data.pagination.currentPage}
            totalPages={data.pagination.lastPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </main>
  );
};
