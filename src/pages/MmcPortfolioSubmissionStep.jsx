import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcPortfolioSubmissionStep = () => {
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
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      {/* 
        To add GSAP reveals, add ref={addToRefs} to <section> tags.
        Example: <section ref={addToRefs} className="...">
      */}
      
{/* TopNavBar */}

{/* Main Workspace Container */}
<div className="min-h-screen technical-grid pt-12 pb-24">
<div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Content Canvas (Left) */}
<div className="lg:col-span-8 space-y-8">
{/* Progress Header */}
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">Step 02 / 04</span>
<span className="font-label-technical text-label-technical text-on-surface-variant">50% COMPLETE</span>
</div>
<div className="h-1 bg-surface-container-high w-full rounded-full overflow-hidden">
<div className="h-full bg-secondary active-progress transition-all duration-700 ease-out"></div>
</div>
<h1 className="font-headline-lg text-headline-lg lg:text-headline-lg text-on-surface mt-2">Portfolio Submission</h1>
</div>
{/* Form Section */}
<div className="bg-surface-container-low studio-border p-8 rounded-xl space-y-8">
{/* Portfolio URL */}
<div className="space-y-3">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Portfolio Link</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">link</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant focus:border-tertiary focus:ring-1 focus:ring-tertiary rounded-lg py-4 pl-12 pr-4 text-on-surface placeholder:text-outline transition-all" placeholder="Portfolio URL (Behance, ArtStation, Personal Site)" type="url" />
</div>
</div>
{/* File Upload Zone */}
<div className="space-y-3">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Project Files / Reels</label>
<div className="border-2 border-dashed border-outline-variant bg-surface-container-lowest/50 hover:bg-surface-container-highest/20 hover:border-secondary/50 rounded-xl p-12 transition-all cursor-pointer group flex flex-col items-center justify-center text-center" id="dropzone">
<div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<p className="font-body-lg text-on-surface font-semibold mb-1">Drag and drop files here</p>
<p className="font-body-md text-on-surface-variant">PDF, MP4, or MOV format</p>
<input className="hidden" id="fileInput" multiple="" type="file" />
<button className="mt-6 font-label-technical text-label-technical text-secondary hover:underline underline-offset-4" onclick="document.getElementById('fileInput').click()" type="button">Browse Files</button>
</div>
</div>
{/* Technical Note */}
<div className="flex gap-4 p-4 bg-tertiary-container/10 border border-tertiary/20 rounded-lg">
<span className="material-symbols-outlined text-tertiary" data-icon="info">info</span>
<p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
<span className="text-tertiary font-bold">Technical Note:</span> Maximum file size: 500MB. For video reels, we recommend hosting on Vimeo/YouTube and providing a link above to ensure the highest playback quality for our reviewers.
                        </p>
</div>
</div>
{/* Navigation Controls */}
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<button className="w-full md:w-auto px-10 py-4 font-label-technical text-label-technical text-on-surface-variant hover:text-on-surface border border-outline-variant hover:bg-surface-container-high rounded-lg transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
                        Back
                    </button>
<button className="w-full md:w-auto px-12 py-4 font-label-technical text-label-technical bg-secondary-container text-on-secondary-container rounded-lg font-bold shadow-lg shadow-secondary-container/20 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2">
                        Next Step
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/* Sidebar (Right) */}
<aside className="lg:col-span-4 space-y-6">
{/* Featured Track Summary */}
<div className="bg-surface-container-high studio-border rounded-xl overflow-hidden shadow-2xl">
<div className="h-40 bg-surface-container-highest relative overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60" data-alt="A high-end professional film editing suite with multiple calibrated monitors showing complex 3D visual effects and timeline interfaces. The environment is darkly lit with a technical atmosphere, highlighting sharp hardware edges and glowing control surfaces in a deep black and technical gray palette with subtle red accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYUHMoB4QLcEHXqZntZFclYZT7mN9-DrigecL5V_SXFOkcqdCamsgr3_ImgRzcooF7SpfN1JBMSvhjvMMh9G0LY_pOBG8LnWEuE6MyYEV05ubBVOSQIZDAL31F5EQ33JY0huIYP3mwAjJNXiYGQJ2NiKkHpPlAkBVFrkGKYEriAZwrfQ5xeo2ePcUXWLNnfAqX7NyKPhwvf9kaZfMdD2pGBAEVJinhUmurEFv-pi6SP5alZlIsjP3M3QQzBLFyQeLWM6J5jtmITgzz" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent"></div>
<div className="absolute bottom-4 left-6">
<span className="font-label-technical text-[10px] bg-secondary text-on-secondary px-2 py-0.5 rounded mb-2 inline-block">SELECTED TRACK</span>
<h3 className="font-title-md text-title-md text-on-surface">VFX &amp; Compositing</h3>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-on-surface-variant font-label-technical uppercase">Review Weight</span>
<span className="text-secondary font-label-technical">High Priority</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed">Your portfolio will be reviewed by the Lead VFX Supervisor to assess technical proficiency in Nuke, Houdini, and Maya.</p>
</div>
</div>
{/* Requirements Checklist */}
<div className="bg-surface-container-low studio-border rounded-xl p-6 space-y-6">
<h4 className="font-label-technical text-label-technical text-on-surface border-b border-outline-variant pb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary" data-icon="assignment">assignment</span>
                        PORTFOLIO REQUIREMENTS
                    </h4>
<ul className="space-y-4">
<li className="flex gap-3 items-start group">
<div className="mt-1 flex-shrink-0 w-5 h-5 border border-secondary rounded flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
<span className="material-symbols-outlined text-secondary text-xs opacity-0 group-hover:opacity-100" data-icon="check">check</span>
</div>
<div className="space-y-1">
<p className="font-body-md text-sm font-semibold text-on-surface">High-quality rendering</p>
<p className="text-xs text-on-surface-variant">Min. 1080p for reels; 4K preferred.</p>
</div>
</li>
<li className="flex gap-3 items-start group">
<div className="mt-1 flex-shrink-0 w-5 h-5 border border-secondary rounded flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
<span className="material-symbols-outlined text-secondary text-xs opacity-0 group-hover:opacity-100" data-icon="check">check</span>
</div>
<div className="space-y-1">
<p className="font-body-md text-sm font-semibold text-on-surface">Breakdown of process</p>
<p className="text-xs text-on-surface-variant">Include WIP shots or layer breakdowns.</p>
</div>
</li>
<li className="flex gap-3 items-start group">
<div className="mt-1 flex-shrink-0 w-5 h-5 border border-secondary rounded flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
<span className="material-symbols-outlined text-secondary text-xs opacity-0 group-hover:opacity-100" data-icon="check">check</span>
</div>
<div className="space-y-1">
<p className="font-body-md text-sm font-semibold text-on-surface">Clear technical role description</p>
<p className="text-xs text-on-surface-variant">Specifically state your contribution to the project.</p>
</div>
</li>
</ul>
</div>
{/* Support Callout */}
<div className="p-6 studio-border rounded-xl bg-primary-container">
<p className="font-label-technical text-[11px] text-on-surface-variant mb-4">NEED HELP PREPARING?</p>
<a className="text-secondary font-bold text-sm hover:underline flex items-center gap-2 group" href="#">
                        Download Portfolio Guide
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="download">download</span>
</a>
</div>
</aside>
</div>
</div>




    </>
  );
};

export default MmcPortfolioSubmissionStep;
