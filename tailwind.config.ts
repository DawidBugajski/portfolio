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
      },
      backgroundImage: (theme) => ({
        'gradient-custom': 'linear-gradient(135deg, #42d392 25%, #647eff)',
      }),
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
