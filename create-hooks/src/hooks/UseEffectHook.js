import { useEffect, useState } from "react";

const UseEffectHook=()=>{
    const [count,setCount] = useState(0)
    // const [calculation,setCalculation] = useState(0);
    // useEffect(()=>{
    //     setCalculation(()=>count*2)
    // },[count]);

    // return(
    //     <div>
    //         <p>count: {count}</p>
    //         <button onClick={()=>setCount((count)=>count+1)}>+</button>
    //         <p>Calculation: {calculation}</p>
    //     </div>
    // )

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count + 1);
        },2000);
    },[]);
    return <h3>Rendered {count} times</h3>

    // useEffect(()=>{
    //     let timer = setTimeout(()=>{
    //         setCount((count)=> count + 1);
    //     },2000);
    //     return ()=>clearTimeout(timer)
    // },[]);
    
    // return <h3>Rendered {count} times</h3>

    
}

export default UseEffectHook;