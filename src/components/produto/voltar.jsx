import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Voltar = () => {

  const navigate = useNavigate();

  const voltarPagina = () => {
    navigate('/catalogo')
  }

  return (
    <button className="flex pt-4 gap-2 px-36 text-[#617480] items-center cursor-pointer" onClick={voltarPagina}>
      <IoArrowBackCircleOutline size={20} />
      <span className="font-semibold">Voltar</span>
    </button>
  );
};

export default Voltar;
