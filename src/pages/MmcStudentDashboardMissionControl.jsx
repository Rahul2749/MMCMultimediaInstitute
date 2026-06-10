import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcStudentDashboardMissionControl = () => {
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
    <div className="app-screen">
      {/* 
        To add GSAP reveals, add ref={addToRefs} to <section> tags.
        Example: <section ref={addToRefs} className="...">
      */}
      
{/* Top Navigation Bar */}

{/* Side Navigation */}
<aside className="fixed left-0 top-0 h-full w-64 flex flex-col pt-16 bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant dark:border-outline-variant hidden md:flex">
<div className="p-6 border-b border-outline-variant/30">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary" style={{fontVariationSettings:'\'FILL\' 1'}}>movie_filter</span>
</div>
<div>
<p className="font-headline-lg text-[18px] text-on-surface leading-none">MMC</p>
<p className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest">VFX STUDENT</p>
</div>
</div>
</div>
<div className="flex-1 py-6">
<div className="space-y-1">
<div className="flex items-center gap-4 px-6 py-3 text-secondary bg-secondary-container/10 border-r-2 border-secondary cursor-pointer">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-technical text-label-technical uppercase">Dashboard</span>
</div>
<div className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all cursor-pointer">
<span className="material-symbols-outlined">account_tree</span>
<span className="font-label-technical text-label-technical uppercase">VFX Pipeline</span>
</div>
<div className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all cursor-pointer">
<span className="material-symbols-outlined">folder_open</span>
<span className="font-label-technical text-label-technical uppercase">Asset Library</span>
</div>
<div className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all cursor-pointer">
<span className="material-symbols-outlined">event</span>
<span className="font-label-technical text-label-technical uppercase">Schedule</span>
</div>
<div className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all cursor-pointer">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-label-technical text-label-technical uppercase">Support</span>
</div>
</div>
</div>
<div className="p-6">
<button className="w-full bg-secondary text-on-secondary font-label-technical text-label-technical uppercase tracking-widest py-4 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined">add</span>
                New Project
            </button>
</div>
</aside>
{/* Main Content Canvas */}
<div className="md:ml-64 pt-24 px-6 md:px-margin-desktop pb-12">
{/* Mission Control Header */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-outline-variant pb-8">
<div>
<p className="font-label-technical text-secondary uppercase tracking-[0.3em] mb-2">System Active / Local Time 10:24</p>
<h2 className="font-display-xl text-headline-lg text-on-surface uppercase tracking-tight">Mission Control</h2>
</div>
<div className="mt-4 md:mt-0 flex gap-4">
<div className="glass-panel px-4 py-2 flex items-center gap-3 border-technical">
<div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
<p className="font-label-technical text-label-technical uppercase">Render Node 04: Online</p>
</div>
<div className="glass-panel px-4 py-2 flex items-center gap-3 border-technical">
<span className="material-symbols-outlined text-[16px]">cloud_done</span>
<p className="font-label-technical text-label-technical uppercase">Sync Complete</p>
</div>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-12 gap-gutter">
{/* Course Progress Section */}
<div className="col-span-12 lg:col-span-8 space-y-gutter">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* VFX Compositing Card */}
<div className="glass-panel p-6 border-technical relative overflow-hidden group">
<div className="scanline"></div>
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-secondary text-[32px]">layers</span>
<span className="font-label-technical text-[10px] text-on-surface-variant">LVL 4</span>
</div>
<h3 className="font-title-md text-title-md mb-2 uppercase">VFX Compositing</h3>
<p className="text-[12px] text-on-surface-variant font-body-md mb-6 leading-tight">Advanced Nuke Integration &amp; Deep Compositing Workflows.</p>
<div className="space-y-2">
<div className="flex justify-between font-label-technical text-[10px]">
<span>PROGRESS</span>
<span>78%</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full bg-secondary" style={{width:'78%'}}></div>
</div>
</div>
</div>
{/* 3D Modeling Card */}
<div className="glass-panel p-6 border-technical relative overflow-hidden group">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-tertiary text-[32px]">view_in_ar</span>
<span className="font-label-technical text-[10px] text-on-surface-variant">LVL 3</span>
</div>
<h3 className="font-title-md text-title-md mb-2 uppercase">3D Modeling</h3>
<p className="text-[12px] text-on-surface-variant font-body-md mb-6 leading-tight">Procedural modeling techniques in Houdini &amp; Maya.</p>
<div className="space-y-2">
<div className="flex justify-between font-label-technical text-[10px]">
<span>PROGRESS</span>
<span>42%</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full bg-tertiary" style={{width:'42%'}}></div>
</div>
</div>
</div>
{/* Color Grading Card */}
<div className="glass-panel p-6 border-technical relative overflow-hidden group">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-on-error-container text-[32px]">palette</span>
<span className="font-label-technical text-[10px] text-on-surface-variant">LVL 5</span>
</div>
<h3 className="font-title-md text-title-md mb-2 uppercase">Color Grading</h3>
<p className="text-[12px] text-on-surface-variant font-body-md mb-6 leading-tight">DaVinci Resolve: HDR mastering and look development.</p>
<div className="space-y-2">
<div className="flex justify-between font-label-technical text-[10px]">
<span>PROGRESS</span>
<span>91%</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full bg-on-error-container" style={{width:'91%'}}></div>
</div>
</div>
</div>
</div>
{/* Active Projects: Timeline View */}
<div className="glass-panel border-technical">
<div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h4 className="font-label-technical text-label-technical uppercase tracking-widest">Active Pipeline Status</h4>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">fullscreen</span>
</div>
<div className="p-6 space-y-6">
{/* Project 1 */}
<div className="flex flex-col md:flex-row md:items-center gap-6 p-4 border border-outline-variant/20 hover:bg-white/5 transition-colors">
<div className="w-full md:w-32 h-20 bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="Cyberpunk Cityscape VFX" className="w-full h-full object-cover opacity-60" data-alt="A cinematic cyberpunk cityscape featuring towering skyscrapers with neon signs in vibrant pink and blue. The scene is shot from a low angle with atmospheric fog and rain, creating a moody, high-contrast VFX concept art piece for a professional film production. The lighting is dramatic and highlights the intricate architectural details of a futuristic metropolis." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmmhAHLDbK3Tj-ZlfT7rUQcKZckotWe68_k2Pn1jkSbyRjGk_j9PR4sxANZ82GptG6Gd6bf35H8Z_anRl05ufdQyUmhVgxYx5n9TpcPTEdPE5HRlFl3wet6iVnzaO2KSkfYna-uJUb9ohlRjfexLSqzX1azAKxyke0DeINawtyJvusYcD46LZvx3IvpdBV15qyryC-tpD05FrA5csrmJZj9YxXVG0-r6ncFnTHv2as8gV9zD4A6smb-Hz4O6qXmDxlO3ytf9zkmS3A" />
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h5 className="font-title-md text-[18px] uppercase">Neon_Sequence_04</h5>
<span className="px-2 py-1 bg-secondary-container/20 text-secondary font-label-technical text-[10px] border border-secondary/30 uppercase">Rendering</span>
</div>
<div className="flex items-center gap-4 font-label-technical text-[10px] text-on-surface-variant uppercase">
<span>Frames: 001 - 240</span>
<span>•</span>
<span>ETA: 42m</span>
<span className="text-secondary ml-auto">Frame 182/240</span>
</div>
<div className="w-full h-1 bg-surface-container mt-3">
<div className="h-full bg-secondary" style={{width:'75%'}}></div>
</div>
</div>
</div>
{/* Project 2 */}
<div className="flex flex-col md:flex-row md:items-center gap-6 p-4 border border-outline-variant/20 hover:bg-white/5 transition-colors">
<div className="w-full md:w-32 h-20 bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="Character Sculpt" className="w-full h-full object-cover opacity-60" data-alt="A highly detailed 3D digital sculpture of a creature's head, showing intricate skin textures and organic forms. The lighting is studio-style with sharp rim lights that define the silhouette against a dark, tech-oriented studio background. The overall aesthetic is professional, reminiscent of ZBrush modeling software used in top-tier VFX studios." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97NoK0d9Wbg5V8ePSw72LoNmJ5y_Df9fzfNUx-T5QVEO_CoKvYZMu932IvGFMdfvdajnud9qbh8uoD3hBf9_Zr-3P9strt0fCHvXm1KqG2JuunHtPY9FNjaaZF10or5dW2-XQGDVGSQaGdmdbwcNYVkGHff0kOQzTb0UqFjrbu8WePSCAZibT--iTz9yC3xp5Ic_yUKmjuywSz59TXrh3dQLkzV5vLNIKebHqHhxXPsy3Yw-llRAMTasShReFLvuq7H8ssZ2b9a99" />
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h5 className="font-title-md text-[18px] uppercase">Creature_Sculpt_v02</h5>
<span className="px-2 py-1 bg-tertiary-container/40 text-tertiary font-label-technical text-[10px] border border-tertiary/30 uppercase">In Review</span>
</div>
<div className="flex items-center gap-4 font-label-technical text-[10px] text-on-surface-variant uppercase">
<span>Artist: You</span>
<span>•</span>
<span>Supervisor: J. Miller</span>
<span className="ml-auto">Pending Feedback</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Sidebar Info Section */}
<div className="col-span-12 lg:col-span-4 space-y-gutter">
{/* Upcoming Schedule */}
<div className="glass-panel border-technical">
<div className="p-4 border-b border-outline-variant bg-surface-container-low flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<h4 className="font-label-technical text-label-technical uppercase tracking-widest">Upcoming Events</h4>
</div>
<div className="divide-y divide-outline-variant/30">
<div className="p-6 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-1">
<p className="font-label-technical text-secondary text-[10px]">TODAY // 14:00</p>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-white transition-colors">arrow_forward</span>
</div>
<p className="font-title-md text-[16px] uppercase mb-1">Live Critique: Lighting Theory</p>
<p className="font-label-technical text-[10px] text-on-surface-variant">ROOM: STUDIO-A (REMOTE)</p>
</div>
<div className="p-6 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-1">
<p className="font-label-technical text-on-surface-variant text-[10px]">TOMORROW // 09:30</p>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-white transition-colors">arrow_forward</span>
</div>
<p className="font-title-md text-[16px] uppercase mb-1">Pipeline Masterclass: USD</p>
<p className="font-label-technical text-[10px] text-on-surface-variant">HOST: PIXAR GUEST SPEAKER</p>
</div>
<div className="p-6 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-1">
<p className="font-label-technical text-on-surface-variant text-[10px]">OCT 24 // 11:00</p>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-white transition-colors">arrow_forward</span>
</div>
<p className="font-title-md text-[16px] uppercase mb-1">Capstone Pitch Session</p>
<p className="font-label-technical text-[10px] text-on-surface-variant">PANEL: CREATIVE DIRECTORS</p>
</div>
</div>
<button className="w-full p-4 font-label-technical text-[10px] text-secondary uppercase border-t border-outline-variant/30 hover:bg-secondary/5 transition-colors">
                        View Full Calendar
                    </button>
