// Centralized site content for MMC Multimedia Institute.
// Content structure modeled on arena-multimedia.com (AVGC-XR career institute),
// styled with the "Studio Grade" design system.

export const STATS = [
  { value: '25+', label: 'Years of Experience' },
  { value: '120K+', label: 'Students Trained' },
  { value: '90+', label: 'Hiring Partners' },
  { value: '12', label: 'Countries' },
];

export const COURSES = [
  {
    slug: '/mmc-3d-animation-curriculum',
    code: 'ANIM',
    title: 'Animation',
    tagline: 'Bring stories to life with the art of motion and creativity.',
    color: 'purple',
    duration: '24 Weeks',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLHtWSNMIc3gFbQbvP3XSXz1lOrbfQebyEEjj8Aq6s9IHlTbWlOt08WqLM8Q6T5X8SiItrZpGiR0vD_CR4Znd22OlACxrBJ1ibMdH2GgGU9bjOeu6pXtlYv1TVUoO10_F2UMOrVcHsyfoEC8ikVH1OrT-GWdJHaifXo2Lk5Scj8YioF_Jzq1Oh9Vjqb_lQ5ko6Zjr0BzYouuRA1jdE7VSkxb_Dm512pDw0PW9wvJ5gb3HkkTSoIQCzxsy87UMBfJzl64PMHGT6-WAf',
  },
  {
    slug: '/mmc-visual-effects-curriculum',
    code: 'VFX',
    title: 'VFX',
    tagline: 'Create stunning visual effects that captivate audiences worldwide.',
    color: 'tertiary',
    duration: '24 Weeks',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbF6iioY7gYWpH-3Qf6l1yrHYoK_Y6-WlNIGUwy1mdwW2VFUdhcCWSEtGSH0a83ufVj9eAgC8jba6baDtWvR0OAiW8lR7zPFjfBPDYHqVv3S6AmT6RKKLMu7OFX7OR29_tbsIrWRPZemxHPdGgfjJEYhwzF5ogBftbl3YSGAaOWIl14JlbAcu0KNEK-cSUayCgkZCmq6MDu_lpkOw-WX-BpeYdRq4fpNQ5KppQ3WWOQvHXBIl5ze7dpJRJTERk6bdGttZ7BJncZWel',
  },
  {
    slug: '/mmc-graphic-design-curriculum',
    code: 'DSGN',
    title: 'Graphic & Web Design',
    tagline: 'Learn to make an impact in the digital age.',
    color: 'on-surface',
    duration: '20 Weeks',
    image: '',
  },
  {
    slug: '/mmc-film-editing-curriculum',
    code: 'EDIT',
    title: 'Film Making & Editing',
    tagline: 'Craft compelling stories through rhythm, pace and narrative.',
    color: 'secondary',
    duration: '18 Weeks',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_l4l0tot1aXcEvLNwjkskBFb5NiLEjcr_pqFbe9sjF7j9TXiKhCgG58rUGPR1wgbLK1TYdaa5F_BHGtdrEQ_Eb9-IEsaAok3siZe59dmY7v_R4l6YyE56oxH3U2oTJSkH0Y2m-bl6i7go2PNTBAZH2QH7NnwndG_xcrTIvDkE64irefnIb-W0FBvj1Ytfqfky66fcgMH39xDQyL0WSOtmFc9bWXvjyB-5Agh8XAl-92DRDEJJuXTHoHCuA7YgHUDPEhRz3uqRBHxk',
  },
  {
    slug: '/mmc-gaming-curriculum',
    code: 'GAME',
    title: 'Gaming & Interactive',
    tagline: 'Design immersive worlds and interactive experiences for gamers.',
    color: 'tertiary',
    duration: '24 Weeks',
    image: '',
  },
  {
    slug: '/mmc-broadcast-curriculum',
    code: 'BCST',
    title: 'Broadcast & ArchViz',
    tagline: 'Design visuals that grab attention and build iconic spaces in 3D.',
    color: 'on-surface',
    duration: '16 Weeks',
    image: '',
  },
];

