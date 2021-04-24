import React from "react";

import "./BrideSection.css";
import fafaImg from "../images/fafa.png";
import hamzahImg from "../images/hamzah.png";

const BrideSection = () => {
  return (
    <div className="container-limit">
      <h3 className="text-center font-heading color-text-purple text-5xl pt-24">
        Alhamdulillah
      </h3>
      <p className="font-body color-text-grey text-center pb-8 pt-4">
        Kami mengundang teman-teman semua ke acara pernikahan kami.
      </p>
      <div className="bride-item pb-10">
        <img src={fafaImg} alt="Fafa" className="bride-item-image" />
        <div>
          <h4 className="font-heading color-text-purple text-3xl">
            Fahmi Syahida
          </h4>
          <p className="font-body color-text-grey text-sm">
            Putri ke-empat dari Bapak M. Jumal dan Ibu Mukaromah.
          </p>
        </div>
      </div>

      <div className="bride-item pb-10">
        <img src={hamzahImg} alt="Hamzah" className="bride-item-image" />
        <div>
          <h4 className="font-heading color-text-purple text-3xl">
            Dede Hamzah
          </h4>
          <p className="font-body color-text-grey text-sm">
            Putra ke-enam dari Bapak Ujer Efendi (Alm) dan Ibu Neneng Sofriah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrideSection;
