import { useNavigate } from "react-router-dom";

const Card = ({ id, imagem, marca, nome, valor }) => {
  const navigate = useNavigate();

  const verMais = () => {
    navigate('/produto', { state: { id } });
  };

  return (
    <div onClick={verMais} className="flex flex-col cursor-pointer">
      <img className="rounded-[4px]" src={imagem} alt={nome} />
      <div className="flex flex-col">
        <span className="text-[#617480]">{marca}</span>
        <div className="flex justify-between text-[#123952]">
          <span>{nome}</span>
          <span className="font-bold">R$ {valor}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
