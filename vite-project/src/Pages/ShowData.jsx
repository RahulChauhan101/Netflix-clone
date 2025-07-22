import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowData = () => {
  const [data, setData] = useState([]);
  const [errorIds, setErrorIds] = useState([]);
  const ids = [81, 82, 83, 84, 85, 100]; // ✅ Fix: No float numbers

  useEffect(() => {
    const fetchAllShows = async () => {
      try {
        const responses = await Promise.all(
          ids.map(async (id) => {
            try {
              const res = await axios.get("http://localhost:8000/api/show", {
                params: { id },
              });
              return res.data;
            } catch (err) {
              console.error(`❌ Error fetching ID ${id}:`, err.response?.data || err.message);
              setErrorIds((prev) => [...prev, id]);
              return null;
            }
          })
        );
        const filtered = responses.filter(show => show !== null);
        setData(filtered);
      } catch (err) {
        console.error("⚠️ Unexpected error fetching shows:", err);
      }
    };

    fetchAllShows();
  }, []);

  if (data.length === 0) return <p>Loading...</p>;

  return (
    <div style={{ color: "white", padding: "20px", backgroundColor: "#111", display: "flex", flexWrap: "wrap", gap: "30px" }}>
      {data.map((show, index) => (
        <div key={index} style={{ maxWidth: "300px" }}>
          <h2>{show.title} ({show.releaseYear})</h2>
          <img
            src={show.imageSet?.verticalPoster}
            alt={`${show.title} Poster`}
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
          />
          <p><strong>Original Title:</strong> {show.originalTitle}</p>
          <p><strong>Overview:</strong> {show.overview}</p>
          <p><strong>Runtime:</strong> {show.runtime} minutes</p>
          <p><strong>Rating:</strong> {show.rating}%</p>
          <p><strong>Genres:</strong> {show.genres?.map(g => g.name).join(", ")}</p>
          <p><strong>Directors:</strong> {show.directors?.join(", ")}</p>
          <p><strong>Cast:</strong> {show.cast?.join(", ")}</p>
        </div>
      ))}

      {errorIds.length > 0 && (
        <div style={{ color: "red", marginTop: "20px" }}>
          <p><strong>Failed to fetch data for IDs:</strong> {errorIds.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default ShowData;
