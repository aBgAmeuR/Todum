import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        primary: '#1A1A1A',
        secondary: '#0D0D0D',
        tertiary: '#262626',
        quaternary: '#333333',
        blue: '#1E6F9F',
      },
      textColor: {
        primary: '#F2F2F2',
        secondary: '#808080',
        tertiary: '#D9D9D9',
        blue: '#4EA8DE',
        purple: '#8284FA',
      },
      borderColor: {
        primary: '#333333',
        secondary: '#0D0D0D',
        blue: '#1E6F9F',
        purple: '#5E60CE',
      },
      fontSize: {
        xl: '40px',
        lg: '16px',
        base: '14px',
        sm: '12px',
      },
    },
  },
  plugins: [],
};
export default config;
