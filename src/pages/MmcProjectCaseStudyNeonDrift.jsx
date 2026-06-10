import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MmcProjectCaseStudyNeonDrift = () => {
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
      
{/* TopNavBar */}

<div className="pt-20">
{/* Hero Section */}
<section className="relative h-[870px] w-full flex flex-col justify-end overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A sprawling futuristic cityscape at night viewed from a high vantage point, featuring dense skyscrapers illuminated by vibrant pink and cyan neon signs. Wet asphalt streets reflect the complex light sources, while a light atmospheric haze softens the distant structures. The cinematic composition uses deep blacks and high-contrast lighting to create a professional VFX studio aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9AMsBVF44QhfaMP7AGQmrDEL-g4jyvfdAPok5ZkSilysK9LPjtPbm1piVHuRDXueqIS5AAXLICLUbsaOzsQ5boOPmSNbfR0XCzvv-JjBzJI8IKwmvgDBjYiwFPIq-hRM_pZFYkx6YWu9Xd3xgyhzpBI-67SeAoo1q48mFDXAdUGMW99DbsD_937Niw3pI6FVTNu_D_ID4ackikATVIhBJxantuo26o_AJY3Op7tpFLLGQ0Rfazi4cIoA7w2tip4CIOjpkSPwSXgNR" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div className="relative px-margin-desktop pb-16 max-w-7xl">
<div className="flex items-center gap-3 mb-4">
<span className="bg-secondary text-on-secondary px-3 py-1 font-label-technical text-label-technical rounded-sm">VFX CAPSTONE</span>
<span className="text-on-surface-variant font-label-technical text-label-technical">2024 ARCHIVE</span>
</div>
<h1 className="font-headline-lg text-headline-lg md:text-display-xl md:font-display-xl mb-6">Neon Drift - Urban Environment Study</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t nle-divider pt-8">
<div>
<p className="font-label-technical text-label-technical text-secondary mb-1">TRACK</p>
<p className="font-body-lg text-body-lg font-bold">Visual Effects</p>
</div>
<div>
<p className="font-label-technical text-label-technical text-secondary mb-1">TOOLS</p>
<p className="font-body-lg text-body-lg font-bold">Nuke, Houdini, Maya</p>
</div>
<div>
<p className="font-label-technical text-label-technical text-secondary mb-1">STUDENT</p>
<p className="font-body-lg text-body-lg font-bold">Alex Chen</p>
</div>
</div>
</div>
</section>
{/* Brief Summary */}
<section className="px-margin-desktop py-24 bg-surface-container-lowest">
<div className="max-w-4xl mx-auto">
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed italic">
                    "Neon Drift is a technical exploration into the limits of photorealistic environment recreation. The project focuses on the intersection of complex lighting, procedural atmospheric effects, and deep-compositing workflows to simulate a living, breathing cyberpunk metropolis."
                </p>
</div>
</section>
{/* The Challenge */}
<section className="px-margin-desktop py-24 border-y nle-divider grid md:grid-cols-2 gap-gutter">
<div className="space-y-6">
<h2 className="font-headline-lg text-headline-lg text-secondary">The Challenge</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                    The primary objective was to achieve high-fidelity night-time photorealism without the "plastic" look often found in student CG renders. This required a rigorous approach to light falloff, material energy conservation, and the chaotic nature of weather-affected environments.
                </p>
</div>
<div className="tonal-layer-1 p-10 rounded-lg">
<h3 className="font-title-md text-title-md mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">target</span> Key Objectives
                </h3>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<span className="font-label-technical text-label-technical text-secondary mt-1">01</span>
<p className="font-body-md text-body-md">Physically accurate neon light bounce using Redshift GI.</p>
</li>
<li className="flex items-start gap-4">
<span className="font-label-technical text-label-technical text-secondary mt-1">02</span>
<p className="font-body-md text-body-md">Procedural distribution of millions of raindrops with custom velocity maps.</p>
</li>
<li className="flex items-start gap-4">
<span className="font-label-technical text-label-technical text-secondary mt-1">03</span>
<p className="font-body-md text-body-md">Integration of live-action plate elements into a 100% CG environment.</p>
</li>
</ul>
</div>
</section>
{/* Technical Pipeline */}
<section className="px-margin-desktop py-24 space-y-16">
<div className="flex justify-between items-end">
<h2 className="font-headline-lg text-headline-lg">Technical Pipeline</h2>
<p className="font-label-technical text-label-technical text-secondary hidden md:block">WORKFLOW BREAKDOWN // REV_04</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Step 1 */}
<div className="tonal-layer-1 group hover:border-secondary transition-colors duration-300">
<div className="p-8 border-b nle-divider bg-surface-container-high/30">
<span className="font-label-technical text-label-technical text-secondary">STEP 01</span>
<h4 className="font-title-md text-title-md mt-2">Modeling &amp; Layout</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Maya &amp; Substance</p>
</div>
<div className="p-8 space-y-4">
<p className="font-body-md text-body-md opacity-70">Modular building kits were designed for maximum variety. UVs were optimized for high-res UDIM textures focusing on grunge and weathering.</p>
<div className="aspect-video bg-surface-container rounded-sm flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A 3D wireframe render of a modular building block in Maya. The structure shows intricate geometric detail with clean topology, displaying the technical precision of the architectural layout in a dark professional workspace theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMe3OKWA2_a97tLdZxk7kDn0fguPqPg9pLFJh6_BT9Ic5jSOJiCeEiy0INlfSDIxOGIBS7ikBWR06h6-hO77ri_cdnVoCIP_sZRbZRk8NjiCwOtk7pLElQI57e0UprzEXzrNv3bT46ePoq6qLOtSkrBy0Iq7Eeil87I08oAlqm7jImjuWWosT5GZ0HxjxWQCM4N0AelKGb65h0aKVG9hpCkzq0N2brBVU4UIEv4FzziaQTXJjMxGrGO0SqqSxgj9sTouXV03rVAcSq" />
</div>
</div>
</div>
{/* Step 2 */}
<div className="tonal-layer-1 group hover:border-secondary transition-colors duration-300">
<div className="p-8 border-b nle-divider bg-surface-container-high/30">
<span className="font-label-technical text-label-technical text-secondary">STEP 02</span>
<h4 className="font-title-md text-title-md mt-2">Rain &amp; Fog</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Houdini Vellum</p>
</div>
<div className="p-8 space-y-4">
<p className="font-body-md text-body-md opacity-70">Vellum grains were used for the rain simulation, allowing for complex interaction between the neon signage and moisture particles.</p>
<div className="aspect-video bg-surface-container rounded-sm flex items-center justify-center overflow-hidden">

</div>
</div>
</div>
{/* Step 3 */}
<div className="tonal-layer-1 group hover:border-secondary transition-colors duration-300">
<div className="p-8 border-b nle-divider bg-surface-container-high/30">
<span className="font-label-technical text-label-technical text-secondary">STEP 03</span>
<h4 className="font-title-md text-title-md mt-2">Multi-channel Compositing</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">The Foundry Nuke</p>
</div>
<div className="p-8 space-y-4">
<p className="font-body-md text-body-md opacity-70">Over 40 EXR render passes were blended in Nuke, utilizing Cryptomattes for precise color control over individual neon elements.</p>
<div className="aspect-video bg-surface-container rounded-sm flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A Nuke node-graph interface showing a complex web of compositing nodes connecting together. The interface is dark and technical, featuring the pink and blue color scheme of the project, highlighting the professional software-driven workflow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL23MaP9KtpXKLn_OKjTRftECQaTyLvuVPf9X6QlKw52PE3aaKYqMnoUAdeWqzoveXGFXo301l_Nyx2yHqjUQ9cXzhdhVfKM2Gn6ue9QCdppi7i5lD5w29voivUlZ3RjkJrJChInu22Bbf-9d3V7QiwfTHXnmaTQF_51uj0Cd4QuWYctELY5gImMnHLDaT4sP6S38RrJCM7-_17ibvSK55BSg8fmqLGUyZ190ifTuX4HPkww8XJUrXppgwSt7hpEIXuz6LXqimD95R" />
</div>
</div>
</div>
</div>
</section>
{/* Before/After Comparison */}
<section className="px-margin-desktop py-24 bg-surface-container-low">
<div className="max-w-5xl mx-auto space-y-8">
<div className="text-center">
<h2 className="font-title-md text-title-md">Raw Render vs Final Composite</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Slide to see the Nuke grade and effects layers.</p>
</div>
<div className="comparison-slider aspect-video border-2 border-surface-variant rounded-lg group">
<div className="absolute inset-0">
<img className="w-full h-full object-cover" data-alt="A high-fidelity final composite of a futuristic city with heavy rain effects, deep atmospheric fog, and glowing pink neon lights. The image is polished with cinematic color grading and lens effects." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzVNtdmoPlqKmGStAq6PweDkt0LJLu3pvff-LLfS6d7b1F0_QjpRWoIQ_wpOUGwPjZrIuxMyRh-wxP6dbYEGdqII6jHlew02WL9oLA7EbeMDm8ayWSMlfkSbfNl4qCPz7M781SIM6GwEKHL0FkB2Es-JlC_9mR5Tm4prBiEorYe25vh1HvSGsb1nFhBfwAvHMQ7yRuaD0hpc_r0vR-ZpkkZE_B6-dkAgl4092adp71TPfPnXhT64bOqb4T3RtYGEnWfpoQWdhvU2Iu" />
</div>
<div className="comparison-before" id="before-img" style={{width:'50%'}}>
<img className="w-full h-full object-cover grayscale opacity-50" data-alt="A raw, un-composited 3D render of a city street without atmospheric effects or color grading. The lighting is flat and the scene looks technical and unfinished, contrasting with the final polished composite." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRoV6KY7uayZEWTPsh3Qar-EnizmjPLHHitusoQum1vglbZkonqI4PnXmLcxFAabnOowuCXIkdqodbJXQICyN_ZWap0hebSlPzTdtyCDvFtWGMgLqw_fbViGh3v4XwIpWa-Kadykf7FLwWqmps3pUAWs6t2bk0b6KmLeIW-T4Tmb8SD-7BGbsDNfJe3X0UaWxbSpgK2qDEKUlqgM0WRbZPEtzyP0dq4bd3EHboTPGCPJo35KFW6oiKEvdVeuycZckmDTt1Ule5_Ej-" />
</div>
<div className="slider-handle" id="slider-handle">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
<span className="material-symbols-outlined text-on-secondary">unfold_more</span>
</div>
</div>
</div>
</div>
</section>
{/* Results & Stats */}
<section className="px-margin-desktop py-24">
<div className="grid lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-4 space-y-12">
<div>
<h2 className="font-headline-lg text-headline-lg mb-4">Project Results</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Achieved industry-standard render efficiency while maintaining extreme detail across the 180-frame sequence.</p>
</div>
<div className="space-y-6">
<div className="flex justify-between items-end border-b nle-divider pb-2">
<p className="font-label-technical text-label-technical text-on-surface-variant">RENDER TIME / FR</p>
<p className="font-title-md text-title-md text-secondary">42m <span className="text-sm font-normal">@4K</span></p>
</div>
<div className="flex justify-between items-end border-b nle-divider pb-2">
<p className="font-label-technical text-label-technical text-on-surface-variant">POLY COUNT</p>
<p className="font-title-md text-title-md text-secondary">12.4M</p>
</div>
<div className="flex justify-between items-end border-b nle-divider pb-2">
<p className="font-label-technical text-label-technical text-on-surface-variant">NUKE NODES</p>
<p className="font-title-md text-title-md text-secondary">340+</p>
</div>
</div>
</div>
<div className="lg:col-span-8">
<div className="aspect-video bg-surface-container rounded-lg relative flex items-center justify-center overflow-hidden border border-surface-variant group">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A cinematic video thumbnail showing a futuristic city street under heavy rainfall. A central play icon is overlaid, suggesting a video player. The lighting is dominated by deep reds and moody blues, following the institute's professional studio grade aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxekTdQAfKxMdOlJ4LE-3X20_rrep_XeNtzvPSeCs9d97-QDeuN9qjmoKTSuvWmPfQHKtkecQRPJEpUxYTifDDvv0Pq-sWyCzq5f4AE3Likk7C53aH_3b52kzZ4uS793CjDKkE6S4xFqZ2GWr36cl7xOkYvye_Eoffqa71JnojqP77yHoVLZpWCJrZ19hjpMlRdSsAYj7_UI4q8LycAHH35x_eNWFQYzndvsFfpUAkWl_CvPqPXvesBRVIBRC3HUOqaTOYDtixSLEz" />
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<button className="relative w-20 h-20 bg-secondary text-on-secondary rounded-full flex items-center justify-center scale-100 hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl" data-weight="fill">play_arrow</span>
</button>
</div>
</div>
</div>
</section>
{/* CTA */}
<section className="px-margin-desktop py-32 bg-secondary text-on-secondary text-center">
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="font-headline-lg text-headline-lg">Inspired by this work?</h2>
<p className="font-body-lg text-body-lg">Master the pipeline Alex Chen used to build this world. Our VFX track is designed to turn students into production-ready artists.</p>
<button className="bg-on-secondary text-secondary px-10 py-4 font-body-md font-bold hover:scale-95 transition-transform">Explore the VFX Track</button>
</div>
</section>
</div>




    </div>
  );
};

export default MmcProjectCaseStudyNeonDrift;
