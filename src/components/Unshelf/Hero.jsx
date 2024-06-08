import React from "react";
import "./Hero.css"; // Add your CSS for Hero here

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="h1 hero-title">
          The Ultimate Food Saver for a Sustainable Future
        </h1>
        <a href="">
          <button className="btn-primary">Download now</button>
        </a>
      </div>
      <figure className="hero-banner"></figure>
    </section>
  );
};

export default Hero;
