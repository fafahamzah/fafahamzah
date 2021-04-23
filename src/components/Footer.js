import React from "react";

import "./Footer.css";
import flower from "../images/flower1.png";

const Footer = () => {
  return (
    <div className="footer pt-7 pb-6 container-limit text-center">
      <img className="art-bottom pb-4" src={flower} />
      <p className="font-body color-text-purple text-center text-xs ">
        &copy; 2021 - Fafa &amp; Hamzah
      </p>
      <p className="font-body color-text-purple text-center text-xs">
        Credit arts to: @charupin
      </p>
    </div>
  );
};

export default Footer;
