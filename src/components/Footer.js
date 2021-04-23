import React from "react";

import "./Footer.css";
import flower from "../images/flower1.png";

const Footer = () => {
  return (
    <div className="footer pt-7 pb-6 container-limit text-center">
      <img className="art-bottom pb-4" alt="flower" src={flower} />
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
