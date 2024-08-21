import React, { useContext } from 'react';
import { CarrinhoContext } from '../context/carrinhoContext';

const Card = ({ imagem, nome, valor, marca, id, quantidade }) => {
  const { removerDoCarrinho, atualizarQuantidade } = useContext(CarrinhoContext);

  const handleRemoverClick = () => {
    removerDoCarrinho(id);
  };

  const handleQuantidadeClick = (novaQuantidade) => {
    if (novaQuantidade >= 1) {
      atualizarQuantidade(id, novaQuantidade);
    }
  };

  return (
    <div>
      <div className="flex mt-8 gap-8">
        <img className="rounded-lg" src={imagem} height={200} width={200} alt="" />
        <div className="flex flex-col gap-2">
          <div className="flex 2xl:w-[600px] xl:w-[400px] justify-between text-[#123952] font-bold text-xl">
            <span>{nome}</span>
            <span>R$ {valor}</span>
          </div>
          <div>
            <span className="text-[#A0ACB2] text-lg">{marca}</span>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="flex justify-between px-3 items-center w-[161px] h-[52px] border text-[#123952] font-bold text-xl">
              <button onClick={() => handleQuantidadeClick(quantidade - 1)}>-</button>
              <span>{quantidade}</span>
              <button onClick={() => handleQuantidadeClick(quantidade + 1)}>+</button>
            </div>
            <button className="text-[#F25D27] font-semibold" onClick={handleRemoverClick}>
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1px] 2xl:w-[830px] xl:w-[640px] lg:w-[500px] bg-[#D1D1D8] mt-8"></div>
    </div>
  );
};

export default Card;
