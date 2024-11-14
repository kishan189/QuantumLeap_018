import React, { useState } from "react";
import usePost from "./usePost";
import { useRef } from "react";

function AddDataForm() {
    const [formData, setFormData] = useState({ name: "", age: "" });
    const [myId,setMyId]=useState(11)
    const [isPosted, error, postData] = usePost(`https://portfolio-e129a-default-rtdb.firebaseio.com/${myId+1}/.json`);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
               
        postData(formData); 

        // Trigger the post when the form is submitted
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
            />
            <button type="submit">Submit</button>
            {isPosted && <p>Data posted successfully!</p>}
            {error && <p>Error: {error}</p>}
        </form>
    );
}

export default AddDataForm;
