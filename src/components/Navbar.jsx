import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COURSES } from '../data/site';

const NAV_LINKS = [
  { label: 'Why MMC', to: '/#why-mmc' },
  { label: 'Placements', to: '/#recruiters' },
  { label: 'Student Work', to: '/mmc-student-work-gallery' },
  { label: 'Faculty', to: '/mmc-faculty-mentors' },
  { label: 'Events', to: '/#events' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    isActive(path)
      ? 'font-label-technical text-label-technical text-secondary'
      : 'font-label-technical text-label-technical text-on-surface-variant hover:text-on-surface transition-colors duration-200';

  return (
    <nav className="w-full sticky top-0 z-[100] border-b border-outline-variant bg-background/95 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="font-display-xl text-headline-lg font-extrabold text-secondary tracking-tighter flex items-baseline gap-2"
        >
          MMC
          <span className="hidden sm:inline font-label-technical text-[10px] tracking-widest text-on-surface-variant uppercase">
            Multimedia Institute
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Courses dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className="font-label-technical text-label-technical text-on-surface-variant hover:text-on-surface transition-colors duration-200 flex items-center gap-1 uppercase">
              Courses
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            {coursesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[420px]">
                <div className="tonal-layer-2 rounded-xl p-3 grid grid-cols-1 gap-1 shadow-2xl">
                  {COURSES.map((c) => (
                    <Link
                      key={c.slug}
                      to={c.slug}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high transition-colors group"
                    >
                      <span className="font-label-technical text-[10px] text-secondary border border-outline-variant rounded px-2 py-1 w-14 text-center">
                        {c.code}
                      </span>
                      <div>
                        <div className="font-title-md text-sm text-on-surface group-hover:text-secondary transition-colors">
                          {c.title}
                        </div>
                        <div className="text-xs text-on-surface-variant line-clamp-1">{c.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => (
            l.to.startsWith('/#') ? (
              <a key={l.label} href={l.to} className={linkClass(l.to)}>
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.to} className={linkClass(l.to)}>
                {l.label}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/mmc-begin-your-professional-journey" className="hidden sm:block">
            <button className="bg-secondary-container text-on-secondary-container px-6 py-2 font-label-technical text-label-technical font-bold rounded-lg inner-glow-btn hover:bg-secondary hover:text-on-secondary active:opacity-80 transition-all duration-150">
              Enquire Now
            </button>
          </Link>
          {/* Mobile toggle */}
          <button
            className="lg:hidden material-symbols-outlined text-on-surface"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant bg-background px-margin-mobile py-6 space-y-6">
          <div>
            <div className="font-label-technical text-[10px] uppercase tracking-widest text-on-surface-variant mb-3">
              Courses
            </div>
            <div className="grid grid-cols-2 gap-2">
              {COURSES.map((c) => (
                <Link
                  key={c.slug}
                  to={c.slug}
                  onClick={() => setMobileOpen(false)}
                  className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary p-2 rounded bg-surface-container-low"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-outline-variant pt-6">
            {NAV_LINKS.map((l) =>
              l.to.startsWith('/#') ? (
                <a
                  key={l.label}
                  href={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-label-technical text-label-technical text-on-surface-variant"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-label-technical text-label-technical text-on-surface-variant"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>
          <Link to="/mmc-begin-your-professional-journey" onClick={() => setMobileOpen(false)}>
            <button className="w-full bg-secondary-container text-on-secondary-container px-6 py-3 font-label-technical text-label-technical font-bold rounded-lg">
              Enquire Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
