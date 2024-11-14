import React, { useEffect, useState } from 'react';
import "./Admin.css"
import axios from "axios"
import useFetch from '../CustomHooks/UseFetch';
export default function UserManagement() {
   
  //  let k=`https://portfolio-e129a-default-rtdb.firebaseio.com/${id}/.json`
    const [datas,isLoading,error]=useFetch("https://portfolio-e129a-default-rtdb.firebaseio.com/.json")

  return (
    < div className='userzDetailsg' >
    <div>UserManagement ok</div>
    <div>
        {/* {console.log(data)} */}
        {datas.map((el,id)=>
           <div key={id} className='userDetailsK'>
             {console.log(el[1])}
             <h3>Name:{el[1].name}</h3>
             <h2>Email:{el[1].email}</h2>
             <p>Mobile No.:</p>
             <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            </div>
        )}
    </div>
    </div>
    
  )
}
