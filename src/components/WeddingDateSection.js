import React from "react";

import "./WeddingDateSection.css";

const WeddingDateSection = () => {
  return (
    <div className="pb-14 text-center">
      <div>
        <h3 className="text-center font-heading color-text-tosca text-4xl pt-16 pb-8">
          Akad Nikah
        </h3>
        <div className="date-container">
          <div>
            <span className="text-highlight font-body color-text-grey">
              Minggu
            </span>
          </div>
          <div className="date-highlight">
            <span className="font-body color-text-grey">MEI</span>
            <span className="font-body color-text-grey">30</span>
            <span className="font-body color-text-grey">2021</span>
          </div>
          <div>
            <span className="text-highlight font-body color-text-grey">
              09.00 WIB
            </span>
          </div>
        </div>
        <p className="text-center color-text-grey font-light text-sm mt-4">
          Masjid At Takwa
        </p>
        <p className="text-center color-text-grey font-light text-sm">
          Karang Tengah 001/007, Girirejo, Kaliangkrik, Magelang, Jawa Tengah
        </p>
      </div>
      <div>
        <h3 className="text-center font-heading color-text-tosca text-4xl pt-16 pb-8">
          Resepsi
        </h3>
        <div className="date-container">
          <div>
            <span className="text-highlight font-body color-text-grey">
              Minggu
            </span>
          </div>
          <div className="date-highlight">
            <span className="font-body color-text-grey">MEI</span>
            <span className="font-body color-text-grey">30</span>
            <span className="font-body color-text-grey">2021</span>
          </div>
          <div>
            <span className="text-highlight font-body color-text-grey">
              13.00 WIB
            </span>
          </div>
        </div>
        <p className="text-center color-text-grey font-light text-sm mt-4">
          Kediaman Mempelai Wanita
        </p>
        <p className="text-center color-text-grey font-light text-sm">
          Karang Tengah 001/007, Girirejo, Kaliangkrik, Magelang, Jawa Tengah
        </p>
      </div>

      <a
        href="#"
        class="mt-6 font-body font-thin text-sm inline-flex items-center justify-center px-5 py-1 border border-tosca rounded-full color-text-tosca bg-white "
      >
        DAPATKAN PETUNJUK PETA
      </a>
    </div>
  );
};

export default WeddingDateSection;
