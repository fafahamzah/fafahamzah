import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./HealthProtocolSection.css";

const HealthProtocolSection = () => {
  return (
    <>
      <div className="text-center mb-12 container-limit">
        <h3 className="text-center font-heading color-text-purple text-2xl pb-4">
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
        <StaticImage
          src="../images/health-protocol.png"
          alt="health-protocol"
          placeholder="blurred"
          className="health-protocol-image"
        />
      </div>
    </>
  );
};

export default HealthProtocolSection;
