import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        discco: {
          ink:        'var(--discco-ink)',
          paper:      'var(--discco-paper)',
          bone:       'var(--discco-bone)',
          charcoal:   'var(--discco-charcoal)',
          coffee:     'var(--discco-coffee)',
          taupe:      'var(--discco-taupe)',
          line:       'var(--discco-line)',
          accent:     'var(--discco-accent)',
          'accent-dk':'var(--discco-accent-dk)',
          acid:       'var(--discco-acid)',
          pink:       'var(--discco-pink)',
        },
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: { content: '1120px' },
      spacing:  { 'section-mobile': '72px', 'section-desktop': '112px' },
    },
  },
  plugins: [],
};

export default config;
