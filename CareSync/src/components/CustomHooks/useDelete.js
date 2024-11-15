// import axios from "axios"
// import { useState } from "react";
// function useDelete(url){
//     const [Isdelete,setIsdelete]=useState(false)
//     const [error,setError]=useState("")
   
   
//     const DeleteData = async (data) => {
//         setIsPosted(false);
//         setError("");
//         try {
//             await axios.delete(url);
//             setIsdelete(true);
//         } catch (err) {
//             setError("Something went wrong");
//         }
//     };

        
//       return [DeleteData,Isdelete,error]
// }
// export default useDelete

import axios from "axios";
import { useState } from "react";

function useDelete() {
    const [isDeleted, setIsDeleted] = useState(false);
    const [error, setError] = useState("");

    const DeleteData = async (url) => {
        setIsDeleted(false);
        setError("");
        try {
            await axios.delete(url);
            setIsDeleted(true);
        } catch (err) {
            setError("Something went wrong");
        }
    };

    return [DeleteData, isDeleted, error];
}

export default useDelete;
