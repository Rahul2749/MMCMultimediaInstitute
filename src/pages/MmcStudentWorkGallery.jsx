import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcStudentWorkGallery = () => {
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
<header className="bg-background dark:bg-background border-b border-outline-variant fixed top-0 w-full z-50">
<div className="flex justify-between items-center w-full px-margin-desktop h-20 max-w-full mx-auto">
<div className="font-headline-lg text-headline-lg font-bold text-on-background dark:text-on-background">
                Multimedia Institute
            </div>

<div className="flex items-center gap-6">
<button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded font-body-md text-body-md hover:opacity-80 transition-opacity">
                    Apply Now
                </button>
</div>
</div>
</header>
<main className="pt-20">
{/* Hero Section */}
<section className="relative h-[614px] flex items-center overflow-hidden bg-surface-container-lowest">

<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="relative z-10 px-margin-desktop w-full max-w-7xl mx-auto">
<div className="max-w-3xl">
<span className="font-label-technical text-label-technical text-secondary uppercase tracking-[0.2em] mb-4 block">Archive 2024</span>
<h1 className="font-display-xl text-display-xl text-on-surface mb-6">The New Standard</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        Showcasing high-impact projects from our professional specialist tracks. A curated selection of cinematic visual effects, precise editing, and technical world-building.
                    </p>
</div>
</div>
<div className="absolute bottom-0 right-margin-desktop pb-12 hidden lg:block">
<div className="flex items-center gap-4 text-outline">
<span className="font-label-technical text-label-technical">SCROLL TO EXPLORE</span>
<div className="w-px h-12 bg-outline-variant"></div>
</div>
</div>
</section>
{/* Gallery Controls */}
<section className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant">
<div className="px-margin-desktop max-w-full mx-auto py-6 flex flex-wrap items-center justify-between gap-6">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
<button className="font-label-technical text-label-technical px-6 py-2 active-filter border border-secondary transition-all">ALL</button>
<button className="font-label-technical text-label-technical px-6 py-2 text-on-surface-variant border border-outline-variant hover:border-secondary transition-all">VISUAL EFFECTS</button>
<button className="font-label-technical text-label-technical px-6 py-2 text-on-surface-variant border border-outline-variant hover:border-secondary transition-all">FILM EDITING</button>
<button className="font-label-technical text-label-technical px-6 py-2 text-on-surface-variant border border-outline-variant hover:border-secondary transition-all">3D ANIMATION</button>
<button className="font-label-technical text-label-technical px-6 py-2 text-on-surface-variant border border-outline-variant hover:border-secondary transition-all">GRAPHIC DESIGN</button>
</div>
<div className="hidden md:flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">grid_view</span>
<div className="h-4 w-px bg-outline-variant"></div>
<span className="material-symbols-outlined text-sm">filter_list</span>
</div>
</div>
</section>
{/* Project Grid */}
<section className="px-margin-desktop py-12 max-w-full mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Card 1: VFX */}
<div className="group project-card relative aspect-video bg-surface-container overflow-hidden technical-stroke">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A hyper-realistic cinematic VFX shot of a futuristic Neo-Tokyo cityscape at night. Towering skyscrapers are adorned with neon holograms and glowing ads in vibrant reds and teals. The lighting is moody and rainy, with detailed reflections on wet asphalt. The overall aesthetic is professional, sharp, and high-performance, mirroring a high-budget film production environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz3PWeKMnQYLF2sQq_U9nUtnaID8k3OPQpf8TDTGHHUBdM4ceZ3Y-c2nohiO2tNqt9MJQIlVC9OK4pysdOOaRIvxj_9hFhD61GClZYs_XWT3dMXmcXxWpFC8q7VJKfSBEBKIv9qxwa424wBx1-E6KYAFnCPaZxKjGlKADaddhmAYn5FaaGA5hbQxFZTusMbeMXVFTjo0czCiT6WxeYak3OaFvjh4B3Rd8lCb4eAwGYP_29x_1qd_ShTlD7fBCFXCr7YoB3M8a7ZMtD" />
<div className="project-overlay absolute inset-0 bg-background/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="mb-4">
<span className="font-label-technical text-label-technical text-secondary bg-secondary/10 px-2 py-1">VISUAL EFFECTS</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Neo-Tokyo Environment</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Aris Thorne</p>
<div className="flex items-center gap-4 text-outline border-t border-outline-variant pt-4">
<span className="font-label-technical text-label-technical">NUKE</span>
<span className="font-label-technical text-label-technical">HOUDINI</span>
</div>
</div>
</div>
{/* Card 2: Editing */}
<div className="group project-card relative aspect-video bg-surface-container overflow-hidden technical-stroke">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A dramatic still from a professional short film titled The Silent Echo. The composition shows a solitary figure in a vast, minimalist concrete corridor with high-contrast chiaroscuro lighting. The color grading is cold and desaturated, leaning into deep blacks and silver-gray tones. The image captures the technical precision of high-end film editing and professional color suites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1LEsxfuCPKbq9Ja9dzGetclnAO9lBDiTvuFN1I3Z3XGyJA5PNaiVrgLDG0bRmaSeZ76e2tiZhSG41xNrBZI6wVqGj7Hdjj9DbzSz5Okol3ithVh6VMvBny7SivffJ9PU1GixOPSrTcPePrjYZ6Kc6p2GsUWyimQQ9ML-mSXV1BgNeUxW6iHurUzR8Zakm30U9KCa6WRprCExnhtEei-IoJKJvIVb7SwpUzZSX5xruws-8D5U58ZMtmocLcGziR56RQuc00fjqhKc4" />
<div className="project-overlay absolute inset-0 bg-background/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="mb-4">
<span className="font-label-technical text-label-technical text-secondary bg-secondary/10 px-2 py-1">FILM EDITING</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">The Silent Echo - Short Film</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Elena Rossi</p>
<div className="flex items-center gap-4 text-outline border-t border-outline-variant pt-4">
<span className="font-label-technical text-label-technical">PREMIERE PRO</span>
<span className="font-label-technical text-label-technical">DAVINCI RESOLVE</span>
</div>
</div>
</div>
{/* Card 3: 3D Animation */}
<div className="group project-card relative aspect-video bg-surface-container overflow-hidden technical-stroke">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A highly detailed 3D render of a mechanical titan character. The robot features intricate joints, weathered metal textures, and glowing red optical sensors. The lighting is dramatic, highlighting the technical craftsmanship of the hard-surface modeling. The background is a dark, industrial hangar with atmospheric smoke and sharp lighting accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE8yDYVRQcqx8q_k8zHwI_S9EcygRw74v2BtaE3qEg5wGZZjYN7P0NpE0D1DOPH4x01aYmuqgpfiHQnopqExkH5waPU88xWgszm7LoJAAjdQRDqHmRfO-z7rseNMBB2XdwkI7obvdHhF77uGxSw4zLinJRk1zzpcz57NbGAZhKZIq-DPEUPKWGT2MBTS1YjfHvoyZfzdxPW2ASBKj1r1vHrH9D-AQhZ87MNHtkGKnaIce6ybl5dF1bY8AJJdyj8VLBl2uZ4b0ccwLZ" />
<div className="project-overlay absolute inset-0 bg-background/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="mb-4">
<span className="font-label-technical text-label-technical text-secondary bg-secondary/10 px-2 py-1">3D ANIMATION</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Mechanical Titan</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Marcus Chen</p>
<div className="flex items-center gap-4 text-outline border-t border-outline-variant pt-4">
<span className="font-label-technical text-label-technical">MAYA</span>
<span className="font-label-technical text-label-technical">UNREAL ENGINE</span>
</div>
</div>
</div>
{/* Card 4: Design */}
<div className="group project-card relative aspect-video bg-surface-container overflow-hidden technical-stroke">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A sleek brand identity presentation for Lumina. The image showcases minimalist logo applications on premium black packaging and digital interfaces. The visual language uses thin strokes, generous white space, and a signature secondary red accent color. The layout is structured on a strict grid, emphasizing technical minimalism and modern graphic design principles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7fFOlAhzaxkocFhNgp9E2jV6VLoCt3x7a0MMKk8HKMQBK4pbLoZuZzd-TAXICymAbiBWE6526FB-fVmYh6wt44iULyOC83LMpqdpkpAWmxyXy5uMF6A7W8hi4A7JBGx0pzccx98GzF0e3R3A5BpK1B5g1A4i17S0-HG8j2bu2uCezhVrAPECM31qPuQve_4oukNmifWFKUwi1MGKlQfYcwVLq1sFU3V3autagTLyKcXaqOnJG20YlwiMopzaOPF0y3vtkL_k7J9T" />
<div className="project-overlay absolute inset-0 bg-background/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="mb-4">
<span className="font-label-technical text-label-technical text-secondary bg-secondary/10 px-2 py-1">GRAPHIC DESIGN</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Lumina Brand Identity</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Sarah Jenkins</p>
<div className="flex items-center gap-4 text-outline border-t border-outline-variant pt-4">
<span className="font-label-technical text-label-technical">ILLUSTRATOR</span>
<span className="font-label-technical text-label-technical">FIGMA</span>
</div>
</div>
</div>
{/* Card 5: VFX */}
<div className="group project-card relative aspect-video bg-surface-container overflow-hidden technical-stroke">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="An abstract but technically advanced 3D fluid simulation. The shot captures a metallic liquid splashing in zero-gravity, with thousands of fine droplets caught in high-shutter speed motion. The lighting is professional studio-grade, creating crisp highlights on the viscous liquid. The color palette is monochromatic with deep shadows and brilliant white highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMCRg-18o-N1JZHk6C3NuKrScD7JDSe5uPFX5OxSf-iVJ2nC1T0wj6OuwKGriYUMjgVGhTQhf0bZNiqMcMHqqhx-YDa5pl6nneGw596Hy9dQ_on4y9ALmWquJRBa062_Ca5aukrKhVz-47_UmwUmEHkDzq3wWFWTfJGd5ZgLd9dVm6CJ212-sfNZj3nguo4UyNNQxL8cFLaeyQ-votEiOD1qh_cHQfGMkOJx5AqpP9B31vFzDD8_4sN4vJB6Wp0v9ylsDGH8qjg1CX" />
<div className="project-overlay absolute inset-0 bg-background/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="mb-4">
<span className="font-label-technical text-label-technical text-secondary bg-secondary/10 px-2 py-1">VISUAL EFFECTS</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Liquid Simulation Study</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">David Park</p>
<div className="flex items-center gap-4 text-outline border-t border-outline-variant pt-4">
<span className="font-label-technical text-label-technical">HOUDINI</span>
</div>
</div>
</div>
{/* Card 6: 3D Animation */}
<div className="group project-card relative aspect-video bg-surface-container overflow-hidden technical-stroke">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A close-up 3D character render focusing on detailed facial performance and skin micro-textures. The character's expression is subtle and emotive, lit by a soft three-point lighting setup that emphasizes anatomical accuracy. The visual style is high-end digital human work, showing pores, fine hair, and realistic light scattering on the skin." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmN2XM33yMSC_SsgCLF-Fk03GSAj-n9L93xieWLDB9XwfTmMT-xyQuUN4YI7dGxya7iJNyOOW3pco23aXq0L91CEysDKDa-rtKoEoGhohVhPQWjqFS3kk4Li2Xu7Bdg949TEZD5fC6rPXpWhcIpihYAN3IVtTOwM3TsUPCUhIw1JyI8QzTwqGaUNoTV2hiIPE3g8PkSV5Fi6z2Fg5RxuoIz7ly4XR2qOq18D1aisdGNj1TdBVVQJVabOlVHxVes1FEDQLBXPwvV8q6" />
<div className="project-overlay absolute inset-0 bg-background/80 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="mb-4">
<span className="font-label-technical text-label-technical text-secondary bg-secondary/10 px-2 py-1">3D ANIMATION</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-1">Character Performance</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Chloe Wu</p>
<div className="flex items-center gap-4 text-outline border-t border-outline-variant pt-4">
<span className="font-label-technical text-label-technical">MAYA</span>
<span className="font-label-technical text-label-technical">ZBRUSH</span>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<button className="font-label-technical text-label-technical border border-outline-variant px-12 py-4 hover:border-secondary hover:text-secondary transition-all group">
                    LOAD MORE PROJECTS
                    <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-y-1 transition-transform">expand_more</span>
</button>
</div>
</section>
{/* Technical Stats Section */}
<section className="py-24 border-t border-outline-variant bg-surface-container-lowest">
<div className="px-margin-desktop max-w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter">
<div className="space-y-2">
<span className="font-display-xl text-[64px] font-extrabold text-on-surface">150+</span>
<p className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">Industry Awards</p>
</div>
<div className="space-y-2">
<span className="font-display-xl text-[64px] font-extrabold text-on-surface">94%</span>
<p className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">Placement Rate</p>
</div>
<div className="space-y-2">
<span className="font-display-xl text-[64px] font-extrabold text-on-surface">12k</span>
<p className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">Render Hours</p>
</div>
<div className="space-y-2">
<span className="font-display-xl text-[64px] font-extrabold text-on-surface">2.4 PB</span>
<p className="font-label-technical text-label-technical text-secondary uppercase tracking-widest">Project Data</p>
</div>
</div>
</section>
</main>
{/* Footer */}



    </>
  );
};

export default MmcStudentWorkGallery;
