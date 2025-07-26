import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 8; // movies per page

  const [selectedGenre, setSelectedGenre] = useState("All");


  const fetchMovies = async () => {
    setLoading(true);
    try {
      const genrepram = selectedGenre !== "All" ? `&genre=${selectedGenre}`: "";  
      const res = await axios.get(
        `http://localhost:8000/api/movies?page=${page}&limit=${limit}${genrepram}`
      );

      setMovies(res.data.movies);
      setTotal(res.data.total);
    } catch (err) {
      console.error("❌ Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, selectedGenre]);

  const totalPages = Math.ceil(total / limit);

  if (loading) return <h2>Loading movies...</h2>;
  if (movies.length === 0) return <h2>No movies found.</h2>;

  return (
    <>


    <div className="movies-container">

          <div className="category-navbar">
               <h1>Movies</h1>
  {["All", "Drama", "Comedy", "Action", "Animation", "Romantic"].map((genre) => (
    <button
      key={genre}
      className={selectedGenre === genre ? "active" : ""}
      onClick={() => {
        setSelectedGenre(genre);
        setPage(1); // Reset to page 1 on genre change
      }}
    >
      {genre}
    </button>
  ))}
</div>

   
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie._id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
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

<div className="pagination">
  <button disabled={page === 1} onClick={() => setPage(page - 1)}>
    ⬅ Prev
  </button>

  {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 10).map((pg) => (
    <button
      key={pg}
      onClick={() => setPage(pg)}
      className={page === pg ? "active" : ""}
    >
      {pg}
    </button>
  ))}

  <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
    Next ➡
  </button>
</div>
    </div>
    
 
    </>
  );
};

export default Movies;



