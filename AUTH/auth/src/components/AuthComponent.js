import axios from 'axios';
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

const AuthComponent = () =>{
    const [message,setMessage] = useState;
    useEffect(()=>{
        const configuration = {
            method: "get",
            url: "https://localhost:8080/auth-endpoint",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios(configuration)
            .then((result)=>{
                setMessage(result.data.message)
            })
            .catch((error)=>{
                console.log(error)
            })
    })

    const logout = () =>{
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/";
    }

    return(
        <div>
            <h1 className="text-center">Auth Component</h1>
            <h3 className="text-center text-danger">{message}</h3>
            <Button type="submit" variant="danger" onClick={logout}>Logout</Button>
        </div>
    )
}

export default AuthComponent;