import React from "react";

import "./CTASection.css";

const CTASection = () => {
  return (
    <div className="cta-container mb-20 container-limit">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://forms.gle/MhwTYXVrGfFNboGE6"
        className="cta-item"
      >
        <div className="cta-item-button">
          <span role="img" aria-label="doa">
            🤲🏻
          </span>
        </div>
        <p className="font-body color-text-grey text-center text-sm mt-2">
          Berikan doa terbaikmu
        </p>
      </a>
    </div>
  );
};

export default CTASection;
