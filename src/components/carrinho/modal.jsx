import React from "react";

function Modal({ isVisible, onClose, carrinho }) {
  if (!isVisible) return null;

  const mensagemTitulo =
    carrinho.length === 0
      ? "Erro ao Finalizar a Compra!"
      : "Compra Finalizada!";

  const mensagem =
    carrinho.length === 0
      ? "Carrinho Vazio. Por favor adicione produtos para finalizar a compra"
      : "Sua compra foi realizada com sucesso";


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4 text-[#41414D]">{mensagemTitulo}</h2>
        <p>{mensagem}</p>
        <button
          className="mt-4 bg-[#51B853] text-white py-2 px-4 rounded hover:bg-[#2f8031]"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export default Modal;
