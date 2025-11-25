import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDo } from './ToDo'
import { WH } from './WH'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <ToDo/>
    </div>
      </> )
}

export default App
