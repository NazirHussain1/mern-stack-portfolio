import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const LazyAbout = lazy(() => import('./components/About.jsx'));
const LazySkills = lazy(() => import('./components/Skills.jsx'));
const LazyExperienceTimeline = lazy(() => import('./components/Experience.jsx'));
const LazyProjects = lazy(() => import('./components/Projects.jsx'));
const LazyEducation = lazy(() => import('./components/Education.jsx'));
const LazyHireMe = lazy(() => import('./components/HireMe.jsx'));
const LazyContact = lazy(() => import('./components/Contact.jsx'));
const LazyServices = lazy(() => import('./components/Services.jsx'));
const LazyFooter = lazy(() => import('./components/Footer.jsx'));

const SectionLoader = ({ minHeightClass = 'min-h-[24rem]' }) => (
  <div className={`${minHeightClass} flex items-center justify-center text-slate-500 dark:text-slate-400`}>
    Loading section...
  </div>
);

const DeferredSection = ({ sectionId, children, rootMargin = '500px 0px', minHeightClass }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    if (shouldLoad) return;

    const element = anchorRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  return (
    <div id={shouldLoad ? undefined : sectionId} ref={anchorRef}>
      {shouldLoad ? (
        <Suspense fallback={<SectionLoader minHeightClass={minHeightClass} />}>{children}</Suspense>
      ) : (
        <SectionLoader minHeightClass={minHeightClass} />
      )}
    </div>
  );
};

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

  const pageVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 }
  };

  const pageTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1]
  };

  const PageContainer = ({ children }) => (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen transition-colors duration-300"
    >
      {children}
    </motion.div>
  );

  const MainLayout = () => (
    <PageContainer>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <DeferredSection sectionId="about" minHeightClass="min-h-[32rem]">
          <LazyAbout />
        </DeferredSection>
        <DeferredSection sectionId="skills" minHeightClass="min-h-[28rem]">
          <LazySkills />
        </DeferredSection>
        <DeferredSection sectionId="experience" minHeightClass="min-h-[32rem]">
          <LazyExperienceTimeline />
        </DeferredSection>
        <DeferredSection sectionId="projects" minHeightClass="min-h-[36rem]">
          <LazyProjects />
        </DeferredSection>
        <DeferredSection sectionId="services" minHeightClass="min-h-[34rem]">
          <LazyServices />
        </DeferredSection>
        <DeferredSection sectionId="education" minHeightClass="min-h-[32rem]">
          <LazyEducation />
        </DeferredSection>
        <DeferredSection sectionId="hire-me" minHeightClass="min-h-[28rem]">
          <LazyHireMe />
        </DeferredSection>
        <DeferredSection sectionId="contact" minHeightClass="min-h-[34rem]">
          <LazyContact />
        </DeferredSection>
      </main>
      <DeferredSection sectionId="footer" rootMargin="250px 0px" minHeightClass="min-h-[12rem]">
        <LazyFooter />
      </DeferredSection>
    </PageContainer>
  );

  const RouteContainer = () => {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/services" element={<Navigate to={{ pathname: '/', hash: '#services' }} replace />} />
          <Route path="/" element={<MainLayout />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <ErrorBoundary>
      <Router>
        <RouteContainer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
