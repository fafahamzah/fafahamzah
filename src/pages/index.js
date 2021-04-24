import React from "react";
import { Helmet } from "react-helmet";
import BrideSection from "../components/BrideSection";
import CTASection from "../components/CTASection";
import DateCountSection from "../components/DateCountSection";
import DoaSection from "../components/DoaSection";
import Footer from "../components/Footer";
import HealthProtocolSection from "../components/HealthProtocolSection";
import HeroSection from "../components/HeroSection";
import WeddingDateSection from "../components/WeddingDateSection";
import Padding from "../components/Padding";

import "./index.css";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pernikahan Fafa &amp; Hamzah</title>
        <meta name="description" content="Magelang, 30 Mei 2021" />
        <link rel="shortcut icon" type="image/png" href="favicon.ico?" />
        <meta content="Pernikahan Fafa &amp; Hamzah" property="og:title" />
        <meta content="Magelang, 30 Mei 2021" property="og:Description" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          itemprop="image primaryImageOfPage"
          content="https://fafahamzah.github.io/fafahamzah.png"
        />
      </Helmet>
      <div className="container-page">
        <div className="bg-color-purple-light cover-container">
          <HeroSection />
          <DateCountSection />
        </div>
        <Padding>
          <BrideSection />
          <WeddingDateSection />
          <HealthProtocolSection />
          <DoaSection />
          <CTASection />
        </Padding>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
