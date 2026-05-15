import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAME, LINKEDIN, GITHUB, PHONE } from '../constants.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import BrandMark from './BrandMark.jsx';
import { FacebookBrandIcon, GitHubBrandIcon, LinkedInBrandIcon } from './BrandIcons.jsx';

const Footer = () => {
  const whatsappUrl = `https://wa.me/${PHONE.replace(/\+/g, '')}`;

  return (
    <footer className="py-12 bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-start group">
            <div className="flex items-center gap-3 mb-2">
              <BrandMark />
            </div>

            <motion.div
              className="text-2xl font-display font-bold text-gradient relative group-hover:scale-105 transition-all duration-300"
              whileHover={{
                textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))',
              }}
            >
              <span className="relative">
                NAZIR.
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-500 group-hover:w-full transition-all duration-500"></div>
              </span>
            </motion.div>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Building scalable full-stack web solutions</p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`https://${LINKEDIN}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nazir Hussain on LinkedIn"
              className="p-3 rounded-xl glass hover:text-[#0a66c2] transition-colors text-slate-600 dark:text-slate-400"
            >
              <LinkedInBrandIcon size={20} />
            </a>
            <a
              href={`https://${GITHUB}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nazir Hussain on GitHub"
              className="p-3 rounded-xl glass hover:text-slate-950 dark:hover:text-white transition-colors text-slate-600 dark:text-slate-400"
            >
              <GitHubBrandIcon size={20} />
            </a>
            <a
              href="https://www.facebook.com/nazir.hussain.371869/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nazir Hussain on Facebook"
              className="p-3 rounded-xl glass hover:text-[#1877f2] transition-colors text-slate-600 dark:text-slate-400"
            >
              <FacebookBrandIcon size={20} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Nazir Hussain on WhatsApp"
              className="p-3 rounded-xl glass hover:text-[#25d366] transition-colors text-slate-600 dark:text-slate-400"
            >
              <WhatsAppIcon size={21} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
