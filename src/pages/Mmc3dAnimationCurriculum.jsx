import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mmc3dAnimationCurriculum = () => {
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

<div className="flex">
{/* SideNavBar */}
<aside className="hidden lg:flex flex-col h-screen w-64 sticky left-0 top-16 p-4 gap-unit border-r border-outline-variant bg-surface">
<div className="mb-8 px-2">
<div className="font-title-md text-title-md font-bold text-on-surface">Curriculum</div>
<div className="font-label-technical text-label-technical text-on-surface-variant uppercase tracking-widest opacity-60">Professional Tracks</div>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-technical text-label-technical">Overview</span>
</a>
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
<span className="material-symbols-outlined">auto_fix_high</span>
<span className="font-label-technical text-label-technical">VFX Track</span>
</a>
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
<span className="material-symbols-outlined">movie_edit</span>
<span className="font-label-technical text-label-technical">Editing Track</span>
</a>
<a className="flex items-center gap-3 p-3 bg-secondary-container text-on-secondary-container font-bold rounded-lg translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined">layers</span>
<span className="font-label-technical text-label-technical">3D Pipeline</span>
</a>
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high transition-all duration-200 rounded-lg" href="#">
<span className="material-symbols-outlined">palette</span>
<span className="font-label-technical text-label-technical">Color Grading</span>
</a>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant flex flex-col gap-1">
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-technical text-label-technical">Support</span>
</a>
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-technical text-label-technical">Account</span>
</a>
</div>
</aside>
{/* Main Content */}
<div className="flex-1 min-w-0">
{/* Hero Section */}
<section className="relative h-[819px] flex items-center overflow-hidden border-b border-outline-variant">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-40" data-alt="A high-fidelity cinematic 3D render of a complex mechanical character rig in a dark studio setting. The lighting is dramatic and technical, with neon pink highlights defining the character's muscular geometry. The atmosphere is professional and industrial, mirroring a high-end VFX workstation. Subtle depth of field emphasizes the intricate skeletal details of the digital model." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADOVjkJ45k-cSKc4cxww0cNs5064JPOlPnsxO56vkkWQGx-aNR4vbRQbBOlyXdaaxeftzGVo8Fk1PNWSMraSBwvC2R-0oHyYRFjm1ilVMDyg6oTns0lvZGOxFEOSHpzJRzEPeAoqKtwQBSEzH7MQm6Uo_z0tCZGPcbsbEbYfr-T-ao390W-YQcW6mJIk-EbV31ctzOSVB0ww22F6cf09B5a15ISY-AIb7aFM4dut70w-Ux8AA8FhLrUw26fskqFbvn5B_ZQdbbFn7r" />
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
</div>
<div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full mb-6">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-technical text-label-technical text-secondary uppercase">Professional Specialization</span>
</div>
<h1 className="font-display-xl text-display-xl mb-6 text-on-surface tracking-tight">3D Animation <br /><span className="text-secondary">Specialist</span></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
                        Master the full digital pipeline. From the nuance of character performance to the complexities of creature simulations and cinematic lighting workflows. Engineered for the next generation of studio leads.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary-container hover:bg-on-secondary-fixed-variant text-white px-8 py-4 rounded font-title-md text-body-md transition-all duration-200 inner-light flex items-center gap-2">
                            Enroll Now <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<button className="bg-surface-container-high border border-outline-variant hover:bg-surface-variant text-on-surface px-8 py-4 rounded font-title-md text-body-md transition-all duration-200 flex items-center gap-2">
                            Download Syllabus <span className="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
</div>
</section>
{/* Core Curriculum: Bento Grid Layout */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
<div className="flex justify-between items-end mb-16">
<div>
<span className="font-label-technical text-label-technical text-secondary uppercase tracking-[0.2em]">01 / Program Structure</span>
<h2 className="font-headline-lg text-headline-lg mt-2">Core Curriculum</h2>
</div>
<div className="hidden md:block font-label-technical text-label-technical text-on-surface-variant">
                        24 WEEKS • STUDIO MENTORED • 4K WORKFLOW
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Module 01 */}
<div className="md:col-span-7 tonal-layer-1 p-8 rounded-lg group hover:border-secondary transition-colors duration-300">
<div className="flex justify-between items-start mb-12">
<span className="font-label-technical text-label-technical text-on-surface-variant">MODULE 01</span>
<span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">directions_run</span>
</div>
<h3 className="font-title-md text-title-md mb-4">Character Performance &amp; Mechanics</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                            Deep dive into the 12 principles of animation with a focus on modern cinematic realism. Master weight distribution, explosive timing, and the physics of complex movement.
                        </p>
<ul className="space-y-3 font-label-technical text-label-technical text-primary/70">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full"></span> BIOMECHANICS OF HUMAN LOCOMOTION</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full"></span> SUBTLE FACIAL MICRO-EXPRESSIONS</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-secondary rounded-full"></span> OVERLAP AND FOLLOW-THROUGH PHYSICS</li>
</ul>
</div>
{/* Module 02 */}
<div className="md:col-span-5 tonal-layer-2 p-8 rounded-lg relative overflow-hidden group hover:border-secondary transition-colors duration-300">
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<span className="font-label-technical text-label-technical text-on-surface-variant">MODULE 02</span>
<span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">precision_manufacturing</span>
</div>
<h3 className="font-title-md text-title-md mb-4">Advanced Rigging &amp; Creature FX</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">
                                Construction of non-humanoid skeletal systems and muscular anatomical simulations.
                            </p>
<div className="mt-4 pt-4 border-t border-outline-variant">
<div className="flex justify-between font-label-technical text-[10px] mb-2 uppercase opacity-60">
<span>Complexity Level</span>
<span>Advanced</span>
</div>
<div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
<div className="w-4/5 h-full bg-secondary"></div>
</div>
</div>
</div>
{/* Decorative mesh pattern */}
<div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[160px]" style={{fontVariationSettings:'\'FILL\' 0, \'wght\' 100'}}>grid_4x4</span>
</div>
</div>
{/* Module 03 */}
<div className="md:col-span-12 tonal-layer-1 p-8 rounded-lg flex flex-col md:flex-row gap-8 items-center group hover:border-secondary transition-colors duration-300">
<div className="flex-1">
<span className="font-label-technical text-label-technical text-on-surface-variant block mb-4">MODULE 03</span>
<h3 className="font-title-md text-title-md mb-4">Look-Dev &amp; Cinematic Lighting</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">
                                The art of visual storytelling through light. Master Arnold and RenderMan workflows, focusing on physically based rendering (PBR) and advanced material science to achieve photorealism.
                            </p>
<div className="flex gap-4 flex-wrap">
<span className="px-3 py-1 bg-surface-container-high border border-outline-variant text-on-surface font-label-technical text-label-technical">ARNOLD RENDERER</span>
<span className="px-3 py-1 bg-surface-container-high border border-outline-variant text-on-surface font-label-technical text-label-technical">ACES WORKFLOW</span>
<span className="px-3 py-1 bg-surface-container-high border border-outline-variant text-on-surface font-label-technical text-label-technical">SUBSTANCE PAINTER</span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-video bg-surface-container-highest rounded-lg overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A highly detailed close-up of a 3D digital material shader test. The image shows a complex surface with metallic micro-scratches, iridescent light refraction, and subtle subsurface scattering. The lighting is a three-point studio setup with a dominant pink rim light, showcasing the technical look-development process in a professional VFX software environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2nNxWcPBg1pIQot0VjqRDlyjxNI6bMcL-J3tJxAweSZ7SQpKYx3knqzHYw2B7pVne74xDvSOnvilPvX_rL0izgCs9UyTAQMTh3fw8_iXJhka6XufgezSijng2-EvZdffzI0XCAMQXDwpPKXcNzb9fkSZs8KOrCQvdxWT9xjUpQrBnprnq_JHjO-Rj8YH-Rc41bER0IlbQqH8ffA4zm-S8SBzum94X1TxVXmInQ4kTYGTDHZIY9wqh96hvDkxJToRTBbUQ1u1abmAE" />
</div>
</div>
</div>
</section>
{/* Software Ecosystem */}
<section className="py-24 px-margin-mobile md:px-margin-desktop border-t border-outline-variant">
<div className="text-center mb-16">
<span className="font-label-technical text-label-technical text-secondary uppercase tracking-[0.2em]">Industry Standard</span>
<h2 className="font-headline-lg text-headline-lg mt-2">The Software Ecosystem</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-panel-gap bg-outline-variant border border-outline-variant">
<div className="bg-background p-12 flex flex-col items-center justify-center group hover:bg-surface-container-low transition-colors">
<div className="w-16 h-16 mb-6 flex items-center justify-center bg-surface-container-high rounded border border-outline-variant group-hover:border-secondary transition-all">
<span className="material-symbols-outlined text-[32px] text-secondary">token</span>
</div>
<span className="font-title-md text-body-md font-bold">Autodesk Maya</span>
<span className="font-label-technical text-[10px] text-on-surface-variant mt-2 uppercase">Core Pipeline</span>
</div>
<div className="bg-background p-12 flex flex-col items-center justify-center group hover:bg-surface-container-low transition-colors">
<div className="w-16 h-16 mb-6 flex items-center justify-center bg-surface-container-high rounded border border-outline-variant group-hover:border-secondary transition-all">
<span className="material-symbols-outlined text-[32px] text-secondary">capture</span>
</div>
<span className="font-title-md text-body-md font-bold">ZBrush</span>
<span className="font-label-technical text-[10px] text-on-surface-variant mt-2 uppercase">Organic Sculpting</span>
</div>
<div className="bg-background p-12 flex flex-col items-center justify-center group hover:bg-surface-container-low transition-colors">
<div className="w-16 h-16 mb-6 flex items-center justify-center bg-surface-container-high rounded border border-outline-variant group-hover:border-secondary transition-all">
<span className="material-symbols-outlined text-[32px] text-secondary">view_in_ar</span>
</div>
<span className="font-title-md text-body-md font-bold">Blender</span>
<span className="font-label-technical text-[10px] text-on-surface-variant mt-2 uppercase">Generalist Toolkit</span>
</div>
<div className="bg-background p-12 flex flex-col items-center justify-center group hover:bg-surface-container-low transition-colors">
<div className="w-16 h-16 mb-6 flex items-center justify-center bg-surface-container-high rounded border border-outline-variant group-hover:border-secondary transition-all">
<span className="material-symbols-outlined text-[32px] text-secondary">rocket_launch</span>
</div>
<span className="font-title-md text-body-md font-bold">Unreal Engine</span>
<span className="font-label-technical text-[10px] text-on-surface-variant mt-2 uppercase">Real-time Rendering</span>
</div>
</div>
</section>
{/* Call to Action */}
<section className="relative py-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
<div className="absolute inset-0 bg-secondary-container opacity-10"></div>
{/* Animated decorative background elements could go here */}
<div className="relative z-10 max-w-4xl mx-auto text-center">
<h2 className="font-display-xl text-headline-lg md:text-display-xl mb-8">Bring your characters to life.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
                        Applications for the Spring cohort are now open. Join a network of professional animators working at the world's leading studios.
                    </p>
<div className="flex flex-col md:flex-row justify-center gap-6 items-center">
<div className="text-left px-8 py-4 border-l-2 border-secondary bg-surface-container-high">
<div className="font-label-technical text-label-technical text-secondary">NEXT START DATE</div>
<div className="font-title-md text-title-md text-on-surface mt-1">OCTOBER 14, 2024</div>
</div>
<button className="bg-secondary-container hover:bg-on-secondary-fixed-variant text-white px-12 py-6 rounded font-title-md text-title-md transition-all duration-300 transform hover:scale-105 inner-light">
                            Begin Enrollment
                        </button>
</div>
</div>
</section>


</div>
</div>
{/* Micro-interactions Script */}


    </>
  );
};

export default Mmc3dAnimationCurriculum;
