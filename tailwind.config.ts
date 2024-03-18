import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#1a1a1a',
        green: '#42b883',
        lines: '#292828 ',
        light_lines: '#E2E8F0',
      },
      backgroundImage: (theme) => ({
        'gradient-custom': 'linear-gradient(135deg, #42d392 25%, #647eff)',
      }),
      borderRadius: {
        jobBox: '0px 0px 80px 0px',
      },
      width: {
        jobBox: 'calc(50% + 32px)',
      },
      spacing: {
        jobBox: 'calc(50% - 32px)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
