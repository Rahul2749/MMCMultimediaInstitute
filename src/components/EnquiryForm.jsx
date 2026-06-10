import React, { useState } from 'react';
import { COURSES } from '../data/site';

const EnquiryForm = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-3 font-body-md text-on-surface placeholder:text-outline focus:ring-0 focus:border-secondary glow-secondary transition-colors';

  if (submitted) {
    return (
      <div className="tonal-layer-2 rounded-xl p-10 text-center">
        <span className="material-symbols-outlined text-5xl text-secondary mb-4">verified</span>
        <h3 className="font-headline-lg text-title-md mb-2">Enquiry received</h3>
        <p className="text-on-surface-variant">
          Thanks for reaching out. Our admissions team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        <input className={inputClass} placeholder="Full Name" type="text" required />
        <input className={inputClass} placeholder="Email Address" type="email" required />
        <input className={inputClass} placeholder="Phone Number" type="tel" required />
        <select className={inputClass} defaultValue="" required>
          <option value="" disabled>
            Select Course
          </option>
          {COURSES.map((c) => (
            <option key={c.slug} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className={inputClass}
        placeholder="Message (optional)"
        rows={compact ? 2 : 3}
      />
      <p className="font-label-technical text-[10px] text-on-surface-variant leading-relaxed">
        By clicking Submit, I allow MMC to contact me and use my personal data as per the Privacy
        Policy.
      </p>
      <button
        type="submit"
        className="w-full bg-secondary-container text-on-secondary-container px-8 py-4 font-label-technical text-label-technical font-bold rounded-lg inner-glow-btn hover:bg-secondary hover:text-on-secondary transition-all active:scale-[0.99]"
      >
        SUBMIT ENQUIRY
      </button>
    </form>
  );
};

export default EnquiryForm;
