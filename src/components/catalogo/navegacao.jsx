import { useContext } from "react";
import Logo from "./logo";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../context/carrinhoContext";
import BarraDePesquisa from "./barraDePesquisa";

const Navegacao = ({ filtro, setFiltro }) => {
  const navigate = useNavigate();

  const handleCarrinhoClick = () => {
    navigate('/carrinho');
  };

  const { carrinho } = useContext(CarrinhoContext);

  return (
    <div className="flex justify-between items-center bg-white h-20 px-36">
      <Logo />
      <BarraDePesquisa filtro={filtro} setFiltro={setFiltro} />
      <button onClick={handleCarrinhoClick} className="relative">
        <FiShoppingBag color="gray" size={20} />
        {carrinho.length > 0 && (
          <span className="absolute bottom-[-8px] right-[-8px] bg-[#F25D27] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
            {carrinho.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default Navegacao;
