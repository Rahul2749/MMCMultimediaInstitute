import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CourseTemplate = ({ course }) => {
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
      {/* Hero */}
      <section
        ref={addToRefs}
        className="relative min-h-[60vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-24 overflow-hidden border-b border-outline-variant"
      >
        <div className="absolute inset-0 vfx-grid-pattern opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 tonal-layer-1 rounded-full border border-tertiary/20">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="font-label-technical text-label-technical text-tertiary uppercase">
              {course.eyebrow}
            </span>
          </div>
          <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl mb-6 leading-tight">
            {course.title} <span className="text-secondary italic">{course.titleAccent}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
            {course.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/mmc-begin-your-professional-journey"
              className="bg-secondary-container text-on-secondary-container px-8 py-4 font-label-technical text-label-technical font-bold rounded-lg inner-glow-btn hover:bg-secondary hover:text-on-secondary transition-all"
            >
              ENROLL FOR NEXT INTAKE
            </Link>
            <a
              href="#curriculum"
              className="bg-surface-container-high text-on-surface px-8 py-4 font-label-technical text-label-technical font-bold border border-outline-variant rounded-lg hover:bg-surface-variant transition-colors"
            >
              VIEW CURRICULUM
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum modules */}
      <section
        id="curriculum"
        ref={addToRefs}
        className="px-margin-mobile md:px-margin-desktop py-24 bg-background scroll-mt-16"
      >
        <div className="mb-16">
          <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-4">Core Curriculum</h2>
          <div className="h-1 w-24 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-panel-gap bg-outline-variant border border-outline-variant rounded-xl overflow-hidden">
          {course.modules.map((m) => (
            <div key={m.no} className="tonal-layer-1 p-8 hover:bg-surface-container transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <span className="font-label-technical text-label-technical text-on-surface-variant">
                  MODULE {m.no}
                </span>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  layers
                </span>
              </div>
              <h3 className="font-display-xl text-title-md mb-4 text-primary">{m.title}</h3>
              <p className="text-on-surface-variant mb-8 min-h-[80px]">{m.desc}</p>
              <ul className="space-y-3">
                {m.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container"
                  >
                    <span className="material-symbols-outlined text-sm">check_circle</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section ref={addToRefs} className="py-20 bg-surface-container-lowest border-y border-outline-variant">
        <div className="px-margin-mobile md:px-margin-desktop text-center">
          <p className="font-label-technical text-label-technical text-outline uppercase mb-12 tracking-widest">
            Industry Standard Toolset
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {course.tools.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded bg-primary-container flex items-center justify-center border border-outline-variant">
                  <span className={`font-bold text-2xl ${t.color}`}>{t.abbr}</span>
                </div>
                <span className="font-label-technical text-label-technical">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={addToRefs} className="px-margin-mobile md:px-margin-desktop py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3 tonal-layer-2 p-12 rounded-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl" />
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-4">
              Start your {course.titleAccent.toLowerCase()} journey.
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mb-8">
              Limited seats per intake to ensure personalised mentorship and individual portfolio
              feedback.
            </p>
            <div>
              <Link
                to="/mmc-begin-your-professional-journey"
                className="inline-block bg-secondary text-on-secondary px-10 py-5 font-label-technical text-label-technical font-bold rounded-lg inner-glow-btn hover:shadow-[0_0_20px_rgba(255,179,182,0.3)] transition-all active:scale-95"
              >
                ENROLL FOR NEXT INTAKE
              </Link>
            </div>
          </div>
          <div className="md:col-span-1 tonal-layer-1 p-8 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4">event_available</span>
            <span className="font-label-technical text-label-technical text-outline mb-1">NEXT START</span>
            <span className="font-display-xl text-title-md text-on-surface">Rolling Intake</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseTemplate;
