import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcBeginYourProfessionalJourney = () => {
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
      
{/* TopNavBar from JSON */}
<header className="bg-background/95 backdrop-blur-md border-b border-outline-variant sticky top-0 z-[100] flex justify-between items-center w-full px-margin-desktop h-16">
<div className="font-display-xl text-[24px] font-extrabold text-secondary">MMC</div>

<button className="bg-secondary text-on-secondary px-6 py-2 font-label-technical text-label-technical font-bold rounded-DEFAULT scale-95 active:opacity-80 transition-all duration-150">Enroll Now</button>
</header>
<main className="min-h-[calc(100vh-64px)] py-12 px-margin-mobile md:px-margin-desktop">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
{/* Left Column: Form Section */}
<div className="lg:col-span-8">
{/* Progress Indicator */}
<div className="mb-12">
<div className="flex justify-between items-end mb-4">
<div>
<span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest block mb-1">Application Step</span>
<h1 className="font-title-md text-title-md" id="step-title">Personal Information</h1>
</div>
<span className="font-label-technical text-label-technical text-outline" id="step-counter">01 / 04</span>
</div>
<div className="h-1 bg-surface-container-highest w-full rounded-full overflow-hidden">
<div className="h-full bg-secondary transition-all duration-500 ease-out" id="progress-bar" style={{width:'25%'}}></div>
</div>
</div>
{/* Form Steps Container */}
<form className="space-y-8" id="enrollment-form">
{/* Step 1: Personal Info */}
<div className="step-content" id="step-1">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Legal Full Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-3 text-on-surface font-body-md studio-glow" placeholder="e.g., Jane Arisaka" type="text" />
</div>
<div className="space-y-2">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Email Address</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-3 text-on-surface font-body-md studio-glow" placeholder="jane@studio.com" type="email" />
</div>
<div className="space-y-2">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Phone Number</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-3 text-on-surface font-body-md studio-glow" placeholder="+1 (555) 000-0000" type="tel" />
</div>
<div className="space-y-2">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Location (City, Country)</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-3 text-on-surface font-body-md studio-glow" placeholder="London, UK" type="text" />
</div>
</div>
</div>
{/* Step 2: Track Selection (Hidden by default) */}
<div className="step-content hidden" id="step-2">
<div className="grid grid-cols-1 gap-4">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase mb-2 block">Choose Your Creative Path</label>
<div className="group relative bg-surface-container-low border border-outline-variant p-6 hover:border-secondary transition-all cursor-pointer technical-border" onclick="selectTrack('vfx')">
<input className="hidden" name="track" type="radio" value="vfx" />
<div className="flex justify-between items-start">
<div>
<h3 className="font-title-md text-title-md text-on-surface">VFX Specialist</h3>
<p className="font-body-md text-on-surface-variant mt-1">Advanced compositing, matte painting, and procedural effects in Houdini.</p>
</div>
<span className="material-symbols-outlined text-secondary opacity-0 group-[.selected]:opacity-100">check_circle</span>
</div>
</div>
<div className="group relative bg-surface-container-low border border-outline-variant p-6 hover:border-secondary transition-all cursor-pointer technical-border" onclick="selectTrack('editing')">
<input className="hidden" name="track" type="radio" value="editing" />
<div className="flex justify-between items-start">
<div>
<h3 className="font-title-md text-title-md text-on-surface">Master Editor</h3>
<p className="font-body-md text-on-surface-variant mt-1">Narrative storytelling, rhythm, and color grading in DaVinci Resolve.</p>
</div>
<span className="material-symbols-outlined text-secondary opacity-0 group-[.selected]:opacity-100">check_circle</span>
</div>
</div>
<div className="group relative bg-surface-container-low border border-outline-variant p-6 hover:border-secondary transition-all cursor-pointer technical-border" onclick="selectTrack('3d')">
<input className="hidden" name="track" type="radio" value="3d" />
<div className="flex justify-between items-start">
<div>
<h3 className="font-title-md text-title-md text-on-surface">3D Environment Artist</h3>
<p className="font-body-md text-on-surface-variant mt-1">High-poly modeling, UV unwrapping, and Unreal Engine integration.</p>
</div>
<span className="material-symbols-outlined text-secondary opacity-0 group-[.selected]:opacity-100">check_circle</span>
</div>
</div>
</div>
</div>
{/* Step 3: Portfolio (Hidden by default) */}
<div className="step-content hidden" id="step-3">
<div className="space-y-6">
<div className="space-y-2">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Showreel / Portfolio Link</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-3 text-on-surface font-body-md studio-glow" placeholder="https://vimeo.com/your-work" type="url" />
<p className="text-[12px] text-outline mt-1 italic">Provide a link to your best work on Vimeo, Behance, or ArtStation.</p>
</div>
<div className="space-y-2">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Current Skill Level</label>
<div className="grid grid-cols-3 gap-2">
<button className="py-3 bg-surface-container border border-outline-variant font-label-technical text-label-technical text-on-surface hover:bg-surface-variant" type="button">NOVICE</button>
<button className="py-3 bg-surface-container border border-secondary font-label-technical text-label-technical text-secondary" type="button">INTERMEDIATE</button>
<button className="py-3 bg-surface-container border border-outline-variant font-label-technical text-label-technical text-on-surface hover:bg-surface-variant" type="button">EXPERT</button>
</div>
</div>
</div>
</div>
{/* Step 4: Motivation (Hidden by default) */}
<div className="step-content hidden" id="step-4">
<div className="space-y-2">
<label className="font-label-technical text-label-technical text-on-surface-variant uppercase">Why MMC?</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-4 text-on-surface font-body-md studio-glow" placeholder="Tell us about your professional goals and what drives your creativity..." rows="6"></textarea>
<p className="text-[12px] text-outline text-right">0 / 500 words</p>
</div>
</div>
{/* Navigation Buttons */}
<div className="flex justify-between items-center pt-8 border-t border-outline-variant">
<button className="hidden flex items-center gap-2 font-label-technical text-label-technical text-on-surface-variant hover:text-on-surface transition-all" id="prev-btn" type="button">
<span className="material-symbols-outlined">arrow_back</span>
                            PREVIOUS
                        </button>
<div className="flex-grow"></div>
<button className="bg-secondary text-on-secondary px-10 py-3 font-label-technical text-label-technical font-bold uppercase tracking-widest inner-glow flex items-center gap-2" id="next-btn" type="button">
                            NEXT STEP
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</form>
</div>
{/* Right Column: Sidebar Summary */}
<aside className="lg:col-span-4">
<div className="sticky top-24 space-y-6">
{/* Summary Card */}
<div className="bg-surface-container border border-outline-variant rounded-DEFAULT overflow-hidden">
<div className="h-40 relative">
<img className="w-full h-full object-cover grayscale opacity-60" data-alt="A cinematic, high-contrast shot of a dark professional video editing suite. Multiple monitors glow with complex timelines and visual effects nodes in a deep black room. Sharp red ambient lighting catches the edges of high-end studio equipment. The atmosphere is quiet, intense, and focused, capturing the technical precision of post-production film work." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJm0EDiY76yUz29h4zCHa-vyRI3XFkqDQGMrZxHEs9PXSKLRpMFPmpOXEcSEJOkeeumAw9TLU9jdX87UwkqFk3Vy012GxvpDyLVSs4EOzTbvEwZbt3aO4sl_yELx2D15Pw1nb2CfJ9bRl8bJJB8Awq2tAg_WthdZrnRSYSPRYkVgBPY3mAtUwPEX_4kXSwePKPzoBfGaYjEfBKa1u_t8zk5Y-ixRixpKU9bXzpB0INb_fjPOne2E4MNBBQ9pOxnnLTwva6uqK9zpnk" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
<div className="absolute bottom-4 left-6">
<span className="bg-secondary text-on-secondary px-2 py-0.5 font-label-technical text-[10px] font-bold uppercase">Featured Track</span>
<h2 className="font-title-md text-title-md text-on-surface mt-1" id="sidebar-track-name">Visual Effects Specialist</h2>
</div>
</div>
<div className="p-6 space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest border border-outline-variant">
<span className="material-symbols-outlined text-secondary">calendar_today</span>
</div>
<div>
<p className="font-label-technical text-label-technical text-on-surface-variant uppercase">Next Intake</p>
<p className="font-body-md text-on-surface font-semibold">March 15, 2024</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-surface-container-highest border border-outline-variant">
<span className="material-symbols-outlined text-secondary">timer</span>
</div>
<div>
<p className="font-label-technical text-label-technical text-on-surface-variant uppercase">Duration</p>
<p className="font-body-md text-on-surface font-semibold">24 Weeks | Full-Time</p>
</div>
</div>
<div className="pt-6 border-t border-outline-variant">
<h4 className="font-label-technical text-label-technical text-outline uppercase mb-3">Curriculum Focus</h4>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-[13px] text-on-surface-variant">
<span className="w-1.5 h-1.5 bg-secondary"></span> 
                                        High-End Compositing (Nuke)
                                    </li>
<li className="flex items-center gap-2 text-[13px] text-on-surface-variant">
<span className="w-1.5 h-1.5 bg-secondary"></span> 
                                        Procedural FX (Houdini)
                                    </li>
<li className="flex items-center gap-2 text-[13px] text-on-surface-variant">
<span className="w-1.5 h-1.5 bg-secondary"></span> 
                                        Photo-Real Matte Painting
                                    </li>
</ul>
</div>
</div>
</div>
{/* Help Card */}
<div className="bg-surface-container-low border border-outline-variant p-6 flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary">info</span>
<div>
<h4 className="font-label-technical text-label-technical text-on-surface font-bold">Need Assistance?</h4>
<p className="text-[13px] text-on-surface-variant mt-1 leading-relaxed">Our admissions team is available for technical portfolio reviews every Tuesday.</p>
<a className="text-tertiary text-[12px] font-label-technical mt-2 inline-block uppercase hover:underline" href="#">Contact Faculty</a>
</div>
</div>
</div>
</aside>
</div>
</main>
{/* Footer from JSON */}



    </>
  );
};

export default MmcBeginYourProfessionalJourney;
