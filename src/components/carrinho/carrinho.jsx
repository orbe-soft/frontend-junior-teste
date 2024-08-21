import { useContext } from "react";
import Card from "./card";
import Cupom from "./cupom";
import { CarrinhoContext } from "../context/carrinhoContext";

const CarrinhoProdutos = () => {
  const { carrinho, atualizarQuantidade, limparCarrinho } = useContext(CarrinhoContext);

  const calcularValorTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.price * produto.quantidade, 0).toFixed(2);
  };

  return (
    <div className="flex mx-36 gap-40 justify-between">
      <div className="flex flex-col w-[600px] xl:w-[500px] lg:w-[400px]">
        <div className="flex flex-col mt-4 gap-2">
          {carrinho.length === 0 ? (
            <span className="text-[#123952] font-bold text-xl">
              SEU CARRINHO ESTÁ VAZIO
            </span>
          ) : (
            <>
              <span className="text-[#123952] font-bold text-xl">
                SEU CARRINHO
              </span>
              <span className="text-[#617480]">
                Total ({carrinho.length} produtos){" "}
                <span className="font-semibold">R$ {calcularValorTotal()}</span>
              </span>
            </>
          )}
        </div>
        {carrinho.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            imagem={produto.images[0].url}
            nome={produto.name}
            valor={produto.price}
            marca={produto.brand}
            quantidade={produto.quantidade}
            atualizarQuantidade={atualizarQuantidade}
          />
        ))}
      </div>
      <Cupom carrinho={carrinho} valor={calcularValorTotal()} limparCarrinho={limparCarrinho} />
    </div>
  );
};

export default CarrinhoProdutos;
