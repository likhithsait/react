export const Button=()=>{
    let count=0;
    const handleClick=(e)=>{
        if(count<3)
            {
                count++;
                console.log("clicked the button",count,"times" );
                alert("zuii");
            }
        else 
            {console.log("Stop clicking me");
                e.target.textContent="Ouch :("

            }
        }        
    return(<button onClick={handleClick}>cleck</button>

    )
}