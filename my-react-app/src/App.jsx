import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Wlecome(){
return(
  <p>
    Welcome!!
  </p>
);
}
function Button(){
  return <button >Click me</button>;
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
            react tutorial
        </h1>
         <Wlecome/>
        <Button/>
      </div>
    </>
  )
}

export default App
