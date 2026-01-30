import React from 'react';
import { motion } from 'framer-motion';
import { SUMMARY, LOCATION, EMAIL, PHONE } from '../constants.js';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden glass shadow-2xl"
            >
              <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Nazir Hussain" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </motion.div>
          </div>
          
          <div className="col-lg-7 lg:ps-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">About <span className="text-primary">Me</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {SUMMARY}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-slate-500 tracking-wider">Location</h4>
                    <p className="font-medium">{LOCATION}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-slate-500 tracking-wider">Email</h4>
                    <p className="font-medium">{EMAIL}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-slate-500 tracking-wider">Phone</h4>
                    <p className="font-medium">{PHONE}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase text-slate-500 tracking-wider">Education</h4>
                    <p className="font-medium">BS Software Engineering</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;