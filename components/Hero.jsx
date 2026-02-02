import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, ArrowDown, MessageCircle, Eye, ChevronDown } from 'lucide-react';
import Canvas3D from './Canvas3D.jsx';
import { NAME, PHONE } from '../constants.js';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCVDropdown, setShowCVDropdown] = useState(false);

  const words = ["MERN Stack Developer", "MongoDB Expert", "Next.js Specialist", "Full Stack Engineer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const whatsappUrl = `https://wa.me/${PHONE.replace(/\+/g, '')}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Canvas3D />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-widest uppercase">
            Available for MERN Stack Development & Web Services
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-6 tracking-tight">
            I am <span className="text-gradient">{NAME}</span>
          </h1>
          <div className="h-12 md:h-16 mb-8">
            <p className="text-2xl md:text-4xl text-slate-500 dark:text-slate-400 font-light">
              <span className="border-r-2 border-primary pr-2">{text}</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 flex items-center gap-2 hover:bg-blue-600 transition-all no-underline"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-600 text-white rounded-full font-bold shadow-lg shadow-green-600/30 flex items-center gap-2 hover:bg-green-700 transition-all no-underline"
            >
              <MessageCircle size={20} />
              WhatsApp Me
            </motion.a>
            
            {/* CV Dropdown Button */}
            <div className="relative z-50">
              <motion.button
                onClick={() => setShowCVDropdown(!showCVDropdown)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-full font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-slate-900 dark:text-white relative z-50"
              >
                <Download size={20} />
                Resume/CV
                <ChevronDown size={16} className={`transition-transform duration-300 ${showCVDropdown ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {showCVDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[9999]"
                    style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  >
                    <a
                      href="/Nazir-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white no-underline group"
                      onClick={() => setShowCVDropdown(false)}
                    >
                      <Eye size={18} className="text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-medium">View CV</span>
                    </a>
                    <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                    <a
                      href="/Nazir-Resume.pdf"
                      download="Nazir_Hussain_Resume.pdf"
                      className="flex items-center gap-3 px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white no-underline group"
                      onClick={() => setShowCVDropdown(false)}
                    >
                      <Download size={18} className="text-green-500 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Download CV</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Backdrop to close dropdown */}
              {showCVDropdown && (
                <div 
                  className="fixed inset-0 z-[9998]" 
                  onClick={() => setShowCVDropdown(false)}
                ></div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <a href="#about" className="text-inherit">
            <ArrowDown size={30} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;