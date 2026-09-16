/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0E1116',
        panel: '#161B22',
        line: '#2A313C',
        ink: '#E6E9EE',
        muted: '#8A93A3',
        amber: '#E8A33D',
        cyan: '#4FD1C5',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        data: ['var(--font-jetbrains)', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
