import React, { useEffect, useState } from "react";
import axios from "axios"
function useFetch(url){
    const [datas,setDatas]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState("")

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url)
        .then((res)=>{
           let ans=res.data
           setDatas(ans)
           
        })
        .catch((err)=>setError("something gone wrong"))
        .finally(()=>setIsLoading(false))
       
      },[])
    
      return [datas,isLoading,error]
}
export default useFetch