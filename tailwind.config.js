/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '640px', // default min-width for small screens
          md: '768px', // default min-width for medium screens
          lg: '1024px', // default min-width for large screens
          xl: '1128px', // default min-width for extra-large screens
          '2xl': '1280px', // default min-width for 2xl screens
        },
        padding: {
          default: '1.25rem', // default padding for all screens
          sm: '2rem', // padding for small screens
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        display: ['"PT Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          500: '#190F36',
          400: '#000812',
          300: '#CBD6E0',
          200: '#E2E9F0',
          100: '#EDF2F7',
          50: '#F6F9FB',
        },
        blue: {
          400: '#023985',
          300: '#0367F2',
          200: '#0367F3',
          100: '#B1D0FB',
          50: '#F4F9FF',
        },
        text: '#0B1E4B',
        input: '#989BA1',
        icon: '#98A2B3',
        stroke: { 200: '#D0D5DD', 100: '#D9D9D9' },
        error: '#FF4D4F',
      },
      fontSize: {
        xxs: ['0.625rem', '1rem'],
        xs: ['0.75rem', '1.125rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.35rem'],
        md: ['1.25rem', '1.5rem'],
        lg: ['1.5rem', '1.75rem'],
        xl: ['2rem', '2.5rem'],
        xxl: ['4rem', '4.5rem'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        bolder: 800,
      },
    },
  },
  plugins: [],
};
