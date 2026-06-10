import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcAssetLibraryProductionRepository = () => {
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
      
{/* TOP APP BAR */}

<div className="flex h-full pt-16">
{/* SIDE NAV BAR */}
<aside className="fixed left-0 top-0 h-full w-64 flex flex-col pt-16 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 py-8">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-secondary flex items-center justify-center rounded">
<span className="material-symbols-outlined text-on-secondary font-bold">account_tree</span>
</div>
<div>
<h2 className="font-headline-lg text-[18px] text-on-surface leading-none mb-1">MMC</h2>
<p className="font-label-technical text-[10px] text-on-surface-variant tracking-widest">VFX STUDENT</p>
</div>
</div>

</div>
<div className="mt-auto p-6">
<button className="w-full bg-secondary-container text-on-secondary-container py-3 rounded font-label-technical text-[11px] font-bold uppercase tracking-widest active:scale-95 transition-transform">
                    New Project
                </button>
</div>
</aside>
{/* MAIN CONTENT CANVAS */}
<div className="ml-64 flex-1 h-full overflow-hidden flex flex-col relative technical-grid">
{/* Metadata & Search Panel */}
<div className="bg-surface-container/80 backdrop-blur-md border-b border-outline-variant p-4 flex items-center justify-between gap-4 z-10">
<div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap custom-scrollbar">
<button className="px-4 py-1.5 rounded bg-secondary text-on-secondary font-label-technical text-[11px] font-bold">ALL ASSETS</button>
<button className="px-4 py-1.5 rounded border border-outline-variant text-on-surface-variant font-label-technical text-[11px] hover:border-secondary transition-colors">3D MODELS</button>
<button className="px-4 py-1.5 rounded border border-outline-variant text-on-surface-variant font-label-technical text-[11px] hover:border-secondary transition-colors">TEXTURES</button>
<button className="px-4 py-1.5 rounded border border-outline-variant text-on-surface-variant font-label-technical text-[11px] hover:border-secondary transition-colors">HDRI</button>
<button className="px-4 py-1.5 rounded border border-outline-variant text-on-surface-variant font-label-technical text-[11px] hover:border-secondary transition-colors">SCRIPTS</button>
<button className="px-4 py-1.5 rounded border border-outline-variant text-on-surface-variant font-label-technical text-[11px] hover:border-secondary transition-colors">PRE-SETS</button>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center border border-outline-variant rounded-lg overflow-hidden h-9">
<div className="px-3 border-r border-outline-variant flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">filter_alt</span>
<span className="font-label-technical text-[10px]">FORMAT: ALL</span>
</div>
<input className="bg-transparent text-sm px-4 focus:outline-none w-48 font-label-technical text-[11px]" placeholder="Search by metadata..." type="text" />
</div>
<button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-on-surface border border-outline-variant rounded-lg">grid_view</button>
<button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-on-surface border border-outline-variant rounded-lg">list</button>
</div>
</div>
{/* Asset Grid Area */}
<div className="flex-1 overflow-y-auto p-gutter custom-scrollbar">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{/* Asset Card 1 */}
<div className="asset-card group bg-surface-container border border-outline-variant overflow-hidden relative transition-all hover:border-secondary/50">
<div className="relative h-48 bg-surface-container-highest overflow-hidden">
<img alt="VFX Nebula Element" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" data-alt="A high-fidelity cinematic VFX smoke and fire simulation against a dark void. Intense neon pink and deep violet lighting illuminating swirling volumetric particles. The visual style is that of a professional fluid simulation render from Houdini, featuring sharp detail, high dynamic range, and technical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_yiYUMBTu_X9xPddSBXEopUV58YoFkf5TVVq1AJlGt-N-ce75-NBugKYsKYfJMDbmRlwpdWLCRn1RfQmgnSnwjl-iTHZIyTGycsgOVq5MNVk4IJQCvv2HqNG1r8zZVK6oY_hNBVpnJmUbAkrz0ApBNKXLRsonOVyyACw3zIE2NupmlfjKnmkfumcXqZUlVZe_CbpWyaKGH0xvcobxKGUCVEVd5089XIRY0QHoBHnJgkpm3UAn5gY_0ejjBtjjrO4NAnPcL4Auwtty" />
<div className="absolute top-2 left-2 flex gap-1">
<span className="bg-tertiary/20 text-tertiary px-2 py-0.5 rounded font-label-technical text-[9px] border border-tertiary/30">VFX</span>
<span className="bg-background/80 text-on-surface px-2 py-0.5 rounded font-label-technical text-[9px]">4K</span>
</div>
<div className="asset-actions absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 transition-opacity flex items-center justify-center gap-2">
<button className="p-2 bg-secondary text-on-secondary rounded-lg active:scale-95 transition-transform"><span className="material-symbols-outlined">input</span></button>
<button className="p-2 bg-surface-container border border-outline-variant text-on-surface rounded-lg active:scale-95 transition-transform" onclick="toggleInspector()"><span className="material-symbols-outlined">visibility</span></button>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-2">
<h3 className="font-label-technical text-[12px] font-bold text-on-surface truncate pr-2">Nebula_Vortex_A01</h3>
<span className="text-on-surface-variant font-label-technical text-[10px]">v2.4</span>
</div>
<div className="flex justify-between items-center text-[10px] font-label-technical text-on-surface-variant">
<span>142.5 MB</span>
<span className="text-secondary">.VDB</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/30">
<button className="w-full py-2 bg-surface-container-high border border-outline-variant hover:bg-secondary/10 hover:border-secondary/50 transition-all text-on-surface font-label-technical text-[10px] tracking-widest uppercase">Deploy to Pipeline</button>
</div>
</div>
</div>
{/* Asset Card 2 */}
<div className="asset-card group bg-surface-container border border-outline-variant overflow-hidden relative transition-all hover:border-secondary/50">
<div className="relative h-48 bg-surface-container-highest overflow-hidden">
<img alt="3D Cyber Character" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" data-alt="A highly detailed 3D model of a futuristic cyborg character, shown from a front-quarter angle in a T-pose format. The character features intricate hard-surface armor plating with matte black and glowing red accents. Professional studio lighting with sharp rim lights emphasizing the mechanical topology and surface textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo6lG7s73BFOSWZzQUR9vgcPR_z_oTda2Og21YF7r60ZWwjavZ9ryOUjQZ_W8DVOhd1LgPSpWmyCOwz3-VM_Cwr4J1NxdxPA9x0idaw-DJnEGRsV2Uj-BfQ4FhVqpGY3lPRWTs8Ux2KhtVMP8zDTW_j_SxOURsSRkJr_fSpE2ZiuslZa6KyphgEOpoCMkp8tWYaDV4BF1NYfHLvo5Z-4gY7VHNuot_UafPDhyGZ0nDX9QUHLwvPUcOcJgzHyP3feIA2VYz76lSvjMp" />
<div className="absolute top-2 left-2 flex gap-1">
<span className="bg-[#cc003c]/20 text-[#ffb3b6] px-2 py-0.5 rounded font-label-technical text-[9px] border border-[#cc003c]/30">3D MODEL</span>
<span className="bg-background/80 text-on-surface px-2 py-0.5 rounded font-label-technical text-[9px]">PBR</span>
</div>
<div className="asset-actions absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 transition-opacity flex items-center justify-center gap-2">
<button className="p-2 bg-secondary text-on-secondary rounded-lg active:scale-95 transition-transform"><span className="material-symbols-outlined">input</span></button>
<button className="p-2 bg-surface-container border border-outline-variant text-on-surface rounded-lg active:scale-95 transition-transform"><span className="material-symbols-outlined">visibility</span></button>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-2">
<h3 className="font-label-technical text-[12px] font-bold text-on-surface truncate pr-2">Sentinel_Heavy_Unit</h3>
<span className="text-on-surface-variant font-label-technical text-[10px]">v1.0</span>
</div>
<div className="flex justify-between items-center text-[10px] font-label-technical text-on-surface-variant">
<span>850.2 MB</span>
<span className="text-secondary">.FBX</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/30">
<button className="w-full py-2 bg-surface-container-high border border-outline-variant hover:bg-secondary/10 hover:border-secondary/50 transition-all text-on-surface font-label-technical text-[10px] tracking-widest uppercase">Deploy to Pipeline</button>
</div>
</div>
</div>
{/* Asset Card 3 */}
<div className="asset-card group bg-surface-container border border-outline-variant overflow-hidden relative transition-all hover:border-secondary/50">
<div className="relative h-48 bg-surface-container-highest overflow-hidden">
<img alt="Texture Map PBR" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" data-alt="A close-up high-resolution surface of industrial weathered steel with rust patches, scratches, and oil streaks. The image shows the Albedo, Normal, and Roughness maps integrated into a single preview. The color palette consists of dark grays, ochre rust, and metallic silver highlights under neutral laboratory lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVHaqwNOM3JDMxIqb1_tUSuWfJzKgm2n04qSrNgfqf-knwaGQ5-t_bA5o_rWi64p7YoYjgyqL4JPtXeE-gLn3cdaFcSvktw4ViXfSKyXg00NlpSdSGC8q0Q-f8Q72y0S4HXNrcQcGaE4S88DjqsX_4un4CY5yEwvVxsWD8TLUHL4XGXB4fFqM4EEcg21MByWoZ85Br1L07tbIDsvM_i7W82_qh3AaJ_yTAkT_1veNiyhpcscioXtHX4mqYzfR26v002hCgZmprgOpQ" />
<div className="absolute top-2 left-2 flex gap-1">
<span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-label-technical text-[9px] border border-blue-500/30">TEXTURE</span>
<span className="bg-background/80 text-on-surface px-2 py-0.5 rounded font-label-technical text-[9px]">8K</span>
</div>
<div className="asset-actions absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 transition-opacity flex items-center justify-center gap-2">
<button className="p-2 bg-secondary text-on-secondary rounded-lg active:scale-95 transition-transform"><span className="material-symbols-outlined">input</span></button>
<button className="p-2 bg-surface-container border border-outline-variant text-on-surface rounded-lg active:scale-95 transition-transform"><span className="material-symbols-outlined">visibility</span></button>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-2">
<h3 className="font-label-technical text-[12px] font-bold text-on-surface truncate pr-2">Ind_Steel_Dirty_04</h3>
<span className="text-on-surface-variant font-label-technical text-[10px]">v1.2</span>
</div>
<div className="flex justify-between items-center text-[10px] font-label-technical text-on-surface-variant">
<span>2.1 GB</span>
<span className="text-secondary">.TX</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/30">
<button className="w-full py-2 bg-surface-container-high border border-outline-variant hover:bg-secondary/10 hover:border-secondary/50 transition-all text-on-surface font-label-technical text-[10px] tracking-widest uppercase">Deploy to Pipeline</button>
</div>
</div>
</div>
{/* Asset Card 4 */}
<div className="asset-card group bg-surface-container border border-outline-variant overflow-hidden relative transition-all hover:border-secondary/50">
<div className="relative h-48 bg-surface-container-highest overflow-hidden">
<img alt="HDRI Environment" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" data-alt="A 360-degree spherical panorama of a futuristic server room environment, featuring glowing server racks, clean floor reflections, and overhead blue LED light strips. The lighting is crisp and cold, intended for high-fidelity HDRI environment mapping in 3D rendering. The style is ultra-clean and high-tech." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-0kKZUtnRWxDPjeue6jdvA7aIqzzQyhdvSzw5EDK12K89oR_tTgeWx_oz75YaQEHTx4F7pynhyMOX5A7LhAC7ilkYRnpKD5jRamvPMHQHYsG7b7WtjMvwzFjHbX2vvpzfsApZ_sAoDu1YRZKW5vlAfFomkNIlKCwsZ6Yuv-6Nd22UnMbuDM-9if8dF_OqML85kcV5ba_vb36QCuOkG8L1bS8l9gcesCXFzdJvcoHTmtBW14SlZZ95uwSZRgXW-xbo9MSSZ8iS_bT" />
<div className="absolute top-2 left-2 flex gap-1">
<span className="bg-green-500/20 text-green-300 px-2 py-0.5 rounded font-label-technical text-[9px] border border-green-500/30">HDRI</span>
<span className="bg-background/80 text-on-surface px-2 py-0.5 rounded font-label-technical text-[9px]">32-BIT</span>
</div>
<div className="asset-actions absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 transition-opacity flex items-center justify-center gap-2">
<button className="p-2 bg-secondary text-on-secondary rounded-lg active:scale-95 transition-transform"><span className="material-symbols-outlined">input</span></button>
<button className="p-2 bg-surface-container border border-outline-variant text-on-surface rounded-lg active:scale-95 transition-transform"><span className="material-symbols-outlined">visibility</span></button>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-2">
<h3 className="font-label-technical text-[12px] font-bold text-on-surface truncate pr-2">Data_Center_Interior_01</h3>
<span className="text-on-surface-variant font-label-technical text-[10px]">v1.0</span>
</div>
<div className="flex justify-between items-center text-[10px] font-label-technical text-on-surface-variant">
<span>345 MB</span>
<span className="text-secondary">.EXR</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/30">
<button className="w-full py-2 bg-surface-container-high border border-outline-variant hover:bg-secondary/10 hover:border-secondary/50 transition-all text-on-surface font-label-technical text-[10px] tracking-widest uppercase">Deploy to Pipeline</button>
</div>
</div>
</div>
{/* Repeat cards for layout density */}
<div className="asset-card group bg-surface-container border border-outline-variant overflow-hidden relative opacity-60">
<div className="relative h-48 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-[48px] text-surface-variant">javascript</span>
<div className="absolute top-2 left-2 flex gap-1">
<span className="bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded font-label-technical text-[9px] border border-yellow-500/30">SCRIPT</span>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-2">
<h3 className="font-label-technical text-[12px] font-bold text-on-surface">AutoRig_Tool_v2</h3>
<span className="text-on-surface-variant font-label-technical text-[10px]">v2.1</span>
</div>
<div className="flex justify-between items-center text-[10px] font-label-technical text-on-surface-variant">
<span>12 KB</span>
<span className="text-secondary">.PY</span>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/30">
<button className="w-full py-2 bg-surface-container-high border border-outline-variant text-on-surface font-label-technical text-[10px] tracking-widest uppercase">Deploy to Pipeline</button>
</div>
</div>
</div>
</div>
</div>
{/* ASSET INSPECTOR PANEL (Toggable Right Panel) */}
<div className="inspector-panel fixed right-0 top-16 h-[calc(100%-4rem)] w-96 bg-surface-container-low border-l border-outline-variant translate-x-full transition-transform duration-300 z-50 flex flex-col" id="asset-inspector">
<div className="p-4 border-b border-outline-variant flex items-center justify-between">
<h2 className="font-label-technical text-[14px] font-bold text-secondary">ASSET INSPECTOR</h2>
<button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface" onclick="toggleInspector()">close</button>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-6">
{/* 360 Preview Placeholder */}
<div className="relative aspect-square bg-surface-container-highest border border-outline-variant mb-6 flex items-center justify-center overflow-hidden">
<img alt="Inspector Preview" className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm" data-alt="A large, detailed preview of the Nebula VFX element, showing swirling pink and violet cosmic clouds with intricate particle details. The asset is presented in a studio-like render context, highlighting technical fidelity and color depth. The mood is epic and high-tech." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfWAhjYd8EZ3Gyh6lDntduvFOsjrpoB9x_JlCtNMLxmuperyuSJby5dL7uO9CSr6aDOvY6ncLcaXRtGJki1-ir-SKurzBggo7c8W6vRJScX-GbAghKZFH-w27SuY-jKGqrhd6VuM1pm9CU0Mxwa-WbpyB5YbZrC8Fa7XiEK5-8OGECoeqB4TPIjgjOFfTgHQz8dHFHsLBKvZLbgdmvud6NGdVyL5yJe-M0n9lcJNNSVDbaX6Ba0k-X30Rkka0BLTPAuoi0WyQVzfBs" />
<div className="relative z-10 text-center">
<span className="material-symbols-outlined text-[64px] text-secondary mb-2 animate-pulse">3d_rotation</span>
<p className="font-label-technical text-[10px] text-on-surface-variant">INTERACTIVE 360° PREVIEW</p>
</div>
</div>
<div className="space-y-6">
<section>
<h4 className="font-label-technical text-[11px] font-bold text-on-surface-variant mb-3 tracking-widest">METADATA</h4>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container p-2 border border-outline-variant/30">
<p className="text-[9px] text-on-surface-variant mb-1">FORMAT</p>
<p className="font-label-technical text-[12px]">OpenVDB (.vdb)</p>
</div>
<div className="bg-surface-container p-2 border border-outline-variant/30">
<p className="text-[9px] text-on-surface-variant mb-1">RESOLUTION</p>
<p className="font-label-technical text-[12px]">4096 x 4096</p>
</div>
<div className="bg-surface-container p-2 border border-outline-variant/30">
<p className="text-[9px] text-on-surface-variant mb-1">VOXEL COUNT</p>
<p className="font-label-technical text-[12px]">12.4 Million</p>
</div>
<div className="bg-surface-container p-2 border border-outline-variant/30">
<p className="text-[9px] text-on-surface-variant mb-1">RENDER ENGINE</p>
<p className="font-label-technical text-[12px]">Arnold / Karma</p>
</div>
</div>
</section>
<section>
<h4 className="font-label-technical text-[11px] font-bold text-on-surface-variant mb-3 tracking-widest">DEPENDENCIES</h4>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-[11px] font-label-technical text-on-surface">
<span className="material-symbols-outlined text-[14px] text-tertiary">link</span>
                                    Houdini_Pyro_Solver_v3.2
                                </li>
<li className="flex items-center gap-2 text-[11px] font-label-technical text-on-surface">
<span className="material-symbols-outlined text-[14px] text-tertiary">link</span>
                                    MMC_Shared_Shaders_Pack
                                </li>
</ul>
</section>
<section>
<h4 className="font-label-technical text-[11px] font-bold text-on-surface-variant mb-3 tracking-widest">LICENSE</h4>
<div className="p-3 bg-secondary-container/5 border border-secondary/20 rounded">
<p className="text-[11px] text-on-surface font-label-technical">MMC Student Education License</p>
<p className="text-[10px] text-on-surface-variant mt-1">Authorized for non-commercial academic portfolio use only.</p>
</div>
</section>
</div>
</div>
<div className="p-6 border-t border-outline-variant bg-surface-container-highest/50">
<button className="w-full bg-secondary text-on-secondary py-3 rounded font-label-technical text-[12px] font-bold flex items-center justify-center gap-2 transition-transform active:scale-95">
<span className="material-symbols-outlined text-[18px]">download</span>
                        INITIALIZE PIPELINE SYNC
                    </button>
</div>
</div>
</div>
</div>
{/* Micro-interaction Scripts */}


    </>
  );
};

export default MmcAssetLibraryProductionRepository;
