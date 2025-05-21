import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Change from './Change'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Change/>
    </>
  )
}

export default App
