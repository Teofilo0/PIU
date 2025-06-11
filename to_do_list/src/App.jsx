import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
      done: false
    };
    if (todos.some(todo => todo.text === newTodo.text)) {
      alert("Essa tarefa já existe!");
      return;
    }
    setTodos(todos.concat([newTodo]));
  }

  function toggleTodo(id) {
    const updated = [];

    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];

      if (todo.id === id) {
        updated.push({
          id: todo.id,
          text: todo.text,
          done: !todo.done
        });
      } else {
        updated.push(todo);
      }
    }
    setTodos(updated);
  }

  function deleteTodo(id) {
    const filtered = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        filtered.push(todos[i]);
      }
    }

    setTodos(filtered);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoInput onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
