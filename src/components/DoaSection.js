import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./DoaSection.css";

const DoaSection = () => {
  return (
    <div className="mb-28 container-limit">
      <div className="doa-image">
        <StaticImage src="../images/doa.png" alt="doa" placeholder="blurred" />
      </div>
      <p className="font-body color-text-grey text-center text-sm mb-2 mt-2">
        "Mudah-mudahan Allah memberkahimu, baik dalam suka maupun duka dan
        selalu mengumpulkan kamu berdua pada kebaikan".
      </p>
    </div>
  );
};

export default DoaSection;
