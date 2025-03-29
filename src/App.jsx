import React, { useState, useEffect } from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';
import sections from './Section/sections';
import Navbar from './Section/Navbar';
import { FaArrowUp } from "react-icons/fa";
import Footer from './Pages/Footer';
import './App.css';
function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <>
      <Navbar />
      
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 p-3 z-20 bg-blue-500 text-white rounded-full shadow-md transition-all
          ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <FaArrowUp size={30} />
      </button>

      {sections.map(({ name, component }) => (
        <Element key={name} name={name}>
          {component}
        </Element>
      ))}
      <Footer />
    </>
  );
}

export default App;
