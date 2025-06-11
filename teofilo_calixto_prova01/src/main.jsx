import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Carros from './Carros.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Carros/>
  </StrictMode>,
)
