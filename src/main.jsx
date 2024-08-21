import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CarrinhoProvider } from './components/context/carrinhoContext.jsx'

createRoot(document.getElementById('root')).render(
  <CarrinhoProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </CarrinhoProvider>,
)
