import React, { useState } from 'react';
import Character from './Character.jsx';
import './index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header>
        <h1>Galeria de Personagens</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
        </button>
      </header>
      <Character />
    </div>
  );
}
