"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import { getAllBikes, getByBrand, getByName } from "@/services/bike";
import { useBikeStore } from "@/hooks/useBikeStore";

export function useBikeList(initialBikes) {
  const { searchName } = useBikeStore();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceOrder, setPriceOrder] = useState<"ASC" | "DESC">("ASC");

  const fetchBikes = async (page: number, order: "ASC" | "DESC") => {
    if (searchName) {
      return getByName(searchName);
    } else if (selectedBrand) {
      return getByBrand({ brand: selectedBrand, page });
    }
    return getAllBikes({
      page,
      limit: initialBikes.pagination.limit,
      order,
    });
  };

  const { data, isLoading, error } = useQuery(
    ["bikes", searchName, selectedBrand, currentPage, priceOrder],
    () => fetchBikes(currentPage, priceOrder),
    {
      keepPreviousData: true,
      initialData: initialBikes,
    }
  );

  const handleBrandClick = (brand: string) => {
    setCurrentPage(1);
    setSelectedBrand(brand);
  };

  const handlePriceOrder = (order: "ASC" | "DESC") => {
    setPriceOrder(order);
  };

  return {
    bikes: data.content,
    pagination: data.pagination,
    currentPage,
    selectedBrand,
    isLoading,
    error,
    handleBrandClick,
    setCurrentPage,
    handlePriceOrder,
  };
}
