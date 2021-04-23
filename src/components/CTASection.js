import React from "react";

import "./CTASection.css";

const CTASection = () => {
  return (
    <div className="cta-container mb-20 container-limit">
      <a href="#" className="cta-item">
        <div className="cta-item-button">
          <span style={{ fontSize: 13 }}>✅</span>
        </div>
        <p className="font-body color-text-grey text-center text-sm mt-2">
          Kabari kehadiranmu
        </p>
      </a>
      <a href="#" className="cta-item">
        <div className="cta-item-button">
          <span>🤲🏻</span>
        </div>
        <p className="font-body color-text-grey text-center text-sm mt-2">
          Berikan doa terbaik
        </p>
      </a>
    </div>
  );
};

export default CTASection;
