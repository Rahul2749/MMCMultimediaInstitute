import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnquiryForm from '../components/EnquiryForm';
import SectionHeading from '../components/SectionHeading';
import FaqSection from '../components/FaqSection';
import {
  STATS,
  COURSES,
  WHY_CHOOSE,
  RECRUITERS,
  SUPERSTARS,
  TESTIMONIALS,
  EVENTS,
  TRAINING_PARTNERS,
  STUDENT_WORK,
  FACULTY_PREVIEW,
  STUDENT_TESTIMONIALS,
  CAMPUS_FACILITIES,
  AWARDS,
  FAQ,
} from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const badgeColor = {
  purple: 'bg-purple-600 text-white',
  tertiary: 'bg-tertiary text-on-tertiary',
  secondary: 'bg-secondary text-on-secondary',
  'on-surface': 'bg-on-surface text-surface',
};

const STAGGER_GRIDS =
  '.why-grid, .courses-grid, .partners-grid, .work-grid, .stars-grid, .faculty-grid, .st-grid, .tg-grid, .campus-grid, .events-grid, .awards-grid';

const parseStat = (value) => {
  const m = String(value).match(/^([\d.]+)(.*)$/);
  return m ? { num: parseFloat(m[1]), suffix: m[2] } : { num: 0, suffix: value };
};

