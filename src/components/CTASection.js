import React from "react";

import "./CTASection.css";

const CTASection = () => {
  return (
    <div className="cta-container mb-10 container-limit">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://forms.gle/rYB7nMiLs7Z8XwSS7"
        className="cta-item"
      >
        <div className="cta-item-button">
          <span role="img" aria-label="checkmark" style={{ marginLeft: -3 }}>
            ✅
          </span>
        </div>
        <p className="font-body color-text-grey text-center text-sm mt-2">
          Konfirmasi Kehadiran
        </p>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://forms.gle/XCu7HcbGWj7FF9Jv6"
        className="cta-item"
      >
        <div className="cta-item-button">
          <span role="img" aria-label="doa" style={{ marginLeft: -3 }}>
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
