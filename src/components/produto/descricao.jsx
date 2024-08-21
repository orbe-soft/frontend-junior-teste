import { useContext } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CarrinhoContext } from "../context/carrinhoContext";

const Descricao = ({ produto, nome, marca, valor, descricao }) => {

  const { adicionarAoCarrinho } = useContext(CarrinhoContext)

  return (
    <div className="flex flex-col text-[#617480] gap-4 lg:gap-6 lg:justify-between lg:items-start">
      <div className="flex flex-col gap-4">
        <span className="text-lg lg:text-xl">{marca}</span>
        <span className="text-[#123952] font-semibold text-2xl lg:text-3xl">{nome}</span>
        <span className="text-[#123952] font-bold text-xl lg:text-2xl">R$ {valor}</span>
        <span className="text-sm lg:text-base">
          *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl lg:text-2xl">DESCRIÇÃO</h1>
        <p className="text-sm lg:text-base">{descricao}</p>
        <div className="flex gap-4 lg:gap-5">
          <FaFacebook color="#115D8C" size={20} />
          <FaTwitter color="#115D8C" size={20} />
          <FaPinterest color="#115D8C" size={20} />
          <FaInstagram color="#115D8C" size={20} />
        </div>
      </div>
      <button className="flex justify-center items-center gap-4 bg-[#F25D27] text-white h-10 w-full lg:w-[340px] px-4 lg:px-10 rounded-lg font-semibold text-sm lg:text-base md:text-xs"
        onClick={() => {adicionarAoCarrinho(produto)}}>
        <FiShoppingBag size={20} />
        ADICIONAR AO CARRINHO
      </button>
    </div>
  );
};

export default Descricao;
