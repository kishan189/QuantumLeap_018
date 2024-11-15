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

  return (
  <div className='usersDataDisplay'> 
              <h2>Doctors Details</h2>
              <hr/>
              {doctorsData.map((el,id)=>
                  <div key={id} className='userDetailsK'>
                    <h3>Name:{el[1].name}</h3>
                    <h5>{el[1].title}</h5>
                    <p>{el[1].education}</p>
                    <p>{el[1].experience}</p>
                    <p>{el[1].address}</p>
                    <p>status:{el[1].status?"available":"booked"}</p>
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
