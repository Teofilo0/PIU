import { useState } from 'react'
import './App.css'
import Item from './Item'
import Input from './Input'

function App() {
  const [items, setItems] = useState([])
  function addItem(text) {
    const newItem = {
      id: Date.now(),
      text: text,
      done: false
    }
    for (let i = 0; i < items.length; i++) {
      if (items[i].text === text) {
        alert('Item já existe!')
        return
      }}
    setItems([...items, newItem])
  }
  function deleteItem(id) {
    setItems(items.filter(item => item.id !== id))
  }
  
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Input onAdd={addItem} />
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onToggle={() => toggleItem(item.id)}
            onDelete={() => deleteItem(item.id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
