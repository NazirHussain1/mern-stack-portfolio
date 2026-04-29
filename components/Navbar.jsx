import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'skills', 'experience', 'projects', 'hire-me', 'contact'];
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', sectionId: 'home' },
    { name: 'About', path: '/', sectionId: 'about' },
    { name: 'Skills', path: '/', sectionId: 'skills' },
    { name: 'Experience', path: '/', sectionId: 'experience' },
    { name: 'Projects', path: '/', sectionId: 'projects' },
    { name: 'Services', path: '/services', sectionId: null },
    { name: 'Hire Me', path: '/', sectionId: 'hire-me' },
    { name: 'Contact', path: '/', sectionId: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleNavClick = (link) => {
    setIsOpen(false);
    
    if (link.name === 'Home') {
      // Home - scroll to top
      if (location.pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else if (link.sectionId) {
      // Section link
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete
        setTimeout(() => {
          scrollToSection(link.sectionId);
        }, 300);
      } else {
        scrollToSection(link.sectionId);
      }
    } else {
      // Different page (Services)
      navigate(link.path);
    }
  };

  const isActive = (link) => {
    if (link.name === 'Services') {
      return location.pathname === '/services';
    }
    return location.pathname === '/' && link.sectionId === activeSection;
  };

  return (
    <nav aria-label="Primary navigation" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.a 
          href="#home"
          aria-label="Go to home section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer group"
        >
          {/* Compact MERN Stack Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-green-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Main container - smaller and more compact */}
              <div className="relative flex items-center gap-1 px-2 py-1.5 bg-gradient-to-r from-white/90 via-slate-50/90 to-white/90 dark:from-slate-800/90 dark:via-slate-700/90 dark:to-slate-800/90 backdrop-blur-xl rounded-lg shadow-md border border-white/20 dark:border-slate-600/30 group-hover:shadow-lg group-hover:border-primary/30 transition-all duration-300">
                
                {/* MERN Letters - smaller size */}
                <motion.div 
                  className="w-5 h-5 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-md flex items-center justify-center shadow-sm relative overflow-hidden group-hover:shadow-emerald-500/25 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-xs font-bold relative z-10">M</span>
                </motion.div>
                
                <motion.div 
                  className="w-5 h-5 bg-gradient-to-br from-slate-600 via-gray-700 to-slate-800 rounded-md flex items-center justify-center shadow-sm relative overflow-hidden group-hover:shadow-slate-500/25 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-xs font-bold relative z-10">E</span>
                </motion.div>
                
                <motion.div 
                  className="w-5 h-5 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-md flex items-center justify-center shadow-sm relative overflow-hidden group-hover:shadow-cyan-500/25 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.04 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-xs font-bold relative z-10">R</span>
                </motion.div>
                
                <motion.div 
                  className="w-5 h-5 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-md flex items-center justify-center shadow-sm relative overflow-hidden group-hover:shadow-green-500/25 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.06 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-xs font-bold relative z-10">N</span>
                </motion.div>
              </div>
            </div>
            
            {/* Compact Main Logo */}
            <motion.div 
              className="text-xl font-display font-bold text-gradient relative group-hover:scale-102 transition-all duration-200 ml-1"
            >
              NAZIR.
            </motion.div>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`font-medium transition-colors cursor-pointer ${isActive(link) ? 'text-primary' : 'text-slate-600 dark:text-slate-300'} hover:text-primary dark:hover:text-white`}
            >
              {link.name}
            </button>
          ))}
          <button 
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close mobile navigation menu' : 'Open mobile navigation menu'}
            aria-expanded={isOpen}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-light dark:bg-dark glass border-b border-slate-200 dark:border-slate-800"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-lg font-medium text-left ${isActive(link) ? 'text-primary' : 'text-slate-800 dark:text-slate-200'} transition-colors hover:text-primary`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;