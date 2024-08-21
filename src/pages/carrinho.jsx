import CarrinhoProdutos from "../components/carrinho/carrinho";
import Navegacao from "../components/catalogo/navegacao";
import Voltar from "../components/produto/voltar";

const Carrinho = () => {
  return (
    <div className="min-h-screen bg-[#F3F5F6] flex flex-col">
      <Navegacao />
      <Voltar />
      <div className="flex-1">
        <CarrinhoProdutos />
      </div>
    </div>
  );
};

export default Carrinho;
