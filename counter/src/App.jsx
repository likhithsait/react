import { useState } from 'react'  
import './App.css'
import { ComponChange } from './componChange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ComponChange></ComponChange>
    </div>
    </>
  )
}

export default App
