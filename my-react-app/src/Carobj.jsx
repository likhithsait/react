import { useState } from "react";
export const Carobj=()=>{

    const[cars, Setcars]= useState([]);
    const[carMake,SetcarMake]=useState("");
    const[carModel, setcarModel]=useState("");
    const[carYear,setcarYear]=useState(new Date().getFullYear());

    const handleAddCar=()=>{
        const newCar={
                        year: carYear,
                        make: carMake,
                        model: carModel};
            Setcars(c => [...c,newCar]);
            SetcarMake("");
            setcarModel("");
            setcarYear(new Date().getFullYear());
    }
    const handleRemoveCar=(index)=>{
        Setcars(c=>c.filter((_,i)=>i!== index));

    }
    const handleMakeChange=(e)=>{
        SetcarMake(e.target.value);
        

    }
    const handleModelChange=(e)=>{
            setcarModel(e.target.value);
    }
    const handleYearChange=(e)=>{
            setcarYear(e.target.value);
    }

    return(
        <>
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,index)=>{
                    return(
                        <li key={index} onClick={()=>handleRemoveCar(index)}>
                            {car.year} {car.make} {car.model} 
                        </li>
                    );
                })}

            </ul>
            <input type="number" value={carYear} onChange={handleYearChange }/>
            <br/>
            <input type="text" value={carMake} placeholder="Enteer Car Make" onChange={handleMakeChange}/>
            <br/>
            <input type="text" value={carModel} placeholder="Enteer Car Model" onChange={handleModelChange}/>
            <br/>
            <button onClick={handleAddCar}>Add Car</button>

        </div>
        </>
    )


}