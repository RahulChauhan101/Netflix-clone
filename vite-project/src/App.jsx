import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import SignIn from './Components/SignIn';
import Vidioplay from "./Vidioplay";
import NetflixHome from "./Components/NetflixHome";
import Rootlayout from "./Components/Layout/Rootlayout"; 
import Body from "./Components/Body";

function App() {
  const [user, setUser] = useState(null);

  // Restore user from localStorage on refresh
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      } else {
        localStorage.removeItem("user"); // Cleanup
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      localStorage.removeItem("user");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn setUser={setUser} />} />

        {!user ? (
          <>
            <Route path="/" element={<Body setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route element={<Rootlayout setUser={setUser} />}>
              <Route path="/" element={<Body />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Body" element={<Body />} />
              <Route path="/Vidioplay" element={<Vidioplay />} />
              <Route path="/NetflixHome" element={<NetflixHome />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
