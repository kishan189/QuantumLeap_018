import React from 'react';
import useFetch from '../CustomHooks/UseFetch';

export default function DoctorsData() {
    const [doctorsData,isLoading22,error22]=useFetch("https://caresync-3911d-default-rtdb.firebaseio.com/doctors.json");
  
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
              <hr/>
              
              {doctorsData.map((el,id)=>
                //  console.log(el)
                  <div key={id} className='userDetailsK'>
                    <h3>Name:{el.name}</h3>
                    <h5>{el.speciality}</h5>
                    <p>{el.qualification}</p>
                    <p>{el.experience}</p>
                    <p>{el.location}</p>
                    <p>availability:{el.availability?"available":"booked"}</p>
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
