import React, { useState } from 'react';
import useFetch from '../CustomHooks/UseFetch';
import useDelete from '../CustomHooks/useDelete';
import useUpdate from '../CustomHooks/useUpdate';

export default function PatientsData() {

    const [patientsData,isLoading33,error33]=useFetch("https://caresync-3911d-default-rtdb.firebaseio.com/patients.json");
    const [DeleteData, isDeleted, deleteError] = useDelete();

    
      const [isFormVisible, setFormVisible] = useState(false);
    const [oldId,setOldId]=useState(null)
    const [firstName,setFirstName]=useState("")
    const [lasttName,setLastName]=useState("")
    const [age2,setAge2]=useState("")
    const [gender2,setGender2]=useState("")
    const [mobile2,setMobile2]=useState("")
    
    const handleEdit=async(id,first_name,last_name,age,gender,mobile)=>{
       setOldId(id)
        setFirstName(first_name)
        setLastName(last_name)
        setAge2(age)
        setGender2(gender)
        setMobile2(mobile)
        setFormVisible(!isFormVisible)
  
    }
    // form handle
    function handleForm(e){
        e.preventDefault()
        const obj={
            first_name:firstName,
            last_name:lasttName,
            age:age2,
            gender:gender2,
            mobile:mobile2
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
            alert("patient deleted")
            window.location.reload()
            console.log("patient deleted")
        }
        if(deleteError.length>0){
            console.log("someting wrong")
        }
       
      };

      if(isLoading33){
        return (
          <p>Loading........</p>
        )
      }
      if(error33.length>0){
        return(
          <p>opps! Someting wrong</p>
        )
      }


  return (
    <div className='usersDataDisplay'>
              <h2>Patients Details</h2>
              <div className={`formForUpdateDatas ${isFormVisible ? '' : 'hiddenformKs'}`}>
                <form onSubmit={(e)=>handleForm(e)}>
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
              <hr/>
              {patientsData.map((el,id)=>
                  <div key={id} className='userDetailsK'>
                   
                    <h3>firstName:{el.first_name}</h3>
                    <h3>Last Name:{el.last_name}</h3>
                    <p>gender:{el.gender}</p>
                    <p>age:{el.age}</p>
                    <p>Mobile No.:{el.mobile}</p>
                    {/* <p>address: {el[1].address}</p> */}
                    <p>status:{el.status?"pending":"booked"}</p>
                    <div style={{marginBottom:10}}>
                      <button onClick={()=>handleEdit(id,el.first_name,el.last_name,el.age,el.gender,el.mobile)}>{isFormVisible ? 'Cancel' : 'edit'}</button>
                      <button onClick={()=> handleDelete(id)}>Delete</button>
                    </div>
                    <hr/>
                  </div>
                )}
            </div>
  )
}
