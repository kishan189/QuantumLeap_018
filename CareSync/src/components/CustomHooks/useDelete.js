import axios from "axios"
function useDelete(url,id){
    const [Isdelete,setIsdelete]=useState(false)
    const [error,setError]=useState("")
   
   
    const DeleteData = async (data) => {
        setIsPosted(false);
        setError("");
        try {
            await axios.delete(url);
            setIsdelete(true);
        } catch (err) {
            setError("Something went wrong");
        }
    };

        
      return [DeleteData,Isdelete,error]
}
export default useDelete