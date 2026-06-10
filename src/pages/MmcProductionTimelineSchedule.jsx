import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcProductionTimelineSchedule = () => {
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
      
{/* SideNavBar Predicted Component */}
<aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-surface-container-lowest dark:bg-surface-container-lowest border-r border-outline-variant/10 w-64 hidden md:flex">
<div className="p-6">
<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 bg-secondary flex items-center justify-center rounded">
<span className="material-symbols-outlined text-on-secondary text-sm" style={{fontVariationSettings:'\'FILL\' 1'}}>movie</span>
</div>
<div>
<h2 className="text-title-md font-title-md font-bold text-on-surface">MMC Studio</h2>
<p className="text-label-technical font-label-technical text-on-surface-variant opacity-60">VFX/Film/3D</p>
</div>
</div>

</div>
<div className="mt-auto p-6 border-t border-outline-variant/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
<img alt="Student profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLVsWN6qWgDGnjTfAXIMqEWpef6QNOE4rX3AbQwk6d4PIcbWIYUFwBY3oepw26zVaQCTpPBbm0AONJX_3kxb-AJkss4iWwuGBq5hRdpiZg59naBfjiAHORvUIhHxuaw5S5figR7pzaP0FOtJV9Gbg4N-8wS1BPtxzNvecuqxbf6JZJRpRPACueGq3rS80V6Q_OV8XDZwYagrDqHFzi-xXrDqlelV9bmt8KkpVd5oejdcSO-gJHKZ64qp0fBKOGREcKrcVwsmVPwpe" />
</div>
<div className="overflow-hidden">
<p className="text-label-technical font-label-technical font-bold text-on-surface truncate">Alex Chen</p>
<p className="text-[10px] font-label-technical text-secondary uppercase tracking-widest">Senior Student</p>
</div>
</div>
</div>
</aside>
{/* Main Content Canvas */}
<div className="flex-1 ml-0 md:ml-64 flex flex-col h-screen bg-primary-container relative">
<div className="absolute inset-0 technical-grid opacity-20 pointer-events-none"></div>
{/* TopNavBar Predicted Component */}

{/* Production Timeline Header */}
<div className="px-8 md:px-margin-desktop py-8 bg-surface-container-lowest/50 border-b border-outline-variant/10 backdrop-blur-md relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-2 text-secondary mb-1">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-label-technical font-label-technical font-bold tracking-[0.2em]">CURRENT_SESSION_LOG</span>
</div>
<h2 className="text-headline-lg font-headline-lg leading-none uppercase">Production Timeline</h2>
<p className="text-label-technical font-label-technical text-on-surface-variant mt-2 opacity-80" id="current-time">LOADING_SYSTEM_TIME...</p>
</div>
<div className="flex items-center bg-surface-container p-1 rounded-lg border border-outline-variant/20">
<button className="flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded text-label-technical font-label-technical transition-all" id="listViewBtn">
<span className="material-symbols-outlined text-sm">view_list</span>
                        LIST VIEW
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:text-on-surface rounded text-label-technical font-label-technical transition-all" id="calendarViewBtn">
<span className="material-symbols-outlined text-sm">calendar_view_month</span>
                        CALENDAR GRID
                    </button>
</div>
</div>
</div>
{/* Main Dashboard Split View */}
<div className="flex flex-1 overflow-hidden">
{/* Timeline Section */}
<section className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-margin-desktop pt-8 relative z-10">
<div className="max-w-4xl space-y-4">
{/* Session Group */}
<div className="mb-10">
<div className="flex items-center gap-4 mb-6">
<h3 className="text-label-technical font-label-technical text-on-surface font-bold">TODAY_OCT_24</h3>
<div className="h-[1px] flex-1 bg-outline-variant/20"></div>
</div>
{/* Timeline Item 1 */}
<div className="group relative pl-8 border-l border-outline-variant/30 pb-12">
<div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-secondary timeline-glow"></div>
<div className="bg-surface-container-high border border-outline-variant/20 p-6 transition-all hover:border-secondary/50 hover:bg-surface-container-highest">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<span className="inline-block px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-label-technical rounded border border-tertiary/20 mb-3">VFX_COMPOSTING</span>
<h4 className="text-title-md font-title-md text-on-surface leading-tight mb-2">Masterclass: Advanced Nuke Compositing</h4>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">access_time</span>
<span className="text-label-technical font-label-technical">09:00 - 12:00</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="text-label-technical font-label-technical">STUDIO_A</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">person</span>
<span className="text-label-technical font-label-technical">PROF. SARAH VANCE</span>
</div>
</div>
</div>
<button className="px-4 py-2 border border-secondary text-secondary text-label-technical font-label-technical hover:bg-secondary hover:text-on-secondary transition-all active:scale-95">VIEW DETAILS</button>
</div>
</div>
</div>
{/* Timeline Item 2 */}
<div className="group relative pl-8 border-l border-outline-variant/30 pb-12">
<div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full border-2 border-secondary bg-surface-container-high"></div>
<div className="bg-surface-container border border-outline-variant/20 p-6 transition-all hover:border-secondary/50 hover:bg-surface-container-highest">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-label-technical rounded border border-secondary/20 mb-3">CHARACTER_ART</span>
<h4 className="text-title-md font-title-md text-on-surface leading-tight mb-2">Live Critique: Character Lighting</h4>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">access_time</span>
<span className="text-label-technical font-label-technical">14:00 - 15:30</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">videocam</span>
<span className="text-label-technical font-label-technical">VIRTUAL_SUITE_04</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">person</span>
<span className="text-label-technical font-label-technical">MARCUS RHEIN</span>
</div>
</div>
</div>
<button className="px-4 py-2 border border-outline-variant text-on-surface-variant text-label-technical font-label-technical hover:border-secondary hover:text-secondary transition-all active:scale-95">VIEW DETAILS</button>
</div>
</div>
</div>
{/* Timeline Item 3 */}
<div className="group relative pl-8 border-l border-outline-variant/30">
<div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full border-2 border-secondary bg-surface-container-high"></div>
<div className="bg-surface-container border border-outline-variant/20 p-6 transition-all hover:border-secondary/50 hover:bg-surface-container-highest">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<span className="inline-block px-2 py-1 bg-on-tertiary-fixed-variant/20 text-tertiary text-[10px] font-label-technical rounded border border-tertiary/20 mb-3">PRODUCTION_MANAGEMENT</span>
<h4 className="text-title-md font-title-md text-on-surface leading-tight mb-2">Capstone Pitch Session</h4>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">access_time</span>
<span className="text-label-technical font-label-technical">16:30 - 18:00</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">meeting_room</span>
<span className="text-label-technical font-label-technical">PITCH_LAB_02</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">group</span>
<span className="text-label-technical font-label-technical">BOARD OF ADVISORS</span>
</div>
</div>
</div>
<button className="px-4 py-2 border border-outline-variant text-on-surface-variant text-label-technical font-label-technical hover:border-secondary hover:text-secondary transition-all active:scale-95">VIEW DETAILS</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Deadlines Sidebar */}
<aside className="hidden xl:flex w-80 flex-col border-l border-outline-variant/10 bg-surface-container-lowest/30 backdrop-blur-sm p-6 overflow-y-auto custom-scrollbar relative z-10">
<div className="flex items-center justify-between mb-8">
<h3 className="text-label-technical font-label-technical font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings:'\'FILL\' 1'}}>warning</span>
                        DEADLINES
                    </h3>
