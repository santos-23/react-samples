import { useState } from "react";

const UseStateHook = () =>{
    const [color,setColor] = useState("Red")
    const carInitial = {
        brand: "ford",
        color: "blue",
        year: "1990"
    }
    const [car,setCar] = useState(carInitial)
    const updateCar = () =>{
        setCar((previousState)=>{
            return {...previousState, color:"Red"}
        })
    }
    
    return(
        <div>
            <div>
                <p>Color is {color}</p>
                <button type="button" onClick={()=>setColor("Blue")}>Blue</button>
                <button type="button" onClick={()=>setColor("Red")}>Red</button>
                <button type="button" onClick={()=>setColor("Green")}>Green</button>
            </div>
            <div>
                <p>My {car.brand} car is {car.color} color. It is {car.year} model </p>
                <button type="button" onClick={updateCar}>click</button>
            </div>
        </div>

    )
}

export default UseStateHook;