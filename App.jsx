import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { NAME } from './constants.js';

const LazyAbout = lazy(() => import('./components/About.jsx'));
const LazySkills = lazy(() => import('./components/Skills.jsx'));
const LazyExperienceTimeline = lazy(() => import('./components/Experience.jsx'));
const LazyProjects = lazy(() => import('./components/Projects.jsx'));
const LazyCredibility = lazy(() => import('./components/Credibility.jsx'));
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
    exit: { opacity: 0, y: -24 },
  };

  const pageTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
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

  const MainLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      const sectionId = location.state?.scrollTo;
      if (!sectionId) return undefined;

      const animationFrame = window.requestAnimationFrame(() => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
        navigate('/', { replace: true, state: null });
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }, [location.state, navigate]);

    return (
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
          <DeferredSection sectionId="proof" minHeightClass="min-h-[34rem]">
            <LazyCredibility />
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
  };

  const ServicesRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
      navigate('/', { replace: true, state: { scrollTo: 'services' } });
    }, [navigate]);

    return <SectionLoader minHeightClass="min-h-screen" />;
  };

  const NotFound = () => (
    <PageContainer>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="min-h-screen bg-light dark:bg-dark px-4 pt-32 text-slate-900 dark:text-white">
        <section className="mx-auto flex max-w-3xl flex-col items-center justify-center py-24 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-primary">404</p>
          <h1 className="mb-6 text-4xl font-display font-bold md:text-6xl">Page not found</h1>
          <p className="mb-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            The page you requested does not exist on {NAME}&apos;s portfolio. Use the button below to return to the main
            portfolio.
          </p>
          <a
            href="/"
            className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-blue-600"
          >
            Back to Portfolio
          </a>
        </section>
      </main>
    </PageContainer>
  );

  const RouteContainer = () => {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/services" element={<ServicesRedirect />} />
          <Route path="/" element={<MainLayout />} />
          <Route path="*" element={<NotFound />} />
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
