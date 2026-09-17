 export const projects = [
  {
    slug: 'xray-simulation',
    title: 'Real-Time X-Ray Simulation',
    category: 'Real-Time Simulation',
    year: '2025-Present',
    summary:
      'A real-time simulation built in Unity that models X-ray imaging behavior for operator training, replacing the need for live radiation during practice runs.',
    stack: ['Unity', 'C#', 'HLSL'],
    readouts: [
      { label: 'Engine', value: 'Unity' },
      { label: 'Domain', value: 'Industrial Non Destructive Testing' },
      { label: 'Role', value: 'Lead Developer' },
      { label: 'Status', value: 'In active development'}
    ],
    video: '/projects/xray-simulation/clip.mp4',
    poster: '/projects/xray-simulation/poster.jpg',
    links: [],
  },
  {
    slug: 'strategy-rpg',
    title: 'Turn-Based Strategy RPG',
    category: 'Game Design / Systems / Shaders / Asset Optimization',
    year: '2024-Present',
    summary:
      'A turn-based tactics RPG concept built around an action-point combat system, designed and prototyped from the ground up.',
    stack: ['Unity', 'C#', 'HLSL','Systems design'],
    readouts: [
      { label: 'Engine', value: 'Unity' },
      { label: 'Genre', value: 'Tactics / RPG' },
      { label: 'Role', value: 'Sole Developer' },
      { label: 'Status', value: 'In Active Development' },
    ],
    video: '/projects/strategy-rpg/clip.mp4',
    poster: '/projects/strategy-rpg/poster.jpg',
    links: [],
  },
  {
    slug: 'shader-studies',
    title: 'Graphics Programming Studies',
    category: 'Technical Art',
    year: '2024–Present',
    summary:
      'Ongoing studies in HLSL/GLSL, procedural workflows, and real-time rendering techniques as part of a transition toward technical art and simulation engineering.',
    stack: ['HLSL', 'Unity', 'Shaders'],
    readouts: [
      { label: 'Focus', value: 'Shaders / VFX / Asset Optimization' },
      { label: 'Tools', value: 'Unity, Houdini, Blender'},
      { label: 'Status', value: 'Ongoing' },
    ],
    video: null,
    poster: '/projects/shader-studies/poster.jpg',
    links: [],
  },
  {
    slug: 'puzzle-game',
    title: 'Accursed Dreams',
    category: 'Shaders / Asset Optimization',
    year: '2025-present',
    summary:
      'Adventure horror puzzle game made in Unity. Worked on by a large team of young developers, artists, and writers.',
    stack: ['Unity', 'C#', 'HLSL'],
    readouts: [
      { label: 'Engine', value: 'Unity'},
      { label: 'Genre', value:  'Adventure / Horror / Puzzle'},
      { label: 'Role', value: 'Technical Artist'},
      { label: 'Status', value: 'In Active Development'},
    ],
    video: null,
    poster: '',
    links: []

  },
   {
     slug: 'game-engine',
     title: 'Fudo Engine',
     category: 'Game Engine / Graphics API / 3D Development Tools',
     year: '2026-present',
     summary:
     'A physics first game engine written in c++ with the DirectX12 graphics API. Based on the OpenGL Empy Engine from the 3D Game Engine Development book by Franc Pouhela',
     stack: ['C++', 'DX12'],
     readouts: [
       { label: 'Purpose', value: 'Self Education / Physics First Applications'},
       { label: 'Role', value: 'Sole Developer'},
       { label: 'Status', value: 'In Active Development'},
     ]
   }
];
