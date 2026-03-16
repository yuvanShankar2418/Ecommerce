import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Login.css"; 

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) setUser({ email });
    else alert("Please enter email and password");
  };

  return (
    <div className="login-container">
      
      <div className="login-box">
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            className="input-field"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            className="input-field"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