</div>
{/* Resource Quick-Links */}
<div className="grid grid-cols-2 gap-4">
<div className="glass-panel p-6 border-technical flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:border-secondary transition-colors active:scale-95">
<span className="material-symbols-outlined text-secondary text-[32px]">database</span>
<p className="font-label-technical text-[10px] uppercase tracking-widest leading-tight">Asset<br />Library</p>
</div>
<div className="glass-panel p-6 border-technical flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:border-secondary transition-colors active:scale-95">
<span className="material-symbols-outlined text-secondary text-[32px]">terminal</span>
<p className="font-label-technical text-[10px] uppercase tracking-widest leading-tight">Technical<br />Specs</p>
</div>
<div className="glass-panel p-6 border-technical flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:border-secondary transition-colors active:scale-95">
<span className="material-symbols-outlined text-secondary text-[32px]">forum</span>
<p className="font-label-technical text-[10px] uppercase tracking-widest leading-tight">Student<br />Forum</p>
</div>
<div className="glass-panel p-6 border-technical flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:border-secondary transition-colors active:scale-95">
<span className="material-symbols-outlined text-secondary text-[32px]">cloud_upload</span>
<p className="font-label-technical text-[10px] uppercase tracking-widest leading-tight">Direct<br />Submission</p>
</div>
</div>
{/* System Stats (Atmospheric) */}
<div className="glass-panel p-6 border-technical">
<p className="font-label-technical text-[10px] text-on-surface-variant uppercase mb-4 tracking-widest">Hardware Performance</p>
<div className="space-y-4">
<div>
<div className="flex justify-between font-label-technical text-[10px] mb-1">
<span>CPU LOAD</span>
<span>24%</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full bg-on-surface-variant" style={{width:'24%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-technical text-[10px] mb-1">
<span>GPU TEMP</span>
<span>62°C</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full bg-on-secondary-container" style={{width:'62%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-technical text-[10px] mb-1">
<span>STORAGE</span>
<span>1.2TB / 2.0TB</span>
</div>
<div className="w-full h-1 bg-surface-container">
<div className="h-full bg-secondary" style={{width:'60%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Bottom Navigation Bar (Mobile Only) */}



    </div>
  );
};

export default MmcStudentDashboardMissionControl;
