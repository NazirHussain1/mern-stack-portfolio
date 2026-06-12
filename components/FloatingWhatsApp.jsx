import React from 'react';
import { PHONE } from '../constants.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const FloatingWhatsApp = () => {
  const message = 'Hi Nazir, I visited your portfolio and would like to discuss a project or opportunity.';
  const whatsappUrl = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nazir on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl shadow-green-900/25 transition hover:-translate-y-1 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/40"
    >
      <WhatsAppIcon size={28} aria-hidden="true" />
    </a>
  );
};

export default FloatingWhatsApp;
