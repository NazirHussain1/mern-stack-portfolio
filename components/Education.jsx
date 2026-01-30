import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATIONS, LANGUAGES_SPOKEN, COURSEWORK } from '../constants.js';
import { GraduationCap, Globe, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-6 mb-12 lg:mb-0">
            <h2 className="text-4xl font-display font-bold mb-10 italic">Academic <span className="text-primary">Journey</span></h2>
            {EDUCATIONS.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative pl-12 mb-8 shadow-xl"
              >
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-1 h-16 bg-primary rounded-full"></div>
                <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-6">
                  <GraduationCap size={32} />
                </div>
                <span className="text-sm font-bold text-primary block mb-2">{edu.period}</span>
                <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-slate-500 font-medium leading-tight">{edu.institution}</h4>
                <p className="text-slate-400 mt-2">{edu.location}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 glass p-8 rounded-3xl border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-primary" />
                <h3 className="text-xl font-bold">Comprehensive Coursework</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {COURSEWORK.map((course) => (
                  <span key={course} className="text-[10px] md:text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <h2 className="text-4xl font-display font-bold mb-10 italic">Linguistic <span className="text-primary">Fluency</span></h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-800 h-full"
            >
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-6">
                <Globe size={32} />
              </div>
              <div className="space-y-8">
                {LANGUAGES_SPOKEN.map((lang) => (
                  <div key={lang}>
                    <div className="flex justify-between mb-3">
                      <span className="font-bold text-xl">{lang}</span>
                      <span className="text-primary font-bold text-sm">Professional</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold mb-2">Development Focus</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Consistently striving to sharpen my development skills by working on real-world projects and mastering the modern MERN stack ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;