// Detailed course definitions for the reusable CourseTemplate pages.
export const COURSE_DETAILS = {
  animation: {
    code: 'ANIM',
    eyebrow: '24-Week Intensive Program',
    title: '3D',
    titleAccent: 'Animation',
    intro:
      'Bring characters and worlds to life. Master the full animation pipeline — from modelling and rigging to performance and lighting — and graduate with a reel that studios notice.',
    modules: [
      {
        no: '01',
        title: 'Modelling & Sculpting',
        desc: 'Build production-ready characters and environments with clean topology and detail.',
        points: ['Hard-Surface & Organic', 'UV & Topology', 'ZBrush Sculpting'],
      },
      {
        no: '02',
        title: 'Rigging & Performance',
        desc: 'Rig believable characters and craft compelling, weighty performances.',
        points: ['Skeletal Rigging', 'Body Mechanics', 'Facial Animation'],
      },
      {
        no: '03',
        title: 'Lighting & Look-Dev',
        desc: 'Light, shade and render your work to a polished, cinematic finish.',
        points: ['PBR Shading', 'Cinematic Lighting', 'Arnold Rendering'],
      },
    ],
    tools: [
      { abbr: 'M', name: 'Maya', color: 'text-tertiary' },
      { abbr: 'Bl', name: 'Blender', color: 'text-secondary' },
      { abbr: 'Zb', name: 'ZBrush', color: 'text-on-tertiary-container' },
    ],
  },
  vfx: {
    code: 'VFX',
    eyebrow: '24-Week Intensive Program',
    title: 'Visual Effects',
    titleAccent: 'Specialist',
    intro:
      'Master the high-end compositing and node-based workflows used by top global studios. From photorealistic integration to massive procedural simulations, prepare for a career as a Compositor or FX TD.',
    modules: [
      {
        no: '01',
        title: 'Advanced Compositing (Nuke)',
        desc: 'Multi-channel EXR workflows, 3D projections and high-end keying in Nuke.',
        points: ['Deep Compositing', 'Advanced Keying', 'Python Scripting'],
      },
      {
        no: '02',
        title: 'Dynamic Simulations (Houdini)',
        desc: 'Procedural FX: fluids, pyro and large-scale destruction.',
        points: ['FLIP Fluids & Pyro', 'VEX Programming', 'Rigid Body Dynamics'],
      },
      {
        no: '03',
        title: '3D Integration & Matchmoving',
        desc: 'Camera tracking, photogrammetry and look-dev for seamless integration.',
        points: ['3DEqualizer Tracking', 'Arnold Render', 'HDRI Pipeline'],
      },
    ],
    tools: [
      { abbr: 'Nk', name: 'Nuke', color: 'text-secondary' },
      { abbr: 'H', name: 'Houdini', color: 'text-tertiary' },
      { abbr: 'M', name: 'Maya', color: 'text-on-tertiary-container' },
    ],
  },
  'film-editing': {
    code: 'EDIT',
    eyebrow: '18-Week Intensive Program',
    title: 'Film Making &',
    titleAccent: 'Editing',
    intro:
      'Tell stories that move people. Learn the craft of rhythm, pace and structure, plus colour and sound, using the industry-standard tools of modern post-production.',
    modules: [
      {
        no: '01',
        title: 'Narrative Editing',
        desc: 'Shape story through pacing, continuity and emotional rhythm.',
        points: ['Story Structure', 'Continuity', 'Multicam Editing'],
      },
      {
        no: '02',
        title: 'Colour Grading',
        desc: 'Develop a cinematic look with primary and secondary grading.',
        points: ['Colour Theory', 'Node Grading', 'DaVinci Resolve'],
      },
      {
        no: '03',
        title: 'Sound & Finishing',
        desc: 'The edit is only as good as its sound — mix, master and deliver.',
        points: ['Sound Design', 'Spatial Mixing', 'Delivery & Export'],
      },
    ],
    tools: [
      { abbr: 'Pr', name: 'Premiere Pro', color: 'text-tertiary' },
      { abbr: 'Rv', name: 'DaVinci Resolve', color: 'text-secondary' },
      { abbr: 'Au', name: 'Audition', color: 'text-on-tertiary-container' },
    ],
  },
  'graphic-design': {
    code: 'DSGN',
    eyebrow: '20-Week Intensive Program',
    title: 'Graphic & Web',
    titleAccent: 'Design',
    intro:
      'Learn the science of visual communication. Build brand systems, layouts and interfaces with precision typography and modern web design fundamentals.',
    modules: [
      {
        no: '01',
        title: 'Brand & Identity',
        desc: 'Craft logos, identity systems and brand guidelines that scale.',
        points: ['Typography', 'Logo Systems', 'Brand Guidelines'],
      },
      {
        no: '02',
        title: 'Layout & Print',
        desc: 'Master grids, hierarchy and print-ready production.',
        points: ['Grid Systems', 'Editorial Layout', 'Prepress'],
      },
      {
        no: '03',
        title: 'UI & Web Design',
        desc: 'Design responsive interfaces and prototype real products.',
        points: ['UI/UX Principles', 'Responsive Design', 'Figma Prototyping'],
      },
    ],
    tools: [
      { abbr: 'Ai', name: 'Illustrator', color: 'text-secondary' },
      { abbr: 'Ps', name: 'Photoshop', color: 'text-tertiary' },
      { abbr: 'Fg', name: 'Figma', color: 'text-on-tertiary-container' },
    ],
  },
  'gaming-interactive': {
    code: 'GAME',
    eyebrow: '24-Week Intensive Program',
    title: 'Gaming &',
    titleAccent: 'Interactive',
    intro:
      'Build playable worlds from the ground up. Master real-time engines, level design and interactive systems used by leading game and XR studios — and graduate with a shippable portfolio.',
    modules: [
      {
        no: '01',
        title: 'Real-Time Engines (Unreal)',
        desc: 'Blueprints, lighting and rendering pipelines for high-fidelity real-time experiences.',
        points: ['Blueprint Scripting', 'Lumen & Nanite', 'Material Systems'],
      },
      {
        no: '02',
        title: 'Game Art & Asset Pipeline',
        desc: 'Model, texture and optimise hero assets and environments for interactive performance.',
        points: ['Hard-Surface Modeling', 'PBR Texturing', 'LOD & Optimisation'],
      },
      {
        no: '03',
        title: 'Level & Interaction Design',
        desc: 'Design engaging mechanics, level flow and immersive XR interactions.',
        points: ['Level Design', 'Gameplay Loops', 'VR/AR Interaction'],
      },
    ],
    tools: [
      { abbr: 'UE', name: 'Unreal Engine', color: 'text-tertiary' },
      { abbr: 'U', name: 'Unity', color: 'text-secondary' },
      { abbr: 'Bl', name: 'Blender', color: 'text-on-tertiary-container' },
    ],
  },
  'broadcast-archviz': {
    code: 'BCST',
    eyebrow: '16-Week Intensive Program',
    title: 'Broadcast &',
    titleAccent: 'ArchViz',
    intro:
      'Create motion graphics that command attention and architectural visualisations that sell spaces before they are built. Learn the real-time and offline pipelines used across broadcast and design studios.',
    modules: [
      {
        no: '01',
        title: 'Broadcast Motion Graphics',
        desc: 'Design title sequences, lower-thirds and on-air packages with cinematic polish.',
        points: ['Motion Design', 'Compositing', 'Brand Packages'],
      },
      {
        no: '02',
        title: 'Architectural Visualisation',
        desc: 'Light, texture and render photoreal interiors and exteriors for clients.',
        points: ['Photoreal Lighting', 'Material Studies', 'Camera Layout'],
      },
      {
        no: '03',
        title: 'Real-Time Walkthroughs',
        desc: 'Turn static scenes into interactive, real-time architectural experiences.',
        points: ['Real-Time Rendering', 'Virtual Tours', 'Client Delivery'],
      },
    ],
    tools: [
      { abbr: 'Ae', name: 'After Effects', color: 'text-tertiary' },
      { abbr: '3ds', name: '3ds Max', color: 'text-secondary' },
      { abbr: 'D5', name: 'D5 Render', color: 'text-on-tertiary-container' },
    ],
  },
};

