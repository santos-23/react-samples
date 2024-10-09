import { useEffect, useState } from "react";

const EditUserForm = (props) =>{
    const [user,setUser] = useState(props.currentUser);

    useEffect(()=>{
        setUser(props.currentUser)
    },[props])

    const handleInputChange = (event) =>{
        const {name,value} = event.target;
        setUser({...user,[name]:value})
    }

    return(
        <form onSubmit={
            event =>{
                event.preventDefault()
                if(!user.name || !user.username) return;
                props.updateUser(user.id,user);
                
            }}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={handleInputChange} id="name" value={user.name} />
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={handleInputChange} id="username" value={user.username} />
            <button>Update User</button>
            <button onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
        </form>
    )
}

export default EditUserForm;