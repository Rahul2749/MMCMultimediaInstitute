import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnquiryForm from '../components/EnquiryForm';
import {
  STATS,
  COURSES,
  WHY_CHOOSE,
  RECRUITERS,
  SUPERSTARS,
  TESTIMONIALS,
  EVENTS,
} from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const badgeColor = {
  purple: 'bg-purple-600 text-white',
  tertiary: 'bg-tertiary text-on-tertiary',
  secondary: 'bg-secondary text-on-secondary',
  'on-surface': 'bg-on-surface text-background',
};

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 85%' },
          }
        );
      }
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <>
      {/* ===== Hero ===== */}
      <section ref={addToRefs} className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 vfx-grid-pattern opacity-40" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-5xl py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-technical text-[10px] uppercase tracking-widest text-on-surface-variant">
              Career-Focused AVGC-XR Training
            </span>
          </div>
          <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-surface mb-6 leading-[0.95]">
            Turn Your Creative Passion Into a <span className="text-secondary">Thriving Career</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            MMC Multimedia Institute trains the next generation of animators, VFX artists, designers
            and filmmakers — with industry-grade tools, expert mentors and real placement support.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#courses"
              className="bg-secondary-container text-on-secondary-container px-10 py-4 font-label-technical text-label-technical font-bold rounded-lg inner-glow-btn hover:bg-secondary hover:text-on-secondary transition-all flex items-center gap-3"
            >
              EXPLORE COURSES
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="#enquiry"
              className="border border-outline-variant text-on-surface px-10 py-4 font-label-technical text-label-technical font-bold rounded-lg hover:bg-surface-container-highest transition-all"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </section>

      {/* ===== Stats Bar ===== */}
      <section ref={addToRefs} className="border-y border-outline-variant bg-surface-container-lowest">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-outline-variant">
          {STATS.map((s) => (
            <div key={s.label} className="px-margin-mobile md:px-8 py-10 text-center">
              <div className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-secondary mb-2">
                {s.value}
              </div>
              <div className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Why Choose MMC ===== */}
      <section id="why-mmc" ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
        <div className="mb-16 max-w-3xl">
          <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
            Why MMC
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Choosing MMC means choosing a <span className="text-secondary">job-ready future</span>
          </h2>
          <p className="text-on-surface-variant font-body-lg">
            Everything we do is engineered to help you build a successful career in the AVGC-XR
            industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-panel-gap bg-outline-variant border border-outline-variant rounded-xl overflow-hidden">
          {WHY_CHOOSE.map((w) => (
            <div key={w.title} className="bg-surface-container-low p-8 hover:bg-surface-container transition-colors group">
              <div className="w-12 h-12 rounded bg-surface-container border border-outline-variant flex items-center justify-center mb-6 group-hover:border-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {w.icon}
                </span>
              </div>
              <h3 className="font-title-md text-title-md mb-2">{w.title}</h3>
              <p className="text-on-surface-variant">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Our Courses ===== */}
      <section id="courses" ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant scroll-mt-16">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
              Our Courses
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
              Industry-aligned programs for <span className="text-secondary">future-ready careers</span>
            </h2>
          </div>
          <Link
            to="/mmc-3d-animation-curriculum"
            className="font-label-technical text-label-technical text-on-surface border border-outline-variant rounded-lg px-6 py-3 hover:bg-surface-container-highest transition-colors flex items-center gap-2"
          >
            VIEW ALL
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {COURSES.map((c) => (
            <Link
              key={c.slug}
              to={c.slug}
              className="group relative overflow-hidden rounded-xl bg-surface-container h-[360px] technical-stroke flex flex-col justify-end"
            >
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className={`px-3 py-1 font-label-technical text-[10px] rounded uppercase font-bold ${badgeColor[c.color] || 'bg-secondary text-on-secondary'}`}>
                  {c.code}
                </span>
                <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur-sm text-on-surface font-label-technical text-[10px] rounded uppercase">
                  {c.duration}
                </span>
              </div>
              <div className="relative z-10 p-6">
                <h3 className="font-title-md text-title-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                  {c.title}
                </h3>
                <p className="text-on-surface-variant mb-4">{c.tagline}</p>
                <span className="font-label-technical text-label-technical text-secondary flex items-center gap-2">
                  Enquire Now
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Recruiters ===== */}
      <section id="recruiters" ref={addToRefs} className="py-24 bg-background scroll-mt-16 overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop mb-12 max-w-3xl">
          <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
            Recruiter's Choice
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Graduates preferred by <span className="text-secondary">top recruiters</span>
          </h2>
          <p className="text-on-surface-variant font-body-lg">
            Equipped with advanced technical skills, adaptability and creativity to excel on a global
            level across AVGC-XR industries.
          </p>
        </div>
        <div className="relative">
          <div className="marquee-track">
            {[...RECRUITERS, ...RECRUITERS].map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 px-8 py-6 tonal-layer-1 rounded-lg font-display-xl text-title-md font-bold text-on-surface-variant whitespace-nowrap opacity-70 hover:opacity-100 hover:text-secondary transition-all"
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Alumni Superstars ===== */}
      <section ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant">
        <div className="mb-16 max-w-3xl">
          <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
            MMC Superstars
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Our alumni shine on the <span className="text-secondary">world's biggest screens</span>
          </h2>
          <p className="text-on-surface-variant font-body-lg">
            From blockbuster films to award-winning productions, MMC graduates contribute to projects
            that inspire audiences worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {SUPERSTARS.map((s) => (
            <div key={s.name} className="tonal-layer-1 rounded-xl p-6 group hover:border-secondary transition-colors">
              <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">movie</span>
              <div className="font-label-technical text-[10px] text-on-surface-variant uppercase mb-1">Featured in</div>
              <div className="font-title-md text-title-md text-secondary mb-4">{s.project}</div>
              <div className="border-t border-outline-variant pt-4">
                <div className="font-title-md text-sm text-on-surface">{s.name}</div>
                <div className="font-label-technical text-label-technical text-on-surface-variant">
                  {s.role} · {s.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Enquiry CTA + Form ===== */}
      <section id="enquiry" ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
              Student Enquiry
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">
              Your story could be the next <span className="text-secondary">success we celebrate</span>
            </h2>
            <p className="text-on-surface-variant font-body-lg mb-8">
              Join MMC Multimedia Institute and turn your creative passion into a thriving career.
              Tell us a little about yourself and our admissions team will guide you.
            </p>
            <div className="flex flex-col gap-4">
              {['Personalised course counselling', 'Scholarship & financing options', 'Portfolio & placement guidance'].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-on-surface">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="tonal-layer-2 rounded-xl p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant">
        <div className="mb-16 max-w-3xl">
          <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
            Recruiter Testimonials
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
            Trusted by the <span className="text-secondary">industry</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="tonal-layer-1 rounded-xl p-8 flex flex-col">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">format_quote</span>
              <p className="text-on-surface-variant font-body-lg mb-8 flex-grow">{t.quote}</p>
              <div className="border-t border-outline-variant pt-4">
                <div className="font-title-md text-sm text-on-surface">{t.name}</div>
                <div className="font-label-technical text-label-technical text-secondary">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Events ===== */}
      <section id="events" ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
        <div className="mb-16 max-w-3xl">
          <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
            Our Events
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Where <span className="text-secondary">creativity thrives</span>
          </h2>
          <p className="text-on-surface-variant font-body-lg">
            From workshops to competitions and live projects, MMC offers students exciting experiences
            beyond the classroom.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {EVENTS.map((e) => (
            <div key={e.title} className="group relative overflow-hidden rounded-xl tonal-layer-1 p-8 hover:border-secondary transition-colors">
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-secondary-container/10 rounded-full blur-2xl group-hover:bg-secondary-container/20 transition-all" />
              <span className="font-label-technical text-[10px] text-secondary border border-outline-variant rounded px-3 py-1 uppercase tracking-widest">
                {e.tag}
              </span>
              <h3 className="font-title-md text-title-md mt-6 mb-3">{e.title}</h3>
              <p className="text-on-surface-variant">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section ref={addToRefs} className="px-margin-mobile md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant">
        <div className="relative tonal-layer-2 rounded-2xl p-10 md:p-16 overflow-hidden text-center">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-6">
              Ready to build a career that <span className="text-secondary">recruiters value?</span>
            </h2>
            <p className="text-on-surface-variant font-body-lg mb-10">
              Discover the MMC advantage and gain industry-ready skills for top careers in animation,
              VFX, gaming, design and more.
            </p>
            <Link to="/mmc-begin-your-professional-journey">
              <button className="bg-secondary-container text-on-secondary-container px-12 py-5 font-label-technical text-label-technical font-bold rounded-lg inner-glow-btn accent-glow hover:bg-secondary hover:text-on-secondary transition-all active:scale-95">
                ENQUIRE NOW
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
