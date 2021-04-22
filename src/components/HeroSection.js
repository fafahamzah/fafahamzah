import React from "react";

import bgTop from "../images/bg1.jpg";
import hero1 from "../images/hero1.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <img className="bg-top" src={bgTop} />
      <div className="section-hero pt-20">
        <h1 className="text-center font-heading color-text-white text-3xl">
          Pernikahan
        </h1>
        <img alt="fafa hamzah" className="hero-image" src={hero1} />
        <p className="text-center font-heading color-text-tosca text-2xl pt-4">
          30 Mei 2021
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
