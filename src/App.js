
import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ParallaxText from './components/ParallaxText';
import { animate, scroll } from 'framer-motion'; // Install with npm install motion
import LampDemo from './components/Lamp';
import SkillsGrid from './components/SkillGrid';


function App() {

  useEffect(() => {
    // Animation for all scroll sections
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => {
      scroll(
        animate(section, { 
          opacity: [0, 1, 1, 0],
          transform: ['translateY(20px)', 'translateY(0)', 'translateY(0)', 'translateY(-20px)']
        }),
        {
          target: section,
          offset: ["start end", "end end", "start start", "end start"],
        }
      );
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="scroll-section">
        <Banner/>
      </div>

      <div className="scroll-section">
        <Skills />
      </div>
      <SkillsGrid />
      <div className="h-56"></div>
      <ParallaxText baseVelocity={-2}>
            I turn complex problems into high-impact solutions.
            </ParallaxText>
            <ParallaxText baseVelocity={2}>
            Crafting pixel-perfect experiences.
            </ParallaxText>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
