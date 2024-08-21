import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const BarraDePesquisa = ({ filtro, setFiltro }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(filtro || '');
  }, [filtro]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setFiltro(input);
  };

  return (
    <div className="bg-[#F3F5F6] w-[352px] h-[42px] flex items-center px-3 rounded-[8px]">
      <input
        type="text"
        placeholder="Pesquise aqui"
        value={input}
        onChange={handleChange}
        className="w-full h-full bg-[#F3F5F6] border-none outline-none text-[#737380] px-2"
      />
      <button className="text-[#737380] ml-2" onClick={handleSearch}>
        <FiSearch size={20} />
      </button>
    </div>
  );
};

export default BarraDePesquisa;
