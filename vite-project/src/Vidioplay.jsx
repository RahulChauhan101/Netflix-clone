// import { useState } from "react";
// import vidioplayback from "../src/assets/image/videoplayback.mp4";
// import nature from "../src/assets/image/nature.mp4";
// import Jatt_Dian from "../src/assets/image/Jatt_Dian.mp3";
// import download from "../src/assets/image/download.jpeg";
// import React from "react";
// import ReactPlayer from "react-player";
// import { Player } from "video-react";
// import "video-react/dist/video-react.css";
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
// import "./vidioplay.css";

// import YouTube from 'react-youtube';
// import { FaTv } from "react-icons/fa";
// import { FaArrowDown } from "react-icons/fa6";
// import { GoTelescope } from "react-icons/go";
// import { SiImessage } from "react-icons/si";

// const Example = () => {
//   const opts = {
//     height: "390",
//     width: "640",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   const onReady = (event) => {
//     event.target.pauseVideo();
//   };

//   return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />;
// };

// const Vidioplay = () => {
//   const videoUrls = [
//     "https://www.youtube.com/watch?v=LXb3EKWsInQ",
//     "https://www.youtube.com/watch?v=LXb3EKWsInQ",
//     "https://www.youtube.com/watch?v=LXb3EKWsInQ",
//     "https://www.youtube.com/watch?v=LXb3EKWsInQ",
//     "https://www.youtube.com/watch?v=LXb3EKWsInQ",
//     "https://www.youtube.com/watch?v=LXb3EKWsInQ",
//   ];

//   const youtubeUrls = [
//     "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   ];

//   return (
//     <div className="Vidioplay">

//       <h1>Trending Now</h1>
//       <div className="ReactPlayer ">
//         {videoUrls.map((url, index) => (
//           <div key={index} className="video-item">
//             <p>{index + 1} </p>
//             <ReactPlayer className="player" url={url}
//             controls
//               width="95%"
//               height="360px" />
//           </div>
//         ))}
//       </div>

      
//       <div className="youtube">
//         {youtubeUrls.map((url, index) => (
//           <div key={index} className="youtube-item">
//             <p>{index + 1}</p>
//             <ReactPlayer
//               className="youtube_player"
//               url={url}
//               controls
//               width="100%"
//               height="260px"
              
//             />
//           </div>
//         ))}
//       </div> 

//             <div className="natureall">
//         <Player className="nature" playsInline src={nature} />
//         <Player className="nature" playsInline src={nature} />
//       </div>

      
//       <div className="vidioplayback">
//         <Player playsInline src={vidioplayback} />
//       </div>

      
//       <div className="img">
//         <img src={download} className="img" alt="thumbnail" />
//         <AudioPlayer
//           className="Audioplayer"
//           src={Jatt_Dian}
//           onPlay={() => console.log("Audio playing")}
//         />
//       </div>
//       <div className="join">
//         <h1>More reasons to join</h1>
//         <div className="join-cartall">
//         <div className=" cart">
//           <h1>Enjoy on your TV</h1>
//           <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
//           <FaTv className="Join_icon"/>
//         </div>
//               <div className=" cart">
//           <h1>Enjoy on your TV</h1>
//           <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
//           <FaArrowDown className="Join_icon"/>
//         </div>
//               <div className=" cart">
//           <h1>Enjoy on your TV</h1>
//           <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
//           <GoTelescope className="Join_icon"/>
//         </div>
//               <div className=" cart">
//           <h1>Enjoy on your TV</h1>
//           <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
//           <SiImessage />
//         </div>

//         </div>
       
//         </div>
        
       
      
//     </div>
//   );
// };

// export default Vidioplay;
// Vidioplay.jsx
import React from "react";
import ReactPlayer from "react-player";

const Vidioplay = () => {
  return (
    <div className="video-wrapper" style={{ maxWidth: "800px", margin: "auto" }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls
        width="100%"
      />
    </div>
  );
};

export default Vidioplay;
