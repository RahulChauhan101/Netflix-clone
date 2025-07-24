import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";

const Rootlayout = ({ user, setUser }) => {
  return (
    <>
    <Navbar user={user} setUser={setUser}/>
      <Outlet />
    </>
  );
};

export default Rootlayout;
