import React, { useEffect, useState } from "react";
import useFetch from '../CustomHooks/UseFetch';
import useDelete from '../CustomHooks/useDelete';
import useUpdate from '../CustomHooks/useUpdate';

import "./Admin.css";
export default function DoctorsData() {
  
  

    // const [doctorsData,isLoading22,error22]=useFetch("https://caresync-3911d-default-rtdb.firebaseio.com/doctors.json");
    const [fetchedData, isLoading, fetchError] = useFetch(
      "https://caresync-3911d-default-rtdb.firebaseio.com/doctors.json"
    );
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

  // Handle delete user
  const handleDelete = async (id, name) => {
    await DeleteData(`https://caresync-3911d-default-rtdb.firebaseio.com/doctors/${id}.json`);
    if (isDeleted) {
      alert(`${name} deleted`);
      setUsersData(usersData.filter((user) => user.id !== id)); // Update state
    } else if (deleteError.length > 0) {
      console.error("Something went wrong while deleting:", deleteError);
    }
  };

    
  // Edit user data
    const [isFormVisible, setFormVisible] = useState(false);
    const [oldId,setOldId]=useState(null)
    const [name,setName]=useState("")
    const [specialty,setSpecialty]=useState("")
    const [qualification,setQualification]=useState("")
    const [experience,setExperience]=useState("")
    const [location,setLocation]=useState("")
    const [availability,setAvailability]=useState("")
    
    const handleEdit=async(id,name,specialty,experience,qualification,location,availability)=>{
       setOldId(id||"")
        setName(name||"")
        setSpecialty(specialty||"")
        setExperience(experience||"")
        setAvailability(availability||"")
        setQualification(qualification||"")
        setLocation(location||"")
        setFormVisible(!isFormVisible)
  
    }
    // form handle
    const handleForm = async (e) =>{
        e.preventDefault()
        const updatedUser={
            name:name,
            specialty:specialty,
            qualification:qualification,
            experience:experience,
            location:location,
            availability:availability
        }
       
        await updateData(`https://caresync-3911d-default-rtdb.firebaseio.com/doctors/${oldId}.json`,updatedUser)
        // if(IsUpdated){
        //     alert("updated user")
        //     window.location.reload()
        //     console.log("updated")
        // }
        // if(updaterror.length>0){
        //     console.log("something gone wrong")
        // }
        // setFormVisible(false);
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
    };


      // const handleDelete = async (id) => {
      //   DeleteData(`https://caresync-3911d-default-rtdb.firebaseio.com/users/${id}.json`)
      //   if(isDeleted){
      //       alert("doctor deleted")
      //       window.location.reload()
      //       console.log("doctor deleted")
      //   }
      //   if(deleteError.length>0){
      //       console.log("someting wrong")
      //   }
       
      // };

      
   if (isLoading) {
    return <p>Loading...</p>;
  }

  if (fetchError) {
    return <p>Oops! Something went wrong</p>;
  }
      // console.log(doctorsData)
  return (
  <div className='usersDataDisplay'> 
              <h2>Doctors Details</h2>
              {isFormVisible && (
                <div className={`formForUpdateDatas ${isFormVisible ? '' : 'hiddenformKs'}`}>
                <form onSubmit={(e)=>handleForm(e)}>
                    <div>
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='first_name'/>
                    </div>
                    <div>
                        <input type='text' value={specialty} onChange={(e)=>setSpecialty(e.target.value)} placeholder='last_name'/>
                    </div>
                    <div>
                        <input type='number' value={qualification} onChange={(e)=>setQualification(e.target.value)} placeholder='age'/>
                    </div>
                    <div>
                        <input type='text'value={experience} onChange={(e)=>setExperience(e.target.value)} placeholder='gender'/>
                    </div>
                    <div>
                        <input type='text'value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='gender'/>
                    </div>
                    <div>
                        <input type='text'value={availability} onChange={(e)=>setAvailability(e.target.value)} placeholder='gender'/>
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
              )}
              <hr/>
              
              {usersData.length > 0 ? (
               usersData.map((user,i)=>
                //  console.log(el)
               <div key={i} className="userDetailsK">
               <h3>Name: {user.name|| "N/A"}</h3>
               <p>speciality: {user.specialty || "N/A"}</p>
               <p>{user.qualification || "N/A"}</p>
               <p>experience: {user.experience || "N/A"}</p>
               <p>Password: {user.location || "N/A"}</p>
               <p>availability:{user.availability || "N/A"}</p>
               <div style={{marginBottom:10}}>
                 <button onClick={()=>handleEdit(user.id,user.name,user.specialty,user.experience,user.qualification,user.location,user.availability)}>
                   {isFormVisible ? 'Cancel' : 'edit'}
                   </button>
                 <button onClick={()=> handleDelete(user.id,user.name)}>Delete</button>
               </div>
               <hr />
              </div>
                )
              ) : (
               <p>No users found.</p>
              )}
            </div> 
   
  )
}

