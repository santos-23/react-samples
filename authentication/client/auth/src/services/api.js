// const API_URL = 'http://localhost:3001/api';
import axios from "axios";

export const register = async (userData) => {
    await axios.post('/api/register',userData)
        .then((response)=>{
            const data = response.json();
            return data.token;
        })
        .catch((error)=>{
            console.log(error)
            throw new Error('Registration failed');
        })
    }
    // const response = await fetch(`${API_URL}/register`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(userData),
    // });

    // if (response.ok) {
    //     const data = await response.json();
    //     return data.token;
    // } else {
    //     throw new Error('Registration failed');
    // }
    // };

export const login = async (userData) => {
    await axios.post('/api/login',userData)
        .then((response)=>{
            const data = response.json();
            return data.token;
        })
        .catch((error)=>{
            console.log(error)
            throw new Error('Registration failed');
        })
    }
//     const response = await fetch(`${API_URL}/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userData),
//     });

//     if (response.ok) {
//         const data = await response.json();
//         return data.token;
//     } else {
//         throw new Error('Login failed');
//     }
// };
