import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Carrinho from "./pages/carrinho";
import Catalogo from "./pages/catalogo";
import Produto from "./pages/produto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
