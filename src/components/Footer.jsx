import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant px-margin-desktop py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline-lg text-headline-lg font-bold text-secondary mb-6">MMC</div>
          <p className="text-on-surface-variant font-body-md">Training the next generation of visual storytellers and technical masters.</p>
        </div>
        <div>
          <h5 className="font-label-technical text-label-technical text-on-surface mb-6 uppercase tracking-widest">Academics</h5>
          <ul className="space-y-4">
            <li><Link className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" to="/mmc-3d-animation-curriculum">Curriculum</Link></li>
            <li><Link className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" to="/mmc-faculty-mentors">Faculty</Link></li>
            <li><Link className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" to="/mmc-student-work-gallery">Student Work</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-technical text-label-technical text-on-surface mb-6 uppercase tracking-widest">Connect</h5>
          <ul className="space-y-4">
            <li><a className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" href="#">Instagram</a></li>
            <li><a className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" href="#">LinkedIn</a></li>
            <li><a className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all" href="#">Vimeo</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-technical text-label-technical text-on-surface mb-6 uppercase tracking-widest">Updates</h5>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input className="bg-surface-container border border-outline-variant rounded px-4 py-2 w-full font-label-technical text-label-technical focus:ring-0 focus:border-secondary transition-colors" placeholder="EMAIL ADDRESS" type="email" />
            <button className="bg-secondary-container p-2 rounded text-on-secondary-container hover:bg-secondary transition-colors" type="submit">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-outline-variant pt-8">
        <p className="font-label-technical text-[10px] text-on-surface-variant">© 2024 Multimedia Institute (MMC). All rights reserved. Technical Excellence in Post-Production.</p>
        <div className="flex gap-8">
          <a className="font-label-technical text-[10px] text-on-surface-variant hover:text-on-surface" href="#">Privacy Policy</a>
          <a className="font-label-technical text-[10px] text-on-surface-variant hover:text-on-surface" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
