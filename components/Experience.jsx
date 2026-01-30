import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants.js';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 italic">Professional <span className="text-primary">Experience</span></h2>
          <p className="text-slate-500 dark:text-slate-400">My professional journey in the tech industry</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors"
                >
                  <span className="text-sm font-bold text-primary mb-2 block uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-slate-500 font-medium mb-4">{exp.company} • {exp.location}</h4>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-2 list-none p-0 text-left">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="z-10 absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white border-4 border-white dark:border-dark">
                <Briefcase size={20} />
              </div>

              <div className="flex-1 hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;