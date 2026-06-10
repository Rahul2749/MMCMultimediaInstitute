import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
    <div className="absolute inset-0 vfx-grid-pattern opacity-40" />
    <div className="relative z-10 text-center max-w-xl">
      <div className="font-display-xl text-display-xl text-secondary mb-4">404</div>
      <span className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">
        Signal Lost
      </span>
      <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mt-4 mb-6">
        This frame doesn't exist
      </h1>
      <p className="text-on-surface-variant font-body-lg mb-10">
        The page you're looking for has been moved or never rendered. Let's get you back on track.
      </p>
      <Link to="/">
        <button className="bg-secondary text-on-secondary px-10 py-4 font-body-md text-sm font-semibold rounded-lg accent-glow hover:brightness-110 transition-all">
          Back to Home
        </button>
      </Link>
    </div>
  </section>
);

export default NotFound;
