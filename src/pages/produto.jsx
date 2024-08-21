import Navegacao from "../components/catalogo/navegacao";
import Detalhes from "../components/produto/detalhes";
import Voltar from "../components/produto/voltar";

const Produto = () => {
  return (
    <div className="h-screen bg-[#F3F5F6]">
      <Navegacao />
      <Voltar />
      <Detalhes />
    </div>
  );
};

export default Produto;
