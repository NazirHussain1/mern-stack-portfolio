import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import ExperienceTimeline from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import HireMe from './components/HireMe.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
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

  const MainLayout = () => (
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
  );

  const ServicesLayout = () => (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/services" element={<ServicesLayout />} />
          <Route path="/" element={<MainLayout />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;