import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Loader from './components/Loader';
import { useStars } from './hooks/useVanta';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const starsRef = useStars();

  // Preloader progress counter
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random organic increment values for a realistic feel
        const increment = Math.floor(Math.random() * 8) + 2;
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  // Handle preloader unmount after fade-out transition
  useEffect(() => {
    if (progress === 100) {
      const pauseTimeout = setTimeout(() => {
        setFadeOut(true);
        const unmountTimeout = setTimeout(() => {
          setShowLoader(false);
        }, 700); // Match duration-700 transition in Loader.tsx
        return () => clearTimeout(unmountTimeout);
      }, 300); // Show "100%" briefly for readability

      return () => clearTimeout(pauseTimeout);
    }
  }, [progress]);

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
      {/* Premium preloader screen */}
      {showLoader && <Loader progress={progress} fadeOut={fadeOut} />}

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

      {/* Grok-Powered AI Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;


