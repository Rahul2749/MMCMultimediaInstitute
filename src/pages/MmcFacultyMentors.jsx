import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcFacultyMentors = () => {
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
      


<div className="pt-16">
{/* Hero Section */}
<section className="relative min-h-[70vh] flex items-center px-64 max-lg:px-10 py-24 overflow-hidden">
<div className="grid-overlay absolute inset-0 pointer-events-none opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-secondary/5 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border border-secondary-container/30 rounded-full mb-6">
<span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
<span className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">Industry Direct</span>
</div>
<h1 className="font-display-xl text-display-xl mb-6 leading-none">The Industry is the <span className="text-secondary">Classroom</span></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Learn from the masters of the craft. Our faculty comprises award-winning supervisors, lead animators, and senior editors actively shaping the future of global entertainment.</p>
</div>
{/* Atmospheric VFX Elements */}
<div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none hidden lg:block">
<div className="absolute top-1/4 right-0 w-full h-[1px] bg-secondary"></div>
<div className="absolute top-1/2 right-12 w-32 h-32 border border-secondary rounded-full flex items-center justify-center">
<div className="w-24 h-24 border border-secondary/40 rounded-full flex items-center justify-center">
<div className="w-16 h-16 border border-secondary/20 rounded-full"></div>
</div>
</div>
</div>
</section>
{/* Faculty Grid Section */}
<section className="px-64 max-lg:px-10 py-24 bg-surface-container-lowest relative">
<div className="flex items-center justify-between mb-16">
<div className="flex flex-col gap-2">
<h2 className="font-headline-lg text-headline-lg">Meet Your <span className="text-secondary">Mentors</span></h2>
<p className="font-label-technical text-label-technical text-on-surface-variant uppercase">Current 2024 Active Roster</p>
</div>
<div className="h-[1px] flex-grow mx-8 bg-outline-variant opacity-30"></div>
<div className="flex gap-4">
<button className="p-2 border border-outline-variant rounded hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-on-surface">filter_list</span>
</button>
<button className="p-2 border border-outline-variant rounded hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-on-surface">search</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
{/* Faculty Member 1: Marcus Thorne */}
<div className="studio-card group relative">
<div className="studio-border relative aspect-[3/4] overflow-hidden bg-surface-container">
<img alt="Marcus Thorne VFX Supervisor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi_X_43DzejvjW9GKH2W487VaVGRAgKfzsm1OPPkBObsoXa1eBf_wD6KijgZndpHWKJj9ndhgg-EGV2YuQtdQIQsfPKmE0mxQ_xPSTnmy2-t0YF5fqBBD_0RElpg52Zyxlwmj9ZuDTPstvq5zrdtFEw3tYSuUyzE_WwUWjt6h_jwk_ZW0YsqQgCBSb-IhFu-Gx_K5E82L7S5wctywA1i_JR0NQzgB8nXEqDAl9Kwo-16cE8YNMMYYFlH9Ig3phUsX532gIC8pvMkBG" />
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 font-label-technical text-[10px] text-on-surface-variant opacity-60">FAC_ID: MT_VFX_98</div>
</div>
<div className="pt-6">
<h3 className="font-title-md text-title-md mb-1 group-hover:text-secondary transition-colors">Marcus Thorne</h3>
<p className="font-label-technical text-label-technical text-secondary uppercase mb-3">Senior VFX Supervisor</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-[10px] font-label-technical">Nuke Compositing</span>
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-[10px] font-label-technical">TD Pipeline</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">Credits: 'Blade Runner 2049', 'The Mandalorian'.</p>
</div>
</div>
{/* Faculty Member 2: Elena Vance */}
<div className="studio-card group relative">
<div className="studio-border relative aspect-[3/4] overflow-hidden bg-surface-container">
<img alt="Elena Vance Creative Director" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz8BkouFP0dRSEorFuda5VBQWdhoxFlVsxSYgwqeRvZ95eZS5tNLA76ivxYSSpTxs0jQSLk3i37FiNbyn34iMDv2-43dYZMQaE6DSshdA9qw_J1NKM_HqTIGJwJ8JMZu19zDZTkEVFse1osMfiPI_8zDAlC6_n9ETqwiVlRQe0VQG-y7e2uonRBx3jlYVElWzKxPoS3SzZ3S7fCC01unb04AAhDSAc2mZk_zvRqu6xFsa8a-p5xy_eneljK3aFDBe1AULzDi4g0l11" />
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 font-label-technical text-[10px] text-on-surface-variant opacity-60">FAC_ID: EV_DES_42</div>
</div>
<div className="pt-6">
<h3 className="font-title-md text-title-md mb-1 group-hover:text-secondary transition-colors">Elena Vance</h3>
<p className="font-label-technical text-label-technical text-secondary uppercase mb-3">Creative Director</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-[10px] font-label-technical">Brand Identity</span>
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-[10px] font-label-technical">Product Systems</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">Credits: Apple, Nike, Pentagram.</p>
</div>
</div>
{/* Faculty Member 3: Sarah Chen */}
<div className="studio-card group relative">
<div className="studio-border relative aspect-[3/4] overflow-hidden bg-surface-container">
<img alt="Sarah Chen Lead Character Animator" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBONw9wwjjD_mbstxhcrhulWeCj5gQPY1OJ6IzYrpuR_mcaV6o4KykGDwgDxhCHJaMTSnThwy9LRbB5slFUqWknTkUsjY12HSlFWDriPu-Qdpg-UvUvAQpwiq6hficAkbOcSEQ4nCokocItSGhKDe_PsTD4_8UhUxTPXBk1l_n03TE5iG_ooTSa4yU7NA8aA7mTegJNwXxnWSeaDkhk7EQnn3sad0ROx2xGRx8T-E3CxWU9WHBwDwx6Xh_QAHkk5p1os9aKaFbW4VGJ" />
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 font-label-technical text-[10px] text-on-surface-variant opacity-60">FAC_ID: SC_ANI_11</div>
</div>
<div className="pt-6">
<h3 className="font-title-md text-title-md mb-1 group-hover:text-secondary transition-colors">Sarah Chen</h3>
<p className="font-label-technical text-label-technical text-secondary uppercase mb-3">Lead Character Animator</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-[10px] font-label-technical">Maya Performance</span>
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-[10px] font-label-technical">Creature Rig</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">Credits: Pixar, Dreamworks.</p>
</div>
</div>
{/* Faculty Member 4: David Miller */}
<div className="studio-card group relative">
<div className="studio-border relative aspect-[3/4] overflow-hidden bg-surface-container">
<img alt="David Miller Senior Film Editor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdS2Xm__2Ld2KNHiFUZo3tvKETz5I0jDg-3oLUvZbGYhO_bGJgrPPHgdlRN_vge1G2v1RxH3jlWAuSR40mls3LoJ6ey_nwBukG2hOayh-ztarZR9fWCaPHRpQhUEqMV13v61FYq47AUAnEVTzX8bReKMjjmQSfZnhFzyqiFoGfa2i4gxzPjknkYk7Uuyw9Xn3OsM7ERwggP4a3CTO41bJy3fYGpe6seuRmTojbwAGsZ7fJPfP3xOnFfVLDOfVuhQ1FtiMcCx0rW6M" />
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
<div className="absolute top-4 left-4 font-label-technical text-[10px] text-on-surface-variant opacity-60">FAC_ID: DM_EDT_03</div>
</div>
<div className="pt-6">
<h3 className="font-title-md text-title-md mb-1 group-hover:text-secondary transition-colors">David Miller</h3>
<p className="font-label-technical text-label-technical text-secondary uppercase mb-3">Senior Film Editor</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-[10px] font-label-technical">Narrative Pacing</span>
<span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-[10px] font-label-technical">DaVinci Resolve</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">Credits: 'Mad Max: Fury Road', 'Dune'.</p>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="relative py-32 px-64 max-lg:px-10 bg-surface overflow-hidden">
<div className="grid-overlay absolute inset-0 opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="font-label-technical text-label-technical text-secondary mb-4 tracking-[0.2em] uppercase">Applications Closing Soon</div>
<h2 className="font-display-xl text-headline-lg md:text-display-xl mb-10 max-w-3xl">Ready to learn from the <span className="text-secondary">best?</span></h2>
<div className="flex flex-col sm:flex-row gap-6">
<button className="bg-secondary-container text-on-secondary-container font-title-md text-body-md font-bold px-12 py-4 rounded-lg accent-glow hover:scale-[1.02] transition-all duration-300">
                        Apply for the Spring Cohort
                    </button>
<button className="bg-transparent border border-outline-variant text-on-surface font-title-md text-body-md font-bold px-12 py-4 rounded-lg hover:bg-surface-container-highest transition-all duration-300">
                        View Portfolio Requirements
                    </button>
</div>
<div className="mt-16 flex items-center gap-8 opacity-40 grayscale">
<span className="font-label-technical text-label-technical">AFFILIATIONS:</span>
<span className="font-display-xl text-title-md font-black tracking-tighter italic">VFX GITHUB</span>
<span className="font-display-xl text-title-md font-black tracking-tighter italic">CINEMA TECH</span>
<span className="font-display-xl text-title-md font-black tracking-tighter italic">STUDIO PRIME</span>
</div>
</div>
</section>
</div>




    </>
  );
};

export default MmcFacultyMentors;
