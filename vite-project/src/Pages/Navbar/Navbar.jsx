import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa"; // User icon
import { IoMdLogOut } from "react-icons/io";   // ✅ Logout icon
import Netflix from "../../assets/image/Netflix_Logo_PMS.png";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/SignIn");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Netflix} alt="Netflix Logo" className="netflix-logo" />
      </div>
      <div>
                <ul className="nav-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/tv_Shows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/NetflixHome">NetflixHome</Link></li>

        </ul>
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <div className="user-info">
              <FaUserCircle className="user-icon" />
              <span className="username">{user.name || user.email}</span>
            </div>

            <div onClick={logout} className="navbar-logout">
              <IoMdLogOut className="logout-icon" />
              <span className="logout-text">Logout</span>
            </div>
          </>
        ) : (
          <Link to="/SignIn">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
