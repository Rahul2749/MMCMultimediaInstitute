import React from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import { CENTRES, SITE_CONTACT } from '../data/site';

const Contact = () => (
  <>
    <section className="relative bg-ink text-on-ink py-24 px-margin-mobile md:px-margin-desktop overflow-hidden grain">
      <div className="absolute inset-0 ink-grid-pattern opacity-40" />
      <div className="absolute -top-20 right-1/4 w-96 h-72 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl">
        <span className="eyebrow-pill on-dark mb-5">
          Contact Us
        </span>
        <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-ink mb-6">
          Let's start your <span className="text-secondary">creative journey</span>
        </h1>
        <p className="text-on-ink-variant font-body-lg">
          Reach our admissions team for course counselling, centre visits, scholarships and enrollment.
        </p>
      </div>
    </section>

    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div className="space-y-8">
          {[
            { icon: 'call', label: 'Phone', value: SITE_CONTACT.phone, href: `tel:${SITE_CONTACT.phone.replace(/\s/g, '')}` },
            { icon: 'mail', label: 'Email', value: SITE_CONTACT.email, href: `mailto:${SITE_CONTACT.email}` },
            { icon: 'schedule', label: 'Hours', value: SITE_CONTACT.hours },
            { icon: 'location_on', label: 'Head Office', value: SITE_CONTACT.address },
          ].map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary">{item.icon}</span>
              </div>
              <div>
                <div className="font-label-technical text-label-technical text-on-surface-variant uppercase mb-1">
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} className="text-on-surface font-body-md hover:text-secondary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-on-surface font-body-md">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div>
            <h3 className="font-title-md text-title-md mb-4">Our Centres</h3>
            <div className="grid grid-cols-2 gap-3">
              {CENTRES.map((c) => (
                <div
                  key={c.city}
                  className="bg-surface border-2 border-ink rounded-lg px-4 py-3 text-sm shadow-hard-sm"
                >
                  <span className="font-semibold text-on-surface">{c.city}</span>
                  <span className="text-on-surface-variant"> · {c.state}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={`https://wa.me/${SITE_CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-body-md text-sm font-bold"
          >
            <span className="material-symbols-outlined">chat</span>
            Chat on WhatsApp
          </a>
        </div>

        <div className="bg-surface pop-card rounded-2xl p-8 h-fit">
          <h2 className="font-title-md text-title-md mb-6">Send an enquiry</h2>
          <EnquiryForm />
        </div>
      </div>
    </section>

    <section className="pb-24 px-margin-mobile md:px-margin-desktop text-center">
      <p className="text-on-surface-variant mb-4">Prefer to explore courses first?</p>
      <Link
        to="/#courses"
        className="inline-flex items-center gap-2 text-secondary font-body-md text-sm font-semibold hover:underline"
      >
        View all courses
        <span className="material-symbols-outlined text-base">arrow_forward</span>
      </Link>
    </section>
  </>
);

export default Contact;
