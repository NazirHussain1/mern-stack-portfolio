import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import ExperienceTimeline from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import HireMe from './components/HireMe.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ErrorBoundary>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceTimeline />
          <Projects />
          <Education />
          <HireMe />
          <Contact />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;