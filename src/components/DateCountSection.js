import React from "react";
import { googleCalendarEventUrl } from "google-calendar-url";
import { useTimer } from "react-timer-hook";

import "./DateCountSection.css";

const DateCountSection = () => {
  const url = googleCalendarEventUrl({
    start: "20210530T030000Z",
    end: "20210530T040000Z",
    title: "Akad Nikah Fafa & Hamzah",
    location: "Kaliangkrik, Magelang, Central Java, Indonesia",
  });

  const theDay = new Date(2021, 4, 30, 10, 0);

  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp: theDay,
    onExpire: () => console.warn("Alhamdulillah sudah sah!"),
    autoStart: true,
  });

  return (
    <div className="text-center pb-10">
      <div className="time-item-container pt-8 color-text-grey font-heading">
        {isRunning ? (
          <>
            <div className="time-item">
              <div className="time-number text-3xl">{days}</div>
              <p className="time-detail text-sm">hari</p>
            </div>
            <div className="time-item">
              <div className="time-number text-3xl">{hours}</div>
              <p className="time-detail text-sm">jam</p>
            </div>
            <div className="time-item">
              <div className="time-number text-3xl">{minutes}</div>
              <p className="time-detail text-sm">menit</p>
            </div>
            <div className="time-item">
              <div className="time-number text-3xl">{seconds}</div>
              <p className="time-detail text-sm">detik</p>
            </div>
          </>
        ) : (
          <p className="text-3xl">Alhamdulillah sudah sah!</p>
        )}
      </div>
      {isRunning ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={url}
          className="mt-6 font-heading font-thin text-md inline-flex items-center justify-center px-5 py-1 border border-tosca rounded-full color-text-purple bg-white "
        >
          Tandai di kalender
        </a>
      ) : null}
    </div>
  );
};

export default DateCountSection;
