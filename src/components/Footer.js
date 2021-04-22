import React from "react";

import "./Footer.css";
import bgBottom from "../images/bg1.jpg";

const Footer = () => {
  return (
    <div className="footer pt-20 pb-6">
      <img className="bg-bottom" src={bgBottom} />
      <p className="font-body color-text-white text-center text-xs ">
        &copy; designed and developed by @dehamzah
      </p>
      <p className="font-body color-text-white text-center text-xs">
        Credit arts to: @charupin and @freepik
      </p>
    </div>
  );
};

export default Footer;
