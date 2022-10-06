import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowsWork from "../components/HowsWork";
import Navbar from "../components/Navbar";
import Service from "../components/Service";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header />
      <HowsWork />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
