import React, { useState } from "react";
import './login.css';
import newRequest from "../utils/newRequest";
// import Recommenheader from "./recommenheader";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State for role
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
  
    try {
      const res = await newRequest.post("/auth/login", { email, password, role }); // Ensure role is included
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
      
      // Redirect based on role (already handled in backend)
      if (role === "Hire") {
        navigate("/Dash");
      } 
      else{
        navigate('/fresherexperienced')
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };
  
  return (
  <>
   {/* <Recommenheader /> */}
<div className="login-container">

    <div className="login">
      
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)} // Update state for role
          required
        >
          <option value="">Select Role</option>
          <option value="Hire">Hire</option>
          <option value="Worker">Worker</option>
          {/* Add more roles as necessary */}
        </select>
        
        <button type="submit">Login</button>
        {error && <div className="error">{error}</div>} 
      </form>
      </div>
      <div className="video-container">
        <video src="https://cdn.pixabay.com/video/2021/01/03/61037-497754241_large.mp4" autoPlay muted loop></video>
      </div>
    </div>
    </>
  );
}
{/* export function */}
export default Login;
