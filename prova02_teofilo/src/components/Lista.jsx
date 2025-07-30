import React, { useState, useEffect } from 'react';

const Lista = () => {
  const [userID, setUserID] = useState(1); 
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(false);

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const filteredTodos = data.filter((todo) => todo.userId === parseInt(userID));
        setTodos(filteredTodos);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, [userID, reload]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
        <label>Digite um numero de 1 a 10: </label>
        <input type="number"  value={userID} onChange={(e) => setUserID(e.target.value)} min="1" max="10"/>
        <button onClick={() => setReload(!reload)}>Recarregar Tarefas</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> {todo.completed ? 'Concluído' : 'Pendente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;