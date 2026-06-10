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
  'on-surface': 'bg-on-surface text-surface',
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
      {/* ===== Hero (dark cinematic spotlight) ===== */}
      <section ref={addToRefs} className="relative bg-ink text-on-ink overflow-hidden">
        <div className="absolute inset-0 ink-grid-pattern opacity-60" />
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop pt-24 pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-technical text-[10px] uppercase tracking-widest text-on-ink-variant">
                Career-Focused AVGC-XR Training
              </span>
            </div>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl text-on-ink mb-6 leading-[1.02]">
              Turn Your Creative Passion Into a <span className="text-secondary">Thriving Career</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-ink-variant mb-10">
              MMC Multimedia Institute trains the next generation of animators, VFX artists, designers
              and filmmakers — with industry-grade tools, expert mentors and real placement support.
            </p>
            <div className="flex flex-wrap gap-4">
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

          {/* Floating cinematic timeline panel */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-label-technical text-label-technical text-secondary">ACTIVE_TIMELINE</span>
                <span className="material-symbols-outlined text-on-ink-variant">tune</span>
              </div>
              <div className="h-32 bg-black/40 rounded-lg border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
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

        {/* Stats strip (overlapping, light cards) */}
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop -mb-16 translate-y-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant rounded-2xl overflow-hidden border border-outline-variant soft-shadow">
            {STATS.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-8 text-center">
                <div className="font-display-xl text-headline-lg-mobile text-secondary mb-1">{s.value}</div>
                <div className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose MMC ===== */}
      <section id="why-mmc" ref={addToRefs} className="pt-40 pb-24 px-margin-mobile md:px-margin-desktop bg-background scroll-mt-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {WHY_CHOOSE.map((w) => (
            <div key={w.title} className="bg-surface border border-outline-variant rounded-xl p-8 hover:-translate-y-1 hover:soft-shadow hover:border-secondary/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
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
      <section id="courses" ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant scroll-mt-16">
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
            className="font-body-md text-sm font-semibold text-on-surface border border-outline-variant bg-surface rounded-lg px-6 py-3 hover:border-secondary hover:text-secondary transition-colors flex items-center gap-2"
          >
            View All
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {COURSES.map((c) => (
            <Link
              key={c.slug}
              to={c.slug}
              className="group bg-surface border border-outline-variant rounded-2xl overflow-hidden hover:-translate-y-1 hover:soft-shadow hover:border-secondary/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-surface-container-high">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/25 via-tertiary/10 to-transparent" />
                )}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 font-label-technical text-[10px] rounded uppercase font-bold ${badgeColor[c.color] || 'bg-secondary text-on-secondary'}`}>
                    {c.code}
                  </span>
                  <span className="px-3 py-1 bg-surface/90 backdrop-blur-sm text-on-surface font-label-technical text-[10px] rounded uppercase">
                    {c.duration}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-title-md text-title-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                  {c.title}
                </h3>
                <p className="text-on-surface-variant mb-6 flex-grow">{c.tagline}</p>
                <span className="font-body-md text-sm font-semibold text-secondary flex items-center gap-2">
                  Enquire Now
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
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
                className="flex-shrink-0 mx-3 px-8 py-5 bg-surface border border-outline-variant rounded-xl font-display-xl text-lg font-bold text-on-surface-variant whitespace-nowrap hover:text-secondary hover:border-secondary/40 transition-all"
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Alumni Superstars (dark cinematic spotlight) ===== */}
      <section ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-ink text-on-ink relative overflow-hidden">
        <div className="absolute inset-0 ink-grid-pattern opacity-40" />
        <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block uppercase">
              MMC Superstars
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-ink mb-4">
              Our alumni shine on the <span className="text-secondary">world's biggest screens</span>
            </h2>
            <p className="text-on-ink-variant font-body-lg">
              From blockbuster films to award-winning productions, MMC graduates contribute to projects
              that inspire audiences worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {SUPERSTARS.map((s) => (
              <div key={s.name} className="ink-card rounded-xl p-6 group hover:border-secondary/50 transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6 block">movie</span>
                <div className="font-label-technical text-[10px] text-on-ink-variant uppercase mb-1">Featured in</div>
                <div className="font-title-md text-title-md text-secondary mb-4">{s.project}</div>
                <div className="border-t border-ink-outline pt-4">
                  <div className="font-title-md text-sm text-on-ink">{s.name}</div>
                  <div className="font-label-technical text-label-technical text-on-ink-variant">
                    {s.role} · {s.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <div className="bg-surface border border-outline-variant rounded-2xl p-8 soft-shadow">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section ref={addToRefs} className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant">
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
            <div key={t.name} className="bg-surface border border-outline-variant rounded-xl p-8 flex flex-col soft-shadow">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">format_quote</span>
              <p className="text-on-surface font-body-lg mb-8 flex-grow">{t.quote}</p>
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
            <div key={e.title} className="group relative overflow-hidden rounded-xl bg-surface border border-outline-variant p-8 hover:-translate-y-1 hover:soft-shadow hover:border-secondary/40 transition-all duration-300">
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-all" />
              <span className="font-label-technical text-[10px] text-secondary border border-secondary/30 bg-secondary/5 rounded px-3 py-1 uppercase tracking-widest">
                {e.tag}
              </span>
              <h3 className="font-title-md text-title-md mt-6 mb-3">{e.title}</h3>
              <p className="text-on-surface-variant">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Final CTA (dark cinematic spotlight) ===== */}
      <section ref={addToRefs} className="px-margin-mobile md:px-margin-desktop py-24 bg-background">
        <div className="relative bg-ink text-on-ink rounded-3xl p-10 md:p-16 overflow-hidden text-center">
          <div className="absolute inset-0 ink-grid-pattern opacity-40" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-tertiary/15 rounded-full blur-[100px]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-ink mb-6">
              Ready to build a career that <span className="text-secondary">recruiters value?</span>
            </h2>
            <p className="text-on-ink-variant font-body-lg mb-10">
              Discover the MMC advantage and gain industry-ready skills for top careers in animation,
              VFX, gaming, design and more.
            </p>
            <Link to="/mmc-begin-your-professional-journey">
              <button className="bg-secondary text-on-secondary px-12 py-5 font-body-md text-base font-semibold rounded-lg accent-glow hover:brightness-110 transition-all active:scale-95">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
