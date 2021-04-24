import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <div className="section-hero pt-20">
        <div className="hero-image">
          <StaticImage
            alt="fafa hamzah"
            placeholder="blurred"
            src="../images/hero2.png"
            objectFit="contain"
          />
        </div>
        <p className="text-center font-heading color-text-purple text-2xl pt-4">
          Magelang, 30 Mei 2021
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
