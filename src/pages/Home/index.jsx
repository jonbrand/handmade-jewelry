import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar"
import { useState } from "react";
import { HeroSection } from "../../components/HeroSection";
import { InfoSection } from "../../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../../components/InfoSection/data";
import { Services } from "../../components/Services";
import { Footer } from '../../components/Footer';

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
      <Services />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  )
}