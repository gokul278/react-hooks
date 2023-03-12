import { useState } from "react";


export default function AddUserForm(props){


    const initialFormState = {id:null,name:'',username:''}; //this is used to set a form state

    const [user, setUser] = useState(initialFormState);


    const handleInputChange = (event) =>{
        const {name,value} = event.target; //this will take a value from input text box

        setUser({...user,[name]:value});
    };

    const [errormessage , seterrormesage ] = useState('');

    return(
        <div className="adduserform" align="start">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                    <form onSubmit={(event)=>{
                        event.preventDefault();
                        if(!user.name || !user.username){
                            seterrormesage("Fill the Name and UserName")
                            setTimeout(() => {
                                seterrormesage("")
                                }, 5000);
                            
                            return;
                        }
                        else{
                            seterrormesage("");
                            props.addUser(user);
                            
                            setUser(initialFormState);
                        }
                    }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input name="name" onChange={handleInputChange} value={user.name} type="text" className="form-control" id="exampleInputEmail1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
                            <input name="username" onChange={handleInputChange} value={user.username} type="text" className="form-control" id="exampleInputPassword1" />
                            <div id="errormessage" className="form-text mt-4" style={{color:"red"}}>{errormessage}</div>
                        </div>
                        <div align="end">
                            <button type="submit" className="btn btn-success mt-3">Submit</button>
                        </div>
                    </form>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}