import { useState } from "react"

export  const MyComponent=()=>{
    const [name,setName]= useState("press generate name to generate name");
    const[Age,setAge]= useState(0);
    const UpdateName=()=>{
        setName("patricky");
    }
    const IncrementAge=()=>{
        setAge(Age+1);        
    }



    return(

        <div>
            <p>{name}</p>
            <button onClick={UpdateName}>Generate Name</button>
            <p>{Age}</p>
            <button onClick={IncrementAge}>Increment Age</button>
        </div>
    )

}