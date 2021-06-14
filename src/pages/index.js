import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import {
  homObjOne,
  homObjOne2,
  homObjOne3,
} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Hero />
      <InfoSection {...homObjOne} />
      <InfoSection {...homObjOne2} />
      <Services />
      <InfoSection {...homObjOne3} />
    </>
  );
};

export default Home;