<span className="text-[10px] font-label-technical text-on-surface-variant">PENDING: 04</span>
</div>
<div className="space-y-4">
{/* Deadline Card */}
<div className="p-4 bg-surface-container-high border-l-2 border-secondary">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-label-technical text-secondary">T-MINUS 12H</span>
<span className="material-symbols-outlined text-sm text-secondary">flag</span>
</div>
<h4 className="text-label-technical font-bold text-on-surface mb-1 uppercase">Asset Delivery</h4>
<p className="text-[11px] text-on-surface-variant font-medium">Main Character Sculpt (High-Res)</p>
<div className="mt-3 w-full bg-surface-container rounded-full h-1">
<div className="bg-secondary h-1 rounded-full" style={{width:'85%'}}></div>
</div>
</div>
{/* Deadline Card */}
<div className="p-4 bg-surface-container-low border border-outline-variant/20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-label-technical text-on-surface-variant">T-MINUS 02D</span>
</div>
<h4 className="text-label-technical font-bold text-on-surface mb-1 uppercase">Final Render Pass</h4>
<p className="text-[11px] text-on-surface-variant font-medium">Sequence_04_A Lighting Bake</p>
<div className="mt-3 w-full bg-surface-container rounded-full h-1">
<div className="bg-outline-variant h-1 rounded-full" style={{width:'20%'}}></div>
</div>
</div>
{/* Deadline Card */}
<div className="p-4 bg-surface-container-low border border-outline-variant/20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-label-technical text-on-surface-variant">T-MINUS 05D</span>
</div>
<h4 className="text-label-technical font-bold text-on-surface mb-1 uppercase">VFX Journal Update</h4>
<p className="text-[11px] text-on-surface-variant font-medium">Process Breakdown (PDF)</p>
</div>
{/* Production Note */}
<div className="mt-8 p-4 border border-dashed border-outline-variant/30 rounded">
<div className="flex items-center gap-2 mb-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">edit_note</span>
<span className="text-[10px] font-label-technical font-bold">STUDIO_NOTE</span>
</div>
<p className="text-[11px] font-label-technical italic text-on-surface-variant leading-relaxed">
                            "Studio A will be undergoing maintenance on Saturday 26th. All rendering tasks should be offloaded to the Farm-7 network."
                        </p>
</div>
</div>
<div className="mt-12">
<img className="w-full h-32 object-cover grayscale brightness-50 rounded border border-outline-variant/20" data-alt="A cinematic, high-contrast photograph of a professional film production studio in a dark mode aesthetic. The room is filled with rows of high-end monitors showing complex nodes of a VFX pipeline, glowing softly in deep blues and vibrant reds. The atmosphere is technical and focused, with clean lines and precision-engineered equipment visible in the shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOupAD6Qr9jGAdeWdYkkmEExoi_NL2XUXFoWydOyOEZlvGbzYbYvH9jP4EERRJAmKByLm58sHdtXQwswcDreJ3o4ombzjEYM_3TFdpmrmIiEEnoAmvU82_d8aUZnnxsElkf87xLzTjX75bsDU73slWmF074q_ADMIGVizYjSEPs8vB7caDlSOXZsF7KI9EksJJIgSOYTjoPaJjMAazKVUrKmOI3tsAAqFpAwXiUIsWZwdniam0pPUXh4a079gmiMqHP_O7K5wYZwKN" />
<p className="text-[10px] font-label-technical text-on-surface-variant mt-2 text-center">STUDIO_MONITOR_CAM_01</p>
</div>
</aside>
</div>
{/* Footer Predicted Component */}

</div>
{/* Micro-interaction Script */}


    </>
  );
};

export default MmcProductionTimelineSchedule;
