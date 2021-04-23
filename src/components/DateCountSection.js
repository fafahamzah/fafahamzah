import React from "react";
import { googleCalendarEventUrl } from "google-calendar-url";

import "./DateCountSection.css";

const DateCountSection = () => {
  const url = googleCalendarEventUrl({
    start: "20210530T030000Z",
    end: "20210530T040000Z",
    title: "Akad Nikah Fafa & Hamzah",
    location: "Kaliangkrik, Magelang, Central Java, Indonesia",
  });

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
        target="_blank"
        href={url}
        class="mt-6 font-body font-thin text-sm inline-flex items-center justify-center px-5 py-1 border border-tosca rounded-full color-text-purple bg-white "
      >
        INGATKAN SAYA
      </a>
    </div>
  );
};

export default DateCountSection;
