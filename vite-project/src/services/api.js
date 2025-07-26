// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Movies
export const fetchSearchResults = (query) =>
  API.get("/movies", { params: { query } });

export const fetchMovies = () => API.get("/movies");
export const createMovie = (data) => API.post("/movies", data);


// Trailers
export const fetchTrailers = () => API.get("/trailers");
export const createTrailer = (data) => API.post("/trailers", data);
export const fetchTrailerQuery = (query) =>
  API.get("/trailers", { params: { query } });

// Videos
export const fetchVideos = () => API.get("/videos");
