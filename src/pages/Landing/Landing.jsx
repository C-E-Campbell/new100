import React from "react";
import Hero from "../../components/Landing/Hero/Hero";
import About from "../../components//Landing/About/About";
import AskUs from "../../components/Landing/AskUs/AskUs";
import Footer from "../../components/Shared/Footer/Footer";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <AskUs />
      <Footer />
    </div>
  );
};

export default Landing;
