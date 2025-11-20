import React, {useState} from "react";
export const Food=()=>{
    const[foo,setFoo] = useState(["Apple", "Orange", "Banana"]);
    const handleAdd=()=>{
        const newFood = document.getElementById("foodinp").value;
        if(newFood.trim()===("")){
            alert("food is empty") ;
            return;        
        }
        document.getElementById("foodinp").value=" ";
        setFoo(f=>[...f,newFood]);
    }
    const handleDelte=(index)=>{
        setFoo(foo.filter((_,i)=> i!==index));
        
    }

    return(<>
            <div>
                <h2>List of Foods</h2>
                <ul>
                        {foo.map((foo,index)=>
                        <li key={index} onClick={()=>handleDelte(index)}>
                            {foo}
                            </li>)}
                </ul>
                <input type="text" id="foodinp" placeholder="enter food" />
                <button onClick={handleAdd}>add food</button>
            </div>
            </>)
}