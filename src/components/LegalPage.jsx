import React from 'react';
import { Link } from 'react-router-dom';

const LegalPage = ({ title, children }) => (
  <div className="px-margin-mobile md:px-margin-desktop py-20 max-w-3xl mx-auto">
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-secondary font-body-md text-sm font-semibold mb-8 hover:underline"
    >
      <span className="material-symbols-outlined text-base">arrow_back</span>
      Back to Home
    </Link>
    <h1 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-8">{title}</h1>
    <div className="prose prose-neutral max-w-none space-y-6 text-on-surface-variant font-body-md leading-relaxed">
      {children}
    </div>
  </div>
);

export default LegalPage;
