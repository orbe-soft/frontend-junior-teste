import React from "react";

function BrandFilter({ filters, selectedBrand, onFilterClick }) {
  return (
    <div>
      {filters.map((filter) => (
        <span
          key={filter}
          onClick={() => onFilterClick(filter)}
          className={`mx-1 cursor-pointer ${
            selectedBrand === filter ? "font-bold" : ""
          }`}
        >
          {filter}
        </span>
      ))}
      <span onClick={() => onFilterClick(null)} className="mx-1 cursor-pointer">
        Todas
      </span>
    </div>
  );
}

export default BrandFilter;
