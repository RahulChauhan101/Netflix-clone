import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Netflix from "../../assets/image/Netflix_Logo_PMS.png"; // ✅ Corrected path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Netflix} alt="Netflix Logo" className="netflix-logo" />
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tvshows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/mylist">My List</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/signin" className="signin-btn">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
