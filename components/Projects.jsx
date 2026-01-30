import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants.js';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 italic">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-slate-500 dark:text-slate-400">Selected work showcasing my development expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-slate-800">
                <img 
                  src={`https://picsum.photos/seed/${project.title}/800/450`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                />
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
                  <a href={project.links?.github} className="flex-1 py-3 px-6 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity no-underline">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.links?.live} className="flex-1 py-3 px-6 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity no-underline">
                    <ExternalLink size={18} /> Demo
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