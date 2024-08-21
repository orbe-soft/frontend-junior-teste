import { useEffect, useState } from "react";
import Filtro from "../components/catalogo/filtro";
import Navegacao from "../components/catalogo/navegacao";
import Paginacao from "../components/catalogo/paginacao";
import Produtos from "../components/catalogo/produtos";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Catalogo = () => {
  const [selectedOption, setSelectedOption] = useState('todos');
  const [selectedOrder, setSelectedOrder] = useState('original');
  const [filtro, setFiltro] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, onProductsPerPageChange] = useState(12);

  const location = useLocation();

  useEffect(() => {
    setFiltro('');
    setCurrentPage(1);
  }, [location]);

  useEffect(() => {
    const fetchTotalProducts = async () => {
      try {
        const response = await axios.get(
          'https://api-frontend-test.orbesoft.com.br/api/products'
        );
        setTotalProducts(response.data.content.length);
      } catch (error) {
        console.log('Erro ao carregar o total de produtos');
      }
    };

    fetchTotalProducts();
  }, []);

  return (
    <div className="min-h-screen h-full bg-[#F3F5F6]">
      <Navegacao filtro={filtro} setFiltro={setFiltro} />
      <Filtro selectedOption={selectedOption} setSelectedOption={setSelectedOption} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
      <Produtos selectedOption={selectedOption} selectedOrder={selectedOrder} filtro={filtro} currentPage={currentPage} productsPerPage={productsPerPage} />
      <Paginacao
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        onProductsPerPageChange={onProductsPerPageChange}
      />
    </div>
  );
};

export default Catalogo;
