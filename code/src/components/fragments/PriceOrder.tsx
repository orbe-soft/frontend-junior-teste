import { useBikeList } from "@/hooks/useBikeList";
import React from "react";

const PriceOrder = ({handlePriceOrder}) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handlePriceOrder(event.target.value as "ASC" | "DESC");
  };

  return (
    <select onChange={handleChange}>
      <option value="ASC">Menor - Maior</option>
      <option value="DESC">Maior - Menor</option>
    </select>
  );
};

export default PriceOrder;
