import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
const Rootlayout = ({ setUser }) => {
  return (
    <div>
      {/* <nav style={{ padding: "10px", backgroundColor: "#111", color: "#fff" }}>
        <button onClick={() => setUser("")}>Logout</button>
      </nav> */}
      {/* <Navbar/> */}
      <Outlet />
    </div>
  );
};

export default Rootlayout;
