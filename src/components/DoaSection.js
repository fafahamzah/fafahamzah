import React from "react";

import doaImage from "../images/doa.png";
import "./DoaSection.css";

const DoaSection = () => {
  return (
    <div className="mb-28">
      <img className="doa-image" src={doaImage} alt="doa" />
      <p className="font-body color-text-grey text-center text-xs mb-2 mt-2">
        "Mudah-mudahan Allah memberkahimu, baik dalam suka maupun duka dan
        selalu mengumpulkan kamu berdua pada kebaikan".
      </p>
    </div>
  );
};

export default DoaSection;
