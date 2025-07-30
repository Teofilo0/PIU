import React, { useState } from 'react';

const Login = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleLogin = () => {
    if (password.toLowerCase() === 'alunopiu') {
      setBackgroundColor('green');
    } else {
      alert('Senha incorreta');
    }
  };

  return (
    <div style={{ backgroundColor }}>
        <h1>Login</h1>
        <input type="text" placeholder="Nome" value={Username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;