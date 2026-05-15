import React from 'react';
import { motion } from 'framer-motion';
import { Award, Github, Quote, TrendingUp, ExternalLink } from 'lucide-react';
import { GITHUB_HIGHLIGHTS, PROJECT_RESULTS, TESTIMONIALS } from '../constants.js';

const Credibility = () => {
  return (
    <section id="proof" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-primary">Proof of Work</p>
          <h2 className="text-4xl font-display font-bold md:text-5xl">
            Results, <span className="text-primary">Code</span> & Credibility
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            Practical project outcomes, highlighted repositories, and a professional reference area designed to build
            trust without overstating experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PROJECT_RESULTS.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <TrendingUp size={24} aria-hidden="true" />
              </div>
              <p className="text-4xl font-display font-bold text-slate-950 dark:text-white">{item.metric}</p>
              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                <Github size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">GitHub Highlights</p>
                <h3 className="text-2xl font-display font-bold">Pinned-style project showcase</h3>
              </div>
            </div>

            <div className="grid gap-5">
              {GITHUB_HIGHLIGHTS.map((project) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.summary}</p>
                    </div>
                    <ExternalLink
                      size={19}
                      aria-hidden="true"
                      className="mt-1 flex-shrink-0 text-slate-400 transition group-hover:text-primary"
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                <Quote size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Testimonials</p>
                <h3 className="text-2xl font-display font-bold">Professional trust signals</h3>
              </div>
            </div>

            <div className="space-y-5">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.article
                  key={testimonial.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Award size={20} className="text-primary" aria-hidden="true" />
                    <h4 className="font-bold text-slate-950 dark:text-white">{testimonial.title}</h4>
                  </div>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    {testimonial.source}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
