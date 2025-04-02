import React from "react";
import "../styles/background.css";
import video from "../assets/bg.mp4";
import fallbackImage from "../assets/fallback-image.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video 
        id="bg"
        className="background-video" 
        playsInline 
        autoPlay 
        muted 
        loop 
        preload="auto" 
        poster={fallbackImage}
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
