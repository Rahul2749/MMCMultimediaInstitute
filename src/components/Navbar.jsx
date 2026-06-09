import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => {
    return isActive(path)
      ? "font-label-technical text-label-technical text-secondary border-b-2 border-secondary pb-1"
      : "font-label-technical text-label-technical text-on-surface-variant hover:text-on-surface transition-colors duration-200";
  };

  return (
    <nav className="flex justify-between items-center w-full px-margin-desktop h-16 sticky top-0 z-[100] border-b border-outline-variant bg-background/95 backdrop-blur-md">
      <Link to="/" className="font-display-xl text-headline-lg font-extrabold text-secondary tracking-tighter">
        MMC
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link className={linkClass('/mmc-3d-animation-curriculum')} to="/mmc-3d-animation-curriculum">Courses</Link>
        <Link className={linkClass('/mmc-visual-effects-curriculum')} to="/mmc-visual-effects-curriculum">VFX</Link>
        <Link className={linkClass('/mmc-film-editing-curriculum')} to="/mmc-film-editing-curriculum">Editing</Link>
        <Link className={linkClass('/mmc-3d-animation-curriculum')} to="/mmc-3d-animation-curriculum">3D Animation</Link>
        <Link className={linkClass('/mmc-graphic-design-curriculum')} to="/mmc-graphic-design-curriculum">Design</Link>
        <Link className={linkClass('/mmc-student-work-gallery')} to="/mmc-student-work-gallery">Gallery</Link>
      </div>
      <div className="flex items-center gap-6">
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface">search</span>
        <Link to="/mmc-begin-your-professional-journey">
          <button className="bg-secondary-container text-on-secondary-container px-6 py-2 font-label-technical text-label-technical font-bold rounded-lg scale-95 active:opacity-80 transition-all duration-150">
            Enroll Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
