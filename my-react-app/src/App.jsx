import './App.css'
import {Welcome} from './welcome'
import {Button} from './Button'
import { Userprofile } from './userprofile'
import { Inputform } from './Inputform'
import { Candidate } from './Candidate'
import {Products} from'./Products'
function App() {
  

  return (
    <>
      <Inputform/>
      <div>
        
        <h1>
            react tutorial
        </h1>
        <Userprofile/>
         <Welcome name="Bruce" alias="Batman"/> 
         <Welcome name="clark" alias="SuperMan"/> 
        <Candidate/>
        <Products title= "phone" price={300} inStock={false} categories={["Electronics","Communication"]} />      
      </div>
    </>
  )
}

export default App
