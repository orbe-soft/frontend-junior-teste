import React from "react";

function PaginationControls({ currentPage, lastPage, onPageChange }) {
  return (
    <div className="flex justify-between items-center">
      <button
        className="transform -translate-y-1/2 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      <span className="mx-4">
        {currentPage} / {lastPage}
      </span>

      <button
        className="transform -translate-y-1/2 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => currentPage < lastPage && onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        &gt;
      </button>
    </div>
  );
}

export default PaginationControls;
