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

// import axios from "axios";
// import { useState } from "react";

// function useDelete() {
//     const [isDeleted, setIsDeleted] = useState(false);
//     const [error, setError] = useState("");

//     const DeleteData = async (url) => {
//         setIsDeleted(false);
//         setError("");
//         try {
//             await axios.delete(url);
//             setIsDeleted(true);
//         } catch (err) {
//             setError("Something went wrong");
//         }
//     };

//     return [DeleteData, isDeleted, error];
// }

// export default useDelete;
import { useState } from "react";

const useDelete = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  const DeleteData = async (url) => {
    setIsDeleted(false); // Reset before the operation
    setDeleteError(""); // Reset error

    try {
      const response = await fetch(url, { method: "DELETE" });
      if (response.ok) {
        setIsDeleted(true);
      } else {
        throw new Error("Failed to delete");
      }
    } catch (error) {
      setDeleteError(error.message);
    }
  };

  return [DeleteData, isDeleted, deleteError];
};

export default useDelete;