export const WHY_CHOOSE = [
  {
    icon: 'verified',
    title: 'Trusted Experience',
    desc: '25+ years of building careers in the creative industries.',
  },
  {
    icon: 'rocket_launch',
    title: 'Job-Ready Courses',
    desc: 'Gen-AI enabled, industry-aligned curriculum that matches what the real world needs.',
  },
  {
    icon: 'school',
    title: 'Expert Faculty',
    desc: 'Learn from working professionals with hands-on studio experience.',
  },
  {
    icon: 'work',
    title: 'Placement Assistance',
    desc: 'A vast recruiter network ensures graduates are job-ready.',
  },
  {
    icon: 'payments',
    title: 'Financial Independence',
    desc: 'Gain the skills to start your AVGC-XR career and earn with confidence.',
  },
  {
    icon: 'groups',
    title: 'A Culture of Opportunities',
    desc: 'Workshops, live projects and expert sessions to showcase your talent.',
  },
  {
    icon: 'workspace_premium',
    title: 'A Legacy of Excellence',
    desc: 'Backed by decades of empowering students in India and globally.',
  },
  {
    icon: 'public',
    title: 'Global Network',
    desc: 'Centres across India and a presence in 12 countries for international-level training.',
  },
  {
    icon: 'emoji_events',
    title: 'Award-Winning Expertise',
    desc: 'Recognised with prestigious international awards for excellence.',
  },
];

