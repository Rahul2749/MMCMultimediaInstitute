import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CourseTemplate = ({ course }) => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      if (reduce) return;

      // Hero entrance
      gsap
        .timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
        .from('.ct-badge', { y: 20, opacity: 0, duration: 0.5 })
        .from('.ct-title', { y: 32, opacity: 0 }, '-=0.2')
        .from('.ct-sub', { y: 28, opacity: 0 }, '-=0.5')
        .from('.ct-cta > *', { y: 20, opacity: 0, stagger: 0.12, clearProps: 'all' }, '-=0.5');

      // Modules stagger
      const grid = q('.ct-modules')[0];
      if (grid) {
        gsap.from(grid.children, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: grid, start: 'top 85%' },
        });
      }

      // Tools pop-in
      const tools = q('.ct-tools')[0];
      if (tools) {
        gsap.from(tools.children, {
          opacity: 0,
          y: 20,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.6)',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: tools, start: 'top 90%' },
        });
      }

      // Section fades
      q('.ct-fade').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      {/* Hero (dark cinematic spotlight) */}
      <section className="relative min-h-[58vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-24 overflow-hidden bg-ink text-on-ink">
        <div className="absolute inset-0 ink-grid-pattern opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="ct-badge sticker bg-tertiary text-on-tertiary mb-6 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-on-tertiary animate-pulse" />
            <span className="font-label-technical text-[11px] font-bold uppercase tracking-widest">
              {course.eyebrow}
            </span>
          </div>
          <h1 className="ct-title font-display-xl text-headline-lg-mobile md:text-display-xl text-on-ink mb-6 leading-[1.0]">
            {course.title} <span className="text-secondary">{course.titleAccent}</span>
          </h1>
          <p className="ct-sub font-body-lg text-body-lg text-on-ink-variant max-w-2xl mb-10">
            {course.intro}
          </p>
          <div className="ct-cta flex flex-wrap gap-5">
            <Link
              to="/mmc-begin-your-professional-journey"
              className="btn-pop-light bg-secondary text-on-secondary px-8 py-4 font-body-md text-sm font-bold rounded-lg"
            >
              Enroll for Next Intake
            </Link>
            <a
              href="#curriculum"
              className="border-2 border-on-ink/30 text-on-ink px-8 py-4 font-body-md text-sm font-bold rounded-lg hover:border-tertiary hover:text-tertiary transition-colors"
            >
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum modules */}
      <section
        id="curriculum"
        className="px-margin-mobile md:px-margin-desktop py-24 bg-background scroll-mt-16"
      >
        <div className="ct-fade mb-16">
          <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-4">Core Curriculum</h2>
          <div className="h-1.5 w-24 bg-secondary rounded-full border-2 border-ink" />
        </div>
        <div className="ct-modules grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {course.modules.map((m) => (
            <div key={m.no} className="bg-surface pop-card rounded-2xl p-8 group">
              <div className="flex justify-between items-start mb-12">
                <span className="font-label-technical text-label-technical text-on-surface-variant">
                  MODULE {m.no}
                </span>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  layers
                </span>
              </div>
              <h3 className="font-title-md text-title-md mb-4 text-on-surface">{m.title}</h3>
              <p className="text-on-surface-variant mb-8 min-h-[80px]">{m.desc}</p>
              <ul className="space-y-3">
                {m.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 font-body-md text-sm text-on-surface"
                  >
                    <span className="material-symbols-outlined text-base text-secondary">check_circle</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant">
        <div className="px-margin-mobile md:px-margin-desktop text-center">
          <p className="ct-fade font-label-technical text-label-technical text-on-surface-variant uppercase mb-12 tracking-widest">
            Industry Standard Toolset
          </p>
          <div className="ct-tools flex flex-wrap justify-center items-center gap-16">
            {course.tools.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-surface flex items-center justify-center border-2 border-ink shadow-hard-sm">
                  <span className={`font-bold text-2xl ${t.color}`}>{t.abbr}</span>
                </div>
                <span className="font-label-technical text-label-technical text-on-surface-variant">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (dark spotlight) */}
      <section className="px-margin-mobile md:px-margin-desktop py-24 bg-background">
        <div className="ct-fade grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3 bg-ink text-on-ink p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden grain border-2 border-ink shadow-hard-coral">
            <div className="absolute inset-0 ink-grid-pattern opacity-40" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/25 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-ink mb-4">
                Start your {course.titleAccent.toLowerCase()} journey.
              </h2>
              <p className="text-body-lg text-on-ink-variant max-w-xl mb-8">
                Limited seats per intake to ensure personalised mentorship and individual portfolio
                feedback.
              </p>
              <Link
                to="/mmc-begin-your-professional-journey"
                className="btn-pop-light inline-block bg-secondary text-on-secondary px-10 py-4 font-body-md text-sm font-bold rounded-lg"
              >
                Enroll for Next Intake
              </Link>
            </div>
          </div>
          <div className="md:col-span-1 bg-surface pop-card p-8 rounded-3xl flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">event_available</span>
            <span className="font-label-technical text-label-technical text-on-surface-variant mb-1">NEXT START</span>
            <span className="font-display-xl text-title-md text-on-surface">Rolling Intake</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseTemplate;
