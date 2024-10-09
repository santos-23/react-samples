import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register =()=>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [register,setRegister] = useState(false)
    const navigate = useNavigate();
    
    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        name:{required:false},
    };
    const [errors,setErrors] = useState(initialStateErrors)

    const handleSubmit = (event) =>{
        event.preventDefault();
        let errors =initialStateErrors;
        let hasError = false;
        if (name === "") {
            errors.name.required =true;
            hasError = true;
        }
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
            method: "post",
            url: "http://localhost:8080/register",
            data: {
                name,
                email,
                password,
            },
        };
        axios(configuration)
            .then((result)=>{
                setRegister(true)
                console.log(result)
                alert("Registered Successfully")
            })
            .catch((error)=>console.log(error))
        
    }
    if(register){
        navigate('/login')
    }

    return(
        <div>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                {/* name */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    { errors.name.required?
                        (<p className='text-danger'>
                            Name is required.
                        </p>):null
                    }
                    {/* <span>name is required</span> */}
                </Form.Group>

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
                    register ? (
                    <p className='text-success'>You are registered successfully</p> ) : (
                    <p className='text-danger'>You are not registered</p> )
                }

                {/* submit button */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register;