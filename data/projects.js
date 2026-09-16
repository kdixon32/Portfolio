/**
 * Each project can point to a short looping clip (mp4/webm) and/or a
 * still image. Drop your files into /public/projects/<slug>/ and
 * update the paths below — see public/projects/README.md.
 *
 * `readouts` are the small spec-sheet values shown on each card —
 * keep them short and factual, like a datasheet, not marketing copy.
 */
export const projects = [
  {
    slug: 'xray-simulation',
    title: 'Real-Time X-Ray Simulation',
    category: 'Real-Time Simulation',
    year: '2025',
    summary:
      'A real-time simulation built in Unity that models X-ray imaging behavior for operator training, replacing the need for live radiation during practice runs.',
    stack: ['Unity', 'C#', 'HLSL', 'Real-time rendering'],
    readouts: [
      { label: 'Engine', value: 'Unity' },
      { label: 'Domain', value: 'Medical imaging' },
      { label: 'Role', value: 'Sole engineer' },
    ],
    video: '/projects/xray-simulation/clip.mp4',
    poster: '/projects/xray-simulation/poster.jpg',
    links: [],
  },
  {
    slug: 'strategy-rpg',
    title: 'Turn-Based Strategy RPG',
    category: 'Game Design / Systems',
    year: '2025',
    summary:
      'A turn-based tactics RPG concept built around an action-point combat system, designed and prototyped from the ground up.',
    stack: ['Unity', 'C#', 'Systems design'],
    readouts: [
      { label: 'Genre', value: 'Tactics / RPG' },
      { label: 'Core loop', value: 'AP-based combat' },
      { label: 'Status', value: 'In development' },
    ],
    video: '/projects/strategy-rpg/clip.mp4',
    poster: '/projects/strategy-rpg/poster.jpg',
    links: [],
  },
  {
    slug: 'shader-studies',
    title: 'Shader & Graphics Programming Studies',
    category: 'Technical Art',
    year: '2025–Present',
    summary:
      'Ongoing studies in HLSL/GLSL, procedural workflows, and real-time rendering techniques as part of a transition toward technical art and simulation engineering.',
    stack: ['HLSL', 'Unity', 'Shaders'],
    readouts: [
      { label: 'Focus', value: 'Shaders / VFX' },
      { label: 'Tools', value: 'Unity, Houdini' },
      { label: 'Status', value: 'Ongoing' },
    ],
    video: null,
    poster: '/projects/shader-studies/poster.jpg',
    links: [],
  },
];
