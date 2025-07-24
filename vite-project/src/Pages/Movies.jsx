// src/pages/Movies.js
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import "./Movies.css"
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies()
      .then(res => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("❌ Error fetching movies:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading movies...</h2>;
  if (movies.length === 0) return <h2>No movies found.</h2>;
return (
  <div className="movies-container">
    <h1>🎬 Movies</h1>
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie._id} className="movie-card">
          <img src={movie.posterUrl} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p><strong>Year:</strong> {movie.releaseYear}</p>

          {movie.movieLink && (
            <a href={movie.movieLink} target="_blank" rel="noopener noreferrer">
              🎥 Watch Trailer
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

};

export default Movies;
