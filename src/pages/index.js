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
        <title>Fafa &amp; Hamzah</title>
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
