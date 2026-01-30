import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { EMAIL, PHONE, LOCATION } from '../constants.js';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${PHONE.replace(/\+/g, '')}`;

  return (
    <section id="contact" className="py-24 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 italic">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-slate-500 dark:text-slate-400">Let's discuss your next project or role opportunity</p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5">
            <div className="space-y-6">
              {[
                { icon: <Mail />, title: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: <Phone />, title: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\D/g,'')}` },
                { icon: <MessageCircle />, title: "WhatsApp", value: "Chat on WhatsApp", href: whatsappUrl },
                { icon: <MapPin />, title: "Location", value: LOCATION, href: "#" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.title === "WhatsApp" ? "_blank" : "_self"}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 glass p-6 rounded-2xl hover:border-primary transition-all border border-slate-200 dark:border-slate-800 no-underline group shadow-lg"
                >
                  <div className={`p-4 ${item.title === 'WhatsApp' ? 'bg-green-500/10 text-green-500' : 'bg-primary/10 text-primary'} rounded-2xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-1">{item.title}</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white m-0 break-all">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border border-slate-200 dark:border-slate-800 h-full shadow-2xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-2">Name</label>
                    <input type="text" className="w-full bg-slate-100 dark:bg-slate-800 border border-transparent p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all" placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-2">Email</label>
                    <input type="email" className="w-full bg-slate-100 dark:bg-slate-800 border border-transparent p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-6">
                    <label className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-2">Message</label>
                    <textarea rows={5} className="w-full bg-slate-100 dark:bg-slate-800 border border-transparent p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>
                </div>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/30 hover:bg-blue-600 transition-all text-lg group">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;