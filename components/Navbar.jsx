import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Database, Code, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hire Me', href: '#hire-me' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-start cursor-pointer group relative"
        >
          {/* Ultra Stylish MERN Stack Logo */}
          <div className="flex items-center gap-3 mb-2">
            <div className="relative">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-green-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main container */}
              <div className="relative flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-white/90 via-slate-50/90 to-white/90 dark:from-slate-800/90 dark:via-slate-700/90 dark:to-slate-800/90 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-slate-600/30 group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-500">
                
                {/* MERN Letters with premium styling */}
                <motion.div 
                  className="w-7 h-7 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-emerald-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-sm font-bold relative z-10">M</span>
                </motion.div>
                
                <motion.div 
                  className="w-7 h-7 bg-gradient-to-br from-slate-600 via-gray-700 to-slate-800 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-slate-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-sm font-bold relative z-10">E</span>
                </motion.div>
                
                <motion.div 
                  className="w-7 h-7 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-cyan-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-sm font-bold relative z-10">R</span>
                </motion.div>
                
                <motion.div 
                  className="w-7 h-7 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group-hover:shadow-green-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.15 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-white text-sm font-bold relative z-10">N</span>
                </motion.div>
              </div>
            </div>
            
            {/* Elegant text labels */}
            <div className="flex flex-col">
              <motion.span 
                className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 tracking-[0.2em] group-hover:from-cyan-500 group-hover:to-primary transition-all duration-500"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                STACK
              </motion.span>
              <motion.span 
                className="text-[10px] font-light text-slate-400 dark:text-slate-500 tracking-widest -mt-0.5 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors duration-300"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.8 }}
              >
                DEVELOPER
              </motion.span>
            </div>
          </div>
          
          {/* Premium Main Logo */}
          <motion.div 
            className="text-2xl font-display font-bold text-gradient relative group-hover:scale-105 transition-all duration-300"
            whileHover={{ 
              textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))"
            }}
          >
            <span className="relative">
              NAZIR.
              {/* Subtle underline effect */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-500 group-hover:w-full transition-all duration-500"></div>
            </span>
          </motion.div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-300 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
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
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;