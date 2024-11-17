import React, { useEffect, useState } from "react";
import "./Admin.css";
import useFetch from '../CustomHooks/UseFetch';
import useDelete from '../CustomHooks/useDelete';
import useUpdate from '../CustomHooks/useUpdate';

export default function PatientsData() {

  const [fetchedData, isLoading, fetchError]=useFetch("https://caresync-3911d-default-rtdb.firebaseio.com/patients.json");
    
  const [usersData, setUsersData] = useState([]);
  const [DeleteData, isDeleted, deleteError] = useDelete();
  const [updateData, IsUpdated, updaterror] = useUpdate();
  
  // Transform fetched data into an array
  useEffect(() => {
    if (fetchedData) {
      const transformedData = Object.keys(fetchedData)
        .filter((key) => fetchedData[key] !== null) // Exclude null values
        .map((key) => ({
          id: key,
          ...fetchedData[key],
        }));
      setUsersData(transformedData);
    }
  }, [fetchedData]);

  // dete data
  const handleDelete = async (id,first_name) => {
   await DeleteData(`https://caresync-3911d-default-rtdb.firebaseio.com/patients/${id}.json`)
   if (isDeleted) {
    alert(`${first_name} deleted`);
    setUsersData(usersData.filter((user) => user.id !== id)); // Update state
  } else if (deleteError.length > 0) {
    console.error("Something went wrong while deleting:", deleteError);
  }
   
  };
  // Edit data
    
    const [isFormVisible, setFormVisible] = useState(false);
    const [oldId,setOldId]=useState(null)
    const [firstName,setFirstName]=useState("")
    const [lasttName,setLastName]=useState("")
    const [age2,setAge2]=useState("")
    const [gender2,setGender2]=useState("")
    const [mobile2,setMobile2]=useState("")
    
    const handleEdit=async(id,first_name,last_name,age,gender,mobile)=>{
       setOldId(id)
        setFirstName(first_name||"")
        setLastName(last_name||"")
        setAge2(age||"")
        setGender2(gender||"")
        setMobile2(mobile||"")
        setFormVisible(!isFormVisible)
  
    }
    // form handle
    const handleForm = async (e) =>{
        e.preventDefault()
        const updatedUser={
            first_name:firstName,
            last_name:lasttName,
            age:age2,
            gender:gender2,
            mobile:mobile2
        }
       
       await  updateData(`https://caresync-3911d-default-rtdb.firebaseio.com/patients/${oldId}.json`,updatedUser)
       if (IsUpdated) {
        alert("User updated");
        const updatedUsers = usersData.map((user) =>
          user.id === oldId ? { ...user, ...updatedUser } : user
        );
        setUsersData(updatedUsers);
      } else if (updaterror.length > 0) {
        console.error("Something went wrong while updating:", updaterror);
      }
      setFormVisible(false);
    }

      

      if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (fetchError) {
        return <p>Oops! Something went wrong</p>;
      }


  return (
    <div className='usersDataDisplay'>
              <h2>Patients Details</h2>
             {isFormVisible && (
                        <div className={`formForUpdateDatas ${isFormVisible ? '' : 'hiddenformKs'}`}>
                        <form onSubmit={handleForm}>
                            <div>
                                <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='first_name'/>
                            </div>
                            <div>
                                <input type='text' value={lasttName} onChange={(e)=>setLastName(e.target.value)} placeholder='last_name'/>
                            </div>
                            <div>
                                <input type='number' value={age2} onChange={(e)=>setAge2(e.target.value)} placeholder='age'/>
                            </div>
                            <div>
                                <input type='text'value={gender2} onChange={(e)=>setGender2(e.target.value)} placeholder='gender'/>
                            </div>
                            <div>
                                <input type='text'value={mobile2} onChange={(e)=>setMobile2(e.target.value)} placeholder='gender'/>
                            </div>
                            <div>
                                <button type='submit'>submit</button>
                            </div>
                        </form>
                    </div>
             )}
              <hr/>
              {usersData.length > 0 ? (
                usersData.map((user,i) => (
                  <div key={i} className="userDetailsK">
                      <h3>Name: {user.first_name || "N/A"}</h3>
                      <p>Last Name: {user.last_name || "N/A"}</p>
                      <p>Age: {user.age || "N/A"}</p>
                      <p>Gender: {user.gender || "N/A"}</p>
                      <p>Gender: {user.mobile || "N/A"}</p>
                      <div style={{ marginBottom: 10 }}>
                          <button
                            onClick={() =>
                            handleEdit(user.id, user.first_name, user.last_name, user.age, user.gender,user.mobile)
                            }
                            >
                            {isFormVisible ? "Cancel" : "Edit"}
                          </button>
                          <button onClick={() => handleDelete(user.id, user.first_name)}>Delete</button>
                        </div>
                    <hr />
                  </div>
                  ))
                   ) : (
                  <p>No users found.</p>
                )}
      </div>
          
  )
}
