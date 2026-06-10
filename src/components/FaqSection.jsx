import React, { useState } from 'react';

const FaqSection = ({ items, id = 'faq' }) => {
  const [open, setOpen] = useState(0);

  return (
    <section id={id} className="py-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
      <div className="reveal-head mb-12 max-w-3xl">
        <span className="eyebrow-pill mb-5">
          FAQ
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
          Questions? <span className="text-secondary">We've got answers.</span>
        </h2>
      </div>
      <div className="max-w-3xl space-y-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="bg-surface border-2 border-ink rounded-xl overflow-hidden shadow-hard-sm"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-surface-container-low transition-colors"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className="font-title-md text-base text-on-surface">{item.q}</span>
                <span className="material-symbols-outlined text-secondary flex-shrink-0">
                  {isOpen ? 'remove' : 'add'}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-on-surface-variant font-body-md border-t border-outline-variant pt-4">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
