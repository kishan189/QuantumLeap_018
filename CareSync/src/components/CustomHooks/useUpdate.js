
import { useState } from "react";
import axios from "axios";

export default function useUpdate(url) {
    const [IsUpdated, setIsUpdated] = useState(false);
    const [error, setError] = useState("");

    const updateData = async (data) => {
        setIsUpdated(false);
        setError("");
        try {
            await axios.patch(url, data);
            setIsUpdated(true);
        } catch (err) {
            setError("Something went wrong");
        }
    };

    return [updateData,IsUpdated, error];
}