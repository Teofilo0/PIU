import React from "react";

function Item({ item, onToggle, onDelete }) {
    const style = {
        textDecoration: item.done ? "line-through" : "none",
        cursor: "pointer",
        marginRight: "10px"
    };
    
    return (
        <li>
        <span onClick={onToggle} style={style}>
            {item.text}
        </span>
        <button onClick={onDelete}>Excluir</button>
        </li>
    );
    }
export default Item;