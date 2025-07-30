import { useState } from 'react'
import './App.css'
import { ListName } from './components/ListName.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListName/>
    </>
  )
}

export default App
