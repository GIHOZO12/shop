import React from "react";
import "./Hero.css";
import HandIcon from "../Assets/hand_icon.png";
import ArrowIcon from "../Assets/arrow.png";
import HeoImage from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left" style={{ lineHeight: 1.0 }}>
        <h2>New arrivals only</h2>
        <div>
          <div className="hero-hand-icon">
            <img src={HandIcon} alt="" />
          </div>
          <p>Collection</p>
          <p> for everyOne</p>
        </div>
        <div className="hero-latest-button">
          <div>Latest collection</div>
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={HeoImage} alt="" />
      </div>
    </div>
  );
}

export default Hero;
