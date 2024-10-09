import { useState } from "react";
import { login } from "../services/api";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = await login({ email, password });
            localStorage.setItem('token', token);
            console.log('Login successful');
        }catch (error) {
            console.error('Login failed');
        }
    };
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type="email" placeholder="Enter email..." value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label>Password: </label>
                <input type="password" placeholder="Enter password..." value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Login;