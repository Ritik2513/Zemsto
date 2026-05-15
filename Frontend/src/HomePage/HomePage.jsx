import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Dashboard from "../components/Dashboard";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import TrustedBy from "../components/TrustedBy";
import KidZone from "../components/KidZone";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const HomePage = () => {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Dashboard />
      <Pricing />
      <TrustedBy />
      <KidZone />
      <CTA />
      <Faqs />
      <Footer />
    </>
  );
};

export default HomePage;
