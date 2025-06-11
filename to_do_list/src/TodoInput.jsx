import React, { useState } from "react";

function TodoInput(props) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoInput;
