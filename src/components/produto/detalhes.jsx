import Descricao from "./descricao";
import Imagem from "./imagem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Detalhes = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const [imagens, setImagens] = useState([]);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [marca, setMarca] = useState('');
  const [valor, setValor] = useState(0);
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`https://api-frontend-test.orbesoft.com.br/api/products/${id}`);
        setProduto(response.data);
        setImagens(response.data.images);
        setNome(response.data.name);
        setDescricao(response.data.description);
        setMarca(response.data.brand);
        setValor(response.data.price);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchProduto();
    }
  }, [id]);

  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-36 gap-4 lg:gap-10 mt-4">
      <Imagem imagens={imagens} />
      <Descricao produto={produto} descricao={descricao} marca={marca} nome={nome} valor={valor} />
    </div>
  );
};

export default Detalhes;
