import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import BrandMark from './BrandMark.jsx';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId, shouldSmoothScroll = true) => {
    const element = document.getElementById(sectionId);
    if (!element) return false;

    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: shouldSmoothScroll ? 'smooth' : 'auto',
    });
    setActiveSection(sectionId);
    return true;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'proof',
        'services',
        'education',
        'hire-me',
        'contact',
      ];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Handle URL hash changes from browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      if (hash) {
        scrollToSection(hash);
        window.history.replaceState(window.history.state, '', window.location.pathname || '/');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Check initial hash on mount
    const initialHash = window.location.hash.slice(1) || 'home';
    setActiveSection(initialHash);
    if (initialHash !== 'home') {
      window.requestAnimationFrame(() => {
        scrollToSection(initialHash, false);
        window.history.replaceState(window.history.state, '', window.location.pathname || '/');
      });
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinks = [
    { name: 'Home', hash: 'home', isExternal: false },
    { name: 'About', hash: 'about', isExternal: false },
    { name: 'Skills', hash: 'skills', isExternal: false },
    { name: 'Experience', hash: 'experience', isExternal: false },
    { name: 'Projects', hash: 'projects', isExternal: false },
    { name: 'Proof', hash: 'proof', isExternal: false },
    { name: 'Services', hash: 'services', isExternal: false },
    { name: 'Education', hash: 'education', isExternal: false },
    { name: 'Hire Me', hash: 'hire-me', isExternal: false },
    { name: 'Contact', hash: 'contact', isExternal: false },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);

    if (link.isExternal) {
      navigate(link.path);
      return;
    }

    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: link.hash } });
      return;
    }

    const scrolledToSection = scrollToSection(link.hash);
    if (!scrolledToSection && location.pathname !== '/') {
      navigate('/', { state: { scrollTo: link.hash } });
    }
  };

  const isActive = (link) => {
    if (link.isExternal) {
      return window.location.pathname === link.path;
    }
    return activeSection === link.hash;
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.button
          type="button"
          onClick={() => handleNavClick({ hash: 'home', isExternal: false })}
          aria-label="Go to home section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer group bg-transparent border-0 p-0"
        >
          <BrandMark />
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              aria-current={isActive(link) ? 'true' : undefined}
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
                aria-current={isActive(link) ? 'true' : undefined}
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
