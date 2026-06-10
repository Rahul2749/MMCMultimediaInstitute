import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcVisualEffectsCurriculum = () => {
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
      


<div className="relative">
{/* Hero Section */}
<section className="relative min-h-[716px] flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-24 overflow-hidden border-b border-surface-variant">
<div className="absolute inset-0 vfx-grid-pattern opacity-40"></div>
<div className="absolute top-0 right-0 w-1/2 h-full opacity-30 blur-3xl pointer-events-none">
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-container rounded-full mix-blend-screen animate-pulse"></div>
</div>
<div className="relative z-10 max-w-4xl">
<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 tonal-layer-1 rounded-full border border-tertiary/20">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-technical text-label-technical text-tertiary uppercase">24-WEEK INTENSIVE PROGRAM</span>
</div>
<h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl mb-6 leading-tight">
                    Visual Effects <br />
<span className="text-secondary italic">Specialist</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                    Master the high-end compositing and node-based workflows used by top global studios. From photorealistic integration to massive procedural simulations, this track prepares you for a career as a Technical Director or Lead Compositor.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary text-on-secondary px-8 py-4 font-title-md text-title-md font-bold rounded inner-glow-btn hover:scale-[1.02] transition-transform">Enroll for Next Intake</button>
<button className="bg-surface-container-high text-on-surface px-8 py-4 font-title-md text-title-md border border-outline-variant rounded hover:bg-surface-variant transition-colors">Download Syllabus</button>
</div>
</div>
{/* Scrubber Mockup */}
<div className="absolute bottom-0 left-0 w-full h-12 bg-surface-container-lowest border-t border-surface-variant flex items-center px-gutter">
<div className="w-full h-[2px] bg-surface-variant relative">
<div className="absolute top-[-4px] left-1/3 w-[2px] h-[10px] bg-secondary shadow-[0_0_8px_rgba(255,179,182,0.6)]"></div>
<div className="h-full bg-secondary-container w-1/3"></div>
</div>
<span className="ml-4 font-label-technical text-label-technical text-on-surface-variant">00:08:24:12</span>
</div>
</section>
{/* Curriculum Modules */}
<section className="px-margin-mobile md:px-margin-desktop py-24 bg-background">
<div className="mb-16">
<h2 className="font-display-xl text-headline-lg mb-4">Core Curriculum</h2>
<div className="h-1 w-24 bg-secondary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-panel-gap bg-surface-variant">
{/* Module 1 */}
<div className="tonal-layer-1 p-8 hover:bg-surface-container transition-colors group">
<div className="flex justify-between items-start mb-12">
<span className="font-label-technical text-label-technical text-on-surface-variant">MODULE 01</span>
<span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">layers</span>
</div>
<h3 className="font-display-xl text-title-md mb-4 text-primary">Advanced Compositing (Nuke)</h3>
<p className="text-on-surface-variant mb-8 min-h-[80px]">Deep dive into multi-channel EXR workflows, 3D projections, and high-end rotoscoping techniques within The Foundry's Nuke.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> Deep Compositing
                        </li>
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> Advanced Keying
                        </li>
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> Python Scripting
                        </li>
</ul>
</div>
{/* Module 2 */}
<div className="tonal-layer-1 p-8 hover:bg-surface-container transition-colors group">
<div className="flex justify-between items-start mb-12">
<span className="font-label-technical text-label-technical text-on-surface-variant">MODULE 02</span>
<span className="material-symbols-outlined text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">blur_on</span>
</div>
<h3 className="font-display-xl text-title-md mb-4 text-primary">Dynamic Simulations (Houdini)</h3>
<p className="text-on-surface-variant mb-8 min-h-[80px]">Harness the power of procedural effects. Master fluid dynamics, pyro simulations, and massive grain-based destruction.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> FLIP Fluids &amp; Pyro
                        </li>
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> VEX Programming
                        </li>
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> Rigid Body Dynamics
                        </li>
</ul>
</div>
{/* Module 3 */}
<div className="tonal-layer-1 p-8 hover:bg-surface-container transition-colors group">
<div className="flex justify-between items-start mb-12">
<span className="font-label-technical text-label-technical text-on-surface-variant">MODULE 03</span>
<span className="material-symbols-outlined text-on-tertiary-container opacity-0 group-hover:opacity-100 transition-opacity">videocam</span>
</div>
<h3 className="font-display-xl text-title-md mb-4 text-primary">3D Integration &amp; Matchmoving</h3>
<p className="text-on-surface-variant mb-8 min-h-[80px]">The bridge between live-action and CG. Camera tracking, photogrammetry, and look-dev for seamless integration.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> 3DEqualizer Tracking
                        </li>
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> Arnold Render Engine
                        </li>
<li className="flex items-center gap-2 font-label-technical text-label-technical text-on-primary-container">
<span className="material-symbols-outlined text-sm">check_circle</span> HDRI Pipeline
                        </li>
</ul>
</div>
</div>
</section>
{/* Software Lab */}
<section className="py-20 bg-surface-container-lowest border-y border-surface-variant">
<div className="px-margin-mobile md:px-margin-desktop text-center">
<p className="font-label-technical text-label-technical text-outline uppercase mb-12 tracking-widest">Industry Standard Toolset</p>
<div className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded bg-primary-container flex items-center justify-center border border-surface-variant">
<span className="font-bold text-secondary text-2xl">Nk</span>
</div>
<span className="font-label-technical text-label-technical">Nuke</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded bg-primary-container flex items-center justify-center border border-surface-variant">
<span className="font-bold text-tertiary text-2xl">H</span>
</div>
<span className="font-label-technical text-label-technical">Houdini</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded bg-primary-container flex items-center justify-center border border-surface-variant">
<span className="font-bold text-on-tertiary-container text-2xl">M</span>
</div>
<span className="font-label-technical text-label-technical">Maya</span>
</div>
</div>
</div>
</section>
{/* Final CTA Bento */}
<section className="px-margin-mobile md:px-margin-desktop py-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="md:col-span-3 tonal-layer-2 p-12 rounded-xl flex flex-col justify-center relative overflow-hidden">
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl"></div>
<h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-4">Start your high-end VFX journey.</h2>
<p className="text-body-lg text-on-surface-variant max-w-xl mb-8">Limited to 12 students per intake to ensure personalized technical mentorship and individual portfolio feedback.</p>
<div>
<button className="bg-secondary text-on-secondary px-10 py-5 font-title-md text-title-md font-bold rounded inner-glow-btn hover:shadow-[0_0_20px_rgba(255,179,182,0.3)] transition-all active:scale-95">Enroll for Next Intake</button>
</div>
</div>
<div className="md:col-span-1 tonal-layer-1 p-8 rounded-xl flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-4xl text-tertiary mb-4">event_available</span>
<span className="font-label-technical text-label-technical text-outline mb-1">NEXT START</span>
<span className="font-display-xl text-title-md text-on-surface">September 15, 2024</span>
</div>
</div>
</section>
</div>




    </>
  );
};

export default MmcVisualEffectsCurriculum;
