import { useState } from 'react';
import './App.css';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

function App() {
  const userData = [
    {id:1,name:"Santos",username:"santos123"},
    {id:2,name:"Vasanth",username:"vasanth123"},
    {id:3,name:"Siva",username:"siva123"},
  ];

  const [users,setUsers] = useState(userData)

  const addUsers = (user) =>{
    user.id = users.length + 1;
    setUsers([...users,user])
  }
  const deleteUser = (id) =>{
    setUsers(users.filter((user)=> user.id!==id))
    setEditing(false)
  }

  const [editing,setEditing] = useState(false)

  const initialFormState = {id:null,name:'',username:''}
  const [currentUser, serCurrntUser] = useState(initialFormState)

  const editRow = (user) =>{
    setEditing(true);
    serCurrntUser({id:user.id,name:user.name,username:user.username})
  }

  const updateUser = (id,updatedUser)=>{
    setEditing(false);
    setUsers(users.map((user)=>(user.id===id)?updatedUser:user))
  }

  return (
    <div className="App">
      <h1>Hook with CRUD</h1>
      <div className="users">
        <div className="common">
          {editing?(<div>
            <h2>Update Users</h2>
            <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
            /></div>):(
              <div>
                <h2>Add Users</h2>
                <AddUserForm addUsers={addUsers} />
              </div>
            )
            }
        </div>
        <div className="common">
          <h2>View Users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
