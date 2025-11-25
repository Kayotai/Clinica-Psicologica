import Preloader from "./components/Preloader/";
import HeaderComum from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Question from "./components/Question";
import Help from "./components/Help";
import CTA from "./components/CTA";
import { AnimatePresence } from "framer-motion";


import arvores from "./assets/duasArvoresMarrons.webp";
import arvore from "./assets/arvoreDeBaixo.webp";
import psicologa from "./assets/psicologa.webp";
const BACKGROUND_IMAGE_URL = arvores && arvore && psicologa;

import { useState, useEffect } from 'react';
import Footer from "./components/Footer";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 500); 
    };
    img.src = BACKGROUND_IMAGE_URL;
  }, []);


  return (
    <AnimatePresence>
      {isLoading? (<Preloader key="preloader" />) : (
        <>
          <div className="bgHero">
            <div className="bgTwoBlack">
                <HeaderComum /> 
                <Hero />
            </div>
          </div>
          <main>
            <About />
            <Question />
            <Help />
            <CTA />
          </main>
          <Footer />
        </>
      )}
    </AnimatePresence>
  )
}

export default App
