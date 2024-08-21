import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './card';

const Produtos = ({ selectedOption, selectedOrder, filtro, currentPage, productsPerPage }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://api-frontend-test.orbesoft.com.br/api/products'
        );
        setProdutos(response.data.content);
      } catch (error) {
        console.log('Erro ao carregar os produtos');
      }
    };

    fetchProducts();
  }, []);

  const produtosFiltrados = produtos
    .filter((produto) =>
      produto.brand.toLowerCase().includes(filtro.toLowerCase()) ||
      produto.name.toLowerCase().includes(filtro.toLowerCase())
    )
    .filter((produto) =>
      selectedOption === 'todos' || produto.brand.toLowerCase() === selectedOption.toLowerCase()
    );

  const produtosOrdenados = (() => {
    switch (selectedOrder) {
      case 'marca':
        return produtosFiltrados.slice().sort((a, b) => a.brand.localeCompare(b.brand));
      case 'valor':
        return produtosFiltrados.slice().sort((a, b) => a.price - b.price);
      case 'original':
        return produtosFiltrados;
      default:
        return produtosFiltrados;
    }
  })();

  // Paginação
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = produtosOrdenados.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 px-36 pt-8">
      {currentProducts.length === 0 ? (
        <p className="text-[#123952] font-bold">Nenhum produto encontrado</p>
      ) : (
        currentProducts.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            imagem={produto.images[0].url}
            marca={produto.brand}
            nome={produto.name}
            valor={produto.price}
          />
        ))
      )}
    </div>
  );
};

export default Produtos;
