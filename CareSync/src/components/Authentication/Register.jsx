import { useState } from "react";
import { useNavigate,NavLink} from "react-router-dom";
import "./Login.css"
function Login() {
    const apikey = "AIzaSyDn6dpAr3Rro3BKcCq7qrVA8JDSDtlKQj8";
   let url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}`
    
    const [displayName,setdisplayName]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        const payload = {displayName, email, password, returnSecureToken: true };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();

            if (response.ok) {
                alert("Registration successful")
                console.log("Registration successful", data);

                // Navigate based on role (assuming admin emails contain "admin")
                if (email.includes("admin")) {
                    navigate("/Login");
                } else {
                    navigate("/");
                }
            } else {
                setError(data.error.message || "Login failed.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error("Error:", err);
        } finally {
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="LoginBody">
            <div className="containerLogin">
            <h1>Register </h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>UserName</label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setdisplayName(e.target.value)}
                        required
                    />
                </div>
               
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div>
                     <NavLink to="/Login">Login</NavLink>
                   
                </div>
            </form>
        </div>
        </div>
    );
}

export default Login;


