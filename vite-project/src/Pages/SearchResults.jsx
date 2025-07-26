// src/pages/SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearchResults, fetchTrailerQuery } from "../services/api";
import ReactPlayer from "react-player";
import "./SearchResults.css";


const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await fetchTrailerQuery(query);
        setResults(res.data);
        console.log("asdasd", res.data);
        console.log("QUERY:", query);

      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };

    if (query) getResults();
  }, [query]);

  if (loading) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
<div className="search-results-container">
  <h2>Search Results for "{query}"</h2>
  {results.length === 0 ? (
    <p>No results found.</p>
  ) : (
    results.map((item) => (
      <div className="search-card" key={item._id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        {item.url && (
          <ReactPlayer
            url={item.url}
            controls
            width="100%"
            height="360px"
            style={{ marginTop: "10px" }}
          />
        )}

        {item.posterUrl && (
          <img src={item.posterUrl} alt={item.title} />
        )}

        {item.movieLink && (
          <p>
            <a href={item.movieLink} target="_blank" rel="noopener noreferrer">
              ▶ Watch Now
            </a>
          </p>
        )}
      </div>
    ))
  )}
</div>

  );
};

export default SearchResults;
