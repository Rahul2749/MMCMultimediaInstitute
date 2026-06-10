import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/site';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant px-margin-mobile md:px-margin-desktop py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="font-headline-lg text-headline-lg font-bold text-secondary mb-6">MMC</div>
          <p className="text-on-surface-variant font-body-md mb-6">
            MMC Multimedia Institute crafts innovative digital talent — empowering creativity and
            driving careers through cutting-edge animation, VFX and design training.
          </p>
          <div className="flex gap-3">
            {['photo_camera', 'play_circle', 'group', 'mail'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-lg">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-label-technical text-label-technical text-on-surface mb-6 uppercase tracking-widest">
            Courses
          </h5>
          <ul className="space-y-4">
            {COURSES.map((c) => (
              <li key={c.slug}>
                <Link
                  className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all"
                  to={c.slug}
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-label-technical text-label-technical text-on-surface mb-6 uppercase tracking-widest">
            Institute
          </h5>
          <ul className="space-y-4">
            <li><Link className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" to="/mmc-faculty-mentors">Faculty &amp; Mentors</Link></li>
            <li><Link className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" to="/mmc-student-work-gallery">Student Work</Link></li>
            <li><Link className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" to="/mmc-begin-your-professional-journey">Admissions</Link></li>
            <li><a className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" href="/#recruiters">Placements</a></li>
            <li><a className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" href="/#events">Events</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-label-technical text-label-technical text-on-surface mb-6 uppercase tracking-widest">
            Get in Touch
          </h5>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3 text-on-surface-variant font-body-md">
              <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
              MMC Campus, Creative District, India
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
              <span className="material-symbols-outlined text-secondary text-lg">call</span>
              +91 00000 00000
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
              <span className="material-symbols-outlined text-secondary text-lg">mail</span>
              admissions@mmcinstitute.in
            </li>
          </ul>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-surface-container border border-outline-variant rounded px-4 py-2 w-full font-label-technical text-label-technical focus:ring-0 focus:border-secondary transition-colors"
              placeholder="EMAIL ADDRESS"
              type="email"
            />
            <button
              className="bg-secondary-container p-2 rounded text-on-secondary-container hover:bg-secondary hover:text-on-secondary transition-colors"
              type="submit"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-outline-variant pt-8">
        <p className="font-label-technical text-[10px] text-on-surface-variant">
          © {new Date().getFullYear()} MMC Multimedia Institute. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a className="font-label-technical text-[10px] text-on-surface-variant hover:text-on-surface" href="#">Privacy Policy</a>
          <a className="font-label-technical text-[10px] text-on-surface-variant hover:text-on-surface" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
