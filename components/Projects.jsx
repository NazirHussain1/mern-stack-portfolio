import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants.js';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectCardSkeleton } from './SkeletonLoader.jsx';

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 italic">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-slate-500 dark:text-slate-400">Selected work showcasing my development expertise</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Array.from({ length: 4 }).map((_, idx) => (
              <ProjectCardSkeleton key={idx} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-full"
            >
              <figure className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-slate-800">
                <img 
                  src={`https://picsum.photos/seed/${encodeURIComponent(project.title)}/720/405`} 
                  alt={`Screenshot of ${project.title}`} 
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  width="720"
                  height="405"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                />
                <figcaption className="sr-only">Screenshot of {project.title}</figcaption>
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{project.period}</span>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.links?.github} target="_blank" rel="noreferrer" className="flex-1 py-3 px-6 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity no-underline">
                    <Github size={18} aria-hidden="true" /> Code
                  </a>
                  <a href={project.links?.live} target="_blank" rel="noreferrer" className="flex-1 py-3 px-6 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity no-underline">
                    <ExternalLink size={18} aria-hidden="true" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;