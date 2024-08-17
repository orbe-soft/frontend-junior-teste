"use client";

import React from "react";
import BikeCard from "./BikeCard";
import { useBikeList } from "@/hooks/useBikeList";
import BrandFilter from "../fragments/BrandFilter";
import PaginationControls from "../fragments/PaginationControl";

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

function BikeList({ initialBikes }) {
  const {
    bikes,
    pagination,
    currentPage,
    selectedBrand,
    handleBrandClick,
    setCurrentPage,
  } = useBikeList(initialBikes);

  return (
    <main className="flex flex-col min-h-screen flex-col items-center justify-between p-12 mt-8">
      <BrandFilter
        filters={filters}
        selectedBrand={selectedBrand}
        onFilterClick={handleBrandClick}
      />

      <ul className="flex flex-wrap gap-4 justify-center align-center">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </ul>

      <PaginationControls
        currentPage={currentPage}
        lastPage={pagination.lastPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}

export default BikeList;
