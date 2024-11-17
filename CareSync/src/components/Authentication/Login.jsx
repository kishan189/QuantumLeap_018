import { useState } from "react";
import { useNavigate,NavLink} from "react-router-dom";
import "./Login.css"

function Login({}) {
    const apikey = "AIzaSyDn6dpAr3Rro3BKcCq7qrVA8JDSDtlKQj8";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apikey}`;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    // 
    // const { setIsLogin, setUserName } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        const payload = { email, password, returnSecureToken: true };
         
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
                // console.log("Sign-in successful", data);

                localStorage.setItem("loginData",JSON.stringify(data))
                alert("Sign-in successful")
              
                // Navigate based on role (assuming admin emails contain "admin")
                if (email.includes("admin")) {
                    navigate("/Admin");
                } else {
                    navigate("/User");
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
            <h1>Login </h1>
            <form onSubmit={handleFormSubmit}>
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
                    <p >Don't have account? <NavLink to="/Register">SignUp</NavLink>
                    </p>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Login;
