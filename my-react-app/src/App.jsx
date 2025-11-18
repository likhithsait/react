import './App.css'
import {Welcome} from './welcome'
import {Button} from './Button'
import { Hello, HellloNojsx } from './Hello'
import { Card } from './Card'
function App() {
  

  return (
    <>
      <div>
        <h1>
            react tutorial
        </h1>
        <Welcome/>
        <Hello/> 
        <HellloNojsx/>      
        <Button/>
      </div>
      <Card/>
    </>
  )
}

export default App
