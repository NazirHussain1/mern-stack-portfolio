import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { EMAIL, PHONE, LOCATION } from '../constants.js';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${PHONE.replace(/\+/g, '')}`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `Hi Nazir,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Best regards,
${formData.name}`;
    
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

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
              onSubmit={handleSubmit}
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-green-700 dark:text-green-300 font-medium">
                    Email client opened! Please send the message from your email app.
                  </span>
                </motion.div>
              )}
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-2 block">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-100 dark:bg-slate-800 border border-transparent p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all" 
                      placeholder="Enter your name" 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-4">
                    <label className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-2 block">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-100 dark:bg-slate-800 border border-transparent p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all" 
                      placeholder="your@email.com" 
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-6">
                    <label className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-2 block">Message</label>
                    <textarea 
                      rows={5} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-100 dark:bg-slate-800 border border-transparent p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all resize-none" 
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all text-lg group ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-primary hover:bg-blue-600 shadow-primary/30'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Opening Email...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;