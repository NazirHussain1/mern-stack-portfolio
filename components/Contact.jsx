import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL, PHONE, LOCATION } from '../constants.js';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${PHONE.replace(/\+/g, '')}`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    customProject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('mlHH4nH8xbBhqOlV5'); // Initialize with your public key
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceID = 'service_logq1j1'; // Your correct Service ID
      const templateID = 'template_3p8kkab'; // Your Template ID  
      const publicKey = 'mlHH4nH8xbBhqOlV5'; // Your Public Key
      
      console.log('Sending email with:', { serviceID, templateID, publicKey });
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        project: formData.project === 'Other' ? formData.customProject : formData.project,
        message: formData.message,
        time: new Date().toLocaleString(), // Add current date and time
        from_name: formData.name,
        from_email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        reply_to: formData.email,
        to_email: EMAIL, // Your professional email (nh534392@gmail.com)
        subject: `New Portfolio Message from ${formData.name} - ${formData.project === 'Other' ? formData.customProject : formData.project || 'General Inquiry'}`
      };
      
      console.log('Template params:', templateParams);
      
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('Email sent successfully:', result);
      
      // Show success message
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', project: '', customProject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      
      // More detailed error message
      let errorMessage = 'Failed to send message. ';
      if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage += `Error: ${error.message}`;
      } else {
        errorMessage += 'Please check your internet connection and try again.';
      }
      
      alert(errorMessage + '\n\nYou can also contact directly via email: ' + EMAIL);
    }
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
                    Message sent successfully! I'll get back to you soon.
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
                  <div className="form-group mb-4">
                    <label className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-2 block">Project Type <span className="text-slate-400">(Optional)</span></label>
                    <select 
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full bg-slate-100 dark:bg-slate-800 border border-transparent p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all"
                    >
                      <option value="">Select project type (optional)...</option>
                      <option value="Full Stack Web Application">Full Stack Web Application</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="Backend API Development">Backend API Development</option>
                      <option value="MERN Stack Project">MERN Stack Project</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Business Website">Business Website</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="Mobile App (React Native)">Mobile App (React Native)</option>
                      <option value="Database Design & Integration">Database Design & Integration</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                {/* Custom Project Input - Shows only when "Other" is selected */}
                {formData.project === 'Other' && (
                  <div className="col-12">
                    <div className="form-group mb-4">
                      <label className="text-sm font-bold uppercase text-slate-500 tracking-wider mb-2 block">Custom Project Type</label>
                      <input 
                        type="text" 
                        name="customProject"
                        value={formData.customProject}
                        onChange={handleInputChange}
                        className="w-full bg-slate-100 dark:bg-slate-800 border border-transparent p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 outline-none transition-all" 
                        placeholder="Enter your custom project type..." 
                      />
                    </div>
                  </div>
                )}
                
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
                      placeholder="Tell me about your project requirements, timeline, budget, and any specific details..."
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
                    Sending Message...
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