const UserTable = props =>{
    return(
        <div className="usertable">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {props.users.length>0?(
                    props.users.map((user)=>(
                        <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button onClick={()=>{
                                props.editRow(user);
                            }} className="btn btn-warning">Update</button>

                            
                            <button onClick={()=>{
                                props.deleteUser(user.id)
                            }} className="btn btn-danger" style={{marginLeft:"20px"}}>Delete</button>
                        </td>
                        </tr>
                    ))
                   ):(
                    <tr align="center">
                        <td colSpan="4">No Users</td>
                    </tr>
                   )}
                </tbody>
            </table>

        </div>
    );
}

export default UserTable;