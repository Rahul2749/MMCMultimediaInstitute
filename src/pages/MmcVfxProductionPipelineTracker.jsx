import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcVfxProductionPipelineTracker = () => {
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
      
<div className="flex h-screen overflow-hidden">
{/* SideNavBar */}
<aside className="hidden md:flex flex-col h-screen py-4 bg-surface-container-low border-r border-outline-variant w-64 shrink-0 transition-all duration-200 ease-in-out">
<div className="px-6 mb-8">
<h1 className="font-display-xl text-primary text-title-md font-bold tracking-tight">Project_Xenon</h1>
<p className="font-label-technical text-label-technical text-on-surface-variant opacity-60">VFX_PHASE_02</p>
</div>

<div className="px-4 mt-4">
<button className="w-full py-3 bg-secondary-container text-white font-bold rounded-sm text-sm uppercase tracking-widest active:scale-95 transition-transform">
                    New Asset
                </button>
</div>
<div className="mt-auto px-6 space-y-4 pt-4 border-t border-outline-variant/30">
<div className="flex items-center text-on-surface-variant font-label-technical text-label-technical cursor-pointer hover:text-primary transition-colors">
<span className="material-symbols-outlined mr-3 text-sm">sync</span> Sync Status
                </div>
<div className="flex items-center text-on-surface-variant font-label-technical text-label-technical cursor-pointer hover:text-primary transition-colors">
<span className="material-symbols-outlined mr-3 text-sm">logout</span> Log Out
                </div>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 flex flex-col min-w-0 bg-background relative tech-grid overflow-hidden">
{/* TopNavBar */}
<header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant shrink-0 z-10">
<div className="flex items-center space-x-6">
<span className="font-display-xl text-title-md font-bold text-on-surface">MMC_PIPELINE_V1</span>
<div className="hidden lg:flex items-center bg-surface-container-low border border-outline-variant px-3 py-1.5 rounded-sm">
<span className="material-symbols-outlined text-sm text-on-surface-variant mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-label-technical font-label-technical text-on-surface w-64 placeholder:text-on-surface-variant/40" placeholder="Filter shots, tags, or artists..." type="text" />
</div>
</div>
<div className="flex items-center space-x-4">
<button className="p-2 text-on-surface-variant hover:bg-surface-variant transition-colors active:scale-95 duration-100">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-variant transition-colors active:scale-95 duration-100">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 bg-surface-variant rounded-full overflow-hidden border border-outline-variant">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a professional film editor in a dimly lit studio environment. The man has a focused expression, highlighted by the subtle blue and magenta glow from high-resolution monitors reflecting on his face. He wears professional studio headphones, and the background shows blurred high-end cinema equipment. The aesthetic is sharp, technical, and high-performance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlrmvlBTuASigDKHyhwisOCdipm28g_P_3r2md2ya1kr3L0wqFjyv81DQyGkp49zxyRNAh-yytCGQQ_ylVL42qhkvrEb8_Ng_xryB9wtVm534kFWFSp46kXzlAJMhDE4etr-CxRuG7BYGZX8Hsbea4p33mhDzVgWqf93HxZjbfa6Meg7lFZmjUxo0hEHK_sJFRYEeDGQqYRRClql5WeiLNUP9Xj4wxGjoUwriDCB4xgh4_iZlhDONiNtqz97BxVUizzeFSwBo1vXqC" />
</div>
</div>
</header>
{/* Dashboard Layout */}
<div className="flex-1 flex overflow-hidden">
{/* Center Pipeline Area */}
<div className="flex-1 flex flex-col min-w-0">
{/* Pipeline Overview Bar */}
<section className="grid grid-cols-4 divide-x divide-outline-variant bg-surface-container-low h-20 shrink-0 border-b border-outline-variant">
<div className="flex flex-col justify-center px-6">
<span className="font-label-technical text-[10px] text-on-surface-variant/60 uppercase tracking-tighter">Active Shots</span>
<div className="flex items-baseline space-x-2">
<span className="font-display-xl text-2xl text-primary">124</span>
<span className="text-[10px] text-on-tertiary-fixed-variant">+3 this week</span>
</div>
</div>
<div className="flex flex-col justify-center px-6">
<span className="font-label-technical text-[10px] text-on-surface-variant/60 uppercase tracking-tighter">Render Queue</span>
<div className="flex items-baseline space-x-2">
<span className="font-display-xl text-2xl text-secondary">08</span>
<span className="text-[10px] text-secondary status-pulse">● processing</span>
</div>
</div>
<div className="flex flex-col justify-center px-6">
<span className="font-label-technical text-[10px] text-on-surface-variant/60 uppercase tracking-tighter">Pending Approvals</span>
<div className="flex items-baseline space-x-2">
<span className="font-display-xl text-2xl text-tertiary">32</span>
<span className="text-[10px] text-tertiary">Urgent priority</span>
</div>
</div>
<div className="flex flex-col justify-center px-6">
<span className="font-label-technical text-[10px] text-on-surface-variant/60 uppercase tracking-tighter">System Health</span>
<div className="flex items-baseline space-x-2">
<span className="font-display-xl text-2xl text-on-surface">98.2%</span>
<span className="text-[10px] text-on-surface-variant">Stable</span>
</div>
</div>
</section>
{/* Shot Tracker Table */}
<section className="flex-1 overflow-auto p-4">
<div className="bg-surface border border-outline-variant rounded-sm overflow-hidden">
<table className="w-full text-left border-collapse font-label-technical">
<thead className="bg-surface-container text-on-surface-variant text-[11px] uppercase tracking-wider sticky top-0 z-10">
<tr>
<th className="px-4 py-3 font-medium border-b border-outline-variant">Shot ID</th>
<th className="px-4 py-3 font-medium border-b border-outline-variant">Concept</th>
<th className="px-4 py-3 font-medium border-b border-outline-variant">Layout</th>
<th className="px-4 py-3 font-medium border-b border-outline-variant">Animation</th>
<th className="px-4 py-3 font-medium border-b border-outline-variant">Lighting</th>
<th className="px-4 py-3 font-medium border-b border-outline-variant">Comp</th>
<th className="px-4 py-3 font-medium border-b border-outline-variant text-right">Final</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
{/* Row 1: Active */}
<tr className="hover:bg-surface-variant/40 transition-colors cursor-pointer group bg-surface-container-lowest">
<td className="px-4 py-4">
<div className="flex items-center">
<span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>
<span className="text-on-surface font-bold">EXT_STREET_01</span>
</div>
</td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-[10px]">IN PROGRESS</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4 text-right"><span className="material-symbols-outlined text-on-surface-variant/20">lock</span></td>
</tr>
{/* Row 2: Blocked */}
<tr className="hover:bg-surface-variant/40 transition-colors cursor-pointer">
<td className="px-4 py-4">
<div className="flex items-center">
<span className="w-1.5 h-1.5 bg-error rounded-full mr-3"></span>
<span className="text-on-surface font-bold">INT_LAB_04</span>
</div>
</td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-error-container/20 text-error text-[10px]">BLOCKED</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4 text-right"><span className="material-symbols-outlined text-on-surface-variant/20">lock</span></td>
</tr>
{/* Row 3: Awaiting Review */}
<tr className="hover:bg-surface-variant/40 transition-colors cursor-pointer">
<td className="px-4 py-4">
<div className="flex items-center">
<span className="w-1.5 h-1.5 bg-tertiary rounded-full mr-3"></span>
<span className="text-on-surface font-bold">CHR_BATTLE_09</span>
</div>
</td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px]">AWAITING REVIEW</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4 text-right"><span className="material-symbols-outlined text-on-surface-variant/20">lock</span></td>
</tr>
{/* Additional Mock Data Rows */}
<tr className="hover:bg-surface-variant/40 transition-colors cursor-pointer">
<td className="px-4 py-4"><div className="flex items-center"><span className="w-1.5 h-1.5 bg-outline rounded-full mr-3"></span><span className="text-on-surface font-bold">EXT_SKY_022</span></div></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-[10px]">IN PROGRESS</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4 text-right"><span className="material-symbols-outlined text-on-surface-variant/20">lock</span></td>
</tr>
<tr className="hover:bg-surface-variant/40 transition-colors cursor-pointer">
<td className="px-4 py-4"><div className="flex items-center"><span className="w-1.5 h-1.5 bg-outline rounded-full mr-3"></span><span className="text-on-surface font-bold">FX_SMOKE_15</span></div></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-[10px]">IN PROGRESS</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4"><span className="text-on-surface-variant/30">—</span></td>
<td className="px-4 py-4 text-right"><span className="material-symbols-outlined text-on-surface-variant/20">lock</span></td>
</tr>
<tr className="hover:bg-surface-variant/40 transition-colors cursor-pointer">
<td className="px-4 py-4"><div className="flex items-center"><span className="w-1.5 h-1.5 bg-outline rounded-full mr-3"></span><span className="text-on-surface font-bold">INT_CORRIDOR_V04</span></div></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px]">APPROVED</span></td>
<td className="px-4 py-4"><span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-[10px]">IN PROGRESS</span></td>
<td className="px-4 py-4 text-right"><span className="material-symbols-outlined text-on-surface-variant/20">lock</span></td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* Task Detail Sidebar */}
<aside className="w-80 bg-surface border-l border-outline-variant flex flex-col shrink-0">
{/* Render Preview Window */}
<div className="p-4 border-b border-outline-variant bg-surface-container-lowest">
<div className="relative aspect-video bg-black rounded-sm border border-outline-variant overflow-hidden group">
<img className="w-full h-full object-cover opacity-60" data-alt="A cinematic wide shot of a dark urban street at night with glowing pink neon signs and wet asphalt reflecting the light. High-tech sci-fi vehicles are parked along the curb. The scene is rendered with ultra-realistic textures, heavy volumetric fog, and professional color grading in a deep black and vibrant pink aesthetic. The image captures the 'EXT_STREET_01' shot in a high-end VFX software preview window." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzv9cAJGhuj69O24beDR7X7yUiv91vKuFUXoMBdo3P5buhTwBJNmD-FBwZunAsWEz_pgHr3uAaSvAffanwUuGQqpy3kTaOZ_kDgtVXIu6yTxzThx-CNLkc_mUfgDA-TFrPm6TbuBnTY24711vhxqz69nPwrBb20P1doMeE1U77r-emWXJhJLwpQhU7qwsXz4GRTXKGw9lelGGf4bFy3CUaUlqgCJ18g-ctCn_05wUpuujHBSK39ezDaeWpg4rbOx0gH3i-wLiNPMhF" />
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
<span className="material-symbols-outlined text-primary text-4xl cursor-pointer">play_circle</span>
</div>
{/* Scrubber UI */}
<div className="absolute bottom-0 left-0 right-0 h-1 bg-outline-variant">
<div className="h-full bg-secondary w-2/3 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-secondary"></div>
</div>
</div>
<div className="absolute top-2 left-2 px-1 bg-black/80 text-[8px] font-label-technical text-secondary uppercase">Preview v024</div>
</div>
<div className="mt-3 flex justify-between items-center">
<h3 className="font-label-technical text-sm font-bold text-on-surface">EXT_STREET_01</h3>
<span className="font-label-technical text-[10px] text-on-surface-variant px-1.5 py-0.5 border border-outline-variant">VFX_01_A</span>
</div>
</div>
{/* Task Assignments */}
<div className="flex-1 overflow-auto p-4 space-y-6">
<div>
<h4 className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest mb-3">Assignments</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-tertiary-container rounded-full flex items-center justify-center text-[8px] font-bold text-tertiary">JD</div>
<span className="text-xs font-label-technical">Jane Doe</span>
</div>
<span className="text-[9px] text-on-surface-variant font-label-technical">Lead Animator</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-secondary-container rounded-full flex items-center justify-center text-[8px] font-bold text-white">MK</div>
<span className="text-xs font-label-technical">Mike Kane</span>
</div>
<span className="text-[9px] text-on-surface-variant font-label-technical">Lighting TD</span>
</div>
</div>
</div>
<div>
<h4 className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest mb-3">Version History</h4>
<div className="space-y-2">
<div className="p-2 bg-surface-container rounded-sm border-l-2 border-secondary flex justify-between items-center cursor-pointer hover:bg-surface-variant transition-colors">
<div>
<p className="text-xs font-bold font-label-technical">v024_animation_final</p>
<p className="text-[9px] text-on-surface-variant">Yesterday, 18:42 by j.doe</p>
</div>
<span className="material-symbols-outlined text-sm text-secondary">cloud_done</span>
</div>
<div className="p-2 bg-surface-container-low border-l-2 border-outline rounded-sm flex justify-between items-center cursor-pointer hover:bg-surface-variant transition-colors opacity-60">
<div>
<p className="text-xs font-bold font-label-technical">v023_animation_blocking</p>
<p className="text-[9px] text-on-surface-variant">Oct 24, 10:15 by j.doe</p>
</div>
<span className="material-symbols-outlined text-sm">history</span>
</div>
</div>
</div>
<div>
<h4 className="font-label-technical text-[10px] text-on-surface-variant uppercase tracking-widest mb-3">Supervisor Notes</h4>
<div className="bg-surface-container-highest p-3 rounded-sm border border-outline-variant/30 italic text-xs text-on-surface-variant leading-relaxed">
                                "The camera shake on frame 120 feels a bit too violent. Let's dampen the Y-axis rotation by 15% to keep the focus on the main character's entry."
                                <div className="mt-2 text-right not-italic font-bold text-tertiary">— S. Miller (Head of VFX)</div>
</div>
</div>
</div>
{/* Footer Action in Sidebar */}
<div className="p-4 border-t border-outline-variant bg-surface-container">
<button className="w-full py-2 bg-transparent border border-secondary text-secondary hover:bg-secondary/10 transition-colors font-label-technical text-xs uppercase font-bold flex items-center justify-center">
<span className="material-symbols-outlined text-sm mr-2">publish</span> Upload New Version
                        </button>
</div>
</aside>
</div>
</main>
</div>
{/* Mobile Bottom NavBar (Visible on small screens) */}

{/* Global Footer */}



    </>
  );
};

export default MmcVfxProductionPipelineTracker;
