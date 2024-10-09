import axios from "axios";
import { useEffect, useState } from "react";

const File =() =>{
    const [file,setFile] = useState()
    const [image,setImage] = useState();
    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(file)
        const formdata = new FormData();
        formdata.append('file',file);
        axios.post("http://localhost:5000/upload",formdata,{ headers: {'Content-Type': 'multipart/form-data'}})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        axios.get("http://localhost:5000/getImage")
        .then((res)=>{
            setImage(res.data[2].image)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div>
            <h1>Single File Upload : </h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
                <button type='submit'>upload</button>
                <br />
                <img src={`http://localhost:5000/upload/`+image} alt="" height="100px" width="100px" />
            </form>
        </div>
    )
}

export default File;