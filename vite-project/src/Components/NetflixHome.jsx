import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./NetflixHome.css";
import axios from "axios";

const Letest_Releaseas = [
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "https://www.youtube.com/watch?v=LXb3EKWsInQ",
];

const NetflixHome = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Trailer, setTrailer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/trailers")
      .then((res) => {
        setTrailer(res.data);
      })
      .catch((err) => {
        console.error("❌ Error loading trailer:", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/videos")
      .then((res) => {
        setVideoUrls(res.data);
        setLoading(false);
        console.log("asd", res.data);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch video URLs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="n">
              <h1 className="Trailer-tital">Trailer</h1>
      <div className="NetflixHome">

        {Trailer.map((trailer, index) => (
          <div key={index} className="NetflixHome-item">
            <h3>{trailer.title}</h3>
            <ReactPlayer
              className="NetflixHome_player"
              url={trailer.url}
              controls
              height="260px"
              width="400px"
            />
            <p>{trailer.description}</p>
          </div>
        ))}

        <div className="NetflixHome_details">
          <p>Special OPS 2</p>
          <p>Streaming From 11 July</p>
          <p>
            First Episode Release Date: When Will Special OPS Season 2 Premiere
            On JioHotstar?
          </p>
          <button className="details_btn">Trailer</button>
        </div>
      </div>
      <h2>Dynamic Videos</h2>
      <div className="ReactPlayer">
        {loading && <p>Loading...</p>}
        {!loading && videoUrls.length === 0 && <p>No videos found.</p>}
        {!loading &&
          videoUrls.map((url, index) => (
            <div key={index} className="nh-video-item">
              <p>Video #{index + 1}</p>
              <ReactPlayer
                className="player"
                url={url.url}
                controls
                width="100%"
                height="400px"
              />
            </div>
          ))}
      </div>

      <h2>Latest Releases</h2>
      <div className="ReactPlayer">
        {Letest_Releaseas.map((url, index) => (
          <div key={index} className="video-item">
            <p>{index + 1}</p>
            <ReactPlayer
              className="player"
              url={url}
              controls
              width="95%"
              height="360px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetflixHome;
