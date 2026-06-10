import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcGraphicDesignCurriculum = () => {
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
      
{/* SVG Noise Filter */}
<svg className="hidden">
<filter id="noiseFilter">
<feTurbulence baseFrequency="0.6" stitchTiles="stitch" type="fractalNoise"></feTurbulence>
</filter>
</svg>


{/* SideNavBar (Desktop Only) */}
<aside className="hidden lg:flex flex-col fixed left-0 top-16 h-full w-64 bg-surface-container border-r border-white/10 py-8 z-40">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">grid_view</span>
</div>
<div>
<div className="font-label-technical text-label-technical uppercase text-secondary">Graphic Design</div>
<div className="text-[10px] text-on-surface-variant uppercase tracking-widest">Professional Specialist</div>
</div>
</div>
</div>

<div className="px-6 mt-auto mb-20">
<button className="w-full py-3 border border-secondary text-secondary font-label-technical text-label-technical hover:bg-secondary/5 transition-all">
                Download Syllabus
            </button>
</div>
</aside>
{/* Main Content */}
<div className="lg:pl-64 pt-16 min-h-screen">
{/* Hero Section */}
<section className="relative h-[819px] flex items-center overflow-hidden technical-grid border-b border-white/5">
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10"></div>
{/* Background Image/Video Placeholder */}
<div className="absolute inset-0 w-full h-full opacity-40">
<div className="w-full h-full bg-surface-container-low relative">
<img className="w-full h-full object-cover" data-alt="A sophisticated, high-end professional graphic design studio setup at night with multiple high-resolution monitors displaying complex typography and grid systems. The lighting is low-key with a focus on vibrant red and pink accent glows from the hardware, creating a dark, technical atmosphere. The aesthetic is ultra-modern, focusing on precision, architecture, and professional creative workflow within the Multimedia Institute's signature style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkPWYEs34coy6wBsNhteUGhRAC0xJ-6hVQZq_9-dJlYVEomKDxmiECOfQ3iCLMXncN1G6NtwhVIvOJz75TUl48FYkRCKKF9vZr2tBi8g_moK8Bx7BtAyp3J7QVRglUtPxQSOgM63jLCjDYz4nA1ZUk_Qvra0CVZcibyhIwvPyLwtePmDm4gjg2G6FlwX20I84fEK8QjB3oOha_o2PwsskENR-yV59-F_g9TCr3XEksZ67PJUHumZ_puhaI1H8RCU5nyZSxLe8l-Bf2" />
<div className="absolute inset-0 bg-background/20 mix-blend-overlay grain opacity-30"></div>
</div>
</div>
<div className="container mx-auto px-6 md:px-12 relative z-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-secondary/10 border border-secondary/30 text-secondary font-label-technical text-label-technical uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        Specialist Track
                    </div>
<h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-tight">
                        Graphic Design <br /><span className="text-secondary">Specialist</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                        Master the science of visual communication. From grid systems and brand architecture to digital-first identity design.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary-container text-on-secondary-container px-10 py-4 font-title-md text-title-md rounded hover:scale-[1.02] active:scale-95 transition-all">Enroll Now</button>
<button className="bg-transparent border border-outline text-on-surface px-10 py-4 font-title-md text-title-md rounded hover:bg-white/5 transition-all">Download Syllabus</button>
</div>
</div>
</div>
{/* Scroll Indicator */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
<span className="font-label-technical text-label-technical text-on-surface-variant/50 uppercase tracking-[0.3em]">Curriculum</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent"></div>
</div>
</section>
{/* Curriculum Modules */}
<section className="py-24 px-6 md:px-12 bg-surface">
<div className="mb-16">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Curriculum Modules</h2>
<div className="w-24 h-1 bg-secondary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-panel-gap bg-white/10 panel-border overflow-hidden">
{/* Module 01 */}
<div className="bg-surface-container p-8 hover:bg-surface-container-high transition-colors group">
<div className="font-label-technical text-label-technical text-secondary mb-6 flex justify-between items-center">
<span>MODULE 01</span>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-4">Typography &amp; Grid Systems</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                        Focus on the architecture of the page, font pairing, and hierarchy. Master the unseen foundations of readability and structure.
                    </p>
<div className="pt-8 border-t border-white/5 space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">Anatomy of Letterforms</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">Modular Grid Layouts</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">Micro-Typography Rules</span>
</div>
</div>
</div>
{/* Module 02 */}
<div className="bg-surface-container p-8 hover:bg-surface-container-high transition-colors group">
<div className="font-label-technical text-label-technical text-secondary mb-6 flex justify-between items-center">
<span>MODULE 02</span>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-4">Brand Identity &amp; Strategy</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                        Designing for scale, logo systems, and visual storytelling. Learn how to build identities that thrive across every medium.
                    </p>
<div className="pt-8 border-t border-white/5 space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">Scalable Logo Systems</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">Brand Archetypes</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">Design Documentation</span>
</div>
</div>
</div>
{/* Module 03 */}
<div className="bg-surface-container p-8 hover:bg-surface-container-high transition-colors group">
<div className="font-label-technical text-label-technical text-secondary mb-6 flex justify-between items-center">
<span>MODULE 03</span>
<span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-4">Digital Product Design</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                        UI/UX fundamentals, prototyping, and designing for the modern web. Bridge the gap between static design and interactive experiences.
                    </p>
<div className="pt-8 border-t border-white/5 space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">User Journey Mapping</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">Component Libraries</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
<span className="font-label-technical text-[11px] text-on-surface uppercase">High-Fidelity Prototyping</span>
</div>
</div>
</div>
</div>
</section>
{/* Software Ecosystem */}
<section className="py-24 px-6 md:px-12 bg-surface-container-lowest">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Software Ecosystem</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Industry-standard tools used by professional design departments worldwide.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
{/* Tool 1 */}
<div className="flex flex-col items-center text-center p-8 bg-surface-container rounded-lg border border-white/5 group hover:border-secondary/50 transition-all">
<div className="w-16 h-16 bg-[#31A8FF]/10 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl text-[#31A8FF]" style={{fontVariationSettings:'\'FILL\' 1'}}>architecture</span>
</div>
<div className="font-title-md text-title-md text-on-surface mb-2">Adobe Illustrator</div>
<div className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-wider">Vector Mastery</div>
</div>
{/* Tool 2 */}
<div className="flex flex-col items-center text-center p-8 bg-surface-container rounded-lg border border-white/5 group hover:border-secondary/50 transition-all">
<div className="w-16 h-16 bg-[#31A8FF]/10 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl text-[#31A8FF]" style={{fontVariationSettings:'\'FILL\' 1'}}>photo_library</span>
</div>
<div className="font-title-md text-title-md text-on-surface mb-2">Adobe Photoshop</div>
<div className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-wider">Digital Imaging</div>
</div>
{/* Tool 3 */}
<div className="flex flex-col items-center text-center p-8 bg-surface-container rounded-lg border border-white/5 group hover:border-secondary/50 transition-all">
<div className="w-16 h-16 bg-[#F24E1E]/10 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl text-[#F24E1E]" style={{fontVariationSettings:'\'FILL\' 1'}}>view_quilt</span>
</div>
<div className="font-title-md text-title-md text-on-surface mb-2">Figma</div>
<div className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-wider">Product Design</div>
</div>
{/* Tool 4 */}
<div className="flex flex-col items-center text-center p-8 bg-surface-container rounded-lg border border-white/5 group hover:border-secondary/50 transition-all">
<div className="w-16 h-16 bg-[#FF3366]/10 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl text-[#FF3366]" style={{fontVariationSettings:'\'FILL\' 1'}}>auto_stories</span>
</div>
<div className="font-title-md text-title-md text-on-surface mb-2">Adobe InDesign</div>
<div className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-wider">Layout &amp; Publishing</div>
</div>
</div>
</section>
{/* Final CTA */}
<section className="relative py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20" data-alt="A macro shot of high-quality printed typography specimens and brand style guides arranged on a dark table. The lighting is dramatic and focused, highlighting the texture of the paper and the sharp edges of the fonts. Deep blacks and vibrant red details dominate the color palette, reflecting the technical excellence and dark mode aesthetic of the Multimedia Institute." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFs_3qHXtlvMnwx24scsmWELqxU1lzhXWUdBzCQcM0ds1-ghxoej3cePCICKpt6GKlpQSKcIGR9xFPJvxQfYql2KfIwgKpgOLGrOOPjf701PznSDcqW4JQATfI4o1VbrEEklaxzssUC9aBcReU3fNDbWXRQvnh9IE98lf1he-5AQkaNKeSi9G-16CDg2ywBwugaaQ86nfqcEBVLWOLx9jHQHa3FQUyaGIuqaSTRSjBgzlwrNkumZ66_KrqnLMpirXqdyhhM1YzeB7Q" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl">
<h2 className="font-display-xl text-display-xl text-on-surface mb-6">Design the future.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
                    Applications for the Spring cohort are now open. Secure your place in our professional specialist track.
                </p>
<button className="bg-secondary text-on-secondary px-12 py-5 font-title-md text-title-md rounded-full shadow-lg shadow-secondary/20 hover:scale-[1.05] transition-all">
                    Begin Enrollment
                </button>
</div>
</section>


</div>
{/* Micro-interactions Script */}


    </>
  );
};

export default MmcGraphicDesignCurriculum;
