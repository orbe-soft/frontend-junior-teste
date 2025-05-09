import api from "@/lib/api";
import { req } from "@/lib/requests";
import { ApiResponse } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export type BsBrandsProps = {
  activeBrand: string;
  setActiveBrand: (brand: string) => void;

  brands: string[];
  setBrands: (brands: string[]) => void;
};

export function BsBrands({
  activeBrand,
  setActiveBrand,
  brands,
  setBrands,
}: BsBrandsProps) {
  const { data, error, isLoading } = useQuery<ApiResponse>({
    queryKey: ["brands"],
    queryFn: () =>
      api
        .get(req.productAll)
        .then((res) => res.data)
        .catch((err) => {
          console.error("Error: ", err);
        }),
  });

  useEffect(() => {
    if (data) {
      const brands = data.content.map((bike) => bike.brand);
      const uniqueBrands = Array.from(new Set(brands));
      uniqueBrands.unshift("TODAS AS MARCAS");
      setBrands(uniqueBrands);
    }
  }, [data]);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <div>Ocorreu um erro ao carregar as marcas.</div>;
  }

  const handleBrandChange = (brand: string) => {
    if (brand !== activeBrand) {
      setActiveBrand(brand);
    }
  };

  return (
    <div
      id="brands-filter"
      className="flex w-full flex-wrap gap-5 lg:w-auto lg:gap-10"
    >
      {brands.map((brand) => (
        <label
          key={brand}
          htmlFor={brand}
          className={`relative cursor-pointer ${
            activeBrand === brand ? "text-text-primary" : "text-text-secondary"
          }`}
        >
          <input
            type="checkbox"
            id={brand}
            name="brand"
            className="peer hidden"
            checked={activeBrand === brand}
            onChange={() => handleBrandChange(brand)}
          />
          <span
            className={`absolute -bottom-[6px] left-0 right-0 h-1 bg-brand-bs-orange ${
              activeBrand === brand ? "block" : "hidden"
            }`}
          ></span>
          <span className="text-base font-semibold leading-4">{brand}</span>
        </label>
      ))}
    </div>
  );
}
