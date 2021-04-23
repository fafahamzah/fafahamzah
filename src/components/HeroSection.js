import React from "react";

import hero from "../images/hero2.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <div className="section-hero pt-20">
        {/* <h1 className="text-center font-heading color-text-white text-3xl">
          Pernikahan
        </h1> */}
        <img alt="fafa hamzah" className="hero-image" src={hero} />
        <p className="text-center font-heading color-text-purple text-2xl pt-4">
          Magelang, 30 Mei 2021
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
