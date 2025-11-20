import React, {useState, useEffect} from "react"

export const WH =()=>{
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener("resize", handleResize);
    },[]);


    const handleResize=()=>{
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }


    return(<>
            <div>
                <p>width: {width}</p>
                <p>height: {height}</p>
            </div>
            </>)


}