// src/pages/Movies.js
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";

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
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movies</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie._id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 10, width: 250 }}>
            <img src={movie.posterUrl} alt={movie.title} style={{ width: "100%", borderRadius: 4 }} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p><strong>Year:</strong> {movie.releaseYear}</p>

            {movie.movieLink && (
          <a
            href={movie.movieLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "6px 12px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none"
            }}
          >
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
