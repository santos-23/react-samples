import axios from 'axios';
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
// const token = cookies.get("TOKEN");

function Home(){
    const navigate = useNavigate()
    const [file,setFile] = useState();
    const [image,setImage] = useState()
    const logout = () =>{
            alert('You are log out')
            cookies.remove("TOKEN", { path: "/" });
            navigate('/thank')
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(file)
        const formData = new FormData();
        formData.append('file',file)
        axios.post("http://localhost:8080/upload",formData,{ headers: {'Content-Type': 'multipart/form-data'}})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:8080/getImage")
        .then((res)=>{
            console.log(res.data.length)
            const current = res.data.length -1
            setImage(res.data[current].image)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <Button type="submit" variant="danger" id="button" onClick={logout}>Logout</Button>
            <h1 id="home">Home</h1>
            <br />
            <img src={`http://localhost:8080/upload/`+image} alt="" height="100px" width="100px" /><br/>
            <br/>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Upload your profile picture: </Form.Label>
                <Form.Control type="file" onChange={(e) => setFile(e.target.files[0]) } />
            </Form.Group>
            <br/>
            
            <Button variant="primary" type="submit">
                Upload
            </Button>
            
            </Form>
        </div>
    )
}

export default  Home;