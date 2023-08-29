
"use client"
import { useState } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Expereince from "./components/experience/Expereince";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Information from "./components/information/Information";
import Skills from "./components/skills/Skills";

export default function HomePage() {
  const [languaje, setLanguaje] = useState(true);
  return (
    <div>
      <Header languaje={languaje} setLanguaje={setLanguaje}/>
      <div className="content">
        <Information />
        <Skills />
        <AboutMe />
        <Projects />
        <Expereince />
      </div>
      <Footer />
    </div>
  );
}
