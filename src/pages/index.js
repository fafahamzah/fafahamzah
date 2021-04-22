import React from "react";
import BrideSection from "../components/BrideSection";
import CTASection from "../components/CTASection";
import DateCountSection from "../components/DateCountSection";
import DoaSection from "../components/DoaSection";
import Footer from "../components/Footer";
import HealthProtocolSection from "../components/HealthProtocolSection";
import HeroSection from "../components/HeroSection";
import WeddingDateSection from "../components/WeddingDateSection";
import Padding from "../components/Padding";

const IndexPage = () => {
  return (
    <div className="container-page">
      <HeroSection />
      <Padding>
        <DateCountSection />
        <BrideSection />
        <WeddingDateSection />
        <HealthProtocolSection />
        <DoaSection />
        <CTASection />
      </Padding>
      <Footer />
    </div>
  );
};

export default IndexPage;
