import axios from 'axios';
import { useEffect, useState } from "react";

const FreeComponent = () =>{
    const [message,setMessage] = useState('');
    useEffect(()=>{
        const configuration = {
            method: "get",
            url: "https://loaclhost:8080/free-endpoint",
        };
        axios(configuration)
            .then((result)=>{
                setMessage(result.data.message)
            })
            .catch((error)=>{
                console.log(error)
            })
    },[])
    return(
        <div>
            <h1 className="text-center">Free Component</h1>
            <h3 className="text-center text-danger">{message}</h3>
        </div>
    )
}

export default FreeComponent;