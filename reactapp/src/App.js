import axios from "axios";
import { useEffect, useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm.js";
import UserTable from "./tables/UserTable";

function App() {

// const usersData = [
//     {id:1,name:'Logesh',username:'jvlogesh'},
//     {id:2,name:'Ramesh',username:'rameshtr'},
//     {id:3,name:'Daniel',username:'danielradcliff'},
// ];

const [users,setUsers] = useState([]);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);


const addUser = (user)=>{
    user.id = users.length + 1;
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => {
        console.log('Post successful:', response.data);
        setUsers([...users,user])
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
    
}
const deleteUser = (id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${users.id}`)
    .then(()=>{
      setUsers(users.filter((user)=>user.id!==id))
      setEditing(false);
    })
    
}

    
    const [editing,setEditing] = useState(false)
    

    const initialFormState = {id:null,name:'',username:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({id:user.id,name:user.name,username:user.username});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
    }

  return (
    <div>
      <h1>CRUD App with Hooks</h1>
      <div>
        <div>
            {editing?(<div>
                <h2>Edit User</h2>
                <EditUserForm
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </div>):(<div>
                <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
          </div>
            )
        }
        </div>
        <div>
          <h2>View users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;