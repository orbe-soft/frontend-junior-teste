import { useState, useEffect } from "react";

const Imagem = ({ imagens }) => {
  const [imagemPrincipal, setImagemPrincipal] = useState("");

  useEffect(() => {
    if (imagens.length > 0) {
      setImagemPrincipal(imagens[0].url);
    }
  }, [imagens]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
      <div className="flex-shrink-0">
        {imagemPrincipal ? (
          <img
            src={imagemPrincipal}
            alt="Imagem principal"
            className="w-full max-w-[500px] h-auto 2xl:w-[500px] 2xl:h-[500px] xl:w-[400px] xl:h-[500px] lg:w-[300px] lg:h-[500px] md:w-[500px] md:h-[500px] object-cover rounded-lg"
          />
        ) : (
          <p>Imagem não disponível</p>
        )}
      </div>
      <div className="flex flex-wrap gap-4 lg:flex-col">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem.url}
            alt={`Imagem ${index + 1}`}
            className={`w-[113px] h-[113px] lg:w-[113px] lg:h-[113px] object-cover rounded-lg cursor-pointer ${
              imagemPrincipal === imagem.url ? 'border-2 border-[#F25D27]' : ''
            }`}
            onClick={() => setImagemPrincipal(imagem.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Imagem;
