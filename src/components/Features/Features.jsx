import React from "react";
import featurebanbg from "./../../assets/feature-banner-bg.png";
import featurebanner from "./../../assets/feature-banner.png";
import demo2 from "./../../assets/Picture7.png";

const Features = () => {
  //test123
  return (
    <section className="features" id="features">
      <ul className="features-list">
        <li className="features-item">
          <h3 className="h3 features-item-title">Instant Food Deals</h3>
          <p className="features-item-text">
            Find and buy surplus food from local stores and restaurants at
            discounted prices.
          </p>
        </li>
        <li className="features-item">
          <h3 className="h3 features-item-title">Eco-Friendly Choices</h3>
          <p className="features-item-text">
            Support sustainability by reducing food waste with every purchase.
          </p>
        </li>
      </ul>
      <figure className="feature-banner">
        {/* <img
          src={featurebanbg}
          alt="circle audio waveform"
          className="feature-banner-bg"
        /> */}
        <img src={demo2} alt="pod app" className="banner-img" />
      </figure>
      <ul className="features-list">
        <li className="features-item">
          <h3 className="h3 features-item-title">Community Impact</h3>
          <p className="features-item-text">
            Help local businesses reduce waste and promote environmental
            responsibility.
          </p>
        </li>
        <li className="features-item">
          <h3 className="h3 features-item-title">Daily Fresh Picks</h3>
          <p className="features-item-text">
            Enjoy a variety of fresh food items nearing their best-before dates.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Features;
