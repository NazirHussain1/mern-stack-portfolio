import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants.js';
import { Code2, Layout, Database } from 'lucide-react';

const Skills = () => {
  const getIcon = (title) => {
    if (title.includes("Languages")) return <Code2 size={32} />;
    if (title.includes("Frameworks")) return <Layout size={32} />;
    return <Database size={32} />;
  };

  return (
    <section id="skills" className="py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 italic">Technical <span className="text-primary">Skills</span></h2>
          <p className="text-slate-500 dark:text-slate-400">Mastery in modern web technologies and development tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl hover:shadow-2xl hover:shadow-primary/10 transition-all border border-slate-200 dark:border-slate-800"
            >
              <div className="text-primary mb-6">{getIcon(category.title)}</div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;