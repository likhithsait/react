import './App.css'
import {Welcome} from './welcome'
import {Button} from './Button'
import { Userprofile } from './userprofile'
import { Inputform } from './Inputform'
import { Candidate } from './Candidate'
function App() {
  

  return (
    <>
      <Inputform/>
      <div>
        
        <h1>
            react tutorial
        </h1>
        <Userprofile/>
        <Welcome/> 
        <Candidate/>       
      </div>
    </>
  )
}

export default App
