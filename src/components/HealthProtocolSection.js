import React from "react";

import "./HealthProtocolSection.css";
import healthProtocolImage from "../images/health-protocol.png";

const HealthProtocolSection = () => {
  return (
    <>
      <p className="text-center font-heading color-text-purple text-4xl pt-6">
        ~
      </p>
      <div className="text-center mb-12 container-limit">
        <h3 className="text-center font-heading color-text-purple text-3xl pt-14 pb-4">
          Protokol Kesehatan
        </h3>
        <p className="font-body color-text-grey text-center text-sm mb-2">
          Tanpa mengurangi rasa hormat, sesuai dengan peraturan pemerintah, para
          tamu undangan tetap wajib menjalankan protokol kesehatan sebagaimana
          mestinya.
        </p>
        <p className="font-body color-text-grey text-center text-sm">
          Pastikan kondisi badan dalam keadaan sehat saat menghadiri undangan.
          Terimakasih atas kerjasama Bapak/Ibu/Saudara/i.
        </p>
        <img
          src={healthProtocolImage}
          alt="health-protocol"
          className="health-protocol-image"
        />
      </div>
    </>
  );
};

export default HealthProtocolSection;
