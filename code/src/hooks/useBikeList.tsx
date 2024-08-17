import { useState } from"react";
import { useQuery } from"react-query";
import { getAllBikes, getByBrand, getByName } from"@/services/bike";
import { useBikeStore } from "@/hooks/useBikeStore";

export function useBikeList(initialBikes) {
  const { searchName } = useBikeStore(); 
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialBikes.pagination.currentPage);

  const fetchBikes = async (page: number) => {
    if (searchName) {
      return getByName(searchName);
    } else if (selectedBrand) {
      return getByBrand({ brand: selectedBrand, page });
    }
    return getAllBikes({
      page,
      limit: initialBikes.pagination.limit,
      order: "ASC",
    });
  };

  const { data, isLoading, error } = useQuery(
    ["bikes", searchName, selectedBrand, currentPage],
    () =>fetchBikes(currentPage),
    {
      keepPreviousData: true,
      initialData: initialBikes,
    }
  );

  const handleBrandClick = (brand: string) => {
    setCurrentPage(1);
    setSelectedBrand(brand);
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
  };
}
