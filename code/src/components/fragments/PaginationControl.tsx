import React from "react";

function PaginationControls({ currentPage, lastPage, onPageChange }) {
  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Page navigation"
      className="flex items-center justify-center my-8"
    >
      <ul className="flex items-center space-x-1">
        {/* Botão "Anterior" */}
        <li>
          <button
            className="flex items-center justify-center px-3 h-8 text-white bg-green-600 border border-green-600 rounded-l-lg hover:bg-green-700 dark:bg-green-800 dark:border-green-800 dark:hover:bg-green-700 disabled:opacity-90"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1L1 5l4 4"
              />
            </svg>
          </button>
        </li>

        {/* Botões de página */}
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`px-3 h-8 text-sm rounded-lg border ${
                page === currentPage
                  ? "bg-green-800 text-white border-green-700"
                  : "bg-green-500 text-white border-green-500 hover:bg-green-600 dark:bg-green-600 dark:border-green-600 dark:hover:bg-green-700"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Botão "Próximo" */}
        <li>
          <button
            className="flex items-center justify-center px-3 h-8 text-white bg-green-600 border border-green-600 rounded-r-lg hover:bg-green-700 dark:bg-green-800 dark:border-green-800 dark:hover:bg-green-700 disabled:opacity-90"
            onClick={() =>
              currentPage < lastPage && onPageChange(currentPage + 1)
            }
            disabled={currentPage === lastPage}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4-4 4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationControls;
