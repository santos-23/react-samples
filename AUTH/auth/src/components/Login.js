import axios from 'axios';
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Login =()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [login,setLogin] = useState(false)
    const navigate = useNavigate();

    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
    };
    const [errors,setErrors] = useState(initialStateErrors)

    const handleSubmit = (event) =>{
        event.preventDefault();
        let errors =initialStateErrors;
        let hasError = false;
        if (email === "") {
            errors.email.required =true;
            hasError = true;
        }
        if (password === "") {
            errors.password.required =true;
            hasError = true;
        }

        if(hasError){
            setErrors(errors)
        }

        const configuration = {
            method : "post",
            url : "http://localhost:8080/login",
            data:{
                email,
                password
            }
        }
        axios(configuration)
            .then((result)=>{
                setLogin(true);
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });
                console.log(result)
                // window.location.href = "/auth";
                alert('Logged-in Successfully...')
            })
            .catch((error)=>console.log(error))
    }
    if(login){
        navigate('/')
    }
    // }else{
    //     navigate('/register')
    // }

    return(
        <div>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    { errors.email.required?
                        (<p className='text-danger'>
                            Email is required.
                        </p>):null
                    }
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    { errors.password.required?
                        (<p className='text-danger'>
                            Password is required.
                        </p>):null
                    }
                </Form.Group><br/>

                {/* message */}
                {
                    login ? (
                    <p className='text-success'>You Are Logged-in Successfully</p> ) : (
                    <p className='text-danger'>You are not Logged-in</p> )
                }

                {/* submit button */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login;