import React from 'react';
import { Linkedin, Github, Facebook, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAME, LINKEDIN, GITHUB } from '../constants.js';

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-start group">
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
            <p className="text-slate-500 dark:text-slate-400 mt-2">Building scalable web solutions with MERN stack</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href={`https://${LINKEDIN}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:text-primary transition-colors text-slate-600 dark:text-slate-400">
              <Linkedin size={20} />
            </a>
            <a href={`https://${GITHUB}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:text-primary transition-colors text-slate-600 dark:text-slate-400">
              <Github size={20} />
            </a>
            <a href="https://www.facebook.com/nazir.hussain.371869/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:text-primary transition-colors text-slate-600 dark:text-slate-400">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;