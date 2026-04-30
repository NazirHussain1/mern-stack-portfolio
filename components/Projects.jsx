import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants.js';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectCardSkeleton } from './SkeletonLoader.jsx';

const projectVisuals = [
  {
    shell: 'from-sky-600 via-blue-600 to-cyan-400',
    panel: 'from-white/20 to-white/5',
    accent: 'text-sky-100'
  },
  {
    shell: 'from-emerald-600 via-teal-600 to-cyan-500',
    panel: 'from-white/20 to-white/5',
    accent: 'text-emerald-100'
  },
  {
    shell: 'from-slate-900 via-indigo-900 to-blue-700',
    panel: 'from-white/15 to-white/5',
    accent: 'text-blue-100'
  },
  {
    shell: 'from-amber-500 via-orange-500 to-rose-500',
    panel: 'from-white/25 to-white/10',
    accent: 'text-amber-50'
  }
];

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
          <h2 className="text-4xl font-display font-bold mb-4 italic">
            Featured <span className="text-primary">Projects</span>
          </h2>
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
            {PROJECTS.map((project, idx) => {
              const visual = projectVisuals[idx % projectVisuals.length];
              const hasGithub = Boolean(project.links?.github && project.links.github !== '#');
              const hasLiveDemo = Boolean(project.links?.live && project.links.live !== '#');

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative glass rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-full"
                >
                  <div className={`relative overflow-hidden aspect-video bg-gradient-to-br ${visual.shell}`}>
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.5),_transparent_40%)]" />
                    <div className={`absolute inset-6 rounded-[2rem] border border-white/20 bg-gradient-to-br ${visual.panel} backdrop-blur-md p-6 shadow-2xl`}>
                      <div className="flex h-full flex-col justify-between">
                        <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
                            Case Study
                          </span>
                          <span className={`text-xs font-semibold uppercase tracking-[0.28em] ${visual.accent}`}>
                            {project.period}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white/70">Featured project</p>
                          <h3 className="mt-3 max-w-xs text-3xl font-display font-bold leading-tight text-white">{project.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="space-y-4 mb-8 flex-grow">
                      {project.description.map((desc, i) => (
                        <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider border border-primary/15">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {hasGithub ? (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="flex-1 py-3 px-6 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity no-underline">
                          <Github size={18} aria-hidden="true" /> Code
                        </a>
                      ) : (
                        <span className="flex-1 py-3 px-6 bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                          <Github size={18} aria-hidden="true" /> Private Repo
                        </span>
                      )}

                      {hasLiveDemo ? (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="flex-1 py-3 px-6 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity no-underline">
                          <ExternalLink size={18} aria-hidden="true" /> Demo
                        </a>
                      ) : (
                        <span className="flex-1 py-3 px-6 bg-primary/10 text-primary rounded-xl font-bold flex items-center justify-center gap-2 border border-primary/15">
                          <ExternalLink size={18} aria-hidden="true" /> Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
