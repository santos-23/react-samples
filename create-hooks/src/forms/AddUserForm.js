import { useState } from "react";

const AddUserForm = (props) =>{
    const initialFormState = {id:null,name:'',username:''}
    const [user,setUser] = useState(initialFormState)

    const handleInputChange = (event) =>{
        const {name,value} = event.target;
        setUser({...user,[name]:value})
    }
    return(
        <form onSubmit={
            event =>{
                event.preventDefault()
                if(!user.name || !user.username) return;
                props.addUsers(user);
                setUser(initialFormState)
            }}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={handleInputChange} id="name" value={user.name} />
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={handleInputChange} id="username" value={user.username} />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm;
