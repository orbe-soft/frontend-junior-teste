import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find(produto => produto.id === item.id);
      if (itemExistente) {
        return prevCarrinho.map(produto =>
          produto.id === item.id
            ? { ...produto, quantidade: produto.quantidade + 1 }
            : produto
        );
      } else {
        return [...prevCarrinho, { ...item, quantidade: 1 }];
      }
    });
  };

  const atualizarQuantidade = (id, novaQuantidade) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map(produto =>
        produto.id === id
          ? { ...produto, quantidade: novaQuantidade }
          : produto
      )
    );
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter(produto => produto.id !== id)
    );
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, atualizarQuantidade, removerDoCarrinho, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
