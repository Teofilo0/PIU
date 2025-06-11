import React from "react";

function TodoItem(props) {
  const todo = props.todo;

  const style = {
    textDecoration: todo.done ? "line-through" : "none",
    cursor: "pointer",
    marginRight: "10px"
  };

  return (
    <li>
      <span onClick={props.onToggle} style={style}>
        {todo.text}
      </span>
      <button onClick={props.onDelete}>❌</button>
    </li>
  );
}

export default TodoItem;
