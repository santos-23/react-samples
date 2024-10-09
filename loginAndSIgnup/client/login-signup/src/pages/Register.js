import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();
    const initialState = {
        name:'',
        email:'',
        password:''
    }
    const [data,setData] = useState(initialState)

    // const handleInput = (e) =>{
    //     // setData({...data,name:e.target.value})
    //     const {name,value} = e.target
    //     setData({...data,[name]:value})
    // }

    const RegisterUser = async(e) => {
        e.preventDefault()
        const {name,email,password} = data;
        try{
            const {data} = await axios.post('/register',{
                name,email,password
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success("Registered successfully")
                navigate('/login')
            }
        }catch(error){
            console.log(error)
        }
        // setData(initialState)
    }
    
    return(
        <div>
            <form onClick={RegisterUser}>
                <label>Name: </label>
                <input type="text" placeholder="Enter name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />
                <label>Email: </label>
                <input type="email" placeholder="Enter email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
                <label>Password: </label>
                <input type="password" placeholder="Enter password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default  Register;