import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";

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
    </>
  );
};

export default Home;
