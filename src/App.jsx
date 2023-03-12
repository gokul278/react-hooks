import { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

function App(){


  const usersData = [                           //this function is used to create the data for UserTable.jsx
    {id:1,name:'raja',username:'raja123'},
    {id:2,name:'gokul',username:'gokul123'}
  ];


  const [users, setUsers] = useState(usersData);//this function is used to set a state and gives a data for UserTable.jsx



  const addUser = (user) =>{                    // this function used to add a new data with help of AdduserForm.jsx 
    user.id = users.length+1;
    setUsers([...users,user])                   // this code will helps to add a new data in th UserData Array Function
  }



  const deleteUser = (id) =>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false)
  };


  const [editing,setEditing] = useState(false);

  const initialFormState = {id:null,name:"",username:""};

  const [currentUser,setCurrentUser] = useState(initialFormState);

  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username});
  }

  const updateUser = (id,updateUser) =>{
    setEditing(false);
    setUsers(users.map((user)=>(user.id === id?updateUser:user)))
  }


  return(
    <div className="App" align="center">
      <h1>CRUD App with Hooks</h1>
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            
            {editing?(<div>
                <h2>Edit User Form</h2>
                <EditUserForm
                setEditing = {setEditing}
                currentUser = {currentUser}
                updateUser = {updateUser}
                />
                </div>):(<div>
                  <h2>Add User</h2>
                  <AddUserForm addUser={addUser}/> {/* addUser={addUser} this send the data to AddUserForm.jsx */} 
                </div>
                  )}
                 
            
          </div>
          <div className="col-lg-6">
            <h2>View Users</h2>    
            <br /> 
            <br />     
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
              <UserTable users = {users} deleteUser={deleteUser} editRow = {editRow}/>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
