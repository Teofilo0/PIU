import { useState } from 'react'
import './App.css'
import Darklight from './components/DarkLight'
import InputBackground from './components/InputBackground'
import Login from './components/Login'
import UserList from './components/Userlist'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Darklight/>
      <UserList/>
    </>
  )
}

export default App
