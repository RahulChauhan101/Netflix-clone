// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // backend base URL
});

export const fetchMovies = () => API.get("/movies");
