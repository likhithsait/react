import { useState } from "react"

export const Favcar = ()=>{

    const [car,setCar]= useState({
                                    year:2024,
                                    make:"ford",
                                    model:"Mustang"
                                 });
            
            const handleYear=(e)=>{
                   setCar(car => ({
                                        ...car, year: e.target.value 
                                    }));
                                
            }
            const handleMake=(e)=>{
                setCar(car=>({
                    ...car,make:e.target.value
                }));
            }
            const handlemodel=(e)=>{
                setCar(car=>({
                    ...car, model:e.target.value
                }));
            }
                    
    return(<>
            <div>
                <p>Your fav car is {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={handleYear}/><br></br>
                <input type="text" value={car.make} onChange={handleMake}/><br></br>
                <input type="text" value={car.model} onChange={handlemodel}/><br></br>
            </div>
            </>)
}