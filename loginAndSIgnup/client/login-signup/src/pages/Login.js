import axios from "axios";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const initialState = {
        email:'',
        password:''
    }
    const [data,setData] = useState(initialState)

    // const handleInput = (e) =>{
    //     // setData({...data,name:e.target.value})
    //     const {name,value} = e.target
    //     setData({...data,[name]:value})
    // }

    const LoginUser = async(e) =>{
        e.preventDefault()
        const {email,password} = data;
        // try {
        //     const token = await login({ email, password });
        //     localStorage.setItem('token', token);
        //     console.log('Login successful');
        // } catch (error) {
        //     console.error('Login failed');
        // }
        try {
            const {data} = await axios.post('/login',{
                email,
                password
            }).then((response)=>{
                
            })
            if(data.error){
                toast.error(data.error)
            }else{
                toast.success("you are logged in....Welcome!")
                setData({})
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
        // setData(initialState)
    }

    return(
        <div>
            <form onClick={LoginUser}>
                <label>Email: </label>
                <input type="email" placeholder="Enter email"  value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
                <label>Password: </label>
                <input type="password" placeholder="Enter password"  value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default  Login;