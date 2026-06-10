import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONTACT } from '../data/site';

const FloatingCta = () => (
  <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3">
    <a
      href={`https://wa.me/${SITE_CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-[#25D366] text-white border-2 border-ink shadow-hard-sm flex items-center justify-center hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <span className="material-symbols-outlined">chat</span>
    </a>
    <Link
      to="/mmc-begin-your-professional-journey"
      className="btn-pop hidden sm:flex items-center gap-2 bg-secondary text-on-secondary px-5 py-3 rounded-full font-body-md text-sm font-bold"
    >
      Enquire Now
      <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </Link>
  </div>
);

export default FloatingCta;
