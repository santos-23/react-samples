import axios from "axios";
import { useState } from "react";

const File =() =>{
    const [file,setFile] = useState()
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
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
                <button type='submit'>upload</button>
            </form>
            
        </div>
    )
}

export default File;