export const RECRUITERS = [
  'PRIME FOCUS', 'DIGITOONZ', 'PHANTOM FX', 'BOT VFX', 'REDEFINE',
  'ANIBRAIN', 'FOLKS VFX', 'BASILICFLY', 'STUDIO 56', 'NETWORK 18',
  'DELOITTE STUDIOS', 'MPC', 'CINESITE', 'METHOD STUDIOS', 'TO THE NEW',
];

export const SUPERSTARS = [
  { name: 'Darshan Thorat', role: 'MM Artist', company: 'MPC', project: 'RRR' },
  { name: 'Raja Sri Reddy', role: 'Sr. Print Artist', company: 'Cinesite', project: 'Wakanda Forever' },
  { name: 'Rijio Joseph', role: 'Match Move Artist', company: 'Method Studios', project: 'Top Gun: Maverick' },
  { name: 'Ranit RP', role: 'Digital Artist', company: 'DNEG', project: 'Oppenheimer' },
];

export const TESTIMONIALS = [
  {
    quote:
      "What sets MMC apart isn't just the pool of skilled candidates; it's the relentless dedication of their placement team to match bright minds with great opportunities.",
    name: 'Nagavishni V. K.',
    title: 'Talent Lead, PhantomFX',
  },
  {
    quote:
      'We were impressed by the exceptional talent of the designers and interns we hired. Their skills and creativity truly stood out.',
    name: 'Arhaan Shaikh',
    title: 'Managing Director, The Bombay Digital Co.',
  },
  {
    quote:
      'MMC graduates are exceptional candidates. Their comprehensive training in VFX and animation equips them to excel in our fast-paced environment.',
    name: 'Saharsh Shah',
    title: 'VP of HR, 88 Pictures',
  },
];

export const EVENTS = [
  {
    tag: 'CREATIVE MINDS',
    title: 'Creative Minds Showcase',
    desc: 'Students from across cities showcase innovative projects, gain insights from industry experts and compete for recognition.',
  },
  {
    tag: 'NSM 2026',
    title: 'National Students Meet',
    desc: 'A national gathering to explore trends, share ideas and celebrate creativity in AVGC with industry stalwarts.',
  },
  {
    tag: 'MMC FEST',
    title: 'MMC Fest',
    desc: 'A grand stage for talented students — from singing and dancing to cosplay and fashion shows.',
  },
];
