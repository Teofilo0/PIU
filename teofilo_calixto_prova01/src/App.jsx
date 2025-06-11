import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* aqui foi feito uma condicional para verificar se o valor do contador é maior que 10 ou menor que 0, e mudar o tamanho do botao de acordo */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} style={{height:count > 10 ? '600px' : ''}}>+</button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count - 1)} style={{height:count < 0 ? '600px' : ''}}>-</button>
      </div>
    </>
  )
}

export default App
