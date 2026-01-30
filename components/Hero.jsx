import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, MessageCircle } from 'lucide-react';
import Canvas3D from './Canvas3D.jsx';
import { NAME, PHONE } from '../constants.js';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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
            Available for Internships & Projects
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
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-full font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-slate-900 dark:text-white no-underline"
            >
              <Download size={20} />
              Download CV
            </motion.a>
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