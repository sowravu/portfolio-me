import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';


import Contact from './components/Contact';
import { useStars } from './hooks/useVanta';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const starsRef = useStars();

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-10% 0px -10% 0px' // Slightly shrink the viewport to avoid edge cases
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Falling Stars Background */}
      <canvas
        ref={starsRef}
        className="fixed inset-0 -z-10"
        style={{ width: '100%', height: '100%' }}
      />

      <Navbar activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />


        <Contact />
      </main>
    </div>
  );
}

export default App;
