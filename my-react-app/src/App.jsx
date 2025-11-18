import './App.css'
import {Welcome} from './welcome'
import { UserInfo } from './UserInfo'
import { UserCard } from './UserCard'
import { CardWrapper } from './CardWrapper'
function App() {
  

  return (
    <>
      <div>
        <h1>
            react tutorial
        </h1>
        <Welcome name="Peter Parker" alias= "Spider-man"/>
        <UserCard name="pinku" age={28} city= "delhi" email="pinkupanda@gmail.com"/>
        <CardWrapper Title="User Profile">
          <p>Bruce Wayne</p>
          <p>batman@jl.com</p>
          <button>Edit Profile</button>
        </CardWrapper>
      </div>
    </>
  );
}

export default App
