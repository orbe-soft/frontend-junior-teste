import { useState } from "react";
import { useQuery } from "react-query";
import { getAllBikes, getByBrand, getByName } from "@/services/bike";
import { useBikeStore } from "@/hooks/useBikeStore";
import { BikeProps } from "@/types/bikeTypes";

export function useBikeList(initialBikes: BikeProps[]) {
  const { searchName } = useBikeStore();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceOrder, setPriceOrder] = useState<"ASC" | "DESC">("ASC");

  const fetchBikes = async (page: number, order: "ASC" | "DESC") => {
    if (searchName) {
      return getByName({ name: searchName, order });
    } else if (selectedBrand) {
      return getByBrand({ brand: selectedBrand, page, order });
    }
    return getAllBikes({
      page,
      limit: 10,
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

  const handleBrandClick = (brand: string | null) => {
    setCurrentPage(1);
    setSelectedBrand(brand);
  };

  const handlePriceOrder = (order: "ASC" | "DESC") => {
    setPriceOrder(order);
  };

  return {
    bikes: data?.content || [],
    pagination: data?.pagination || { lastPage: 1 },
    currentPage,
    selectedBrand,
    isLoading,
    error,
    handleBrandClick,
    setCurrentPage,
    handlePriceOrder,
  };
}
