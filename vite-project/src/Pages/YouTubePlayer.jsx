import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import './YouTubePlayer.css';

const YouTubePlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8); // Range: 0 to 1
  const [brightness, setBrightness] = useState(1); // Range: 0.5 to 2
  const playerRef = useRef(null);

  const increaseVolume = () => setVolume(prev => Math.min(1, prev + 0.1));
  const decreaseVolume = () => setVolume(prev => Math.max(0, prev - 0.1));

  const increaseBrightness = () => setBrightness(prev => Math.min(2, prev + 0.1));
  const decreaseBrightness = () => setBrightness(prev => Math.max(0.5, prev - 0.1));

  return (
    <div className="player-wrapper">
      <div
        className="video-container"
        style={{ filter: `brightness(${brightness})` }}
      >
        <ReactPlayer
          ref={playerRef}
          className="youtube-player"
          url="https://www.youtube.com/watch?v=2CA5KHG8B3w"
          controls={true}
          playing={playing}
          muted={muted}
          volume={volume}
          width="100%"
          height="480px"
        />
      </div>


      <div className="controls">
        <button onClick={() => setPlaying(!playing)}>
          {playing ? "Pause" : "Play"}
        </button>
        <button onClick={() => setMuted(!muted)}>
          {muted ? "Unmute" : "Mute"}
        </button>
   <div className="btn">
        <div className="volume-controls">
        <button onClick={decreaseVolume}>- Volume</button>
        <button onClick={increaseVolume}>+ Volume</button>
        </div>
     <div className="Brightness-contolers">   
        <button onClick={decreaseBrightness}>- Brightness</button>
        <button onClick={increaseBrightness}>+ Brightness</button></div>
      </div>
   </div>
    </div>
  );
};

export default YouTubePlayer;
