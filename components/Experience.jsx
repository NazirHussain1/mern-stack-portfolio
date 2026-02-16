import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants.js';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            My journey building scalable web applications
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">

          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full"></div>

          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="ml-14 md:ml-0 md:w-1/2 p-8 rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <span className="text-sm font-bold text-primary uppercase tracking-widest">
                  {exp.period}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-1">
                  {exp.role}
                </h3>

                <h4 className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-4">
                  {exp.company} • {exp.location}
                </h4>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Timeline Dot */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 border-4 border-white dark:border-slate-900">
                <Briefcase size={20} />
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
