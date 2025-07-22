
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Body.css";
import Netflix from "../assets/image/Netflix_Logo_PMS.png";
import Vidioplay from "../Vidioplay"; 

const Body = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className='Home'>
      <div className='Header'>
        <h1></h1>
        <img src={Netflix} className="Netflix_logo" alt="netflix-clone" />
        <div className='Header-Btn'>
          <button className='language'>English</button>
          <a href="/SignIn" className='Signin_button'>Signin</a>
          
                          </div>
                          
      </div>
      

      <div className="Home-container">
        <div className="Home-overlay" />
        <div className='signin-form'>
            <h1>Body.jsx</h1>
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>Starts at ₹149. Cancel at any time.</h3>
          <h4>Ready to watch? Enter your email to create or restart your membership.</h4>

          <form className="Home-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>

      <Vidioplay />
    </div>
  );
};

export default Body;