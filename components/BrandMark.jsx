import React from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const BrandMark = ({ compact = false }) => {
  return (
    <div className="group flex items-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/35 via-cyan-400/25 to-emerald-400/30 blur-md opacity-70 transition group-hover:opacity-100" />
        <motion.div
          whileHover={{ scale: 1.04, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 360, damping: 18 }}
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-slate-950 text-white shadow-xl shadow-blue-950/20 dark:border-slate-700"
        >
          <span className="font-display text-base font-black tracking-normal">NH</span>
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-lg bg-primary text-white shadow-md">
            <Code2 size={12} aria-hidden="true" />
          </span>
        </motion.div>
      </div>

      {!compact && (
        <div className="hidden leading-tight sm:block">
          <p className="font-display text-sm font-black tracking-normal text-slate-950 dark:text-white">Nazir</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Full Stack</p>
        </div>
      )}
    </div>
  );
};

export default BrandMark;
