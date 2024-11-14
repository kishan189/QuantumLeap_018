import { useState } from "react";
import axios from "axios";

export default function usePost(url) {
    const [isPosted, setIsPosted] = useState(false);
    const [error, setError] = useState("");

    const postData = async (data) => {
        setIsPosted(false);
        setError("");
        try {
            await axios.put(url, data);
            setIsPosted(true);
        } catch (err) {
            setError("Something went wrong");
        }
    };

    return [isPosted, error, postData];
}

