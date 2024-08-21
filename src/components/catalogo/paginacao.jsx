import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Paginacao = ({
  totalProducts,
  productsPerPage,
  currentPage,
  onPageChange,
  onProductsPerPageChange
}) => {
  const [selectedProductsPerPage, setSelectedProductsPerPage] = useState(productsPerPage);
  const totalPages = Math.ceil(totalProducts / selectedProductsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleProductsPerPageChange = (event) => {
    const newProductsPerPage = parseInt(event.target.value, 10);
    setSelectedProductsPerPage(newProductsPerPage);
    onProductsPerPageChange(newProductsPerPage);
  };

  return (
    <div className="flex flex-col justify-end">
      <div className="flex justify-end px-36 gap-14 py-14 items-center">
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="text-[#667085] font-semibold flex items-center gap-3"
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
            <span>Anterior</span>
          </button>
        </div>
        <div className="flex">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 rounded-[8px] flex items-center justify-center border ${
                currentPage === index + 1
                  ? "bg-[#F25D27] text-white"
                  : "text-[#667085] font-semibold border-none"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="text-[#667085] font-semibold flex items-center gap-3"
            disabled={currentPage === totalPages}
          >
            <span>Próximo</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex justify-end px-36">
        <div className="flex items-center gap-4">
          <span className="text-[#667085] font-semibold">Resultados por página:</span>
          <select
            value={selectedProductsPerPage}
            onChange={handleProductsPerPageChange}
            className="p-2 text-[#667085] font-semibold bg-gray-200 rounded"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(number => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Paginacao;
