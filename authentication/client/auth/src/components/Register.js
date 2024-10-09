import { useState } from "react";
import { register } from "../services/api";

const Register = () =>{

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            await register({ name, email, password });
            console.log('Registration successful');
        } catch (error) {
            console.log("Registration failed")
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" placeholder="Enter name..." value={name} onChange={(e)=>{setName(e.target.value)}} />
                <label>Email: </label>
                <input type="email" placeholder="Enter email..." value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label>Password: </label>
                <input type="password" placeholder="Enter password..." value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;