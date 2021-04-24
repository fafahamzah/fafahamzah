import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer pt-7 pb-6 container-limit text-center">
      <StaticImage
        className="art-bottom pb-4"
        alt="flower"
        placeholder="blurred"
        src="../images/flower1.png"
      />
      <p className="font-body color-text-purple text-center text-xs ">
        &copy; 2021 - Fafa &amp; Hamzah
      </p>
      <p className="font-body color-text-purple text-center text-xs">
        Credit arts to:{" "}
        <a
          href="https://www.instagram.com/charupin/"
          target="_blank"
          rel="noreferrer"
        >
          @charupin
        </a>
      </p>
    </div>
  );
};

export default Footer;
