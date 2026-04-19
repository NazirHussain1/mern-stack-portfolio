import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, stack }) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 dark:bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-slate-900/10 dark:shadow-black/20 p-8"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-500 text-white shadow-lg shadow-primary/20 transition duration-300 group-hover:scale-105">
        <Icon size={28} aria-hidden="true" />
      </div>

      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">{title}</h3>
      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 mb-6">{description}</p>

      <div className="mt-auto space-y-3">
        <h4 className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 font-semibold">Tech stack</h4>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
