import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoviesSelect.css";

const genres = ["All", "Drama", "Comedy", "Action", "Animation", "Romantic"];
const limit = 8;

const MoviesSelect = () => {
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [pageByGenre, setPageByGenre] = useState({});
  const [totalByGenre, setTotalByGenre] = useState({});
  const [loadingByGenre, setLoadingByGenre] = useState({});

  const fetchMovies = async (genre, page) => {
    try {
      setLoadingByGenre((prev) => ({ ...prev, [genre]: true }));

      const genreParam = genre !== "All" ? `&genre=${genre}` : "";
      const res = await axios.get(
        `http://localhost:8000/api/movies?page=${page}&limit=${limit}${genreParam}`
      );

      setMoviesByGenre((prev) => ({
        ...prev,
        [genre]: res.data.movies || [],
      }));
      setTotalByGenre((prev) => ({
        ...prev,
        [genre]: Math.ceil(res.data.total / limit),
      }));
    } catch (err) {
      console.error(`❌ Error fetching ${genre} movies:`, err);
    } finally {
      setLoadingByGenre((prev) => ({ ...prev, [genre]: false }));
    }
  };

  // Fetch all genres initially
  useEffect(() => {
    genres.forEach((genre) => {
      const page = pageByGenre[genre] || 1;
      fetchMovies(genre, page);
    });
  }, [pageByGenre]);

  const handlePageChange = (genre, newPage) => {
    setPageByGenre((prev) => ({
      ...prev,
      [genre]: newPage,
    }));
  };

  return (
    <div className="movies-container">
      <h1>All Movies by Genre</h1>

      {genres.map((genre) => {
        const movies = moviesByGenre[genre] || [];
        const currentPage = pageByGenre[genre] || 1;
        const totalPages = totalByGenre[genre] || 1;
        const loading = loadingByGenre[genre];

        return (
          <div key={genre} className="genre-section">
            <h2>{genre} Movies</h2>

            {loading ? (
              <p>Loading...</p>
            ) : movies.length === 0 ? (
              <p>No {genre} movies found.</p>
            ) : (
              <div className="movies-grid">
                {movies.map((movie) => (
                  <div key={movie._id} className="movie-card">
                    <img src={movie.poster} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <p><strong>Year:</strong> {movie.releaseYear}</p>
                    {movie.movieLink && (
                      <a
                        href={movie.movieLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🎥 Watch Trailer
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(genre, currentPage - 1)}
              >
                ⬅ Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(0, 10)
                .map((pg) => (
                  <button
                    key={pg}
                    onClick={() => handlePageChange(genre, pg)}
                    className={currentPage === pg ? "active" : ""}
                  >
                    {pg}
                  </button>
                ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(genre, currentPage + 1)}
              >
                Next ➡
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesSelect;
