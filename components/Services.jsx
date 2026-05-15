import React from 'react';
import { motion } from 'framer-motion';
import { Code2, LayoutGrid, Server, Layers, Cloud, Cpu } from 'lucide-react';
import ServiceCard from './ServiceCard.jsx';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Build high-performance, responsive websites with modern front-end architecture and clean UI patterns.',
    stack: ['React.js', 'Tailwind CSS', 'Vite', 'Responsive Design'],
  },
  {
    icon: LayoutGrid,
    title: 'Frontend Development',
    description: 'Craft polished interfaces with reusable components, accessible layouts, and interactive animations.',
    stack: ['React', 'Redux', 'TypeScript', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Design secure RESTful APIs, integrate databases, and handle authentication with scalable server logic.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'Deliver end-to-end solutions from frontend experience to backend workflows and deployment pipelines.',
    stack: ['React', 'Node.js', 'API Design', 'Deployment'],
  },
  {
    icon: Cloud,
    title: 'API Integration',
    description:
      'Connect applications with 3rd-party services, payment gateways, and data APIs for real-world workflows.',
    stack: ['REST APIs', 'Axios', 'OAuth', 'Postman'],
  },
  {
    icon: Cpu,
    title: 'Automation & Tooling',
    description: 'Improve workflows with form automation, dashboards, data handling, and practical integrations.',
    stack: ['Node.js', 'APIs', 'Webhooks', 'Admin Tools'],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 px-4 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.25),_transparent_40%)] pointer-events-none"></div>
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-sky-200 shadow-sm">
            Services
          </p>
          <h2 className="text-4xl font-display font-bold sm:text-5xl">
            Professional digital services for modern brands.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            From polished UI development to backend systems and API integration, I help ambitious teams ship reliable
            web applications with a strong technical foundation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-20 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-sky-200">Ready to build?</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s bring your next product to life.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                If you need a developer who can move quickly, keep interfaces polished, and make backend systems
                reliable, I&apos;m ready to help.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                aria-label="Hire me or contact Nazir"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition transform hover:-translate-y-0.5 hover:shadow-blue-500/30"
              >
                Hire Me
              </a>
              <a
                href="#contact"
                aria-label="View contact details"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
