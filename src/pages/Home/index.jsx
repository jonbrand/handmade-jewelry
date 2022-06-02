import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar"
import { useState } from "react";
import { HeroSection } from "../../components/HeroSection";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  )
}