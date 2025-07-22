import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";
import Netflix from "../assets/image/Netflix_Logo_PMS.png";

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/users/signin", {
        email,
        password,
      });

      // Inspect your backend response here:
      console.log("Login Response:", response.data);

      const { user, token } = response.data; // Adjust to your backend keys

      if (!user || !token) {
        alert("Invalid login credentials.");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("✅ Login successful:", user);

      setUser(user);
      navigate("/Home");
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message;
      console.error("❌ Login error:", errorMsg);
      alert("Login failed: " + errorMsg);
    }
  };

  return (
    <>
      <div className="Header">
        <img src={Netflix} className="Netflix_logo" alt="netflix-clone" />
      </div>

      <div className="login-container">
        <div className="login-overlay" />
        <form className="login-form" onSubmit={handleLogin}>
          <div className="Login_form_header">
            <h1>Sign In</h1>
            <img src={Netflix} className="Login_form_Logo" alt="logo" />
          </div>

          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Need help?</a>
          </div>

          <p className="login-signup">
            New to Netflix? <Link to="/Body">Sign up now</Link>
          </p>

          <small className="login-recaptcha">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </small>
        </form>
      </div>
    </>
  );
};

export default SignIn;
