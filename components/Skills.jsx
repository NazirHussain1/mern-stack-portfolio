import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants.js';
import { Code2, Layout, Database } from 'lucide-react';

const Skills = () => {

  const getIcon = (title) => {
    if (title.includes("Languages")) return <Code2 size={34} />;
    if (title.includes("Frameworks")) return <Layout size={34} />;
    return <Database size={34} />;
  };

  return (
    <section id="skills" className="py-28 bg-gradient-to-b from-light to-white dark:from-dark dark:to-slate-900">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Expertise in modern web technologies & scalable development
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="text-primary mb-6">
                  {getIcon(category.title)}
                </div>

                <h3 className="text-2xl font-bold mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-white cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
