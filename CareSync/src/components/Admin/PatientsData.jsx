import React from 'react';
import useFetch from '../CustomHooks/UseFetch';
export default function PatientsData() {

    const [patientsData,isLoading33,error33]=useFetch("https://caresync-3911d-default-rtdb.firebaseio.com/patients.json");

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
              <hr/>
              {patientsData.map((el,id)=>
                  <div key={id} className='userDetailsK'>
                   
                    <h3>Name:{el[1].name}</h3>
                    <p>age:{el[1].age}</p>
                    <p>Mobile No.:{el[1].mobile}</p>
                    <p>address: {el[1].address}</p>
                    <p>status:{el[1].status?"pending":"booked"}</p>
                    <div style={{marginBottom:10}}>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                    <hr/>
                  </div>
                )}
            </div>
  )
}
