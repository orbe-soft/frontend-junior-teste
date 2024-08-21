import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Filtro = ({ selectedOption, setSelectedOption, selectedOrder, setSelectedOrder }) => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const handleOrderClick = (order) => {
    return () => {
      setSelectedOrder(order);
      setMenu(false);
    };
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mt-20">
      <div className="flex justify-between px-36 text-[#737380]">
        <div className="flex gap-8">
          <span
            onClick={() => handleOptionClick("todos")}
            className={`cursor-pointer relative ${
              selectedOption === "todos" ? "text-[#123952] font-bold" : ""
            }`}
          >
            TODOS AS MARCAS
            {selectedOption === "todos" && (
              <div className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#F25D27]" />
            )}
          </span>
          <span
            onClick={() => handleOptionClick("caloi")}
            className={`cursor-pointer relative ${
              selectedOption === "caloi" ? "text-[#123952] font-bold" : ""
            }`}
          >
            Caloi
            {selectedOption === "caloi" && (
              <div className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#F25D27]" />
            )}
          </span>
          <span
            onClick={() => handleOptionClick("krw")}
            className={`cursor-pointer relative ${
              selectedOption === "krw" ? "text-[#123952] font-bold" : ""
            }`}
          >
            krw
            {selectedOption === "krw" && (
              <div className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#F25D27]" />
            )}
          </span>
        </div>
        <div className="relative">
          <button onClick={handleMenuClick} className="flex items-center gap-3">
            <span>Organizar por</span>
            <IoIosArrowDown />
          </button>
          {menu && (
            <div className="absolute right-0 mt-2 bg-gray-200 rounded shadow z-10">
              <ul className="menu rounded-box w-52 p-2">
                <li>
                  <a onClick={handleOrderClick('marca')}>Marca</a>
                </li>
                <li>
                  <a onClick={handleOrderClick('valor')}>Valor</a>
                </li>
                <li>
                  <a onClick={handleOrderClick('original')}>Original</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filtro;
