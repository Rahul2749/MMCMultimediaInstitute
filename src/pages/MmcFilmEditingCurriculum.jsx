import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcFilmEditingCurriculum = () => {
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

{/* Hero Section */}

{/* Course Overview Grid */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="p-8 studio-border bg-surface-container-low hover:bg-surface-container transition-colors group">
<span className="material-symbols-outlined text-secondary text-4xl mb-6 block" style={{fontVariationSettings:'\'FILL\' 1'}}>movie_edit</span>
<h3 className="font-title-md text-title-md mb-4 text-on-surface">Visual Narrative</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Learn the psychological principles of montage and the Kuleshov effect to manipulate emotion and pacing through visual choice.</p>
<div className="mt-8 timeline-scrubber"><div className="timeline-playhead"></div></div>
</div>
<div className="p-8 studio-border bg-surface-container-low hover:bg-surface-container transition-colors group">
<span className="material-symbols-outlined text-tertiary text-4xl mb-6 block" style={{fontVariationSettings:'\'FILL\' 1'}}>palette</span>
<h3 className="font-title-md text-title-md mb-4 text-on-surface">Precision Grading</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Deep dive into DaVinci Resolve to master primary corrections, secondary isolations, and professional finishing techniques.</p>
<div className="mt-8 timeline-scrubber"><div className="timeline-playhead" style={{left:'65%',background:'#adc6ff'}}></div></div>
</div>
<div className="p-8 studio-border bg-surface-container-low hover:bg-surface-container transition-colors group">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl mb-6 block" style={{fontVariationSettings:'\'FILL\' 1'}}>graphic_eq</span>
<h3 className="font-title-md text-title-md mb-4 text-on-surface">Sonic Architecture</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Advanced sound design and dialogue cleanup workflows. Learn how sound informs the edit and builds atmospheric tension.</p>
<div className="mt-8 timeline-scrubber"><div className="timeline-playhead" style={{left:'15%',background:'#2b77ea'}}></div></div>
</div>
</div>
</section>
{/* Core Curriculum Modules (Bento Style) */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
<div className="mb-16">
<h2 className="font-headline-lg text-headline-lg mb-4">Core Curriculum</h2>
<div className="w-24 h-1 bg-secondary-container"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Module 01 */}
<div className="md:col-span-7 studio-border bg-surface-container-low p-10 flex flex-col justify-between">
<div>
<div className="font-label-technical text-label-technical text-secondary mb-2">MODULE 01</div>
<h3 className="font-headline-lg text-title-md md:text-headline-lg-mobile mb-6">Narrative Theory &amp; Rhythmic Cutting</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl">
                        Focusing on Adobe Premiere Pro, students explore the structural foundations of storytelling. This module covers assembly workflows, temporal manipulation, and the mechanics of the "Invisible Edit."
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 font-label-technical text-label-technical text-on-surface">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                            ORGANIZATION &amp; BIN MANAGEMENT
                        </li>
<li className="flex items-center gap-3 font-label-technical text-label-technical text-on-surface">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                            TRIMMING &amp; J-K-L NAVIGATION
                        </li>
<li className="flex items-center gap-3 font-label-technical text-label-technical text-on-surface">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                            MULTICAM EDITING WORKFLOWS
                        </li>
</ul>
</div>
<div className="mt-12 opacity-50 flex items-center gap-2 font-label-technical text-[10px]">
<span className="p-1 border border-outline-variant uppercase">Industry focus: Adobe Premiere Pro</span>
</div>
</div>
{/* Module Image */}
<div className="md:col-span-5 h-[400px] md:h-auto overflow-hidden">
<img alt="Film editing software interface" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair" data-alt="A macro close-up view of a high-resolution professional video editing timeline. Colorful clips of varying lengths are arranged in tracks with complex waveforms visible underneath. A red playhead indicator marks a specific frame. The interface is clean, dark, and highly detailed, reflecting the technical minimalism of Adobe Premiere Pro and DaVinci Resolve. The overall aesthetic is dark-mode with high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALRhHcxsreFDePFFXqpbDNc7Kg1Gn0WqYIoXiARMRAwHYbAMT51YeS2iJ-rF_IOK7CrUrjwtawLBMGF6TaJhdNYxR6Jnh5lsX3SvJydu2-D8YVfDd94rr8Jcswc4WNIruTLPXuk0AIeWn4cH5FOI-XgHSZ7Al75EI1OShjytkMjwbINudK69Fp1Pju-Q_8FdjD6fOibJ4vzmGBgR_SKpPokLP9GUQVbiocuRID3pJuAoMOGPfw5pfBoyA1WAoH5Cf7XhFHSzLiQB8l" />
</div>
{/* Module 02 */}
<div className="md:col-span-5 h-[400px] md:h-auto overflow-hidden order-last md:order-none">
<img alt="Color grading session" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="A professional colorist's desk in a dark room. A large high-fidelity monitor shows a cinematic landscape scene being graded. Below the screen is a DaVinci Resolve advanced panel control surface with glowing color wheels and trackballs in red and blue hues. The lighting is low and controlled to ensure color accuracy. The image captures the sophisticated technical precision of high-end film finishing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAadLFZ8ZEklCK973vYCsLCfWUu95h9gXzgyc7CPe66xSZ_1HkIbvLrzxZU1ar51gEhKCo5DGe85WwuHy2Pzhs-tGF6vO7uW7eKgRhfe9XflpwOfkhW5AxJNoJPtpXeaupFWoHgpWad30RJVZxzkZpaHE6HNBHSySqGTM3BH15Z0kEO_G6jro6OP0fAi9I5g6UsednfDI153urUMi899Ed-yX72DaES8OKSArPsIUhR3x79GjqFoafCNT8AOmcR1YTAa9ifPhUrdbqA" />
</div>
<div className="md:col-span-7 studio-border bg-surface-container-low p-10 flex flex-col justify-between">
<div>
<div className="font-label-technical text-label-technical text-tertiary mb-2">MODULE 02</div>
<h3 className="font-headline-lg text-title-md md:text-headline-lg-mobile mb-6">Advanced Color Grading &amp; Finishing</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl">
                        A DaVinci Resolve intensive focusing on the science of light and color. Students learn color management, nodes hierarchy, and creating stylized looks while maintaining technical consistency.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 font-label-technical text-label-technical text-on-surface">
<span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                            LOG WORKFLOWS &amp; LUTS
                        </li>
<li className="flex items-center gap-3 font-label-technical text-label-technical text-on-surface">
<span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                            QUALIFIERS &amp; POWER WINDOWS
                        </li>
<li className="flex items-center gap-3 font-label-technical text-label-technical text-on-surface">
<span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                            HDR FINISHING STANDARDS
                        </li>
</ul>
</div>
<div className="mt-12 opacity-50 flex items-center gap-2 font-label-technical text-[10px]">
<span className="p-1 border border-outline-variant uppercase">Industry focus: DaVinci Resolve</span>
</div>
</div>
{/* Module 03 */}
<div className="md:col-span-12 studio-border bg-surface-container-high p-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<div className="font-label-technical text-label-technical text-on-tertiary-container mb-2">MODULE 03</div>
<h3 className="font-headline-lg text-title-md md:text-headline-lg-mobile mb-6">Audio Post &amp; Sound Design</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                        The edit is only as good as the sound. Master noise reduction, spatial audio mixing, and Foley layering to create immersive cinematic experiences.
                    </p>
<div className="flex flex-wrap gap-4">
<span className="px-4 py-2 bg-surface-container-highest rounded font-label-technical text-label-technical">EQ &amp; DYNAMICS</span>
<span className="px-4 py-2 bg-surface-container-highest rounded font-label-technical text-label-technical">ADR RECORDING</span>
<span className="px-4 py-2 bg-surface-container-highest rounded font-label-technical text-label-technical">SOUNDSCAPES</span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square bg-surface-container-lowest studio-border relative overflow-hidden flex items-center justify-center">

</div>
</div>
</div>
</section>
{/* Toolset Section */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-background text-center">
<h2 className="font-title-md text-title-md mb-12 uppercase tracking-widest text-outline">Software Ecosystem</h2>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-[#00005b] rounded-lg flex items-center justify-center text-white font-bold text-2xl">Pr</div>
<span className="font-label-technical text-label-technical">Premiere Pro</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-[#0a2342] rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined text-3xl">camera</span>
</div>
<span className="font-label-technical text-label-technical">DaVinci Resolve</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-[#2e2e2e] rounded-lg flex items-center justify-center text-white font-bold text-2xl">Av</div>
<span className="font-label-technical text-label-technical">Media Composer</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-[#002e6a] rounded-lg flex items-center justify-center text-white font-bold text-2xl">Ae</div>
<span className="font-label-technical text-label-technical">After Effects</span>
</div>
</div>
</section>
{/* Enrollment CTA */}
<section className="py-32 px-margin-mobile md:px-margin-desktop bg-secondary-container text-white relative overflow-hidden">
<div className="absolute right-[-10%] top-[-10%] opacity-10">
<span className="material-symbols-outlined text-[400px]" style={{fontVariationSettings:'\'wght\' 100'}}>movie_edit</span>
</div>
<div className="relative z-10 max-w-3xl">
<h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg mb-8">Ready to cut your first feature?</h2>
<p className="font-body-lg text-body-lg mb-12 opacity-90">
                Join a cohort of dedicated visual storytellers. Our limited-seat studio program ensures personalized mentorship from award-winning editors.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<button className="w-full sm:w-auto bg-white text-secondary-container px-10 py-5 rounded-lg font-title-md hover:shadow-xl transition-all active:scale-95">
                    Join the next cohort
                </button>
<div className="text-left">
<div className="font-label-technical text-label-technical opacity-80 uppercase">Next Start Date</div>
<div className="font-title-md text-title-md">October 10, 2024</div>
</div>
</div>
</div>
</section>




    </>
  );
};

export default MmcFilmEditingCurriculum;
