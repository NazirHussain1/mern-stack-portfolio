import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Download, Mail, ArrowDown, MessageCircle, Eye, ChevronDown, AlertCircle } from 'lucide-react';
const Canvas3D = lazy(() => import('./Canvas3D.jsx'));
import { HeroCanvasSkeleton } from './SkeletonLoader.jsx';
import { NAME, PHONE, RESUME_PATH } from '../constants.js';

const typedWords = [
  'Full Stack Developer',
  'React & Node.js Developer',
  'API Integration Specialist',
  'Full Stack Engineer',
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const [cvDropdownDirection, setCVDropdownDirection] = useState('down');
  const [resumeExists, setResumeExists] = useState(false);
  const [shouldLoadCanvas, setShouldLoadCanvas] = useState(false);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const cvButtonRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const typingSpeed = isDeleting ? 80 : 150;

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(typedWords[0]);
      return undefined;
    }

    const currentIndex = loopNum % typedWords.length;
    const fullText = typedWords[currentIndex];

    let timer = null;

    if (!isDeleting) {
      if (text !== fullText) {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (text !== '') {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }, typingSpeed);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [text, isDeleting, loopNum, prefersReducedMotion, typingSpeed]);

  useEffect(() => {
    let active = true;

    fetch(RESUME_PATH, { method: 'HEAD' })
      .then((response) => {
        if (!active) return;
        setResumeExists(response.ok);
      })
      .catch(() => {
        if (!active) return;
        setResumeExists(false);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    let timeoutId = null;
    let idleCallbackId = null;

    const loadCanvasWhenReady = () => {
      setShouldLoadCanvas(true);
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleCallbackId = window.requestIdleCallback(loadCanvasWhenReady, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(loadCanvasWhenReady, 350);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (idleCallbackId && typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
    };
  }, [prefersReducedMotion]);

  const whatsappUrl = `https://wa.me/${PHONE.replace(/\+/g, '')}`;

  const handleResumeToggle = () => {
    if (!showCVDropdown && cvButtonRef.current) {
      const rect = cvButtonRef.current.getBoundingClientRect();
      const dropdownHeight = 190;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setCVDropdownDirection(spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? 'up' : 'down');
    }

    setShowCVDropdown((prev) => !prev);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {!prefersReducedMotion && shouldLoadCanvas && (
        <Suspense fallback={<HeroCanvasSkeleton />}>
          <Canvas3D onCreated={() => setCanvasLoaded(true)} />
        </Suspense>
      )}
      {!prefersReducedMotion && (!shouldLoadCanvas || !canvasLoaded) && <HeroCanvasSkeleton />}
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-widest uppercase">
            Available for Full Stack Development & Web Services
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-6 tracking-tight">
            <span className="text-gradient">{NAME}</span>
          </h1>
          <div className="h-12 md:h-16 mb-8">
            <p className="text-2xl md:text-4xl text-slate-500 dark:text-slate-400 font-light">
              <span className="border-r-2 border-primary pr-2">{text}</span>
            </p>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:flex-nowrap">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto min-w-[220px] px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 flex items-center justify-center gap-2 hover:bg-blue-600 transition-all no-underline"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto min-w-[220px] px-8 py-4 bg-green-600 text-white rounded-full font-bold shadow-lg shadow-green-600/30 flex items-center justify-center gap-2 hover:bg-green-700 transition-all no-underline"
            >
              <MessageCircle size={20} />
              WhatsApp Me
            </motion.a>

            <div className="relative w-full sm:w-auto">
              {resumeExists ? (
                <div className="relative">
                  <motion.button
                    ref={cvButtonRef}
                    onClick={handleResumeToggle}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto min-w-[220px] px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-bold shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-emerald-500/40 transition-all no-underline group"
                  >
                    <Download size={20} className="group-hover:animate-bounce" />
                    Resume/CV
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${showCVDropdown ? 'rotate-180' : ''}`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {showCVDropdown && (
                      <>
                        <button
                          type="button"
                          aria-label="Close resume options"
                          className="fixed inset-0 z-[100] cursor-default bg-transparent"
                          onClick={() => setShowCVDropdown(false)}
                        />

                        <motion.div
                          initial={{ opacity: 0, y: cvDropdownDirection === 'up' ? 10 : -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: cvDropdownDirection === 'up' ? 10 : -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute left-1/2 w-full min-w-[220px] -translate-x-1/2 sm:w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[101] backdrop-blur-xl ${
                            cvDropdownDirection === 'up' ? 'bottom-full mb-3' : 'top-full mt-3'
                          }`}
                        >
                          <div className="px-6 py-3 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-b border-slate-200 dark:border-slate-700">
                            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
                              Resume Options
                            </p>
                          </div>
                          <a
                            href={RESUME_PATH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-4 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors text-slate-900 dark:text-white no-underline group first-of-type:pt-4"
                            onClick={() => setShowCVDropdown(false)}
                          >
                            <Eye size={18} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <span className="font-semibold block">View CV</span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">Open in browser</span>
                            </div>
                          </a>
                          <div className="h-px bg-slate-200 dark:bg-slate-700"></div>
                          <a
                            href={RESUME_PATH}
                            download="Nazir_Hussain_Resume.pdf"
                            className="flex items-center gap-3 px-6 py-4 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-slate-900 dark:text-white no-underline group"
                            onClick={() => setShowCVDropdown(false)}
                          >
                            <Download size={18} className="text-green-500 group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <span className="font-semibold block">Download CV</span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">Save to device</span>
                            </div>
                          </a>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full sm:w-auto min-w-[220px] px-8 py-4 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 font-semibold flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <AlertCircle size={18} className="text-slate-400" />
                  Coming Soon
                </motion.div>
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
