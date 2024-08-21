import React from "react";

function BrandFilter({ filters, selectedBrand, onFilterClick }) {
  // Handler para mudar a seleção
  const handleChange = (event) => {
    const value = event.target.value;
    onFilterClick(value === "all" ? null : value);
  };

  return (
    <select
      value={selectedBrand || "all"}
      onChange={handleChange}
      className="cursor-pointer p-2 border rounded-md"
    >
      <option value="all">Todas</option>
      {filters.map((filter) => (
        <option key={filter} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  );
}

export default BrandFilter;
