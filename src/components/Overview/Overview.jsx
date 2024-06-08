import React from "react";
import ReactPlayer from "react-player";

const Overview = () => {
  return (
    <section className="overview" id="overview">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={"https://youtu.be/5BaOpG60yoE"}
          height="400px"
          width="550px"
        />
        <span className="video-sub">
          I am the editor of this video. Hope you like it. :)
        </span>
      </div>
    </section>
  );
};

export default Overview;
