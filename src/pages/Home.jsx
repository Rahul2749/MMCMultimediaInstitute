import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const scrubberRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Scrubber Animation using GSAP
    if (scrubberRef.current) {
      gsap.to(scrubberRef.current, {
        left: '90%',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }

    // Reveal on scroll using GSAP ScrollTrigger
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
      {/* Hero Section */}
      <section ref={addToRefs} className="relative h-[921px] flex items-center overflow-hidden bg-background">
        <div className="relative z-10 px-margin-desktop max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-outline-variant rounded mb-8">
            <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span className="font-label-technical text-[10px] uppercase tracking-widest text-on-surface-variant">Industry Grade Training</span>
          </div>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-[0.9]">Master the Art of <span className="text-secondary">Multimedia</span></h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
            The ultimate academy for high-end post-production. From cinematic visual effects to advanced editing workflows, we bridge the gap between creative vision and technical mastery.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 font-label-technical text-label-technical font-bold rounded-lg hover:bg-secondary transition-all flex items-center gap-3">
              EXPLORE CURRICULUM
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="border border-outline-variant text-on-surface px-10 py-4 font-label-technical text-label-technical font-bold rounded-lg hover:bg-surface-container-highest transition-all">
              WATCH SHOWREEL
            </button>
          </div>
        </div>

        {/* Floating UI Elements */}
        <div className="hidden lg:block absolute right-margin-desktop top-1/2 -translate-y-1/2 w-[400px]">
          <div className="glass-panel p-6 rounded-xl space-y-6">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <span className="font-label-technical text-label-technical text-secondary">ACTIVE_TIMELINE</span>
              <span className="material-symbols-outlined text-on-surface-variant">settings</span>
            </div>
            <div className="h-32 bg-surface-container-lowest rounded border border-outline-variant relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
              <div ref={scrubberRef} className="scrubber-thumb" style={{ left: '10%' }}></div>
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-outline-variant rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-1/2"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-surface-container rounded border border-outline-variant">
                <div className="text-[10px] font-label-technical text-on-surface-variant mb-1">FPS</div>
                <div className="font-label-technical text-on-surface">23.976</div>
              </div>
              <div className="p-3 bg-surface-container rounded border border-outline-variant">
                <div className="text-[10px] font-label-technical text-on-surface-variant mb-1">CODEC</div>
                <div className="font-label-technical text-on-surface">ProRes 4444</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={addToRefs} className="py-12 px-margin-desktop border-y border-outline-variant bg-surface-container-lowest">
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="font-label-technical text-label-technical tracking-widest">CERTIFIED BY:</div>
          <div className="font-display-xl text-headline-lg font-bold">ADOBE</div>
          <div className="font-display-xl text-headline-lg font-bold">BLACKMAGIC</div>
          <div className="font-display-xl text-headline-lg font-bold">AUTODESK</div>
          <div className="font-display-xl text-headline-lg font-bold">FOUNDRY</div>
        </div>
      </section>

      {/* Main Course Section */}
      <section ref={addToRefs} className="py-24 px-margin-desktop bg-background">
        <div className="mb-20">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Professional <span className="text-secondary">Specializations</span></h2>
          <div className="w-24 h-1 bg-secondary"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* VFX Course */}
          <div className="md:col-span-8 group cursor-pointer overflow-hidden rounded-xl bg-surface-container relative h-[500px] technical-stroke">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbF6iioY7gYWpH-3Qf6l1yrHYoK_Y6-WlNIGUwy1mdwW2VFUdhcCWSEtGSH0a83ufVj9eAgC8jba6baDtWvR0OAiW8lR7zPFjfBPDYHqVv3S6AmT6RKKLMu7OFX7OR29_tbsIrWRPZemxHPdGgfjJEYhwzF5ogBftbl3YSGAaOWIl14JlbAcu0KNEK-cSUayCgkZCmq6MDu_lpkOw-WX-BpeYdRq4fpNQ5KppQ3WWOQvHXBIl5ze7dpJRJTERk6bdGttZ7BJncZWel" alt="VFX Course" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 bg-tertiary text-on-tertiary font-label-technical text-[10px] rounded uppercase font-bold">VFX</span>
              <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur-sm text-on-surface font-label-technical text-[10px] rounded uppercase">24 Weeks</span>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-title-md text-headline-lg text-on-surface mb-2">Visual Effects</h3>
              <p className="text-on-surface-variant max-w-md mb-6">Master the cinematic magic of high-end compositing, fluid simulations, and node-based workflows in Nuke and Houdini.</p>
              <div className="flex items-center gap-6">
                <button className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-label-technical text-label-technical font-bold">Enroll Now</button>
                <a className="text-on-surface font-label-technical text-label-technical underline decoration-secondary underline-offset-4" href="#">Learn More</a>
              </div>
            </div>
          </div>

          {/* Film Editing */}
          <div className="md:col-span-4 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-high relative h-[500px] technical-stroke">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_l4l0tot1aXcEvLNwjkskBFb5NiLEjcr_pqFbe9sjF7j9TXiKhCgG58rUGPR1wgbLK1TYdaa5F_BHGtdrEQ_Eb9-IEsaAok3siZe59dmY7v_R4l6YyE56oxH3U2oTJSkH0Y2m-bl6i7go2PNTBAZH2QH7NnwndG_xcrTIvDkE64irefnIb-W0FBvj1Ytfqfky66fcgMH39xDQyL0WSOtmFc9bWXvjyB-5Agh8XAl-92DRDEJJuXTHoHCuA7YgHUDPEhRz3uqRBHxk" alt="Film Editing" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 bg-secondary text-on-secondary font-label-technical text-[10px] rounded uppercase font-bold">Editing</span>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-title-md text-title-md text-on-surface mb-2">Film Editing</h3>
              <p className="text-on-surface-variant mb-6">Craft compelling stories through rhythm, pace, and structural narrative using industry-standard tools.</p>
              <button className="w-full bg-surface-container-highest border border-outline-variant text-on-surface px-6 py-3 rounded-lg font-label-technical text-label-technical font-bold hover:bg-secondary transition-colors">Syllabus</button>
            </div>
          </div>

          {/* 3D Animation */}
          <div className="md:col-span-6 group cursor-pointer overflow-hidden rounded-xl bg-surface-container-highest relative h-[450px] technical-stroke">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLHtWSNMIc3gFbQbvP3XSXz1lOrbfQebyEEjj8Aq6s9IHlTbWlOt08WqLM8Q6T5X8SiItrZpGiR0vD_CR4Znd22OlACxrBJ1ibMdH2GgGU9bjOeu6pXtlYv1TVUoO10_F2UMOrVcHsyfoEC8ikVH1OrT-GWdJHaifXo2Lk5Scj8YioF_Jzq1Oh9Vjqb_lQ5ko6Zjr0BzYouuRA1jdE7VSkxb_Dm512pDw0PW9wvJ5gb3HkkTSoIQCzxsy87UMBfJzl64PMHGT6-WAf" alt="3D Animation" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-purple-600 text-white font-label-technical text-[10px] rounded uppercase font-bold">3D Animation</span>
            </div>
            <div className="absolute bottom-8 left-8">
              <h3 className="font-title-md text-title-md text-on-surface mb-2">Character Design</h3>
              <p className="text-on-surface-variant max-w-sm">From skeletal rigging to advanced facial animation and world-building.</p>
            </div>
          </div>

          {/* Graphic Design */}
          <div className="md:col-span-6 group cursor-pointer overflow-hidden rounded-xl bg-surface-container relative h-[450px] technical-stroke">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
            <div className="absolute top-12 right-12 w-32 h-32 border-2 border-outline-variant rounded-full opacity-20 group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-on-surface text-background font-label-technical text-[10px] rounded uppercase font-bold">Design</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
              <div>
                <h3 className="font-display-xl text-headline-lg text-on-surface mb-4">Graphic Identity</h3>
                <p className="text-on-surface-variant max-w-md mx-auto mb-8">Precision typography and brand architecture for the digital age. Learn the science of visual communication.</p>
                <button className="bg-outline-variant hover:bg-on-surface hover:text-background text-on-surface px-8 py-3 rounded-lg font-label-technical text-label-technical transition-all">View Projects</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section ref={addToRefs} className="py-24 px-margin-desktop bg-surface-container-lowest border-y border-outline-variant">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="font-label-technical text-label-technical text-secondary tracking-widest mb-4 block">THE WORKSTATION PHILOSOPHY</span>
            <h2 className="font-headline-lg text-headline-lg mb-8">Tools of the <span className="text-secondary">Trade</span></h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-surface-container border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md mb-2">High-Performance Lab</h4>
                  <p className="text-on-surface-variant">Each student is assigned a dedicated workstation featuring Threadripper CPUs and Dual RTX 4090 GPUs.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-surface-container border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome_motion</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md mb-2">Industry Pipeline</h4>
                  <p className="text-on-surface-variant">Learn the Shotgrid-managed pipeline used by global studios like ILM and Weta FX.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-surface-container-highest rounded-xl overflow-hidden border border-outline-variant shadow-2xl">
              <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJvj75J_p2Pspe9X5kkAbxz30AP26RTAFWeC1h2y7ypJuYhgHrz4TW8woT97mA1NqcqpXzFG5XEK1w9PMzApM2HsX7ArWL-Vlm3kuavCjiXKpITq-H3auoCUkPcnueOLEDKD1Yp4eNqE2nmoheMDbeKaVBuGJfH0GA2ywste9QjmZuLQPeOQyyeWbZDxguetrgE3u07Npnv2KopLH7F3mlONlDULqGduZxhfvKigAZNdLBkxF2eurfR5f4B6Y_DUKPABNkPiOqQMd-" alt="Workstation" />
              <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-secondary text-on-secondary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </div>
              </div>
            </div>
            {/* Precision Label Decor */}
            <div className="absolute -bottom-4 -right-4 bg-background border border-secondary p-4 rounded font-label-technical text-[10px] text-secondary">
              STUDIO_STATUS: [ONLINE]<br/>
              LATENCY: 0.2ms<br/>
              UPTIME: 99.99%
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
