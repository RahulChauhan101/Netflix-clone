import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import SignIn from './Components/SignIn';
import Vidioplay from "./Vidioplay";
import NetflixHome from "./Components/NetflixHome";
import Rootlayout from "./Components/Layout/Rootlayout";
import Body from "./Components/Body";
import Movies from "./Pages/Movies";
import TV_Shows from "./Pages/Navbar/TV_Shows";
import SearchResults from "./Pages/SearchResults";
import MoviesSelect from "./Pages/MoviesSelect";

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
        {/* SignIn always accessible */}
        <Route path="/SignIn" element={<SignIn setUser={setUser} />} />

        {/* Authenticated routes */}
        {user ? (
          <Route element={<Rootlayout user={user} setUser={setUser} />}>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Body" element={<Body />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/search" element={<SearchResults />} />

            <Route path="/Vidioplay" element={<Vidioplay />} />
            <Route path="/NetflixHome" element={<NetflixHome />} />
            <Route path="/moviesSelect" element={<MoviesSelect />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="tv_Shows" element={<TV_Shows />} />
            <Route path="*" element={<Navigate to="/" />} />
            
          </Route>
        ) : (
          // Public routes (unauthenticated)
          <>
            <Route path="/" element={<Body />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
