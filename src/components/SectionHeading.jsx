import React from 'react';

const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  dark = false,
  className = '',
}) => (
  <div className={`reveal-head max-w-3xl ${className}`}>
    {eyebrow && (
      <span className={`eyebrow-pill mb-5 ${dark ? 'on-dark' : ''}`}>
        {eyebrow}
      </span>
    )}
    <h2
      className={`font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 ${
        dark ? 'text-on-ink' : ''
      }`}
    >
      {title}
      {highlight && (
        <>
          {' '}
          <span className="text-secondary">{highlight}</span>
        </>
      )}
    </h2>
    {description && (
      <p className={`font-body-lg ${dark ? 'text-on-ink-variant' : 'text-on-surface-variant'}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
