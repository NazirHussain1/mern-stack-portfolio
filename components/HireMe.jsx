import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { NAME, EMAIL, PHONE } from '../constants.js';

const HireMe = () => {
  const whatsappUrl = `https://wa.me/${PHONE.replace(/\+/g, '')}`;

  const services = [
    {
      icon: <Code size={24} />,
      title: "Full Stack Development",
      description: "Complete web applications using MERN stack with modern UI/UX"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Project Consultation",
      description: "Technical guidance and architecture planning for your projects"
    },
    {
      icon: <Clock size={24} />,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality and best practices"
    },
    {
      icon: <Star size={24} />,
      title: "Quality Assurance",
      description: "Clean, maintainable code with proper testing and documentation"
    }
  ];

  const benefits = [
    "Experienced in MERN Stack Development",
    "Strong problem-solving and debugging skills", 
    "Responsive and mobile-first design approach",
    "API integration and database optimization",
    "Version control with Git and collaborative development",
    "Available for projects from anywhere globally"
  ];

  return (
    <section id="hire-me" className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4 italic">
              Ready to <span className="text-primary">Hire Me?</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm available for all types of MERN stack development 
              and web services from anywhere in the world.
            </p>
          </motion.div>
        </div>

        <div className="row g-5 mb-16">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <h3 className="text-2xl font-bold mb-8">What I Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all"
                  >
                    <div className="text-primary mb-4">{service.icon}</div>
                    <h4 className="font-bold mb-2">{service.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <h3 className="text-2xl font-bold mb-8">Why Choose Me</h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Let's Start Your Project</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Ready to turn your vision into reality? I'm here to help you build amazing web applications 
              that drive results and exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={`mailto:${EMAIL}?subject=Project Inquiry&body=Hi ${NAME}, I'm interested in discussing a project with you.`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 flex items-center gap-2 hover:bg-blue-600 transition-all no-underline"
              >
                <Briefcase size={20} />
                Hire Me Now
                <ArrowRight size={16} />
              </motion.a>
              
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all no-underline"
              >
                Quick Chat
                <ArrowRight size={16} />
              </motion.a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <strong>Available for:</strong> MERN Stack Development • Web Applications • API Development • Database Design • Full-Stack Solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;