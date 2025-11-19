import './App.css'
import {Welcome} from './welcome'
import { UserInfo } from './UserInfo'
import { UserCard } from './UserCard'
import { CardWrapper } from './CardWrapper'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'
import { Alert } from './Alert'
import { Like } from './Like'
import { CustomButton } from './CustomButton'
import { ContactUs } from './ContactUs'
import { NewsLetter } from './NewsLetter'
import { Menue } from './Menue'
function App() {
  

  return (
    <>
      <div>
        <Alert type='fail'>ALERT ALERT ALERT</Alert>
         <Alert type='success'>ALERT ALERT ALERT</Alert>
        <h1>
            react tutorial
        </h1>
        <Welcome name="Peter Parker" alias= "Spider-man"/>
        <Like></Like>
        <br></br>  
        <CustomButton text="Subcribe"></CustomButton>
        <UserCard name="pinku" age={28} city= "delhi" email="pinkupanda@gmail.com"/>
        <CardWrapper Title="User Profile">
          <p>Bruce Wayne</p>
          <p>batman@jl.com</p>
          <button>Edit Profile</button>
        </CardWrapper>
        <NewsLetter/>
        <ContactUs></ContactUs>
        <Menue/>
        <UserDetails name="bruce" isOnline={false} isPremium={true} role="ViP"></UserDetails>
        <UserDetails name= "clark" isOnline={true} isnew={true} role="admin"></UserDetails>
        <UserDetails name= "peter" isOnline={true} isPremium={true} isnew={true} role="hero"></UserDetails>
      </div>
      <ProductList/>
    
    </>
  );
}

export default App
