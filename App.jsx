import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

  const SectionLoader = () => (
    <div className="min-h-[24rem] flex items-center justify-center text-slate-500 dark:text-slate-400">
      Loading section...
    </div>
  );

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
        <Suspense fallback={<SectionLoader />}>
          <LazyAbout />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <LazySkills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <LazyExperienceTimeline />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <LazyProjects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <LazyEducation />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <LazyHireMe />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <LazyContact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <LazyFooter />
      </Suspense>
    </PageContainer>
  );

  const ServicesLayout = () => (
    <PageContainer>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <LazyServices />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <LazyFooter />
      </Suspense>
    </PageContainer>
  );

  const RouteContainer = () => {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/services" element={<ServicesLayout />} />
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