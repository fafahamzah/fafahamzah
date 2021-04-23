import React from "react";

import "./DateCountSection.css";

const DateCountSection = () => {
  return (
    <div className="text-center pb-10">
      <div className="time-item-container pt-8 color-text-grey font-heading">
        <div className="time-item">
          <div className="time-number text-3xl">5</div>
          <p className="time-detail text-sm">hari</p>
        </div>
        <div className="time-item">
          <div className="time-number text-3xl">7</div>
          <p className="time-detail text-sm">jam</p>
        </div>
        <div className="time-item">
          <div className="time-number text-3xl">35</div>
          <p className="time-detail text-sm">menit</p>
        </div>
        <div className="time-item">
          <div className="time-number text-3xl">51</div>
          <p className="time-detail text-sm">detik</p>
        </div>
      </div>
      <a
        href="#"
        class="mt-6 font-body font-thin text-sm inline-flex items-center justify-center px-5 py-1 border border-tosca rounded-full color-text-purple bg-white "
      >
        INGATKAN SAYA
      </a>
    </div>
  );
};

export default DateCountSection;
