
import { useState, useRef, useEffect } from "react"


export const Myref=()=>{
    const [num, setNum] = useState(0);
    const ref = useRef(null);
    const handleClick=()=>{
        setNum(num+1);
        console.log("clicked");

    }
    useEffect(()=>{
        console.log("rendered");
    })
    const handleClickref=()=>{
        console.log(ref.current);
       ref.current.style.backgroundColor =
        ref.current.style.backgroundColor === "red" ? "blue" : "red";
        
    }


    return(
        <div>
            <input type="text" />
            <button onClick={handleClick}>click to increase number {num}</button>
            
            <button onClick={handleClickref} ref={ref}>click</button>
        </div>
    )

}