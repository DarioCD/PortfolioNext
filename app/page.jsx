"use client";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Information from "./components/information/Information";
import Skills from "./components/skills/Skills";
import Expereince from "./components/experience/Experience";

export default function HomePage() {
  const [languaje, setLanguaje] = useState(true);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <Header
        languaje={languaje}
        setLanguaje={setLanguaje}
        isScrolled={isScrolled}
        // windowWidth={windowWidth}
      />
      <div className="content">
        <Information />
        <Skills />
        <AboutMe />
        <Projects />
        <Expereince />
      </div>
      <Footer />
    </>
  );
}
