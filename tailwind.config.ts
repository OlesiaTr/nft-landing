import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        messina: ['"Messina Sans Mono"', 'sans-serif'],
        biro: ['"Biro Script Plus Bold US"', 'fantasy'],
        grotesk: ['"Right Grotesk"', 'sans-serif'],
      },
      colors: {
        black: '#1E1E1E',
        accent: '#DC3B5A',
        darkBlue: '#5A65F2',
        darkBg: '#181818',
        grayBg: 'rgba(255, 255, 255, 0.10)',
        accentBg: 'rgba(30, 30, 30, 0.10)',
        placeholder: 'rgba(255, 255, 255, 0.24)',
        disabledBg: 'rgba(220, 59, 90, 0.8)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