const SpotlightCta = ({ eyebrow, title, highlight, desc, ctaLabel, ctaTo = '/mmc-begin-your-professional-journey', ctaHash }) => (
  <section className="px-margin-mobile md:px-margin-desktop py-16 bg-background">
    <div className="fade-up relative bg-ink text-on-ink rounded-3xl p-10 md:p-14 overflow-hidden">
      <div className="absolute inset-0 ink-grid-pattern opacity-40" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-2xl">
        {eyebrow && (
          <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-ink mb-4">
          {title} {highlight && <span className="text-secondary">{highlight}</span>}
        </h2>
        <p className="text-on-ink-variant font-body-lg mb-8">{desc}</p>
        {ctaHash ? (
          <a
            href={ctaHash}
            className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 font-body-md text-sm font-semibold rounded-lg accent-glow hover:brightness-110 transition-all"
          >
            {ctaLabel}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        ) : (
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 font-body-md text-sm font-semibold rounded-lg accent-glow hover:brightness-110 transition-all"
          >
            {ctaLabel}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        )}
      </div>
    </div>
  </section>
);

const Home = () => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context((self) => {
      const q = self.selector;
      if (reduce) return;

      gsap
        .timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
        .from('.hero-badge', { y: 20, opacity: 0, duration: 0.5 })
        .from('.hero-title', { y: 32, opacity: 0 }, '-=0.2')
        .from('.hero-sub', { y: 28, opacity: 0 }, '-=0.5')
        .from('.hero-cta > *', { y: 20, opacity: 0, stagger: 0.12 }, '-=0.5')
        .from('.hero-panel', { x: 48, opacity: 0, duration: 1, clearProps: 'all' }, '-=0.7');

      STAGGER_GRIDS.split(', ').forEach((sel) => {
        const el = q(sel)[0];
        if (!el) return;
        gsap.from(el.children, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      q('.fade-up').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      q('.reveal-head').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      const statsRow = q('.stats-row')[0];
      if (statsRow) {
        gsap.from(statsRow, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: statsRow, start: 'top 92%' },
        });
        ScrollTrigger.create({
          trigger: statsRow,
          start: 'top 90%',
          once: true,
          onEnter: () =>
            q('.stat-num').forEach((el) => {
              const target = parseFloat(el.dataset.value);
              const suffix = el.dataset.suffix || '';
              const obj = { v: 0 };
              gsap.to(obj, {
                v: target,
                duration: 1.6,
                ease: 'power2.out',
                onUpdate: () => {
                  el.textContent =
                    (Number.isInteger(target) ? Math.round(obj.v) : obj.v.toFixed(0)) + suffix;
                },
              });
            }),
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      {/* Hero */}
      <section className="relative bg-ink text-on-ink overflow-hidden">
        <div className="absolute inset-0 ink-grid-pattern opacity-60" />
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop pt-24 pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-technical text-[10px] uppercase tracking-widest text-on-ink-variant">
                Career-Focused AVGC-XR Training
              </span>
            </div>
            <h1 className="hero-title font-display-xl text-headline-lg-mobile md:text-display-xl text-on-ink mb-6 leading-[1.02]">
              Turn Your Creative Passion Into a <span className="text-secondary">Thriving Career</span>
            </h1>
            <p className="hero-sub font-body-lg text-body-lg text-on-ink-variant mb-10">
              MMC Multimedia Institute trains the next generation of animators, VFX artists, designers
              and filmmakers — with industry-grade tools, expert mentors and real placement support.
            </p>
            <div className="hero-cta flex flex-wrap gap-4">
              <a
                href="#courses"
                className="bg-secondary text-on-secondary px-8 py-4 font-body-md text-sm font-semibold rounded-lg accent-glow hover:brightness-110 transition-all flex items-center gap-2"
              >
                Explore Courses
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
              <a
                href="#enquiry"
                className="border border-white/15 text-on-ink px-8 py-4 font-body-md text-sm font-semibold rounded-lg hover:bg-white/5 transition-all"
              >
                Book a Call
              </a>
            </div>
          </div>
          <div className="hero-panel hidden lg:block lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-label-technical text-label-technical text-secondary">ACTIVE_TIMELINE</span>
                <span className="material-symbols-outlined text-on-ink-variant">tune</span>
              </div>
              <div className="h-32 bg-black/40 rounded-lg border border-white/10 relative overflow-hidden">
                <div className="scrubber-thumb" style={{ left: '45%' }} />
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-1/2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-[10px] font-label-technical text-on-ink-variant mb-1">FPS</div>
                  <div className="font-label-technical text-on-ink">23.976</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-[10px] font-label-technical text-on-ink-variant mb-1">CODEC</div>
                  <div className="font-label-technical text-on-ink">ProRes 4444</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop -mb-16 translate-y-16">
          <div className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant rounded-2xl overflow-hidden border border-outline-variant soft-shadow">
            {STATS.map((s) => {
              const { num, suffix } = parseStat(s.value);
              return (
                <div key={s.label} className="bg-surface px-6 py-8 text-center">
                  <div className="stat-num font-display-xl text-headline-lg-mobile text-secondary mb-1" data-value={num} data-suffix={suffix}>
                    {s.value}
                  </div>
                  <div className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why MMC */}
      <section id="why-mmc" className="pt-40 pb-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
        <SectionHeading
          eyebrow="Why MMC"
          title="Choosing MMC means choosing a"
          highlight="job-ready future"
          description="Everything we do is engineered to help you build a successful career in the AVGC-XR industry."
          className="mb-16"
        />
        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {WHY_CHOOSE.map((w) => (
            <div key={w.title} className="bg-surface border border-outline-variant rounded-xl p-8 hover:-translate-y-1 hover:soft-shadow hover:border-secondary/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>{w.icon}</span>
              </div>
              <h3 className="font-title-md text-title-md mb-2">{w.title}</h3>
              <p className="text-on-surface-variant">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry #1 */}
      <section id="enquiry" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="fade-up">
            <SectionHeading
              eyebrow="Student Enquiry"
              title="Join MMC and turn your passion into a"
              highlight="thriving career"
              description="Tell us about yourself — our admissions team will guide you through courses, batches and financing options."
            />
          </div>
          <div className="fade-up bg-surface border border-outline-variant rounded-2xl p-8 soft-shadow">
            <EnquiryForm compact />
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
        <div className="reveal-head flex flex-wrap items-end justify-between gap-6 mb-16">
          <SectionHeading eyebrow="Our Courses" title="Industry-aligned programs for" highlight="future-ready careers" />
          <Link to="/mmc-3d-animation-curriculum" className="font-body-md text-sm font-semibold text-on-surface border border-outline-variant bg-surface rounded-lg px-6 py-3 hover:border-secondary hover:text-secondary transition-colors flex items-center gap-2">
            View All <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
        <div className="courses-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {COURSES.map((c) => (
            <Link key={c.slug} to={c.slug} className="group bg-surface border border-outline-variant rounded-2xl overflow-hidden hover:-translate-y-1 hover:soft-shadow hover:border-secondary/40 transition-all duration-300 flex flex-col">
              <div className="relative h-44 overflow-hidden bg-surface-container-high">
                {c.image ? (
                  <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/25 via-tertiary/10 to-transparent" />
                )}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 font-label-technical text-[10px] rounded uppercase font-bold ${badgeColor[c.color] || 'bg-secondary text-on-secondary'}`}>{c.code}</span>
                  <span className="px-3 py-1 bg-surface/90 backdrop-blur-sm font-label-technical text-[10px] rounded uppercase">{c.duration}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-title-md text-title-md mb-2 group-hover:text-secondary transition-colors">{c.title}</h3>
                <p className="text-on-surface-variant mb-6 flex-grow">{c.tagline}</p>
                <span className="font-body-md text-sm font-semibold text-secondary flex items-center gap-2">
                  Enquire Now <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Training Partners */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant">
        <SectionHeading
          eyebrow="Training Partners"
          title="Curriculum aligned with"
          highlight="global industry standards"
          description="Partnered with leading software and studio technology providers to ensure your skills match what employers need."
          className="mb-12 text-center mx-auto"
        />
        <div className="partners-grid flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {TRAINING_PARTNERS.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2 px-6 py-4 bg-surface border border-outline-variant rounded-xl min-w-[120px] hover:border-secondary/40 transition-colors">
              <span className="font-display-xl text-xl font-bold text-secondary">{p.abbr}</span>
              <span className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiters */}
      <section id="recruiters" className="py-24 bg-background scroll-mt-16 overflow-hidden">
        <SectionHeading
          eyebrow="Recruiter's Choice"
          title="Graduates preferred by"
          highlight="top recruiters"
          description="Equipped with advanced technical skills, adaptability and creativity to excel across AVGC-XR industries."
          className="px-margin-mobile md:px-margin-desktop mb-12"
        />
        <div className="marquee-track">
          {[...RECRUITERS, ...RECRUITERS].map((r, i) => (
            <div key={i} className="flex-shrink-0 mx-3 px-8 py-5 bg-surface border border-outline-variant rounded-xl font-display-xl text-lg font-bold text-on-surface-variant whitespace-nowrap hover:text-secondary hover:border-secondary/40 transition-all">
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* Hands-on Training CTA */}
      <SpotlightCta
        eyebrow="Hands-On Training"
        title="Your creative career starts with"
        highlight="real projects"
        desc="Work on live briefs, studio pipelines and portfolio pieces — not just tutorials. Graduate with work recruiters can evaluate."
        ctaLabel="Enroll Now"
      />

      {/* Student Work */}
      <section id="student-work" className="py-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
        <div className="reveal-head flex flex-wrap items-end justify-between gap-6 mb-16">
          <SectionHeading eyebrow="Student Work" title="Made at" highlight="MMC" description="Explore the creative brilliance of our students — projects that blend imagination and industry expertise." />
          <Link to="/mmc-student-work-gallery" className="font-body-md text-sm font-semibold text-on-surface border border-outline-variant bg-surface rounded-lg px-6 py-3 hover:border-secondary hover:text-secondary transition-colors flex items-center gap-2">
            View Gallery <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
        <div className="work-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {STUDENT_WORK.map((w) => (
            <Link key={w.title} to="/mmc-student-work-gallery" className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-outline-variant hover:border-secondary/40 transition-all">
              <img src={w.image} alt={w.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-label-technical text-[10px] text-secondary uppercase tracking-widest">{w.category}</span>
                <h3 className="font-title-md text-base text-on-ink mt-1">{w.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Superstars */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-ink text-on-ink relative overflow-hidden">
        <div className="absolute inset-0 ink-grid-pattern opacity-40" />
        <div className="relative z-10">
          <SectionHeading eyebrow="MMC Superstars" title="Our alumni shine on the" highlight="world's biggest screens" dark className="mb-16" />
          <div className="stars-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {SUPERSTARS.map((s) => (
              <div key={s.name} className="ink-card rounded-xl p-6 hover:border-secondary/50 transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">movie</span>
                <div className="font-label-technical text-[10px] text-on-ink-variant uppercase mb-1">Featured in</div>
                <div className="font-title-md text-title-md text-secondary mb-4">{s.project}</div>
                <div className="border-t border-ink-outline pt-4">
                  <div className="font-title-md text-sm text-on-ink">{s.name}</div>
                  <div className="font-label-technical text-label-technical text-on-ink-variant">{s.role} · {s.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section id="faculty" className="py-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
        <div className="reveal-head flex flex-wrap items-end justify-between gap-6 mb-16">
          <SectionHeading eyebrow="Expert Faculty" title="Learn from" highlight="industry mentors" description="Award-winning supervisors, lead animators and senior editors actively shaping global entertainment." />
          <Link to="/mmc-faculty-mentors" className="font-body-md text-sm font-semibold text-on-surface border border-outline-variant bg-surface rounded-lg px-6 py-3 hover:border-secondary hover:text-secondary transition-colors flex items-center gap-2">
            Meet Faculty <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
        <div className="faculty-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {FACULTY_PREVIEW.map((f) => (
            <Link key={f.name} to={f.slug} className="group bg-surface border border-outline-variant rounded-2xl overflow-hidden hover:-translate-y-1 hover:soft-shadow hover:border-secondary/40 transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-high">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-title-md text-base mb-1 group-hover:text-secondary transition-colors">{f.name}</h3>
                <p className="font-label-technical text-[10px] text-secondary uppercase mb-3">{f.role}</p>
                <div className="flex flex-wrap gap-1">
                  {f.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-surface-container-low border border-outline-variant text-[10px] font-label-technical rounded">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Job-Ready CTA */}
      <SpotlightCta
        eyebrow="Get Job-Ready Skills"
        title="Build a portfolio that"
        highlight="gets you hired"
        desc="Capstone projects, mentor reviews and placement prep — everything you need to stand out in AVGC-XR hiring."
        ctaLabel="Start Your Application"
        ctaTo="/mmc-begin-your-professional-journey"
      />

      {/* Recruiter Testimonials */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant">
        <SectionHeading eyebrow="Recruiter Testimonials" title="Trusted by the" highlight="industry" className="mb-16" />
        <div className="tg-grid grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-surface border border-outline-variant rounded-xl p-8 flex flex-col soft-shadow">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">format_quote</span>
              <p className="text-on-surface font-body-lg mb-8 flex-grow">{t.quote}</p>
              <div className="border-t border-outline-variant pt-4">
                <div className="font-title-md text-sm">{t.name}</div>
                <div className="font-label-technical text-label-technical text-secondary">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
        <SectionHeading eyebrow="Student Testimonials" title="Hear from our" highlight="graduates" description="Students from across India share how MMC training empowered their creative careers." className="mb-16" />
        <div className="st-grid grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {STUDENT_TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-surface border border-outline-variant rounded-xl p-8 soft-shadow">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4">school</span>
              <p className="text-on-surface font-body-md mb-6">{t.quote}</p>
              <div className="border-t border-outline-variant pt-4">
                <div className="font-title-md text-sm">{t.name}</div>
                <div className="font-label-technical text-[10px] text-on-surface-variant">{t.course} · {t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant scroll-mt-16">
        <SectionHeading
          eyebrow="Your Gateway to Innovation"
          title="Step into a campus built for"
          highlight="creativity"
          description="Explore vibrant spaces where ideas come to life, students collaborate and live projects take shape."
          className="mb-16"
        />
        <div className="campus-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {CAMPUS_FACILITIES.map((c) => (
            <div key={c.title} className="bg-surface border border-outline-variant rounded-xl p-8 hover:-translate-y-1 hover:soft-shadow hover:border-secondary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>{c.icon}</span>
              </div>
              <h3 className="font-title-md text-base mb-2">{c.title}</h3>
              <p className="text-on-surface-variant text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
        <SectionHeading eyebrow="Our Events" title="Where" highlight="creativity thrives" description="Workshops, competitions and live projects beyond the classroom." className="mb-16" />
        <div className="events-grid grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {EVENTS.map((e) => (
            <div key={e.title} className="group bg-surface border border-outline-variant rounded-xl p-8 hover:-translate-y-1 hover:soft-shadow hover:border-secondary/40 transition-all duration-300">
              <span className="font-label-technical text-[10px] text-secondary border border-secondary/30 bg-secondary/5 rounded px-3 py-1 uppercase tracking-widest">{e.tag}</span>
              <h3 className="font-title-md text-title-md mt-6 mb-3">{e.title}</h3>
              <p className="text-on-surface-variant mb-4">{e.desc}</p>
              <span className="font-body-md text-sm font-semibold text-secondary flex items-center gap-1">
                Know More <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant scroll-mt-16">
        <SectionHeading eyebrow="Awards" title="Recognised for" highlight="excellence" description="Prestigious honours that reflect our commitment to quality AVGC-XR education." className="mb-16" />
        <div className="awards-grid grid grid-cols-1 sm:grid-cols-2 gap-gutter max-w-4xl">
          {AWARDS.map((a) => (
            <div key={a.title} className="flex gap-5 bg-surface border border-outline-variant rounded-xl p-6 soft-shadow">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-2xl">emoji_events</span>
              </div>
              <div>
                <div className="font-label-technical text-[10px] text-secondary mb-1">{a.year}</div>
                <h3 className="font-title-md text-base mb-1">{a.title}</h3>
                <p className="text-on-surface-variant text-sm">{a.org}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FaqSection items={FAQ} id="faq" />

      {/* Partner With Us */}
      <section id="partner" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant scroll-mt-16">
        <div className="fade-up max-w-3xl mx-auto text-center">
          <SectionHeading
            eyebrow="Partner With Us"
            title="Join hands with MMC — a leader in"
            highlight="creative education"
            description="Partner with us to empower students and transform creative careers worldwide. Franchise, corporate training and campus collaborations welcome."
            className="mx-auto mb-10"
          />
          <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 font-body-md text-sm font-semibold rounded-lg accent-glow hover:brightness-110 transition-all">
            Know More <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-margin-mobile md:px-margin-desktop py-24 bg-background">
        <div className="fade-up relative bg-ink text-on-ink rounded-3xl p-10 md:p-16 overflow-hidden text-center">
          <div className="absolute inset-0 ink-grid-pattern opacity-40" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-ink mb-6">
              Ready to build a career that <span className="text-secondary">recruiters value?</span>
            </h2>
            <p className="text-on-ink-variant font-body-lg mb-10">
              Discover the MMC advantage — industry-ready skills for top careers in animation, VFX, gaming, design and more.
            </p>
            <Link to="/mmc-begin-your-professional-journey">
              <button type="button" className="bg-secondary text-on-secondary px-12 py-5 font-body-md text-base font-semibold rounded-lg accent-glow hover:brightness-110 transition-all active:scale-95">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry #2 */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="fade-up">
            <SectionHeading
              eyebrow="Still Have Questions?"
              title="We're here to"
              highlight="help you decide"
              description="Fill in the form and our counsellors will reach out within one business day."
            />
          </div>
          <div className="fade-up bg-surface border border-outline-variant rounded-2xl p-8 soft-shadow">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
