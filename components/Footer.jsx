import React from 'react';
import { Linkedin, Github, Twitter, Heart } from 'lucide-react';
import { NAME, LINKEDIN, GITHUB } from '../constants.js';

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-gradient">NAZIR.</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Crafting premium digital experiences</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href={`https://${LINKEDIN}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:text-primary transition-colors text-slate-600 dark:text-slate-400">
              <Linkedin size={20} />
            </a>
            <a href={`https://${GITHUB}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:text-primary transition-colors text-slate-600 dark:text-slate-400">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 rounded-xl glass hover:text-primary transition-colors text-slate-600 dark:text-slate-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;