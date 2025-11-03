import React from "react";
import videoFile from "../../assets/video.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
