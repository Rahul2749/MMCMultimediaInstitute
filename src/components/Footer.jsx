import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES, SITE_CONTACT } from '../data/site';

const Footer = () => {
  return (
    <footer className="bg-ink text-on-ink relative overflow-hidden px-margin-mobile md:px-margin-desktop py-16">
      <div className="absolute inset-0 ink-grid-pattern opacity-30" />
      <div className="absolute -top-20 left-1/3 w-96 h-72 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-9 h-9 rounded-lg bg-secondary text-on-secondary flex items-center justify-center font-display-xl font-extrabold text-lg">
                M
              </span>
              <span className="font-display-xl text-xl font-extrabold text-on-ink">MMC</span>
            </div>
            <p className="text-on-ink-variant font-body-md mb-6">
              MMC Multimedia Institute crafts innovative digital talent — empowering creativity and
              driving careers through cutting-edge animation, VFX and design training.
            </p>
            <div className="flex gap-3">
              {['photo_camera', 'play_circle', 'group', 'mail'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-ink-outline flex items-center justify-center text-on-ink-variant hover:text-on-secondary hover:bg-secondary hover:border-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-label-technical text-label-technical text-on-ink mb-6 uppercase tracking-widest">
              Courses
            </h5>
            <ul className="space-y-4">
              {COURSES.map((c) => (
                <li key={c.slug}>
                  <Link
                    className="font-body-md text-sm text-on-ink-variant hover:text-secondary transition-all"
                    to={c.slug}
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-label-technical text-label-technical text-on-ink mb-6 uppercase tracking-widest">
              Institute
            </h5>
            <ul className="space-y-4">
              <li><Link className="font-body-md text-sm text-on-ink-variant hover:text-secondary transition-all" to="/mmc-faculty-mentors">Faculty &amp; Mentors</Link></li>
              <li><Link className="font-body-md text-sm text-on-ink-variant hover:text-secondary transition-all" to="/mmc-student-work-gallery">Student Work</Link></li>
              <li><Link className="font-body-md text-sm text-on-ink-variant hover:text-secondary transition-all" to="/mmc-begin-your-professional-journey">Admissions</Link></li>
              <li><a className="font-body-md text-sm text-on-ink-variant hover:text-secondary transition-all" href="/#recruiters">Placements</a></li>
              <li><a className="font-body-md text-sm text-on-ink-variant hover:text-secondary transition-all" href="/#events">Events</a></li>
              <li><Link className="font-body-md text-sm text-on-ink-variant hover:text-secondary transition-all" to="/contact">Contact</Link></li>
              <li><a className="font-body-md text-sm text-on-ink-variant hover:text-secondary transition-all" href="/#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-technical text-label-technical text-on-ink mb-6 uppercase tracking-widest">
              Get in Touch
            </h5>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-on-ink-variant font-body-md text-sm">
                <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
                {SITE_CONTACT.address}
              </li>
              <li className="flex items-center gap-3 text-on-ink-variant font-body-md text-sm">
                <span className="material-symbols-outlined text-secondary text-lg">call</span>
                <a href={`tel:${SITE_CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-secondary transition-colors">
                  {SITE_CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-on-ink-variant font-body-md text-sm">
                <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                <a href={`mailto:${SITE_CONTACT.email}`} className="hover:text-secondary transition-colors">
                  {SITE_CONTACT.email}
                </a>
              </li>
            </ul>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                className="bg-white/5 border border-ink-outline rounded-lg px-4 py-2.5 w-full font-body-md text-sm text-on-ink placeholder:text-on-ink-variant focus:ring-0 focus:border-secondary transition-colors"
                placeholder="Email address"
                type="email"
              />
              <button
                className="bg-secondary p-2.5 rounded-lg text-on-secondary hover:brightness-110 transition-colors"
                type="submit"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-ink-outline pt-8">
          <p className="font-label-technical text-[10px] text-on-ink-variant">
            © {new Date().getFullYear()} MMC Multimedia Institute. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link className="font-label-technical text-[10px] text-on-ink-variant hover:text-on-ink" to="/privacy">Privacy Policy</Link>
            <Link className="font-label-technical text-[10px] text-on-ink-variant hover:text-on-ink" to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
