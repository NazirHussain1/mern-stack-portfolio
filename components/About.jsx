import React from 'react';
import { motion } from 'framer-motion';
import { SUMMARY, LOCATION, EMAIL, PHONE, NAME, ROLE } from '../constants.js';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = () => {
  const initials = NAME.split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden glass shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.25),_transparent_35%)]" />
              <div className="relative flex h-full flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-100">
                    About Nazir
                  </span>
                  <div className="h-24 w-24 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl font-display font-bold shadow-2xl shadow-sky-500/10">
                    {initials}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-200">Software Engineer</p>
                  <h3 className="max-w-sm text-4xl font-display font-bold leading-tight">{ROLE}</h3>
                  <p className="max-w-md text-sm leading-7 text-slate-300">
                    Focused on thoughtful frontend experiences, reliable backend systems, and production-ready MERN
                    applications.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Primary Stack</p>
                    <p className="mt-2 text-lg font-semibold">React, Node, MongoDB</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Current Focus</p>
                    <p className="mt-2 text-lg font-semibold">Full-Stack Delivery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-display font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">{SUMMARY}</p>

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
