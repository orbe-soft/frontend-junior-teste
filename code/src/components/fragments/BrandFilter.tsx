import React from "react";

interface Props {
  filters: string[];
  selectedBrand: string | null;
  onFilterClick: (value: string | null) => void;
}

function BrandFilter({ filters, selectedBrand, onFilterClick }: Props) {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
