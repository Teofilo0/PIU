import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrimeiroTeste from './PrimeiroTeste.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeiroTeste />
  </StrictMode>,
)
