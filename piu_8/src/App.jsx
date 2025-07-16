import { useState } from 'react'
import './App.css'
import CountClick from './components/CountClick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountClick />
    </>
  )
}

export default App
