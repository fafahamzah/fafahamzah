import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer pt-6 pb-6 container-limit text-center">
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
      <div className="text-center pt-6 audio-container">
        <audio controls autoplay loop>
          <source
            src="radwimps_-_is_there_still_anything_that_love_can_do.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <p className="text-xs font-body color-text-grey pt-2">
          <a
            href="https://www.youtube.com/watch?v=-u_T8Z2S2ng"
            target="_blank"
            rel="noreferrer"
          >
            Ai ni Dekiru Koto wa Mada Aru Kai - Radwimps
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
