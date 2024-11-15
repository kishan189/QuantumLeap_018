import React, { useState } from 'react';
import useFetch from '../CustomHooks/UseFetch';
import useDelete from '../CustomHooks/useDelete';

export default function DoctorsData() {

    const [doctorsData,isLoading22,error22]=useFetch("https://caresync-3911d-default-rtdb.firebaseio.com/doctors.json");
    const [DeleteData, isDeleted, deleteError] = useDelete();

    const [isFormVisible, setFormVisible] = useState(false);
    const [oldId,setOldId]=useState(null)
    const [Name,setName]=useState("")
    const [speciality,setSpeciality]=useState("")
    const [qualification,setQualification]=useState("")
    const [experience,setExperience]=useState("")
    const [location,setLocation]=useState("")
    const [availability,setAvailability]=useState("")
    
    const handleEdit=async(id,name,speciality,experience,qualification,location,availability)=>{
       setOldId(id)
        setName(name)
        setSpeciality(speciality)
        setExperience(experience)
        setAvailability(availability)
        setQualification(qualification)
        setLocation(location)
        setFormVisible(!isFormVisible)
  
    }
    // form handle
    function handleForm(e){
        e.preventDefault()
        const obj={
            name:Name,
            speciality:speciality,
            qualification:qualification,
            experience:experience,
            location:location,
            availability:availability
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


      const handleDelete = async (id) => {
        DeleteData(`https://caresync-3911d-default-rtdb.firebaseio.com/users/${id}.json`)
        if(isDeleted){
            alert("doctor deleted")
            window.location.reload()
            console.log("doctor deleted")
        }
        if(deleteError.length>0){
            console.log("someting wrong")
        }
       
      };

      if(isLoading22){
        return (
          <p>Loading........</p>
        )
      }
      if(error22.length>0){
        return(
          <p>opps! Someting wrong</p>
        )
      }
      // console.log(doctorsData)
  return (
  <div className='usersDataDisplay'> 
              <h2>Doctors Details</h2>
              <div className={`formForUpdateDatas ${isFormVisible ? '' : 'hiddenformKs'}`}>
                <form onSubmit={(e)=>handleForm(e)}>
                    <div>
                        <input type='text' value={Name} onChange={(e)=>setName(e.target.value)} placeholder='first_name'/>
                    </div>
                    <div>
                        <input type='text' value={speciality} onChange={(e)=>setSpeciality(e.target.value)} placeholder='last_name'/>
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
              <hr/>
              
              {doctorsData.map((el,id)=>
                //  console.log(el)
                  <div key={id} className='userDetailsK'>
                    <h3>Name:{el.name}</h3>
                    <h5>{el.speciality}</h5>
                    <p>{el.qualification}</p>
                    <p>{el.experience}</p>
                    <p>{el.location}</p>
                    <p>availability:{el.availability}</p>
                    <div style={{marginBottom:10}}>
                    <button onClick={()=>handleEdit(id,el.name,el.speciality,el.experience,el.qualification,el.location,el.availability)}>{isFormVisible ? 'Cancel' : 'edit'}</button>
                      <button onClick={()=> handleDelete(id)}>Delete</button>
                    </div>
                    <hr/>
                  </div>
                )}
            </div> 
   
  )
}
