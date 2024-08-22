"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schemas/searchSchema";
import BikeCard from "./BikeCard";
import { useBikeList } from "@/hooks/useBikeList";
import BrandFilter from "../fragments/BrandFilter";
import PaginationControls from "../fragments/PaginationControl";
import PriceOrder from "../fragments/PriceOrder";
import { useBikeStore } from "@/hooks/useBikeStore";
import { BikeProps } from "@/types/bikeTypes";

const filters = [
  "Caloi",
  "Soul",
  "Audax",
  "Krw",
  "Giant",
  "Trek",
  "Oggi",
  "Merida",
  "Sense",
  "Scott",
];

type InitialBikes = {
  initialBikes: BikeProps[];
};

const BikeList = ({ initialBikes }: InitialBikes) => {
  const {
    bikes,
    pagination,
    currentPage,
    selectedBrand,
    handleBrandClick,
    setCurrentPage,
    handlePriceOrder,
  } = useBikeList(initialBikes);

  const { searchName, setSearchName } = useBikeStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchName: searchName || "",
    },
  });

  const onSubmit = (data: { searchName: string }) => {
    setSearchName(data.searchName);
  };

  // Função que reseta o formulário
  const handleReset = () => {
    reset({ searchName: "" });
    setSearchName("");
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center w-[95dvw]">
      <form
        className="relative flex items-center w-full max-w-md mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="searchName"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Pesquise por uma bike"
              {...field}
            />
          )}
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="ml-4 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          X
        </button>
        {errors.searchName && (
          <p className="text-red-500 mt-2">{errors.searchName.message}</p>
        )}
      </form>

      <section className="flex flex-wrap gap-8 mt-2">
        <article className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-lg">Marca:</h2>
          <BrandFilter
            filters={filters}
            selectedBrand={selectedBrand}
            onFilterClick={handleBrandClick}
          />
        </article>
        <article className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-lg">Preço:</h2>
          <PriceOrder handlePriceOrder={handlePriceOrder} />
        </article>
      </section>

      <section className="flex flex-col w-full">
        <ul className="flex flex-wrap gap-8 justify-center mt-8">
          {bikes.map((bike: BikeProps) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </ul>
      </section>

      {pagination.lastPage > 1 && (
        <nav className="mt-8">
          <PaginationControls
            currentPage={currentPage}
            lastPage={pagination.lastPage}
            onPageChange={setCurrentPage}
          />
        </nav>
      )}
    </main>
  );
};

export default BikeList;
