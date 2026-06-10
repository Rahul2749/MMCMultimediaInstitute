import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcReviewSubmitApplication = () => {
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

<div className="min-h-screen relative overflow-hidden pb-24">
{/* Background Animation Overlay */}

<div className="max-w-4xl mx-auto px-margin-mobile md:px-0 pt-12 relative z-10">
{/* Header Section */}
<div className="mb-12">
<p className="font-label-technical text-label-technical text-secondary mb-2 uppercase tracking-widest">Step 04/04</p>
<h1 className="font-headline-lg text-headline-lg mb-4">Final Review</h1>
{/* Progress Bar Component */}
<div className="w-full h-1 bg-surface-container-highest mt-6 relative">
<div className="absolute top-0 left-0 h-full bg-secondary transition-all duration-1000 ease-out" style={{width:'100%'}}></div>
<div className="absolute -right-2 -top-1.5 w-4 h-4 bg-secondary rounded-full shadow-[0_0_12px_#ffb3b6]"></div>
</div>
<div className="flex justify-between mt-3 font-label-technical text-label-technical text-on-surface-variant">
<span>APPLICATION COMPLETE</span>
<span className="text-secondary">READY TO TRANSMIT</span>
</div>
</div>
{/* Review Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant border border-outline-variant">
{/* Personal Information */}
<div className="md:col-span-7 bg-surface-container-low p-8 relative overflow-hidden group">
<div className="scanline opacity-0 group-hover:opacity-100"></div>
<div className="flex justify-between items-start mb-6">
<h2 className="font-title-md text-title-md text-secondary">Personal Metadata</h2>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary transition-colors">edit_square</span>
</div>
<div className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="font-label-technical text-label-technical text-on-surface-variant mb-1 uppercase">Full Name</p>
<p className="font-body-md text-body-md text-on-surface">Alex Mercer</p>
</div>
<div>
<p className="font-label-technical text-label-technical text-on-surface-variant mb-1 uppercase">Location</p>
<p className="font-body-md text-body-md text-on-surface">London, UK</p>
</div>
</div>
<div>
<p className="font-label-technical text-label-technical text-on-surface-variant mb-1 uppercase">Email Address</p>
<p className="font-body-md text-body-md text-on-surface">a.mercer.vfx@studio-network.com</p>
</div>
<div className="pt-4 border-t border-outline-variant/30">
<p className="font-label-technical text-label-technical text-on-surface-variant mb-2 uppercase">Identity Verification</p>
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-label-technical text-label-technical">Passport_Verified.pdf</span>
</div>
</div>
</div>
</div>
{/* Selected Track */}
<div className="md:col-span-5 bg-surface-container-high p-8 flex flex-col justify-between border-l border-outline-variant">
<div>
<h2 className="font-title-md text-title-md text-secondary mb-6">Program Track</h2>
<div className="bg-surface-container-highest/30 p-4 border border-outline-variant/50 relative">
<div className="absolute top-2 right-2 flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
<div className="w-1.5 h-1.5 rounded-full bg-outline-variant"></div>
</div>
<p className="font-label-technical text-[10px] text-tertiary mb-1 uppercase">Track ID: VFX-SPEC-2024</p>
<h3 className="font-title-md text-body-lg font-bold text-on-surface">Visual Effects Specialist</h3>
<p className="font-body-md text-on-surface-variant text-[14px] mt-2">12-Month Intensive Program focusing on Nuke, Houdini, and Cinematic Compositing.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant/30">
<div className="flex justify-between items-center text-label-technical font-label-technical">
<span className="text-on-surface-variant">START DATE</span>
<span className="text-on-surface">SEPTEMBER 2024</span>
</div>
</div>
</div>
{/* Portfolio Links/Files */}
<div className="md:col-span-12 bg-surface-container-low p-8 border-t border-outline-variant">
<div className="flex justify-between items-center mb-6">
<h2 className="font-title-md text-title-md text-secondary">Creative Assets &amp; Portfolio</h2>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary transition-colors">edit_square</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-highest p-4 border border-outline-variant hover:border-secondary transition-all cursor-pointer group">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-tertiary">movie</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</div>
<p className="font-label-technical text-label-technical text-on-surface-variant mb-1 uppercase">Showreel 2024</p>
<p className="font-body-md text-body-md text-on-surface truncate">vimeo.com/mercer-vfx-reel</p>
</div>
<div className="bg-surface-container-highest p-4 border border-outline-variant hover:border-secondary transition-all cursor-pointer group">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-tertiary">image</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</div>
<p className="font-label-technical text-label-technical text-on-surface-variant mb-1 uppercase">Behance Portfolio</p>
<p className="font-body-md text-body-md text-on-surface truncate">behance.net/alexmercer</p>
</div>
<div className="bg-surface-container-highest p-4 border border-outline-variant hover:border-secondary transition-all cursor-pointer group">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-tertiary">description</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">download</span>
</div>
<p className="font-label-technical text-label-technical text-on-surface-variant mb-1 uppercase">CV / Technical Specs</p>
<p className="font-body-md text-body-md text-on-surface truncate">resume_vfx_specialist.pdf</p>
</div>
</div>
</div>
{/* Final Declaration */}
<div className="md:col-span-12 bg-surface-container-high/50 p-8 border-t border-outline-variant">
<label className="flex items-start gap-4 cursor-pointer group">
<div className="relative flex items-center mt-1">
<input className="peer h-5 w-5 bg-surface-container-highest border-outline-variant text-secondary focus:ring-0 focus:ring-offset-0 transition-all rounded-sm" type="checkbox" />
</div>
<div className="flex-1">
<p className="font-body-md text-on-surface-variant leading-relaxed">
                                I hereby certify that the information provided above is accurate and represent my original work. I understand that the Technical Board will review my submission within 5-10 business days.
                            </p>
</div>
</label>
</div>
</div>
{/* Actions Container */}
<div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<button className="flex items-center gap-2 font-label-technical text-label-technical text-on-surface-variant hover:text-secondary transition-all group">
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
                    PREVIOUS STEP
                </button>
<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
<button className="px-8 py-4 bg-transparent border border-outline-variant hover:border-on-surface font-label-technical text-label-technical text-on-surface transition-all">
                        SAVE AS DRAFT
                    </button>
<button className="relative px-12 py-4 bg-secondary-container text-on-secondary-container font-label-technical text-label-technical font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(204,0,60,0.3)] overflow-hidden group">
<span className="relative z-10">SUBMIT APPLICATION</span>
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>
</div>
</div>
</div>




    </>
  );
};

export default MmcReviewSubmitApplication;
