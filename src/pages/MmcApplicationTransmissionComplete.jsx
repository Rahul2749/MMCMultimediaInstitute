import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcApplicationTransmissionComplete = () => {
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

<div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center pt-24 pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
{/* Background Decor */}
<div className="absolute inset-0 technical-grid pointer-events-none -z-10"></div>
<div className="scanline"></div>
{/* Central Content Column */}
<div className="w-full max-w-3xl flex flex-col items-center">
{/* Success Indicator */}
<div className="relative mb-12 flex items-center justify-center">
<div className="absolute w-24 h-24 bg-secondary/10 rounded-full animate-ping"></div>
<div className="relative w-20 h-20 bg-secondary flex items-center justify-center rounded-sm">
<span className="material-symbols-outlined text-on-secondary text-5xl" style={{fontVariationSettings:'\'FILL\' 1'}}>check_circle</span>
</div>
</div>
{/* Header */}
<div className="text-center space-y-4 mb-16">
<h1 className="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase tracking-tighter text-on-surface">Transmission Complete</h1>
<p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
                    Your application has been securely delivered to our admissions database. Welcome to the first step of your professional evolution.
                </p>
</div>
{/* Application ID Card */}
<div className="w-full bg-surface-container border border-outline-variant p-6 mb-16 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<span className="font-label-technical text-[10px] text-secondary uppercase tracking-[0.2em] mb-2 block">Reference Identification</span>
<div className="flex items-center gap-4">
<h2 className="font-label-technical text-title-md text-on-surface tracking-wider" id="app-id">MMC-APP-2024-X92J</h2>
<button className="flex items-center justify-center p-2 hover:bg-surface-container-highest transition-colors text-on-surface-variant hover:text-secondary" onclick="copyToClipboard()" title="Copy to clipboard">
<span className="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm animate-pulse">sensors</span>
<span className="font-label-technical text-[10px] uppercase">Status: Awaiting Review</span>
</div>
</div>
{/* Visual Data Bit */}
<div className="mt-4 pt-4 border-t border-outline-variant flex gap-2">
<div className="h-1 flex-1 bg-secondary/30"></div>
<div className="h-1 flex-1 bg-secondary/10"></div>
<div className="h-1 flex-1 bg-secondary/10"></div>
<div className="h-1 flex-1 bg-secondary/10"></div>
</div>
</div>
{/* Timeline Next Steps */}
<div className="w-full mb-16">
<h3 className="font-label-technical text-label-technical text-secondary uppercase tracking-[0.3em] mb-8 text-center md:text-left">Pipeline Protocol</h3>
<div className="relative">
{/* Vertical Line (Mobile) */}
<div className="absolute left-4 top-0 bottom-0 w-px bg-outline-variant md:hidden"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Step 1 */}
<div className="relative pl-12 md:pl-0 md:pt-8 group">
<div className="absolute left-0 top-1 md:top-0 md:left-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center z-10">
<span className="font-label-technical text-on-secondary">01</span>
</div>
<div className="hidden md:block absolute top-4 left-8 right-0 h-px bg-outline-variant group-hover:bg-secondary transition-colors"></div>
<h4 className="font-title-md text-body-md font-bold text-on-surface mb-2">Portfolio Review</h4>
<p className="font-body-md text-on-surface-variant text-sm">Our creative leads will analyze your creative work and technical submission.</p>
</div>
{/* Step 2 */}
<div className="relative pl-12 md:pl-0 md:pt-8 group">
<div className="absolute left-0 top-1 md:top-0 md:left-0 w-8 h-8 rounded-full border border-outline-variant bg-surface-container flex items-center justify-center z-10">
<span className="font-label-technical text-on-surface-variant">02</span>
</div>
<div className="hidden md:block absolute top-4 left-8 right-0 h-px bg-outline-variant"></div>
<h4 className="font-title-md text-body-md font-bold text-on-surface mb-2">Faculty Interview</h4>
<p className="font-body-md text-on-surface-variant text-sm">A 20-minute briefing with specialized instructors to discuss your goals.</p>
</div>
{/* Step 3 */}
<div className="relative pl-12 md:pl-0 md:pt-8 group">
<div className="absolute left-0 top-1 md:top-0 md:left-0 w-8 h-8 rounded-full border border-outline-variant bg-surface-container flex items-center justify-center z-10">
<span className="font-label-technical text-on-surface-variant">03</span>
</div>
<h4 className="font-title-md text-body-md font-bold text-on-surface mb-2">Final Decision</h4>
<p className="font-body-md text-on-surface-variant text-sm">Official admission status will be updated via your personal dashboard.</p>
</div>
</div>
</div>
</div>
{/* CTAs */}
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
<a className="bg-secondary text-on-secondary px-8 py-4 font-label-technical text-label-technical font-bold uppercase tracking-widest hover:brightness-110 flex items-center justify-center gap-2 transition-all" href="#">
<span>Return to Dashboard</span>
<span className="material-symbols-outlined text-sm">dashboard</span>
</a>
<a className="bg-surface-container-high border border-outline-variant text-on-surface px-8 py-4 font-label-technical text-label-technical font-bold uppercase tracking-widest hover:bg-surface-container-highest flex items-center justify-center gap-2 transition-all" href="#">
<span>Explore Curriculum</span>
<span className="material-symbols-outlined text-sm">school</span>
</a>
</div>
{/* Support Info */}
<div className="w-full py-8 border-t border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="text-center md:text-left">
<p className="font-body-md text-on-surface-variant text-sm">
                        Technical review window: <span className="text-on-surface font-semibold italic">5-10 Business Days</span>.
                    </p>
</div>
<div className="flex justify-center md:justify-end gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg">mail</span>
<span className="font-label-technical text-[12px] text-on-surface-variant">admissions@mmc.edu</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg">call</span>
<span className="font-label-technical text-[12px] text-on-surface-variant">+1 (555) STUDIO-1</span>
</div>
</div>
</div>
</div>
</div>




    </>
  );
};

export default MmcApplicationTransmissionComplete;
