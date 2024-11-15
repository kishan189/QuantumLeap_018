import React, { useEffect, useState } from 'react';
import "./Admin.css";
import useFetch from '../CustomHooks/UseFetch';
import DoctorsData from './DoctorsData';
import PatientsData from './PatientsData';
import useDelete from '../CustomHooks/useDelete';
import useUpdate from '../CustomHooks/useUpdate';

export default function UserManagement() {
    
    const [usersData, setUsersData] = useState([]);
    const [DeleteData, isDeleted, deleteError] = useDelete();

    // update
   const [updateData,IsUpdated, updaterror]=useUpdate()

    const [fetchedData, isLoading, fetchError] = useFetch("https://caresync-3911d-default-rtdb.firebaseio.com/users.json");

    // Initialize usersData state with fetched data
    useEffect(() => {
        if (fetchedData) {
            setUsersData(fetchedData);
        }
    }, [fetchedData]);
    

    const handleDelete = async (id) => {
        DeleteData(`https://caresync-3911d-default-rtdb.firebaseio.com/users/${id}.json`)
        if(isDeleted){
            alert("user deleted")
            window.location.reload()
            console.log("user deleted")
        }
        if(deleteError.length>0){
            console.log("someting wrong")
        }
       
      };

    //   edit part
    
    const [isFormVisible, setFormVisible] = useState(false);
    const [oldId,setOldId]=useState(null)
    const [firstName,setFirstName]=useState("")
    const [lasttName,setLastName]=useState("")
    const [email2,setEmail2]=useState("")
    const [password2,setPass2]=useState("")
    
    const handleEdit=async(id,first_name,last_name,email,password)=>{
       setOldId(id)
        setFirstName(first_name)
        setLastName(last_name)
        setEmail2(email)
        setPass2(password)
        setFormVisible(!isFormVisible)
  
    }
    // form handle
    function handleForm(e){
        e.preventDefault()
        const obj={
            first_name:firstName,
            last_name:lasttName,
            email:email2,
            password:password2 
        }
       
         updateData(`https://caresync-3911d-default-rtdb.firebaseio.com/users/${oldId}.json`,obj)
        if(IsUpdated){
            alert("updated user")
            window.location.reload()
            console.log("updated")
        }
        if(updaterror.length>0){
            console.log("something gone wrong")
        }
        setFormVisible(false);
    }

    if (isLoading) {
        return <p>Loading........</p>;
    }

    if (fetchError) {
        return <p>Oops! Something went wrong</p>;
    }
//   console.log(usersData)
    return (
        <div className='userzDetailsg'>
            <div>User Management</div>
           
            <div className='trioContainerudp'>
                <div className='usersDataDisplay'>
                    <h2>User Details</h2>
                    <div className={`formForUpdateDatas ${isFormVisible ? '' : 'hiddenformKs'}`}>
                <form onSubmit={(e)=>handleForm(e)}>
                    <div>
                        <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='first_name'/>
                    </div>
                    <div>
                        <input type='text' value={lasttName} onChange={(e)=>setLastName(e.target.value)} placeholder='last_name'/>
                    </div>
                    <div>
                        <input type='email' value={email2} onChange={(e)=>setEmail2(e.target.value)} placeholder='email'/>
                    </div>
                    <div>
                        <input type='password'value={password2} onChange={(e)=>setPass2(e.target.value)} placeholder='password'/>
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
                    <hr />
                    {usersData.map((el, id) =>
                        { 
                            if(el!=null){
                            return(
                                <div key={id} className='userDetailsK'>
                            <h3>Name: {el.first_name}</h3>
                            <p>lastName: {el.last_name}</p>
                            <p>Email: {el.email}</p>
                            <p>password: {el.password}</p>
                          
                            <div style={{ marginBottom: 10 }}>
                                <button onClick={()=>handleEdit(id,el.first_name,el.last_name,el.email,el.password)}>{isFormVisible ? 'Cancel' : 'edit'}</button>
                                <button onClick={() => handleDelete(id)}>Delete</button>
                            </div>
                            <hr />
                          </div>
                            )
                         }
                        }
                    )}
                </div>
                <DoctorsData />
                <PatientsData />
            </div>
        </div>
    );
}
